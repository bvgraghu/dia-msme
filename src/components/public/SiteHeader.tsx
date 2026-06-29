"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Sun,
  Search,
  UserCircle2,
  Megaphone,
} from "lucide-react";
import { primaryNav, ticker } from "./content";
import { cn } from "@/lib/utils";

const NAVY = "#1b2a78";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="relative z-40">
      {/* Tricolour top strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#ff9933] via-white to-[#138808]" />

      {/* Utility bar */}
      <div className="text-white" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto flex h-9 max-w-[1280px] items-center px-4 text-[13px] sm:px-6">
          <span className="hidden items-center gap-3 font-medium text-white/85 sm:flex">
            <Link href="#" className="hover:text-white">Connect</Link>
            <span className="text-white/30">|</span>
            <Link href="#" className="hover:text-white">Collaborate</Link>
            <span className="text-white/30">|</span>
            <Link href="#" className="hover:text-white">Catalyze</Link>
          </span>

          {/* Ticker */}
          <div className="ml-auto hidden max-w-md flex-1 items-center gap-2 overflow-hidden md:flex">
            <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#f5c518] px-2.5 py-0.5 text-[11px] font-bold uppercase text-ink">
              <Megaphone className="size-3.5" /> Live
            </span>
            <div className="relative flex-1 overflow-hidden">
              <div className="animate-marquee flex w-max gap-8 whitespace-nowrap text-white/90">
                {[...ticker, ...ticker].map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-1 md:ml-3">
            <button className="grid size-7 place-items-center rounded border border-white/30 text-[12px] hover:bg-white/10" aria-label="Increase text size">A+</button>
            <button className="grid size-7 place-items-center rounded border border-white/30 text-[13px] hover:bg-white/10" aria-label="Default text size">A</button>
            <button className="grid size-7 place-items-center rounded border border-white/30 text-[11px] hover:bg-white/10" aria-label="Decrease text size">A-</button>
            <button className="ml-1 grid size-7 place-items-center rounded-full bg-[#f5c518] text-ink" aria-label="Toggle theme">
              <Sun className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Emblem header */}
      <div className="bg-surface">
        <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-4 py-3.5 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <SidbiMark />
            <div className="leading-tight">
              <p className="text-[17px] font-bold text-[#1b2a78] sm:text-[20px]">
                Development of Industry Associations
              </p>
              <p className="text-[12px] text-muted">
                An initiative of SIDBI · Small Industries Development Bank of India
              </p>
            </div>
          </Link>

          <div className="ml-auto flex items-center gap-2.5">
            <button className="hidden size-10 place-items-center rounded-[10px] text-muted hover:bg-gray-soft lg:grid" aria-label="Search">
              <Search className="size-5" />
            </button>
            <Link
              href="/login"
              className="hidden h-11 items-center gap-2 rounded-[10px] px-4 text-[14px] font-semibold text-white sm:flex"
              style={{ backgroundColor: NAVY }}
            >
              <UserCircle2 className="size-5" /> Sign in
            </Link>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-[10px] text-ink lg:hidden"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Primary nav bar */}
      <nav
        className="hidden text-white lg:block"
        style={{ backgroundColor: NAVY }}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="mx-auto flex max-w-[1280px] items-stretch px-4 sm:px-6">
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
            >
              {item.children ? (
                <button
                  className={cn(
                    "flex h-12 items-center gap-1 px-4 text-[14px] font-medium transition-colors hover:bg-white/10",
                    openMenu === item.label && "bg-white/10",
                  )}
                >
                  {item.label}
                  <ChevronDown className="size-3.5" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="flex h-12 items-center px-4 text-[14px] font-medium transition-colors hover:bg-white/10"
                >
                  {item.label}
                </Link>
              )}
              {item.children && openMenu === item.label && (
                <div className="animate-fade-in absolute left-0 top-full z-50 w-64 overflow-hidden rounded-b-[12px] border border-border bg-surface py-1.5 shadow-[var(--shadow-pop)]">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="block border-l-2 border-transparent px-4 py-2.5 text-[14px] text-ink hover:border-[#1b2a78] hover:bg-primary-soft hover:text-[#1b2a78]"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/login"
            className="my-auto ml-auto flex items-center gap-1.5 rounded-[8px] bg-[#f5c518] px-4 py-2 text-[13px] font-semibold text-ink hover:bg-[#e6b800]"
          >
            Participate
          </Link>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="animate-fade-in border-t border-border bg-surface lg:hidden">
          <div className="mx-auto max-w-[1280px] px-4 py-3">
            {primaryNav.map((item) => (
              <details key={item.label} className="border-b border-border">
                <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-[15px] font-medium text-ink">
                  {item.label}
                  {item.children && <ChevronDown className="size-4 text-muted" />}
                </summary>
                {item.children && (
                  <div className="pb-2 pl-3">
                    {item.children.map((c) => (
                      <Link key={c.label} href={c.href} className="block py-2 text-[14px] text-muted hover:text-primary">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </details>
            ))}
            <Link
              href="/login"
              className="mt-4 flex h-11 items-center justify-center gap-2 rounded-[10px] font-semibold text-white"
              style={{ backgroundColor: NAVY }}
            >
              <UserCircle2 className="size-5" /> Sign in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* SIDBI-style wordmark badge */
function SidbiMark() {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <div className="grid size-12 place-items-center rounded-[12px] bg-gradient-to-br from-[#1b2a78] to-[#3a4bb0] text-white">
        <svg viewBox="0 0 24 24" className="size-7" fill="none">
          <path d="M4 14c3-6 13-6 16 0" stroke="#f5c518" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="9" r="2.4" fill="white" />
          <path d="M6 18h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <span className="hidden text-[13px] font-bold leading-tight text-[#1b2a78] xl:block">
        सिडबी
        <span className="block text-[15px]">SIDBI</span>
      </span>
    </div>
  );
}
