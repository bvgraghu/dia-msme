import * as React from "react";
import { cn } from "@/lib/utils";

export type StatusTone =
  | "draft"
  | "submitted"
  | "review"
  | "approved"
  | "rejected"
  | "returned";

const tones: Record<StatusTone, { label: string; className: string; dot: string }> = {
  draft: {
    label: "Draft",
    className: "bg-gray-soft text-gray-chip",
    dot: "bg-gray-chip",
  },
  submitted: {
    label: "Submitted",
    className: "bg-info-soft text-info",
    dot: "bg-info",
  },
  review: {
    label: "Under Review",
    className: "bg-warning-soft text-warning",
    dot: "bg-warning",
  },
  approved: {
    label: "Approved",
    className: "bg-success-soft text-success",
    dot: "bg-success",
  },
  rejected: {
    label: "Rejected",
    className: "bg-danger-soft text-danger",
    dot: "bg-danger",
  },
  returned: {
    label: "Returned",
    className: "bg-purple-soft text-purple",
    dot: "bg-purple",
  },
};

export function StatusBadge({
  tone,
  className,
  children,
}: {
  tone: StatusTone;
  className?: string;
  children?: React.ReactNode;
}) {
  const t = tones[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[999px] px-2.5 py-1 text-[13px] font-medium",
        t.className,
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", t.dot)} />
      {children ?? t.label}
    </span>
  );
}

export function Pill({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[999px] bg-gray-soft px-2.5 py-1 text-[13px] font-medium text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
