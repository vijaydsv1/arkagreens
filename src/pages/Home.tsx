import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Flower2, Leaf, ShieldCheck, Sparkles, Sprout, Users, Zap, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/content";
import heroMicrogreens from "@/assets/hero-microgreens.webp";
import heroFlowers from "@/assets/hero-flowers.webp";
import heroSprouting from "@/assets/hero-sprouting.webp";

const categories = [
  {
    title: "Microgreens",
    description: "29 varieties of fresh, nutrient-dense microgreens",
    icon: Leaf,
    href: "/products",
    image: heroMicrogreens,
  },
  {
    title: "Sprouts",
    description: "Living superfoods rich in enzymes and nutrients",
    icon: Sprout,
    href: "/products",
    image: heroSprouting,
  },
  {
    title: "Edible Flowers",
    description: "Nature's colorful superfoods for your plate",
    icon: Flower2,
    href: "/products",
    image: heroFlowers,
  },
];

const valueProps = [
  { title: "Detoxification", description: "Naturally cleanse your body with enzyme-rich greens", icon: Droplets },
  { title: "Immunity Support", description: "Boost your immune system with concentrated nutrients", icon: ShieldCheck },
  { title: "Gut Health", description: "Support digestive wellness with living probiotics", icon: Sparkles },
  { title: "Energy & Vitality", description: "Experience natural energy without crashes", icon: Zap },
];

const whyUs = [
  { title: "Organic Certified", description: "All our products are grown organically without synthetic pesticides or chemicals", icon: Leaf },
  { title: "Lab Tested", description: "Rigorous lab testing ensures purity, potency, and safety of every batch", icon: ShieldCheck },
  { title: "Community Focused", description: "Supporting local farmers and sustainable agriculture practices", icon: Users },
];

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48">
        <div className="absolute inset-0">
          <img src={heroMicrogreens} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/92 to-cream/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/40" />
        </div>

        <Container className="relative">
          <Reveal className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white/60 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-gold-600" />
              <span className="text-xs font-medium tracking-wide text-forest-900">
                Nature's Nutrient Powerhouse
              </span>
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.08] text-forest-950 md:text-6xl">
              Fresh Microgreens &amp; Superfoods for Optimal Health
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500">
              Discover the power of nutrient-dense microgreens, sprouts, and edible flowers.
              Grown with care, delivered fresh, designed to transform your health.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/products">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/how-it-works" variant="outline">
                Our Growing Process
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Our Product Range"
            title="Microgreen Varieties, Sprouts &amp; Edible Flowers"
            description="Carefully curated products to support your wellness journey, from seed to plate."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {categories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.1}>
                <Link to={cat.href} className="group block overflow-hidden rounded-2xl">
                  <div className="relative h-72 overflow-hidden rounded-2xl">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 text-forest-950">
                        <cat.icon className="h-4 w-4" />
                      </span>
                      <h3 className="mt-4 font-display text-2xl font-semibold text-cream">
                        {cat.title}
                      </h3>
                      <p className="mt-1 text-sm text-cream/75">{cat.description}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest-950 py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Experience the Difference"
            title="Nutritional Benefits, Nature Designed"
            description="Experience the transformative power of nutrient-dense superfoods."
            tone="light"
          />
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="bg-forest-950 p-8">
                <v.icon className="h-7 w-7 text-gold-400" />
                <h3 className="mt-5 font-display text-lg font-semibold text-cream">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="eyebrow mb-4">Why Arka Greens</p>
              <h2 className="font-display text-3xl font-semibold leading-tight text-forest-950 md:text-4xl">
                We stand out through our unwavering commitment to quality
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                Started with a simple mission: to make nutrient-dense superfoods accessible to
                everyone. We believe nature provides everything we need for optimal health.
              </p>
              <Button href="/about" variant="outline" className="mt-8">
                Our Story <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
            <div className="grid grid-cols-1 gap-5">
              {whyUs.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.08}>
                  <Card className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-900/8 text-forest-900">
                      <w.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-forest-950">
                        {w.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                        {w.description}
                      </p>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Customer Love"
            title="Join Our Growing Community"
            description="Hear from those already experiencing the Arka Greens difference."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <Card className="h-full">
                  <div className="flex gap-1 text-gold-500">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-ink-700 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <p className="mt-6 font-display font-semibold text-forest-950">{t.name}</p>
                  <p className="text-sm text-ink-500">{t.location}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="hairline mb-16" />
          <div className="overflow-hidden rounded-3xl bg-forest-950 px-8 py-16 text-center md:px-16 md:py-20">
            <Reveal>
              <p className="eyebrow text-gold-400">Start Today</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-cream md:text-4xl">
                Start Your Wellness Journey With Arka Greens
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/70">
                Fresh, organic, nutrient-dense superfoods delivered to your doorstep.
              </p>
              <Button href="/contact" className="mt-9 bg-gold-400 text-forest-950 hover:bg-gold-300">
                Get Started Today <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
