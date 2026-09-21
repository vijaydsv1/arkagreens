import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Droplets,
  Flower2,
  Leaf,
  Minus,
  Plus,
  Quote,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sprout,
  Users,
  Zap,
  Star,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useCart } from "@/context/CartContext";
import { testimonials, certifications } from "@/data/content";
import { microgreens, sprouts, edibleFlowers, growKits } from "@/data/products";
import { ProductCard, formatINR } from "@/pages/Products";
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

const heroStats = [
  { value: "50+", label: "Varieties" },
  { value: "100%", label: "Organic" },
  { value: "24–48h", label: "Delivery" },
  { value: "Lab", label: "Tested Batches" },
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

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function FeaturedKitCard() {
  const kit = growKits.find((k) => k.id === "kit-starter") ?? growKits[0];
  const { lines, addItem, setQuantity } = useCart();
  const line = lines.find((l) => l.id === kit.id);
  const quantity = line?.quantity ?? 0;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gold-500/30 bg-white transition-all duration-300 hover:shadow-soft">
      <div className="flex h-32 items-center justify-center bg-gold-400/10">
        <span className="rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-forest-950">
          DIY Kit
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold text-forest-950">{kit.name}</h3>
        <p className="mt-1 flex-1 text-xs text-ink-500">{kit.tag}</p>
        <div className="mt-4">
          <span className="font-display text-lg font-semibold text-forest-950">
            {formatINR(kit.price)}
          </span>
          <span className="ml-1 text-xs text-ink-500">/ {kit.unit}</span>
        </div>
        {quantity === 0 ? (
          <button
            onClick={() => addItem({ id: kit.id, name: kit.name, unit: kit.unit, unitPrice: kit.price })}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-forest-900 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-forest-800"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add to Cart
          </button>
        ) : (
          <div className="mt-4 flex items-center justify-between rounded-full border border-forest-900/15 px-2 py-1">
            <button
              onClick={() => setQuantity(kit.id, quantity - 1)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-forest-900 hover:bg-forest-900/8"
              aria-label={`Decrease quantity for ${kit.name}`}
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="text-sm font-medium text-forest-950">{quantity} in cart</span>
            <button
              onClick={() => setQuantity(kit.id, quantity + 1)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-forest-900 hover:bg-forest-900/8"
              aria-label={`Increase quantity for ${kit.name}`}
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function Home() {
  const featured = [
    microgreens.find((m) => m.name === "Wheatgrass")!,
    sprouts.find((s) => s.name === "Mung Bean")!,
    edibleFlowers.find((f) => f.name === "Nasturtium")!,
  ];

  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48">
        <div className="absolute inset-0">
          <motion.img
            src={heroMicrogreens}
            alt=""
            className="h-full w-full object-cover"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/92 to-cream/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/40" />
        </div>

        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white/60 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-gold-600" />
                <span className="text-xs font-medium tracking-wide text-forest-900">
                  Nature's Nutrient Powerhouse
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display text-5xl font-semibold leading-[1.08] text-forest-950 md:text-6xl">
                Fresh Microgreens &amp; Superfoods for Optimal Health
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500">
                Discover the power of nutrient-dense microgreens, sprouts, and edible flowers.
                Grown with care, delivered fresh, designed to transform your health.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="/products">
                  Explore Products <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/how-it-works" variant="outline">
                  Our Growing Process
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-semibold text-forest-950 md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs tracking-wide text-ink-500 uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
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
          <Reveal delay={0.3} className="mt-10 text-center">
            <Button href="/products" variant="outline">
              Shop All Products <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="hairline" />

      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Best Sellers"
            title="Shop Customer Favorites"
            description="A taste of what's in the shop — real pricing, add to cart, no detours."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {featured.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <ProductCard item={item} />
              </Reveal>
            ))}
            <Reveal delay={0.32}>
              <FeaturedKitCard />
            </Reveal>
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
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-cream/[0.06]">
                  <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold-400 transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-cream">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <img src={heroSprouting} alt="" className="h-[26rem] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-4 rounded-2xl bg-white p-6 shadow-soft md:right-6">
                <p className="font-display text-3xl font-semibold text-forest-950">40x</p>
                <p className="mt-1 max-w-[10rem] text-xs leading-snug text-ink-500">
                  More nutrients than mature plants
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:pl-6">
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
              <div className="mt-10 grid grid-cols-1 gap-4">
                {whyUs.map((w) => (
                  <Card key={w.title} className="flex items-start gap-5">
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
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="hairline" />

      <section className="py-16 md:py-20">
        <Container>
          <Reveal className="text-center">
            <p className="eyebrow mb-3">Quality You Can Trust</p>
            <h2 className="font-display text-2xl font-semibold text-forest-950 md:text-3xl">
              Every Batch, Certified
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-4">
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
                <Card className="relative h-full">
                  <Quote className="h-7 w-7 text-gold-500/30" />
                  <div className="mt-3 flex gap-1 text-gold-500">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-ink-700 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-forest-900/8 pt-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-900/8 font-display text-sm font-semibold text-forest-900">
                      {initials(t.name)}
                    </span>
                    <div>
                      <p className="font-display font-semibold text-forest-950">{t.name}</p>
                      <p className="text-sm text-ink-500">{t.location}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="hairline mb-16" />
          <div className="relative overflow-hidden rounded-3xl bg-forest-950 px-8 py-16 text-center md:px-16 md:py-20">
            <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.1]" />
            <Reveal className="relative">
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
