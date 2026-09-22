import { Check, Clock, Minus, Plus, ShoppingBag, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { useCart } from "@/context/CartContext";
import { workshops } from "@/data/workshops";

function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

const levelStyles: Record<string, string> = {
  Beginner: "bg-forest-900/8 text-forest-900",
  Intermediate: "bg-gold-400/20 text-gold-700",
  Advanced: "bg-forest-950 text-cream",
};

export function Workshops() {
  const { lines, addItem, setQuantity } = useCart();

  return (
    <>
      <PageHero
        eyebrow="Learn to Grow"
        title="Microgreens Workshops"
        description="From your first tray at home to building a microgreens business — hands-on workshops for every stage, taught in-person in Bangalore or live online."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {workshops.map((w, i) => {
              const line = lines.find((l) => l.id === w.id);
              const quantity = line?.quantity ?? 0;

              return (
                <Reveal key={w.id} delay={i * 0.1}>
                  <div
                    className={cn(
                      "flex h-full flex-col rounded-2xl bg-white p-8",
                      w.featured
                        ? "border-2 border-gold-500 shadow-soft"
                        : "border border-forest-900/10",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold",
                        levelStyles[w.level],
                      )}
                    >
                      {w.level}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-forest-950">
                      {w.name}
                    </h3>
                    <p className="mt-2 text-sm text-ink-500">{w.tagline}</p>

                    <div className="mt-5 space-y-2 border-y border-forest-900/8 py-5">
                      <div className="flex items-center gap-2 text-xs text-ink-500">
                        <Clock className="h-3.5 w-3.5 text-gold-600" />
                        {w.duration}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-ink-500">
                        <MapPin className="h-3.5 w-3.5 text-gold-600" />
                        {w.format}
                      </div>
                    </div>

                    <ul className="mt-5 flex-1 space-y-3">
                      {w.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-3 text-ink-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                          <span className="text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <span className="font-display text-2xl font-semibold text-forest-950">
                        {formatINR(w.price)}
                      </span>
                      <span className="ml-1 text-xs text-ink-500">/ {w.unit}</span>
                    </div>

                    {quantity === 0 ? (
                      <button
                        onClick={() =>
                          addItem({ id: w.id, name: `${w.name} Workshop`, unit: w.unit, unitPrice: w.price })
                        }
                        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-900 py-3 text-sm font-medium text-cream transition-colors hover:bg-forest-800"
                      >
                        <ShoppingBag className="h-4 w-4" />
                        Reserve Your Seat
                      </button>
                    ) : (
                      <div className="mt-6 flex items-center justify-between rounded-full border border-forest-900/15 px-2 py-1.5">
                        <button
                          onClick={() => setQuantity(w.id, quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full text-forest-900 hover:bg-forest-900/8"
                          aria-label={`Decrease seats for ${w.name}`}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-sm font-medium text-forest-950">
                          {quantity} seat{quantity > 1 ? "s" : ""}
                        </span>
                        <button
                          onClick={() => setQuantity(w.id, quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full text-forest-900 hover:bg-forest-900/8"
                          aria-label={`Increase seats for ${w.name}`}
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

          <Reveal delay={0.3} className="mx-auto mt-14 max-w-2xl text-center">
            <p className="text-sm text-ink-500">
              Reserving a seat submits an enrollment inquiry — we&rsquo;ll confirm your spot,
              schedule, and payment details directly. Group and corporate workshops available on
              request via our{" "}
              <a href="/contact" className="text-forest-900 underline">
                Contact page
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
