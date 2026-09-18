import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Leaf, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";

const links = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/benefits", label: "Benefits" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/blog", label: "Journal" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-cream/85 backdrop-blur-md shadow-[0_1px_0_rgba(14,31,22,0.08)]" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-900 text-cream">
            <Leaf className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-wide text-forest-950">
            ARKA GREENS
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium tracking-wide text-ink-700 transition-colors hover:text-forest-900",
                  isActive && "text-forest-900",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-forest-950 transition-colors hover:bg-forest-900/8"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold-500 px-1 text-[10px] font-semibold text-forest-950">
                {itemCount}
              </span>
            )}
          </button>

          <Link
            to="/contact"
            className="hidden items-center rounded-full bg-forest-900 px-6 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-forest-800 lg:inline-flex"
          >
            Get in Touch
          </Link>

          <button
            className="text-forest-950 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      {open && (
        <div className="border-t border-forest-900/10 bg-cream px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-700"
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center rounded-full bg-forest-900 px-6 py-2.5 text-sm font-medium text-cream"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
