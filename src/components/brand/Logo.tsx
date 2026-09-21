import { cn } from "@/lib/utils";
import logoLockup from "@/assets/logo-lockup.png";
import logoLockupWhite from "@/assets/logo-lockup-white.png";

export function Logo({
  tone = "dark",
  size = "md",
  className,
}: {
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const height = size === "sm" ? "h-11" : size === "lg" ? "h-16" : "h-12";
  const src = tone === "light" ? logoLockupWhite : logoLockup;

  return (
    <span className={cn("inline-flex items-center", className)}>
      <img src={src} alt="Arka Greens — Nature's Nutrient Powerhouse" className={cn(height, "w-auto")} />
    </span>
  );
}
