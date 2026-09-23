import { Check, Clock, MapPin, Video, Building2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { workshops, onlineWorkshop } from "@/data/workshops";

const levelStyles: Record<string, string> = {
  Beginner: "bg-forest-900/8 text-forest-900",
  Intermediate: "bg-gold-400/20 text-gold-700",
  Advanced: "bg-forest-950 text-cream",
};

export function Workshops() {
  return (
    <>
      <PageHero
        eyebrow="Learn to Grow"
        title="Microgreens Workshops"
        description="Hands-on, in-person training in Bangalore — or a condensed live online session. Open to individuals, corporate teams, colleges, and institutions across industries."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">In-Person Training</p>
            <h2 className="font-display text-3xl font-semibold text-forest-950 md:text-4xl">
              Three Levels, Start to Finish
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              Every level covers the full cycle — seed sourcing, growing conditions, and
              harvesting — from scratch to a finished tray, with daily sessions from{" "}
              <span className="font-medium text-forest-900">10 AM to 6 PM</span>.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {workshops.map((w, i) => (
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
                      {w.duration} &middot; {w.schedule}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-ink-500">
                      <MapPin className="h-3.5 w-3.5 text-gold-600" />
                      In-Person (Bangalore)
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

                  <p className="mt-6 text-sm font-medium text-ink-500">
                    Price <span className="text-forest-900">To Be Announced</span>
                  </p>
                  <Button href="/contact" className="mt-3 w-full justify-center">
                    Enquire Now
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest-900/[0.04] py-24 md:py-32">
        <Container>
          <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 rounded-3xl bg-white p-8 shadow-soft md:grid-cols-[auto_1fr] md:p-12">
            <Reveal>
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-forest-900/8 text-forest-900">
                <Video className="h-7 w-7" />
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="eyebrow mb-2">Prefer to Join Remotely?</p>
              <h3 className="font-display text-2xl font-semibold text-forest-950">
                {onlineWorkshop.name}
              </h3>
              <p className="mt-2 text-sm text-ink-500">{onlineWorkshop.tagline}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-ink-500">
                <Clock className="h-3.5 w-3.5 text-gold-600" />
                {onlineWorkshop.duration} &middot; Live Online
              </div>
              <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {onlineWorkshop.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-sm text-ink-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    {topic}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <p className="text-sm font-medium text-ink-500">
                  Price <span className="text-forest-900">To Be Announced</span>
                </p>
                <Button href="/contact" variant="outline">
                  Enquire Now
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:flex-row sm:gap-6 sm:text-left">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest-900/8 text-forest-900">
              <Building2 className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-forest-950">
                Corporate, College &amp; Institutional Workshops
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-500">
                Running a workshop for your company, campus, or organization? We tailor group
                sessions for teams of any size across industries.{" "}
                <a href="/contact" className="inline-flex items-center gap-1 text-forest-900 underline">
                  <Mail className="h-3.5 w-3.5" />
                  Get in touch
                </a>{" "}
                to plan yours.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
