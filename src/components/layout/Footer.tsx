import Link from "next/link";

const links = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Help", href: "/help" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-6 py-5 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Digital Industrial Assistance Portal,
          Government of India. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-primary">
              {l.label}
            </Link>
          ))}
          <span className="text-border">|</span>
          <span className="text-muted/80">v2.4.0</span>
        </nav>
      </div>
    </footer>
  );
}
