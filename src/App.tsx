import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Products } from "@/pages/Products";
import { Benefits } from "@/pages/Benefits";
import { HowItWorks } from "@/pages/HowItWorks";
import { Testimonials } from "@/pages/Testimonials";
import { Blog } from "@/pages/Blog";
import { FAQ } from "@/pages/FAQ";
import { Contact } from "@/pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-cream">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
