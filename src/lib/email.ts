import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "LSO Course <noreply@zone.net.au>";
const BASE_URL = process.env.NEXTAUTH_URL || "https://lsocourse.zone.net.au";

export async function sendVerifyEmail(email: string, token: string) {
  const url = `${BASE_URL}/verify-email?token=${token}`;
  await resend.emails.send({
    from: FROM,
    to: email,
    subject: "Verify your email — LSO Course",
    html: `
      <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto;">
        <h2>Welcome to the LSO Course</h2>
        <p>Please verify your email address to continue:</p>
        <p><a href="${url}" style="display: inline-block; padding: 12px 24px; background: #2563eb; color: white; text-decoration: none; border-radius: 6px;">Verify Email</a></p>
        <p style="color: #666; font-size: 14px;">If you didn't create an account, you can ignore this email.</p>
      </div>
    `,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const url = `${BASE_URL}/reset-password?token=${token}`;
  await resend.emails.send({
    from: FROM,
    to: email,
    subject: "Reset your password — LSO Course",
    html: `
      <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto;">
        <h2>Password Reset</h2>
        <p>Click the link below to reset your password. This link expires in 1 hour.</p>
        <p><a href="${url}" style="display: inline-block; padding: 12px 24px; background: #2563eb; color: white; text-decoration: none; border-radius: 6px;">Reset Password</a></p>
        <p style="color: #666; font-size: 14px;">If you didn't request this, you can ignore this email.</p>
      </div>
    `,
  });
}

export async function sendWelcomeEmail(email: string, name: string) {
  await resend.emails.send({
    from: FROM,
    to: email,
    subject: "Welcome to the LSO Course — Let's get started",
    html: `
      <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto;">
        <h2>Welcome, ${name}!</h2>
        <p>Your enrollment in the Entertainment Laser Safety Officer (LSO) Training is confirmed.</p>
        <p>You have 24 months of access. Start with Module 1 and work through the 11 modules at your own pace.</p>
        <p><a href="${BASE_URL}/dashboard" style="display: inline-block; padding: 12px 24px; background: #2563eb; color: white; text-decoration: none; border-radius: 6px;">Go to Dashboard</a></p>
        <p style="color: #666; font-size: 14px;">Questions? Contact us at apps@zone.net.au</p>
      </div>
    `,
  });
}
