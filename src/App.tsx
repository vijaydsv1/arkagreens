import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SplashScreen } from "@/components/splash/SplashScreen";
import { CartProvider } from "@/context/CartContext";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Products } from "@/pages/Products";
import { Benefits } from "@/pages/Benefits";
import { HowItWorks } from "@/pages/HowItWorks";
import { Testimonials } from "@/pages/Testimonials";
import { Blog } from "@/pages/Blog";
import { FAQ } from "@/pages/FAQ";
import { Contact } from "@/pages/Contact";
import { Checkout } from "@/pages/Checkout";
import { Workshops } from "@/pages/Workshops";

const SPLASH_KEY = "arka-splash-seen";

// TEMP: while the splash is still being reviewed, always show it instead of
// once per browser session -- flip back to false before this goes live so
// real visitors aren't forced through a 30s intro on every repeat visit.
const ALWAYS_SHOW_SPLASH = true;

function shouldShowSplash() {
  if (ALWAYS_SHOW_SPLASH) return true;
  try {
    return !sessionStorage.getItem(SPLASH_KEY);
  } catch {
    return true;
  }
}

export default function App() {
  const [showSplash, setShowSplash] = useState(shouldShowSplash);

  function handleSplashDone() {
    try {
      sessionStorage.setItem(SPLASH_KEY, "1");
    } catch {
      // ignore (private browsing, storage disabled, etc.)
    }
    setShowSplash(false);
  }

  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        {showSplash && <SplashScreen onDone={handleSplashDone} />}
        <div className="flex min-h-screen flex-col bg-cream">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
