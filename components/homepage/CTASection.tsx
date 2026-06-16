"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/posthog-client";

export function CTASection() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-20">
      <div className="rounded-2xl border border-border bg-white px-6 py-20 text-center shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
        <h2 className="text-3xl font-semibold leading-snug text-text-darkest">
          Your next job search can feel a
          <br />
          lot less overwhelming
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
          Set up your profile, upload your resume, and start finding matches in minutes.
        </p>

        <div className="mt-7 inline-flex gap-3">
          <Link href="/login">
            <Button onClick={() => trackEvent('cta_clicked', { section: 'hero', cta: 'get_started' })}>
              Get Started
            </Button>
          </Link>
          <Link href="/find-jobs">
            <Button variant="secondary" onClick={() => trackEvent('cta_clicked', { section: 'hero', cta: 'find_jobs' })}>
              Find Your First Match
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
