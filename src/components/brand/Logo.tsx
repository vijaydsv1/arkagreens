import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/brand/LogoMark";

export function Logo({
  tone = "dark",
  tagline = true,
  size = "md",
  iconClassName,
  className,
}: {
  tone?: "dark" | "light";
  tagline?: boolean;
  size?: "sm" | "md" | "lg";
  iconClassName?: string;
  className?: string;
}) {
  const textColor = tone === "dark" ? "text-brand-green" : "text-cream";
  const taglineColor = tone === "dark" ? "text-ink-700" : "text-cream/70";
  const hairlineColor = tone === "dark" ? "bg-ink-700/40" : "bg-cream/40";

  const iconSize = size === "sm" ? "h-8 w-8" : size === "lg" ? "h-14 w-14" : "h-9 w-9";
  const nameSize = size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn(iconSize, "shrink-0", textColor, iconClassName)} />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display font-semibold tracking-wide", nameSize, textColor)}>
          Arka Greens
        </span>
        {tagline && (
          <span className={cn("mt-1.5 flex items-center gap-1.5", taglineColor)}>
            <span className={cn("h-px w-3", hairlineColor)} />
            <span className="text-[9px] font-medium tracking-[0.18em] uppercase whitespace-nowrap">
              Nature&rsquo;s Nutrient Powerhouse
            </span>
            <span className={cn("h-px w-3", hairlineColor)} />
          </span>
        )}
      </span>
    </span>
  );
}
