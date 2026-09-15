import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Customer Testimonials"
        title="Loved by Our Community"
        description="Hear from our satisfied customers about their ARKA GREENS experience."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={Math.min(i * 0.08, 0.3)}>
                <Card className="h-full">
                  <Quote className="h-6 w-6 text-gold-500/60" />
                  <div className="mt-4 flex gap-1 text-gold-500">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 leading-relaxed text-ink-700">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-6 border-t border-forest-900/8 pt-5">
                    <p className="font-display font-semibold text-forest-950">{t.name}</p>
                    <p className="text-sm text-ink-500">{t.location}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
