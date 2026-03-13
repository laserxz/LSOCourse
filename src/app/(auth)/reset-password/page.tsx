"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { resetPassword } from "@/lib/actions/auth";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    const result = await resetPassword(token || "", password);
    if (result.error) {
      setError(result.error);
    } else {
      setSuccess(result.message || "Password reset.");
    }
    setLoading(false);
  }

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-red-400">Invalid reset link.</p>
          <Link href="/forgot-password" className="mt-3 inline-block text-sm text-accent-blue hover:underline">
            Request a new link
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="text-accent-red font-mono text-sm font-medium tracking-wider">
            LSO COURSE
          </Link>
          <h1 className="text-xl font-medium text-foreground mt-3">Set new password</h1>
        </div>

        {success ? (
          <div className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-6 text-center">
            <p className="text-sm text-green-400">{success}</p>
            <Link href="/login" className="mt-3 inline-block text-sm text-accent-blue hover:underline">
              Sign in
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="password" className="block text-sm text-text-secondary mb-1">
                New password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                minLength={8}
                className="w-full rounded-lg border border-border-subtle bg-surface-elevated px-3 py-2 text-sm text-foreground placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                placeholder="Minimum 8 characters"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm text-text-secondary mb-1">
                Confirm new password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                minLength={8}
                className="w-full rounded-lg border border-border-subtle bg-surface-elevated px-3 py-2 text-sm text-foreground placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-accent-blue px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-blue/90 disabled:opacity-50 transition-colors"
            >
              {loading ? "Resetting…" : "Reset password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-text-secondary">Loading…</p></div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
