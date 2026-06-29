import * as React from "react";
import { cn } from "@/lib/utils";

/** Two-tone centered heading like eMigrate ("Latest Circulars"). */
export function SectionHeading({
  lead,
  highlight,
  highlightColor = "primary",
  className,
}: {
  lead: string;
  highlight: string;
  highlightColor?: "primary" | "danger" | "saffron";
  className?: string;
}) {
  const color =
    highlightColor === "danger"
      ? "text-danger"
      : highlightColor === "saffron"
        ? "text-[#ff8c1a]"
        : "text-primary";
  return (
    <h2
      className={cn(
        "text-center text-[26px] font-semibold tracking-tight text-ink sm:text-[30px]",
        className,
      )}
    >
      {lead} <span className={color}>{highlight}</span>
    </h2>
  );
}

/** Round carousel control button (decorative). */
export function CarouselArrow({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "grid size-9 place-items-center rounded-full border border-border bg-surface text-muted shadow-sm transition-colors hover:border-primary hover:text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
