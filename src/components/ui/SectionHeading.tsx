import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-4", tone === "light" && "text-gold-300")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-semibold leading-tight",
          tone === "dark" ? "text-forest-950" : "text-cream",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed",
            tone === "dark" ? "text-ink-500" : "text-cream/75",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
