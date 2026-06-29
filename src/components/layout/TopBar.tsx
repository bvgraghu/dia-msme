"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  Bell,
  HelpCircle,
  ChevronDown,
  User,
  Settings,
  MessageSquare,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function TopBar({ onOpenMobile }: { onOpenMobile: () => void }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-surface/85 px-4 backdrop-blur-md lg:px-6">
      {/* Mobile menu */}
      <button
        onClick={onOpenMobile}
        className="grid size-10 place-items-center rounded-[10px] text-muted hover:bg-gray-soft hover:text-ink lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="size-5" />
      </button>

      {/* Gov emblem */}
      <div className="hidden items-center gap-2 pr-3 sm:flex">
        <div className="grid size-9 place-items-center rounded-full bg-gradient-to-b from-[#ff9933] via-white to-[#138808] text-[10px] font-bold text-ink ring-1 ring-border">
          GoI
        </div>
        <span className="hidden text-[12px] leading-tight text-muted xl:block">
          Government
          <br />
          of India
        </span>
      </div>

      {/* Search */}
      <div className="relative ml-1 hidden max-w-md flex-1 md:block">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4.5 -translate-y-1/2 text-muted" />
        <input
          type="search"
          placeholder="Search projects, applications, users…"
          className="h-11 w-full rounded-[12px] border border-border bg-canvas pl-11 pr-4 text-[14px] text-ink placeholder:text-muted focus:border-primary focus:bg-surface focus:outline-none focus:ring-[3px] focus:ring-primary/15"
        />
      </div>

      <div className="ml-auto flex items-center gap-1">
        {/* Help */}
        <Link
          href="/help"
          className="hidden size-10 place-items-center rounded-[10px] text-muted hover:bg-gray-soft hover:text-ink sm:grid"
          aria-label="Help"
        >
          <HelpCircle className="size-5" />
        </Link>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => {
              setNotifOpen((v) => !v);
              setProfileOpen(false);
            }}
            className="relative grid size-10 place-items-center rounded-[10px] text-muted hover:bg-gray-soft hover:text-ink"
            aria-label="Notifications"
          >
            <Bell className="size-5" />
            <span className="absolute right-2 top-2 size-2 rounded-full bg-danger ring-2 ring-surface" />
          </button>

          {notifOpen && (
            <DropdownPanel onClose={() => setNotifOpen(false)} align="right">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <p className="text-[15px] font-semibold text-ink">
                  Notifications
                </p>
                <span className="rounded-full bg-danger-soft px-2 py-0.5 text-[12px] font-medium text-danger">
                  3 new
                </span>
              </div>
              <ul className="max-h-80 overflow-y-auto">
                {notifications.map((n) => (
                  <li key={n.id}>
                    <button className="flex w-full gap-3 px-4 py-3 text-left transition-colors hover:bg-canvas">
                      <span
                        className={cn(
                          "mt-1 size-2 shrink-0 rounded-full",
                          n.unread ? "bg-primary" : "bg-transparent",
                        )}
                      />
                      <span className="min-w-0">
                        <span className="block text-[14px] font-medium text-ink">
                          {n.title}
                        </span>
                        <span className="block truncate text-[13px] text-muted">
                          {n.body}
                        </span>
                        <span className="mt-0.5 block text-[12px] text-muted">
                          {n.time}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <Link
                href="/notifications"
                className="block border-t border-border px-4 py-3 text-center text-[14px] font-semibold text-primary hover:bg-canvas"
              >
                View all notifications
              </Link>
            </DropdownPanel>
          )}
        </div>

        {/* Profile */}
        <div className="relative ml-1">
          <button
            onClick={() => {
              setProfileOpen((v) => !v);
              setNotifOpen(false);
            }}
            className="flex items-center gap-2 rounded-[12px] py-1 pl-1 pr-2 transition-colors hover:bg-gray-soft"
          >
            <span className="grid size-9 place-items-center rounded-full bg-primary text-[14px] font-semibold text-white">
              RA
            </span>
            <span className="hidden text-left leading-tight sm:block">
              <span className="block text-[14px] font-semibold text-ink">
                Raghu A.
              </span>
              <span className="block text-[12px] text-muted">
                District Officer
              </span>
            </span>
            <ChevronDown className="hidden size-4 text-muted sm:block" />
          </button>

          {profileOpen && (
            <DropdownPanel onClose={() => setProfileOpen(false)} align="right">
              <div className="border-b border-border px-4 py-3">
                <p className="text-[15px] font-semibold text-ink">Raghu A.</p>
                <p className="text-[13px] text-muted">bvgraghu@gmail.com</p>
              </div>
              <ul className="py-1.5">
                {profileLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-[14px] text-ink hover:bg-canvas"
                    >
                      <l.icon className="size-4.5 text-muted" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border py-1.5">
                <Link
                  href="/login"
                  className="flex items-center gap-3 px-4 py-2.5 text-[14px] font-medium text-danger hover:bg-danger-soft"
                >
                  <LogOut className="size-4.5" />
                  Logout
                </Link>
              </div>
            </DropdownPanel>
          )}
        </div>
      </div>
    </header>
  );
}

function DropdownPanel({
  children,
  onClose,
  align = "right",
}: {
  children: React.ReactNode;
  onClose: () => void;
  align?: "right" | "left";
}) {
  return (
    <>
      <div className="fixed inset-0 z-10" onClick={onClose} aria-hidden />
      <div
        className={cn(
          "animate-fade-in absolute top-[calc(100%+8px)] z-20 w-80 overflow-hidden rounded-[14px] border border-border bg-surface shadow-[var(--shadow-pop)]",
          align === "right" ? "right-0" : "left-0",
        )}
      >
        {children}
      </div>
    </>
  );
}

const profileLinks = [
  { label: "My Profile", href: "/profile", icon: User },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Help Center", href: "/help", icon: HelpCircle },
  { label: "Send Feedback", href: "/feedback", icon: MessageSquare },
];

const notifications = [
  {
    id: 1,
    title: "Application APP-2041 approved",
    body: "Your subsidy application has been approved.",
    time: "12 minutes ago",
    unread: true,
  },
  {
    id: 2,
    title: "Document verification pending",
    body: "Promoter Aadhaar awaiting verification.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 3,
    title: "Deadline approaching",
    body: "Project PRJ-118 report due in 3 days.",
    time: "Yesterday",
    unread: true,
  },
];
