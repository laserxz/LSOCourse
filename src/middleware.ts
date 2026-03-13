import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public routes — no auth needed
  if (
    pathname === "/" ||
    pathname.startsWith("/module/laser-physics-classification") ||
    pathname.startsWith("/verify") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/forgot-password") ||
    pathname.startsWith("/reset-password") ||
    pathname.startsWith("/verify-email") ||
    pathname.startsWith("/enrol") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/api/webhooks") ||
    pathname.startsWith("/api/tts") ||
    pathname.startsWith("/api/cron") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/audio") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Get JWT token (edge-safe, no DB needed)
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Admin routes — require admin role
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (token.role !== "admin") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  }

  // Protected routes (dashboard, modules 2-11, exam) — require login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
