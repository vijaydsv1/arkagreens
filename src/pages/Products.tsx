import { useState } from "react";
import { Check, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { microgreens, sprouts, edibleFlowers, growKits, type ProductItem } from "@/data/products";

const tabs = [
  { key: "microgreens", label: "Microgreens", items: microgreens },
  { key: "sprouts", label: "Sprouts", items: sprouts },
  { key: "flowers", label: "Edible Flowers", items: edibleFlowers },
] as const;

function ProductGrid({ items }: { items: ProductItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.name} delay={Math.min(i * 0.02, 0.3)}>
          <div className="group flex items-start gap-4 rounded-xl border border-forest-900/8 bg-white/60 p-5 transition-all duration-300 hover:border-gold-500/40 hover:shadow-soft">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest-900/8 text-forest-900 transition-colors group-hover:bg-gold-400 group-hover:text-forest-950">
              <Leaf className="h-4 w-4" />
            </span>
            <div>
              <h3 className="font-display text-base font-semibold text-forest-950">{item.name}</h3>
              <p className="mt-1 text-sm text-ink-500">{item.benefits}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Products() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("microgreens");
  const activeTab = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <>
      <PageHero
        eyebrow="Our Product Range"
        title="Our Products"
        description="Discover our complete range of fresh, nutrient-dense microgreens, sprouts, and edible flowers. Each product is carefully grown and lab-tested for maximum nutrition and safety."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-12 flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={cn(
                  "rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-colors",
                  active === tab.key
                    ? "bg-forest-900 text-cream"
                    : "border border-forest-900/15 text-ink-700 hover:border-forest-900/40",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p className="mb-10 max-w-2xl text-ink-500">
            {active === "microgreens" &&
              "Harvested at peak nutritional density. Each variety offers unique flavors and health benefits — perfect for salads, smoothies, and garnishes."}
            {active === "sprouts" &&
              "Living superfoods rich in natural enzymes and nutrients, grown in water and eaten whole."}
            {active === "flowers" &&
              "Nature's colorful superfoods. Our edible flowers add visual beauty and nutritional value to salads, desserts, drinks, and culinary creations."}
          </p>

          <ProductGrid items={activeTab.items} />
        </Container>
      </section>

      <section className="bg-forest-900/[0.04] py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Grow Your Own</p>
            <h2 className="font-display text-3xl font-semibold text-forest-950 md:text-4xl">
              DIY Microgreen Grow Kits
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              Grow your own fresh microgreens at home with our complete DIY kits — everything you
              need to start your home growing journey.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {growKits.map((kit, i) => (
              <Reveal key={kit.name} delay={i * 0.1}>
                <div
                  className={cn(
                    "h-full rounded-2xl bg-white p-8",
                    kit.featured
                      ? "border-2 border-gold-500 shadow-soft"
                      : "border border-forest-900/10",
                  )}
                >
                  {kit.featured && (
                    <span className="mb-4 inline-block rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-forest-950">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold text-forest-950">{kit.name}</h3>
                  <ul className="mt-6 space-y-3">
                    {kit.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-ink-700">
                        <Check className="h-4 w-4 shrink-0 text-gold-600" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 font-medium text-forest-900">{kit.tag}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
