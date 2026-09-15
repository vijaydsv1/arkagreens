import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, AtSign, Send } from "lucide-react";

const explore = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/benefits", label: "Benefits" },
  { href: "/how-it-works", label: "How It Works" },
];

const more = [
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Journal" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-forest-950 text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 text-forest-950">
                <Leaf className="h-4 w-4" />
              </span>
              <span className="font-display text-lg font-semibold tracking-wide">ARKA GREENS</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              Nature's nutrient powerhouse. Fresh, organic microgreens and superfoods delivered to
              your doorstep.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold-400 hover:text-gold-400"
                aria-label="Instagram"
              >
                <AtSign className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold-400 hover:text-gold-400"
                aria-label="Facebook"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-5 text-gold-400/90">Explore</p>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-cream/70 hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-gold-400/90">Resources</p>
            <ul className="space-y-3">
              {more.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-cream/70 hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-gold-400/90">Get in Touch</p>
            <ul className="space-y-4 text-sm text-cream/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a href="tel:+918197469989" className="hover:text-cream">
                  +91 81974 69989
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a href="mailto:arkagreens99@gmail.com" className="hover:text-cream">
                  arkagreens99@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Arka Greens. All rights reserved.</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
