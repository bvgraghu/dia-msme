import * as React from "react";
import { cn } from "@/lib/utils";

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center px-6 py-14",
        className,
      )}
    >
      <div className="mb-5 grid size-16 place-items-center rounded-full bg-primary-soft text-primary">
        {icon}
      </div>
      <h3 className="text-card-title text-ink">{title}</h3>
      {description && (
        <p className="text-caption text-muted mt-1.5 max-w-sm">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
