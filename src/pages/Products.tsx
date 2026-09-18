import { useState } from "react";
import { Leaf, Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { useCart } from "@/context/CartContext";
import { microgreens, sprouts, edibleFlowers, growKits, type ProductItem } from "@/data/products";

const tabs = [
  { key: "microgreens", label: "Microgreens", items: microgreens },
  { key: "sprouts", label: "Sprouts", items: sprouts },
  { key: "flowers", label: "Edible Flowers", items: edibleFlowers },
] as const;

function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function ProductCard({ item }: { item: ProductItem }) {
  const { lines, addItem, setQuantity } = useCart();
  const line = lines.find((l) => l.id === item.id);
  const quantity = line?.quantity ?? 0;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-forest-900/8 bg-white transition-all duration-300 hover:border-gold-500/40 hover:shadow-soft">
      <div className="flex h-32 items-center justify-center bg-forest-900/[0.05]">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-forest-900 shadow-sm transition-colors group-hover:bg-gold-400 group-hover:text-forest-950">
          <Leaf className="h-6 w-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold text-forest-950">{item.name}</h3>
        <p className="mt-1 flex-1 text-xs text-ink-500">{item.benefits}</p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="font-display text-lg font-semibold text-forest-950">
              {formatINR(item.price)}
            </span>
            <span className="ml-1 text-xs text-ink-500">/ {item.unit}</span>
          </div>
        </div>

        {quantity === 0 ? (
          <button
            onClick={() =>
              addItem({ id: item.id, name: item.name, unit: item.unit, unitPrice: item.price })
            }
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-forest-900 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-forest-800"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add to Cart
          </button>
        ) : (
          <div className="mt-4 flex items-center justify-between rounded-full border border-forest-900/15 px-2 py-1">
            <button
              onClick={() => setQuantity(item.id, quantity - 1)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-forest-900 hover:bg-forest-900/8"
              aria-label={`Decrease quantity for ${item.name}`}
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="text-sm font-medium text-forest-950">{quantity} in cart</span>
            <button
              onClick={() => setQuantity(item.id, quantity + 1)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-forest-900 hover:bg-forest-900/8"
              aria-label={`Increase quantity for ${item.name}`}
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProductGrid({ items }: { items: ProductItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item, i) => (
        <Reveal key={item.id} delay={Math.min(i * 0.02, 0.3)}>
          <ProductCard item={item} />
        </Reveal>
      ))}
    </div>
  );
}

export function Products() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("microgreens");
  const activeTab = tabs.find((t) => t.key === active) ?? tabs[0];
  const { lines, addItem, setQuantity } = useCart();

  return (
    <>
      <PageHero
        eyebrow="Shop Fresh"
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
            {growKits.map((kit, i) => {
              const line = lines.find((l) => l.id === kit.id);
              const quantity = line?.quantity ?? 0;
              return (
                <Reveal key={kit.id} delay={i * 0.1}>
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
                    <h3 className="font-display text-xl font-semibold text-forest-950">
                      {kit.name}
                    </h3>
                    <ul className="mt-6 space-y-3">
                      {kit.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-ink-700">
                          <Check className="h-4 w-4 shrink-0 text-gold-600" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="font-display text-2xl font-semibold text-forest-950">
                        {formatINR(kit.price)}
                      </span>
                      <span className="text-xs text-ink-500">{kit.tag}</span>
                    </div>

                    {quantity === 0 ? (
                      <button
                        onClick={() =>
                          addItem({
                            id: kit.id,
                            name: kit.name,
                            unit: kit.unit,
                            unitPrice: kit.price,
                          })
                        }
                        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-900 py-3 text-sm font-medium text-cream transition-colors hover:bg-forest-800"
                      >
                        <ShoppingBag className="h-4 w-4" />
                        Add to Cart
                      </button>
                    ) : (
                      <div className="mt-6 flex items-center justify-between rounded-full border border-forest-900/15 px-2 py-1.5">
                        <button
                          onClick={() => setQuantity(kit.id, quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full text-forest-900 hover:bg-forest-900/8"
                          aria-label={`Decrease quantity for ${kit.name}`}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-sm font-medium text-forest-950">
                          {quantity} in cart
                        </span>
                        <button
                          onClick={() => setQuantity(kit.id, quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full text-forest-900 hover:bg-forest-900/8"
                          aria-label={`Increase quantity for ${kit.name}`}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
