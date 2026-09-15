import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-950 pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      <Container className="relative">
        <Reveal>
          <p className="eyebrow text-gold-400">{eyebrow}</p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight text-cream md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70">{description}</p>
          )}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
