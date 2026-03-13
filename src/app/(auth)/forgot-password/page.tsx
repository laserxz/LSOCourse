"use client";

import { useState } from "react";
import Link from "next/link";
import { forgotPassword } from "@/lib/actions/auth";

export default function ForgotPasswordPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await forgotPassword(formData);
    setMessage(result.message || result.error || "");
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="text-accent-red font-mono text-sm font-medium tracking-wider">
            LSO COURSE
          </Link>
          <h1 className="text-xl font-medium text-foreground mt-3">Reset password</h1>
          <p className="text-sm text-text-secondary mt-1">
            Enter your email and we&apos;ll send a reset link
          </p>
        </div>

        {message ? (
          <div className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-6 text-center">
            <p className="text-sm text-green-400">{message}</p>
            <Link href="/login" className="mt-3 inline-block text-sm text-accent-blue hover:underline">
              Back to login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm text-text-secondary mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-border-subtle bg-surface-elevated px-3 py-2 text-sm text-foreground placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-accent-blue px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-blue/90 disabled:opacity-50 transition-colors"
            >
              {loading ? "Sending…" : "Send reset link"}
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-text-tertiary">
          <Link href="/login" className="text-accent-blue hover:underline">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
