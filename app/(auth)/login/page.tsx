"use client";

import { useState } from "react";
import { insforge } from "@/lib/insforge-client";
import { OAuthButton } from "@/components/auth/OAuthButton";
import { trackEvent } from "@/lib/posthog-client";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<"google" | "github" | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleOAuthSignIn = async (provider: "google" | "github") => {
    trackEvent('oauth_sign_in_clicked', { provider })
    setIsLoading(provider);
    setError(null);
    try {
      await insforge.auth.signInWithOAuth(provider, {
        redirectTo: `${window.location.origin}/callback`,
      });
    } catch (err) {
      trackEvent('oauth_sign_in_failed', { provider, error: err })
      console.error("[login]", err);
      setError("Something went wrong. Please try again.");
      setIsLoading(null);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-8">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-8 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-text-darkest">Welcome to JobPilot</h1>
          <p className="mt-2 text-sm text-text-secondary">
            Sign in to start finding your perfect job match
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-md bg-error-lightest p-3 text-sm text-error">
            {error}
          </div>
        )}

        <div className="space-y-3">
          <OAuthButton
            provider="google"
            isLoading={isLoading === "google"}
            onClick={() => handleOAuthSignIn("google")}
          />
          <OAuthButton
            provider="github"
            isLoading={isLoading === "github"}
            onClick={() => handleOAuthSignIn("github")}
          />
        </div>
      </div>
    </div>
  );
}