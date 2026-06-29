"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Lock, Eye, EyeOff, RefreshCw } from "lucide-react";
import { Field, Input } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

export function LoginForm() {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/dashboard"), 700);
  }

  return (
    <div className="flex items-center justify-center bg-canvas px-4 py-12 sm:px-8">
      <div className="w-full max-w-md">
        {/* Mobile brand */}
        <div className="mb-8 flex items-center gap-3 lg:hidden">
          <span className="grid size-11 place-items-center rounded-[12px] bg-primary font-bold text-white">
            D
          </span>
          <div className="leading-tight">
            <p className="text-[18px] font-bold text-ink">DIA Portal</p>
            <p className="text-[12px] text-muted">Digital Industrial Assistance</p>
          </div>
        </div>

        <div className="rounded-[16px] border border-border bg-surface p-7 shadow-[var(--shadow-elevated)] sm:p-9">
          <h1 className="text-[26px] font-semibold tracking-tight text-ink">
            Welcome back
          </h1>
          <p className="mt-1.5 text-[15px] text-muted">
            Sign in with your registered credentials to continue.
          </p>

          <form onSubmit={onSubmit} className="mt-7 space-y-5">
            <Field label="Username / Udyam Number" htmlFor="username" required>
              <div className="relative">
                <User className="pointer-events-none absolute left-3.5 top-1/2 size-4.5 -translate-y-1/2 text-muted" />
                <Input
                  id="username"
                  placeholder="UDYAM-XX-00-0000000"
                  className="pl-11"
                  required
                />
              </div>
            </Field>

            <Field label="Password" htmlFor="password" required>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 size-4.5 -translate-y-1/2 text-muted" />
                <Input
                  id="password"
                  type={showPw ? "text" : "password"}
                  placeholder="Enter your password"
                  className="px-11"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-3 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded text-muted hover:text-ink"
                  aria-label={showPw ? "Hide password" : "Show password"}
                >
                  {showPw ? (
                    <EyeOff className="size-4.5" />
                  ) : (
                    <Eye className="size-4.5" />
                  )}
                </button>
              </div>
            </Field>

            {/* Captcha */}
            <Field label="Captcha" htmlFor="captcha" required>
              <div className="flex items-center gap-3">
                <div className="flex h-12 select-none items-center rounded-[12px] border border-border bg-gray-soft px-4 text-[18px] font-semibold italic tracking-[0.3em] text-ink line-through decoration-border">
                  7K9 P2
                </div>
                <button
                  type="button"
                  className="grid size-11 place-items-center rounded-[10px] border border-border text-muted hover:bg-gray-soft hover:text-ink"
                  aria-label="Refresh captcha"
                >
                  <RefreshCw className="size-4.5" />
                </button>
                <Input
                  id="captcha"
                  placeholder="Enter captcha"
                  className="flex-1"
                  required
                />
              </div>
            </Field>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-[14px] text-ink">
                <input
                  type="checkbox"
                  className="size-4 rounded border-border text-primary focus:ring-primary"
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-[14px] font-medium text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button type="submit" size="lg" loading={loading} className="w-full">
              Sign in
            </Button>
          </form>

          <p className="mt-6 text-center text-[14px] text-muted">
            New enterprise?{" "}
            <Link
              href="/register"
              className="font-semibold text-primary hover:underline"
            >
              Register with Udyam
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-[13px] text-muted">
          By signing in you agree to the{" "}
          <Link href="#" className="text-primary hover:underline">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
