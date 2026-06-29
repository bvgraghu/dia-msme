import * as React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

type Tone = "primary" | "success" | "warning" | "danger" | "purple" | "muted";

const toneStyles: Record<Tone, string> = {
  primary: "bg-primary-soft text-primary",
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning",
  danger: "bg-danger-soft text-danger",
  purple: "bg-purple-soft text-purple",
  muted: "bg-gray-soft text-muted",
};

export function StatCard({
  icon,
  value,
  label,
  trend,
  tone = "primary",
}: {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  trend?: { value: string; up?: boolean };
  tone?: Tone;
}) {
  return (
    <Card hover className="p-5">
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "grid size-11 place-items-center rounded-[12px]",
            toneStyles[tone],
          )}
        >
          {icon}
        </div>
        {trend && (
          <span
            className={cn(
              "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[12px] font-semibold",
              trend.up
                ? "bg-success-soft text-success"
                : "bg-danger-soft text-danger",
            )}
          >
            {trend.up ? (
              <ArrowUpRight className="size-3.5" />
            ) : (
              <ArrowDownRight className="size-3.5" />
            )}
            {trend.value}
          </span>
        )}
      </div>
      <p className="mt-4 text-[28px] font-semibold leading-none text-ink">
        {value}
      </p>
      <p className="mt-1.5 text-[14px] text-muted">{label}</p>
    </Card>
  );
}
