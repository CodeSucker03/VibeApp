"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { insforge } from "@/lib/insforge-client";
import { trackEvent, resetUser } from "@/lib/posthog-client";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/find-jobs", label: "Find Jobs" },
  { href: "/profile", label: "Profile" },
];

export function Navbar() {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    insforge.auth.getCurrentUser().then(({ data, error }) => {
      if (error) {
        console.error("[navbar] auth error:", error);
      }
      setUser(data?.user || null);
      setIsLoading(false);
    });
  }, []);

  const handleSignOut = async () => {
    await insforge.auth.signOut();
    resetUser();
    trackEvent('sign_out_clicked');
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <header className="h-16 w-full border-b border-border bg-surface">
      <div className="mx-auto flex h-full max-w-[1440px] items-center px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold text-text-darkest">JobPilot</span>
        </Link>

        <nav className="ml-12 flex items-center gap-6">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-dark hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto">
          {isLoading ? null : user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-text-secondary">{user.email}</span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button>Get Started</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
