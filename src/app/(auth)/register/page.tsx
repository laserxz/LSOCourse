"use client";

import { useState } from "react";
import Link from "next/link";
import { register } from "@/lib/actions/auth";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    if (formData.get("password") !== formData.get("confirmPassword")) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    const result = await register(formData);

    if (result.error) {
      setError(result.error);
    } else {
      setSuccess(result.message || "Check your email to verify your account.");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="text-accent-red font-mono text-sm font-medium tracking-wider">
            LSO COURSE
          </Link>
          <h1 className="text-xl font-medium text-foreground mt-3">Create account</h1>
          <p className="text-sm text-text-secondary mt-1">
            Register to enrol in the LSO training course
          </p>
        </div>

        {success ? (
          <div className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-6 text-center">
            <p className="text-sm text-green-400 mb-3">{success}</p>
            <Link href="/login" className="text-sm text-accent-blue hover:underline">
              Go to login
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
              <label htmlFor="fullName" className="block text-sm text-text-secondary mb-1">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                maxLength={200}
                className="w-full rounded-lg border border-border-subtle bg-surface-elevated px-3 py-2 text-sm text-foreground placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                placeholder="Jane Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-text-secondary mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-border-subtle bg-surface-elevated px-3 py-2 text-sm text-foreground placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-text-secondary mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full rounded-lg border border-border-subtle bg-surface-elevated px-3 py-2 text-sm text-foreground placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                placeholder="Minimum 8 characters"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm text-text-secondary mb-1">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full rounded-lg border border-border-subtle bg-surface-elevated px-3 py-2 text-sm text-foreground placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-accent-blue px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-blue/90 disabled:opacity-50 transition-colors"
            >
              {loading ? "Creating account…" : "Create account"}
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-text-tertiary">
          Already have an account?{" "}
          <Link href="/login" className="text-accent-blue hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
