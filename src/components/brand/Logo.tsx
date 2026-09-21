import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/brand/LogoMark";

export function Logo({
  tone = "dark",
  tagline = false,
  iconClassName,
  className,
}: {
  tone?: "dark" | "light";
  tagline?: boolean;
  iconClassName?: string;
  className?: string;
}) {
  const textColor = tone === "dark" ? "text-forest-950" : "text-cream";
  const taglineColor = tone === "dark" ? "text-ink-500" : "text-cream/60";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("h-9 w-9 shrink-0", textColor, iconClassName)} />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-lg font-semibold tracking-wide", textColor)}>
          Arka Greens
        </span>
        {tagline && (
          <span className={cn("mt-1 text-[9px] font-medium tracking-[0.2em] uppercase", taglineColor)}>
            Nature&rsquo;s Nutrient Powerhouse
          </span>
        )}
      </span>
    </span>
  );
}
