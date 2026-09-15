import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-forest-900 text-cream hover:bg-forest-800 shadow-[0_10px_30px_-10px_rgba(14,31,22,0.45)]",
  outline: "border border-forest-900/25 text-forest-900 hover:border-forest-900 hover:bg-forest-900/5",
  ghost: "text-forest-900 hover:text-gold-600",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300";

export function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, variantClasses[variant], className);

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
