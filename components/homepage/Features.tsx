import Image from "next/image";
import { LandingImage } from "./ui";

const features = [
  {
    title: "Understand your match score",
    description:
      "See how your profile lines up with each role before you apply. Get a clear breakdown of what fits and what's missing.",
    icon: "🎯",
  },
  {
    title: "AI-Powered Job Matching",
    description:
      "Stop guessing which jobs are worth applying to. JobPilot scores every role against your actual skills so you focus on the ones that matter.",
    icon: "🤖",
  },
  {
    title: "Focus on the right roles",
    description:
      "Filter out low-fit jobs and stay on the ones that actually matter. Spend less time sorting and more time applying.",
    icon: "✅",
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-20">
      <div className="grid items-center gap-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1 w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
          <LandingImage src="/images/agent-log.png" alt="Agent log preview" />
        </div>

        <div className="order-1 lg:order-2 grid gap-4">
          <h2 className="text-3xl font-semibold leading-snug text-text-darkest">
            Apply With More
            <br />
            Confidence, Every Time
          </h2>

          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-muted text-lg">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-darkest">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
