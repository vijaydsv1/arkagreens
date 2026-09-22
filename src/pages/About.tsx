import { Leaf, ShieldCheck, Users, BadgeCheck, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { certifications } from "@/data/content";

const whyUs = [
  {
    title: "Organic Certified",
    description: "All our products are grown organically without synthetic pesticides or chemicals",
    icon: Leaf,
  },
  {
    title: "Lab Tested",
    description: "Rigorous lab testing ensures purity, potency, and safety of every batch",
    icon: ShieldCheck,
  },
  {
    title: "Community Focused",
    description: "Supporting local farmers and sustainable agriculture practices",
    icon: Users,
  },
];

export function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Nature's Mission, Grown With Care"
        description="ARKA GREENS was founded with a simple mission: to make nutrient-dense superfoods accessible to everyone. We believe that nature provides everything we need for optimal health."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow mb-4">Purpose</p>
              <h2 className="font-display text-2xl font-semibold text-forest-950 md:text-3xl">
                Our Mission
              </h2>
              <p className="mt-5 leading-relaxed text-ink-500">
                To provide the freshest, most nutrient-dense microgreens and superfoods, grown
                with care and delivered with integrity.
              </p>
              <p className="mt-4 leading-relaxed text-ink-500">
                We are committed to supporting sustainable agriculture, educating our community
                about nutrition, and empowering individuals to take control of their health
                naturally.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow mb-4">Direction</p>
              <h2 className="font-display text-2xl font-semibold text-forest-950 md:text-3xl">
                Our Vision
              </h2>
              <p className="mt-5 leading-relaxed text-ink-500">
                A world where everyone has access to fresh, organic superfoods that nourish their
                body and support their wellness journey.
              </p>
              <p className="mt-4 leading-relaxed text-ink-500">
                We envision ARKA GREENS as a trusted partner in health, recognized for our
                commitment to quality, sustainability, and customer care.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/*
        Founder section — name confirmed (Anusha R.S.), full bio/photo/story
        still pending from the client. Using a monogram placeholder instead
        of a fabricated photo, and brand-voice copy instead of invented
        biographical claims. Swap in the real story once provided.
      */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.8fr_1fr]">
            <Reveal className="mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl bg-forest-900/[0.04]">
              <span className="flex h-32 w-32 items-center justify-center rounded-full bg-forest-900 font-display text-4xl font-semibold text-cream">
                AR
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow mb-4">From Our Founder</p>
              <Quote className="h-8 w-8 text-gold-500/40" />
              <p className="mt-4 font-display text-2xl font-medium leading-snug text-forest-950 md:text-3xl">
                &ldquo;Arka Greens started with a simple belief — that everyone deserves access to
                real, nutrient-dense food. Every tray we grow carries that promise.&rdquo;
              </p>
              <p className="mt-6 font-display text-lg font-semibold text-forest-950">Anusha R.S.</p>
              <p className="text-sm text-ink-500">Founder, Arka Greens</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-forest-900/[0.04] py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Why Arka Greens?</p>
            <h2 className="font-display text-3xl font-semibold text-forest-950 md:text-4xl">
              Our Commitment to Quality
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              We stand out through our unwavering commitment to quality, freshness, and your
              health.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <Card className="h-full text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-forest-900/8 text-forest-900">
                    <w.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold text-forest-950">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{w.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Certifications &amp; Quality Standards</p>
            <h2 className="font-display text-3xl font-semibold text-forest-950 md:text-4xl">
              Our commitment to excellence, backed by rigorous testing
            </h2>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert, i) => (
              <Reveal key={cert} delay={i * 0.06}>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white px-6 py-3 text-sm font-medium text-forest-900 shadow-sm">
                  <BadgeCheck className="h-4 w-4 text-gold-600" />
                  {cert}
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
