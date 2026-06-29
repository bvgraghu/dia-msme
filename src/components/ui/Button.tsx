import * as React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "danger" | "ghost" | "subtle";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-[12px] transition-all duration-150 focus-ring select-none disabled:opacity-55 disabled:pointer-events-none whitespace-nowrap active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-sm hover:bg-primary-hover hover:shadow-md",
  secondary:
    "bg-surface text-ink border border-border hover:border-primary hover:text-primary",
  danger:
    "bg-surface text-danger border border-danger/40 hover:bg-danger hover:text-white",
  ghost: "text-muted hover:bg-gray-soft hover:text-ink",
  subtle: "bg-primary-soft text-primary hover:bg-primary hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[14px]",
  md: "h-11 px-5 text-[15px]", // 44px
  lg: "h-12 px-6 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    loading,
    icon,
    iconRight,
    className,
    children,
    ...rest
  } = props as CommonProps & {
    className?: string;
    children?: React.ReactNode;
  } & Record<string, unknown>;

  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <>
      {loading ? (
        <Loader2 className="size-4 animate-spin" aria-hidden />
      ) : (
        icon
      )}
      {children}
      {iconRight}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as { href: string };
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={loading || (rest as { disabled?: boolean }).disabled}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner}
    </button>
  );
}
