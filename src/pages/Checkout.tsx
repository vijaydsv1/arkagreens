import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ShoppingBag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { submitOrder } from "@/lib/api";

function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

type FormState = { name: string; phone: string; email: string; address: string; notes: string };
const emptyForm: FormState = { name: "", phone: "", email: "", address: "", notes: "" };

export function Checkout() {
  const { lines, subtotal, clear } = useCart();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.address) {
      setError("Please fill in all required fields");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const result = await submitOrder({
        customer_name: form.name,
        phone: form.phone,
        email: form.email,
        address: form.address,
        notes: form.notes,
        items: lines.map((l) => ({
          name: l.name,
          unit: l.unit,
          unit_price: l.unitPrice,
          quantity: l.quantity,
        })),
      });
      setOrderId(result.id);
      clear();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (orderId !== null) {
    return (
      <>
        <PageHero eyebrow="Order Inquiry Received" title="Thank You!" />
        <section className="py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-lg rounded-2xl border border-gold-500/30 bg-white p-10 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-gold-600" />
              <h2 className="mt-5 font-display text-2xl font-semibold text-forest-950">
                Order #{orderId} received
              </h2>
              <p className="mt-3 text-ink-500">
                This is an order inquiry, not a payment — we don&rsquo;t take payment online yet.
                Our team will call or email you shortly to confirm availability and arrange
                payment on delivery.
              </p>
              <Button href="/products" variant="outline" className="mt-8">
                Continue Browsing
              </Button>
            </div>
          </Container>
        </section>
      </>
    );
  }

  if (lines.length === 0) {
    return (
      <>
        <PageHero eyebrow="Checkout" title="Your Cart is Empty" />
        <section className="py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-lg text-center">
              <ShoppingBag className="mx-auto h-10 w-10 text-forest-900/20" />
              <p className="mt-5 text-ink-500">Add some products before checking out.</p>
              <Button href="/products" className="mt-8">
                Browse Products
              </Button>
            </div>
          </Container>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Checkout"
        title="Complete Your Order Inquiry"
        description="No payment is taken online — we'll confirm your order and arrange payment on delivery."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_1fr]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-forest-950">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-forest-900/15 bg-white px-4 py-2.5 text-forest-950 placeholder-ink-300 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-forest-950">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
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
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-forest-950">
                  Delivery Address
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Street, area, city, PIN code"
                  className="w-full resize-none rounded-lg border border-forest-900/15 bg-white px-4 py-2.5 text-forest-950 placeholder-ink-300 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-forest-950">
                  Notes (optional)
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Delivery instructions, preferred time, etc."
                  className="w-full resize-none rounded-lg border border-forest-900/15 bg-white px-4 py-2.5 text-forest-950 placeholder-ink-300 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-forest-900 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-forest-800 disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Order Inquiry"}
              </button>
            </form>

            <div className="h-fit rounded-2xl border border-forest-900/10 bg-white p-8">
              <h2 className="font-display text-lg font-semibold text-forest-950">Order Summary</h2>
              <ul className="mt-6 space-y-4">
                {lines.map((line) => (
                  <li key={line.id} className="flex justify-between text-sm">
                    <span className="text-ink-700">
                      {line.quantity} &times; {line.name}
                      <span className="block text-xs text-ink-500">{line.unit}</span>
                    </span>
                    <span className="font-medium text-forest-950">
                      {formatINR(line.unitPrice * line.quantity)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-t border-forest-900/10 pt-5">
                <span className="font-medium text-forest-950">Subtotal</span>
                <span className="font-display text-xl font-semibold text-forest-950">
                  {formatINR(subtotal)}
                </span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-ink-500">
                Delivery charges (if any) will be confirmed when we contact you.{" "}
                <Link to="/products" className="text-forest-900 underline">
                  Edit cart
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
