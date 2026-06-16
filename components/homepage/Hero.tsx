"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/posthog-client";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-accent-light via-accent-muted to-background">
      <div className="mx-auto max-w-[1440px] px-8 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-text-darkest">
            Job hunting is hard.
            <br />
            Your tools shouldn&apos;t be.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
            Stop applying blind. JobPilot finds the jobs, researches the companies,
            and gives you everything you need to stand out.
          </p>

          <div className="mt-7 inline-flex gap-3">
            <Link href="/login">
              <Button onClick={() => trackEvent('hero_cta_clicked', { cta: 'get_started' })}>
                Get Started
              </Button>
            </Link>
            <Link href="/find-jobs">
              <Button variant="secondary" onClick={() => trackEvent('hero_cta_clicked', { cta: 'find_jobs' })}>
                Find Your First Match
              </Button>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-14 w-full max-w-4xl">
          <div className="rounded-2xl border border-border bg-white p-2 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
            <Image
              src="/images/dashboard-demo.png"
              alt="Dashboard preview"
              width={1124}
              height={640}
              className="w-full rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
