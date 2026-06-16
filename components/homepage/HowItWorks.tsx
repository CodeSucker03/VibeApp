import Image from "next/image";
import { LandingImage } from "./ui";

const items = [
  {
    title: "Manage Your Job Search With Ease",
    body: "Find jobs that actually fit. Search by title and location or paste a job link. Get matched roles you can quickly scan.",
    icon: "📋",
  },
  {
    title: "Know the Company Before You Apply",
    body: "Stop guessing what a company is about. JobPilot browses their site and gives you everything you need to apply with confidence.",
    icon: "🏢",
  },
  {
    title: "Keep track of every application",
    body: "Keep a clear view of every job you've found, tailored. Your activity and progress all in one single place.",
    icon: "📈",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-20">
      <div className="grid items-center gap-6 lg:grid-cols-2">
        <div className="grid gap-4">
          <h2 className="text-3xl font-semibold leading-snug text-text-darkest">
            How It Works
          </h2>
          {items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-muted text-lg">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-darkest">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
          <LandingImage src="/images/jobs-lists.png" alt="Jobs list preview" />
        </div>
      </div>
    </section>
  );
}
