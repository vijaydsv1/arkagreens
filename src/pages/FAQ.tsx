import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/content";

export function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="Got Questions?"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our products and services."
      />

      <section className="py-24 md:py-32">
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <Accordion items={faqs} />
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-16 max-w-3xl rounded-2xl border border-forest-900/10 bg-forest-900/[0.04] p-8 text-center">
            <h3 className="font-display text-xl font-semibold text-forest-950">
              Can&rsquo;t find the answer you&rsquo;re looking for?
            </h3>
            <p className="mt-2 text-ink-500">Our team is happy to help with any other questions.</p>
            <Button href="/contact" className="mt-6">
              Contact Us
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
