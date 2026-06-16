"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { trackEvent } from "@/lib/posthog-client";

export default function FindJobsPage() {
  useEffect(() => {
    trackEvent('find_jobs_viewed');
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-8">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-text-darkest">Find Jobs</h1>
            <p className="mt-2 text-text-secondary">Browse and discover your perfect job match</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}