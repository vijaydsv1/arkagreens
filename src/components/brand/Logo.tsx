import { cn } from "@/lib/utils";
import logoLockup from "@/assets/logo-lockup.png";

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

  const img = <img src={logoLockup} alt="Arka Greens — Nature's Nutrient Powerhouse" className={cn(height, "w-auto")} />;

  if (tone === "light") {
    // Dark background: the logo is drawn for light surfaces, so present it
    // on a small cream plate rather than losing contrast against dark green.
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-xl bg-cream px-4 py-2 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)]",
          className,
        )}
      >
        {img}
      </span>
    );
  }

  return <span className={cn("inline-flex items-center", className)}>{img}</span>;
}
