import Link from "next/link";

const footerLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Condition" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-6">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-8">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-text-darkest">JobPilot</span>
        </div>

        <nav className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
