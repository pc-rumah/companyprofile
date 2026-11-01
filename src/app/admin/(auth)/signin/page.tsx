"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ChevronLeftIcon, EyeIcon, EyeCloseIcon, AlertIcon } from "@/components/admin/icons";
import { ThemeToggleButton } from "@/components/admin/common/ThemeToggleButton";
import Button from "@/components/admin/ui/Button";
import Input from "@/components/admin/form/InputField";
import Label from "@/components/admin/form/Label";
import Checkbox from "@/components/admin/form/Checkbox";

function SignInContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      if (data.session) {
        router.push(next);
        router.refresh();
      }
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected authentication error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center bg-gray-50 dark:bg-gray-950 p-4 sm:p-6 transition-colors">
      {/* Top Bar with Back Link and Theme Toggle */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between max-w-5xl mx-auto w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <ChevronLeftIcon className="size-4" />
          Back to Public Site
        </Link>
        <ThemeToggleButton />
      </div>

      <div className="w-full max-w-md mx-auto my-auto">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-theme-md dark:border-gray-800 dark:bg-gray-900">
          {/* Logo & Header */}
          <div className="text-center mb-6">
            <div className="inline-flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-brand-500 to-brand-700 text-white font-bold text-lg shadow-md shadow-brand-500/20 mb-3">
              CT
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              Admin Portal Sign In
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
              Enter your credentials to access the administrative dashboard
            </p>
          </div>

          {/* Feedback Alert */}
          {errorMessage && (
            <div className="mb-4 flex items-start gap-2.5 rounded-lg border border-error-200 bg-error-50 p-3 text-xs text-error-700 dark:border-error-500/30 dark:bg-error-500/10 dark:text-error-400">
              <AlertIcon className="size-4 shrink-0 mt-0.5 text-error-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">
                Email Address <span className="text-error-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@castletrading.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">
                Password <span className="text-error-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeCloseIcon className="size-5" />
                  ) : (
                    <EyeIcon className="size-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <Checkbox
                id="remember"
                label="Keep me signed in"
                checked={rememberMe}
                onChange={setRememberMe}
              />
              <span className="text-gray-400 hover:underline cursor-pointer" title="Contact administrator for password resets">
                Forgot password?
              </span>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full text-sm font-semibold"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="size-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Authenticating...
                  </span>
                ) : (
                  "Sign In to Admin Portal"
                )}
              </Button>
            </div>
          </form>

          {/* Footer note */}
          <div className="mt-6 pt-4 border-t border-gray-100 text-center text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
            Protected with Supabase Authentication & Row-Level Security
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
          <div className="size-8 rounded-full border-2 border-brand-500 border-t-transparent animate-spin" />
        </div>
      }
    >
      <SignInContent />
    </Suspense>
  );
}

