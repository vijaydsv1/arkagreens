import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-forest-900/8 bg-white/70 backdrop-blur-sm p-7 transition-all duration-300",
        "hover:shadow-soft hover:-translate-y-1 hover:border-gold-500/30",
        className,
      )}
    >
      {children}
    </div>
  );
}
