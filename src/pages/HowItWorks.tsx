import { Sprout, Leaf, FlaskConical, Truck, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { growingSteps, labTestingPoints, usageInstructions } from "@/data/content";

const stepIcons = [Sprout, Leaf, FlaskConical, Truck];

export function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="From Seed to Table"
        title="Our Growing Process"
        description="Our transparent process ensures maximum nutrition and safety, every step of the way."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {growingSteps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <Reveal key={step.title} delay={i * 0.1}>
                  <Card className="h-full text-center">
                    <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-forest-900/8 text-forest-900">
                      <Icon className="h-6 w-6" />
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold-400 text-xs font-bold text-forest-950">
                        {i + 1}
                      </span>
                    </span>
                    <h3 className="mt-6 font-display text-lg font-semibold text-forest-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.description}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 rounded-2xl border border-forest-900/10 bg-forest-900/[0.04] p-8 md:p-12">
              <h3 className="font-display text-xl font-semibold text-forest-950">Lab Testing</h3>
              <p className="mt-3 max-w-xl text-ink-500">
                Every batch undergoes rigorous laboratory testing to ensure:
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {labTestingPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                    <span className="text-ink-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-forest-900/[0.04] py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Usage Instructions</p>
            <h2 className="font-display text-3xl font-semibold text-forest-950 md:text-4xl">
              How to Use Each Product
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {usageInstructions.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-forest-900/8 bg-white p-8">
                  <h3 className="font-display text-lg font-semibold text-forest-950">
                    {group.title}
                  </h3>
                  <ol className="mt-5 space-y-4">
                    {group.steps.map((step, si) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-900/8 text-[11px] font-bold text-forest-900">
                          {si + 1}
                        </span>
                        <span className="text-sm leading-relaxed text-ink-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <Reveal className="mx-auto max-w-3xl rounded-2xl border border-gold-500/30 bg-white p-8 text-center md:p-12">
            <Check className="mx-auto h-8 w-8 text-gold-600" />
            <h3 className="mt-4 font-display text-2xl font-semibold text-forest-950">
              Nature, Nurtured With Precision
            </h3>
            <p className="mt-3 text-ink-500">
              Up to 40 times more nutrients than mature plants — concentrated vitamins, minerals,
              enzymes, and antioxidants in every harvest.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
