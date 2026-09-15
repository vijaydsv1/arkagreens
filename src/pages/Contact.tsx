import { useState, type ChangeEvent, type FormEvent } from "react";
import { Phone, Mail, MapPin, ShoppingBag, Handshake, MessageSquareHeart, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    description: "Call us for immediate assistance",
    value: "+91 81974 69989",
    href: "tel:+918197469989",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us your inquiries",
    value: "arkagreens99@gmail.com",
    href: "mailto:arkagreens99@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Bangalore, India",
    value: "Available for local and nationwide delivery",
    href: undefined,
  },
];

const inquiryTypes = [
  { icon: ShoppingBag, label: "Product Inquiries" },
  { icon: Handshake, label: "Wholesale Opportunities" },
  { icon: MessageSquareHeart, label: "Feedback & Suggestions" },
];

type FormState = { name: string; email: string; subject: string; message: string };
const emptyForm: FormState = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    setSent(true);
    setForm(emptyForm);
  }

  return (
    <>
      <PageHero
        eyebrow="We'd Love to Hear From You"
        title="Get in Touch"
        description="Reach out for product questions, wholesale opportunities, or just to say hello."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <Card className="h-full text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-forest-900/8 text-forest-900">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-forest-950">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-500">{c.description}</p>
                  {c.href ? (
                    <a href={c.href} className="mt-3 block font-medium text-forest-900 hover:text-gold-600">
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-3 font-medium text-forest-900">{c.value}</p>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-forest-950 md:text-3xl">
                Send us a Message
              </h2>

              {sent ? (
                <div className="mt-8 flex items-start gap-3 rounded-xl border border-gold-500/30 bg-gold-400/10 p-6">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                  <div>
                    <p className="font-medium text-forest-950">Message sent successfully!</p>
                    <p className="mt-1 text-sm text-ink-500">
                      We&rsquo;ll get back to you within 24-48 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-forest-950">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-forest-900/15 bg-white px-4 py-2.5 text-forest-950 placeholder-ink-300 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-forest-950">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-forest-900/15 bg-white px-4 py-2.5 text-forest-950 placeholder-ink-300 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-forest-950">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full rounded-lg border border-forest-900/15 bg-white px-4 py-2.5 text-forest-950 placeholder-ink-300 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-forest-950">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us more..."
                      className="w-full resize-none rounded-lg border border-forest-900/15 bg-white px-4 py-2.5 text-forest-950 placeholder-ink-300 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                    />
                  </div>
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <button
                    type="submit"
                    className="rounded-full bg-forest-900 px-8 py-3 text-sm font-medium text-cream transition-colors hover:bg-forest-800"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-semibold text-forest-950 md:text-3xl">
                What Can We Help With?
              </h2>
              <div className="mt-8 space-y-4">
                {inquiryTypes.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center gap-4 rounded-xl border border-forest-900/8 bg-white/60 p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-forest-900/8 text-forest-900">
                      <t.icon className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-forest-950">{t.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-relaxed text-ink-500">
                We value your feedback and suggestions. Help us improve by sharing your thoughts
                and experiences with ARKA GREENS.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
