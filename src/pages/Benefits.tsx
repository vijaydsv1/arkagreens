import {
  ShieldCheck,
  Droplets,
  Zap,
  HeartPulse,
  Brain,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { keyNutrients } from "@/data/content";
import benefitsBg from "@/assets/benefits-bg.webp";

const benefitCategories = [
  {
    icon: ShieldCheck,
    title: "Immunity Support",
    description:
      "Packed with vitamins C, A, and antioxidants that strengthen your immune system and help fight off illness.",
    details: ["Vitamin C for white blood cells", "Antioxidants for immune protection", "Natural enzymes for cellular health"],
  },
  {
    icon: Droplets,
    title: "Detoxification",
    description: "Natural detoxifiers that help cleanse your body and support liver function.",
    details: ["Chlorophyll for blood purification", "Enzymes for digestive support", "Alkalizing properties"],
  },
  {
    icon: Zap,
    title: "Energy & Vitality",
    description: "Experience sustained energy without crashes. Rich in B vitamins and minerals for natural vitality.",
    details: ["B-complex vitamins for energy", "Iron for oxygen transport", "Magnesium for muscle function"],
  },
  {
    icon: HeartPulse,
    title: "Heart Health",
    description: "Support cardiovascular wellness with potassium, minerals, and heart-healthy compounds.",
    details: ["Potassium for blood pressure", "Omega-3 fatty acids", "Antioxidants for artery health"],
  },
  {
    icon: Brain,
    title: "Cognitive Function",
    description: "Support mental clarity and focus with nutrients that nourish your brain.",
    details: ["Folate for neural health", "Antioxidants for brain protection", "Minerals for neurotransmitters"],
  },
  {
    icon: Sparkles,
    title: "Skin & Hair Health",
    description: "Achieve radiant skin and healthy hair from within with bioavailable nutrients.",
    details: ["Vitamin A for skin renewal", "Vitamin C for collagen", "Minerals for hair strength"],
  },
];

const consumptionTips = [
  "Consume fresh for maximum enzyme activity",
  "Add to salads, smoothies, or eat as garnish",
  "Start with small quantities and increase gradually",
  "Avoid overcooking to preserve nutrients",
];

const generalTips = [
  "Wash thoroughly before consumption",
  "Store in cool, dry place for freshness",
  "Consume in moderation for best results",
  "Consult healthcare provider if on medications",
];

export function Benefits() {
  return (
    <>
      <PageHero
        eyebrow="Nutritional Powerhouses"
        title="Health Benefits"
        description="Discover how ARKA GREENS superfoods can transform your health and wellness journey. Each product is nature's gift for optimal nutrition."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefitCategories.map((b, i) => (
              <Reveal key={b.title} delay={Math.min(i * 0.06, 0.3)}>
                <Card className="h-full">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest-900/8 text-forest-900">
                    <b.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold text-forest-950">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{b.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-forest-900/8 pt-5">
                    {b.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-ink-500">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <img src={benefitsBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-cream/93" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Nutritional Powerhouses</p>
            <h2 className="font-display text-3xl font-semibold text-forest-950 md:text-4xl">
              Key Nutrients Found in Our Products
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {keyNutrients.map((n, i) => (
              <Reveal key={n.name} delay={Math.min(i * 0.05, 0.3)}>
                <div className="rounded-xl border border-forest-900/8 bg-white p-6">
                  <h4 className="font-display font-semibold text-forest-950">{n.name}</h4>
                  <p className="mt-2 text-sm text-ink-500">{n.benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest-950 py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold-400 mb-4">How to Maximize Benefits</p>
            <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl">
              Consumption Tips
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {[consumptionTips, generalTips].map((group, gi) => (
              <Reveal key={gi} delay={gi * 0.1}>
                <ul className="space-y-4 rounded-2xl border border-cream/10 bg-cream/5 p-8">
                  {group.map((tip) => (
                    <li key={tip} className="flex items-start gap-3 text-cream/80">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400 text-[10px] font-bold text-forest-950">
                        &#10003;
                      </span>
                      <span className="text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
