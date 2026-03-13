"use server";

import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { sendVerifyEmail, sendPasswordResetEmail } from "@/lib/email";
import { signIn } from "@/lib/auth";

// --- Rate limiting (in-memory) ---
const rateLimits = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(key: string, maxAttempts: number, windowMs: number): boolean {
  const now = Date.now();
  const entry = rateLimits.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimits.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= maxAttempts) return false;
  entry.count++;
  return true;
}

// --- Register ---
export async function register(formData: FormData) {
  const email = (formData.get("email") as string)?.toLowerCase().trim();
  const password = formData.get("password") as string;
  const fullName = (formData.get("fullName") as string)?.trim();

  if (!email || !password || !fullName) {
    return { error: "All fields are required." };
  }
  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }
  if (fullName.length > 200) {
    return { error: "Name is too long." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Invalid email address." };
  }

  // Rate limit: 5 registrations per IP per hour
  if (!checkRateLimit(`register:${email}`, 5, 3600000)) {
    return { error: "Too many attempts. Please try again later." };
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { error: "An account with this email already exists." };
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const emailVerifyToken = crypto.randomBytes(32).toString("hex");

  await prisma.user.create({
    data: {
      email,
      passwordHash,
      fullName,
      emailVerifyToken,
    },
  });

  try {
    await sendVerifyEmail(email, emailVerifyToken);
  } catch (err) {
    console.error("[register] Failed to send verification email:", err);
  }

  return { success: true, message: "Check your email to verify your account." };
}

// --- Verify Email ---
export async function verifyEmail(token: string) {
  if (!token) return { error: "Invalid token." };

  const user = await prisma.user.findUnique({
    where: { emailVerifyToken: token },
  });

  if (!user) return { error: "Invalid or expired verification link." };
  if (user.emailVerified) return { success: true, message: "Email already verified." };

  await prisma.user.update({
    where: { id: user.id },
    data: {
      emailVerified: true,
      emailVerifyToken: null,
    },
  });

  return { success: true, message: "Email verified. You can now log in." };
}

// --- Login ---
export async function login(formData: FormData) {
  const email = (formData.get("email") as string)?.toLowerCase().trim();
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  // Check if email is verified before attempting sign-in
  const user = await prisma.user.findUnique({ where: { email } });
  if (user && !user.emailVerified) {
    return { error: "Please verify your email before logging in. Check your inbox." };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return { success: true };
  } catch {
    return { error: "Invalid email or password." };
  }
}

// --- Forgot Password ---
export async function forgotPassword(formData: FormData) {
  const email = (formData.get("email") as string)?.toLowerCase().trim();
  if (!email) return { error: "Email is required." };

  if (!checkRateLimit(`reset:${email}`, 3, 900000)) {
    return { error: "Too many attempts. Please try again in 15 minutes." };
  }

  const user = await prisma.user.findUnique({ where: { email } });

  // Always return success to prevent email enumeration
  if (!user) return { success: true, message: "If an account exists, a reset link has been sent." };

  const resetToken = crypto.randomBytes(32).toString("hex");
  const resetTokenExpiresAt = new Date(Date.now() + 3600000); // 1 hour

  await prisma.user.update({
    where: { id: user.id },
    data: { resetToken, resetTokenExpiresAt },
  });

  try {
    await sendPasswordResetEmail(email, resetToken);
  } catch (err) {
    console.error("[forgotPassword] Failed to send reset email:", err);
  }

  return { success: true, message: "If an account exists, a reset link has been sent." };
}

// --- Reset Password ---
export async function resetPassword(token: string, newPassword: string) {
  if (!token || !newPassword) return { error: "Invalid request." };
  if (newPassword.length < 8) return { error: "Password must be at least 8 characters." };

  const user = await prisma.user.findUnique({ where: { resetToken: token } });

  if (!user || !user.resetTokenExpiresAt || user.resetTokenExpiresAt < new Date()) {
    return { error: "Invalid or expired reset link." };
  }

  const passwordHash = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      passwordHash,
      resetToken: null,
      resetTokenExpiresAt: null,
    },
  });

  return { success: true, message: "Password reset. You can now log in." };
}
