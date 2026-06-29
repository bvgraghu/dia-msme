import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  hover,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-[12px] shadow-[var(--shadow-card)]",
        hover &&
          "transition-all duration-200 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  title,
  description,
  action,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex items-start justify-between gap-4 px-6 pt-6 pb-4",
        className,
      )}
      {...props}
    >
      <div className="min-w-0">
        {title && <h3 className="text-card-title text-ink">{title}</h3>}
        {description && (
          <p className="text-caption text-muted mt-1">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function CardBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-6 pb-6", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "px-6 py-4 border-t border-border flex items-center gap-3",
        className,
      )}
      {...props}
    />
  );
}
