"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { verifyEmail } from "@/lib/actions/auth";
import { Suspense } from "react";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Invalid verification link.");
      return;
    }

    verifyEmail(token).then((result) => {
      if (result.error) {
        setStatus("error");
        setMessage(result.error);
      } else {
        setStatus("success");
        setMessage(result.message || "Email verified.");
      }
    });
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm text-center">
        <Link href="/" className="text-accent-red font-mono text-sm font-medium tracking-wider">
          LSO COURSE
        </Link>

        {status === "loading" && (
          <p className="mt-6 text-text-secondary">Verifying your email…</p>
        )}

        {status === "success" && (
          <div className="mt-6">
            <div className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-6">
              <p className="text-sm text-green-400">{message}</p>
            </div>
            <Link
              href="/login"
              className="mt-4 inline-block text-sm text-accent-blue hover:underline"
            >
              Sign in to your account
            </Link>
          </div>
        )}

        {status === "error" && (
          <div className="mt-6">
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-6">
              <p className="text-sm text-red-400">{message}</p>
            </div>
            <Link
              href="/register"
              className="mt-4 inline-block text-sm text-accent-blue hover:underline"
            >
              Register again
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-text-secondary">Loading…</p></div>}>
      <VerifyEmailContent />
    </Suspense>
  );
}
