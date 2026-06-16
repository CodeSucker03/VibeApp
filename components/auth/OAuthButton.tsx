"use client";

import { Button } from "@/components/ui/button";
import { GoogleIcon, GitHubIcon } from "@/components/ui/icons/OAuthIcons";

type OAuthProvider = "google" | "github";

type OAuthButtonProps = {
  provider: OAuthProvider;
  isLoading: boolean;
  onClick: () => void;
};

export function OAuthButton({ provider, isLoading, onClick }: OAuthButtonProps) {
  const labels = {
    google: isLoading ? "Connecting..." : "Continue with Google",
    github: isLoading ? "Connecting..." : "Continue with GitHub",
  };

  const icon = provider === "google" ? <GoogleIcon className="h-5 w-5" /> : <GitHubIcon className="h-5 w-5" />;

  return (
    <Button
      className="w-full justify-center gap-3"
      onClick={onClick}
      disabled={isLoading}
      variant={provider === "github" ? "secondary" : "primary"}
    >
      {icon}
      {labels[provider]}
    </Button>
  );
}