"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login } from "@/lib/actions/auth";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await login(formData);

    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="text-accent-red font-mono text-sm font-medium tracking-wider">
            LSO COURSE
          </Link>
          <h1 className="text-xl font-medium text-foreground mt-3">Sign in</h1>
          <p className="text-sm text-text-secondary mt-1">
            Enter your credentials to access the course
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

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
              autoComplete="current-password"
              className="w-full rounded-lg border border-border-subtle bg-surface-elevated px-3 py-2 text-sm text-foreground placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-accent-blue px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-blue/90 disabled:opacity-50 transition-colors"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <Link href="/forgot-password" className="text-sm text-text-tertiary hover:text-text-secondary transition-colors">
            Forgot your password?
          </Link>
          <p className="text-sm text-text-tertiary">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-accent-blue hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
