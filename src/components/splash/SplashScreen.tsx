import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoMark } from "@/components/brand/LogoMark";

const HOLD_MS = 1500;

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExiting(true), HOLD_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-forest-950"
          exit={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={{ clipPath: "circle(150% at 50% 50%)" }}
        >
          <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12]" />
          <div className="flex flex-col items-center">
            <LogoMark animate className="h-24 w-24 text-cream md:h-32 md:w-32" sparkleColor="#d4b483" />
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-center"
            >
              <p className="font-display text-2xl font-semibold tracking-wide text-cream md:text-3xl">
                Arka Greens
              </p>
              <p className="eyebrow mt-3 text-gold-400">Nature&rsquo;s Nutrient Powerhouse</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
