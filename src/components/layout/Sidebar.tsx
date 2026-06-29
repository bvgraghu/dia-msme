"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, LifeBuoy } from "lucide-react";
import { mainNav } from "./nav-config";
import { cn } from "@/lib/utils";

export function Sidebar({
  collapsed,
  onToggle,
  mobileOpen,
  onCloseMobile,
}: {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-ink/30 backdrop-blur-sm lg:hidden"
          onClick={onCloseMobile}
          aria-hidden
        />
      )}

      <aside
        className={cn(
          "fixed lg:sticky top-0 z-40 lg:z-0 flex h-dvh shrink-0 flex-col border-r border-border bg-surface transition-[width,transform] duration-300 ease-out",
          collapsed ? "lg:w-[76px]" : "lg:w-64",
          "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        {/* Brand */}
        <div className="flex h-16 items-center gap-2.5 border-b border-border px-4">
          <div className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-primary text-white font-bold">
            D
          </div>
          {!collapsed && (
            <div className="min-w-0 leading-tight">
              <p className="truncate text-[15px] font-semibold text-ink">
                DIA Portal
              </p>
              <p className="truncate text-[11px] text-muted">
                Digital Industrial Assistance
              </p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {!collapsed && (
            <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted">
              Main Menu
            </p>
          )}
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onCloseMobile}
                    title={collapsed ? item.label : undefined}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-[15px] font-medium transition-colors",
                      active
                        ? "bg-primary text-white shadow-sm"
                        : "text-muted hover:bg-primary-soft hover:text-primary",
                      collapsed && "justify-center",
                    )}
                  >
                    <Icon className="size-[20px] shrink-0" />
                    {!collapsed && <span className="flex-1">{item.label}</span>}
                    {!collapsed && item.badge ? (
                      <span
                        className={cn(
                          "grid h-5 min-w-5 place-items-center rounded-full px-1.5 text-[11px] font-semibold",
                          active
                            ? "bg-white/20 text-white"
                            : "bg-primary-soft text-primary group-hover:bg-white",
                        )}
                      >
                        {item.badge}
                      </span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Help card / collapse */}
        <div className="border-t border-border p-3">
          {!collapsed && (
            <div className="mb-3 rounded-[12px] bg-primary-soft p-4">
              <div className="flex items-center gap-2 text-primary">
                <LifeBuoy className="size-5" />
                <span className="text-[14px] font-semibold">Need help?</span>
              </div>
              <p className="mt-1 text-[12px] text-muted">
                Reach our support desk for guidance on applications.
              </p>
              <Link
                href="/help"
                className="mt-2.5 inline-block text-[13px] font-semibold text-primary hover:underline"
              >
                Contact Support →
              </Link>
            </div>
          )}
          <button
            onClick={onToggle}
            className="hidden w-full items-center justify-center gap-2 rounded-[10px] border border-border py-2 text-[13px] font-medium text-muted transition-colors hover:bg-gray-soft hover:text-ink lg:flex"
          >
            <ChevronLeft
              className={cn(
                "size-4 transition-transform",
                collapsed && "rotate-180",
              )}
            />
            {!collapsed && "Collapse"}
          </button>
        </div>
      </aside>
    </>
  );
}
