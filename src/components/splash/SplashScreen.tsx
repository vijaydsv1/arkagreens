import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoLockup from "@/assets/logo-lockup.png";

const HOLD_MS = 29300;
const EXIT_DURATION = 0.7;

const CYCLE_ITEMS = [
  "Fresh.",
  "Organic.",
  "Nutrient-Dense.",
  "Grown with Care.",
  "100% Organic",
  "Non-GMO",
  "Pesticide Free",
  "100% Natural",
  "Delivered to Your Doorstep.",
];

const CYCLE_START_MS = 5000;
const CYCLE_END_MS = 27000;
const CYCLE_STEP_MS = (CYCLE_END_MS - CYCLE_START_MS) / CYCLE_ITEMS.length;

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
}

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 8 + ((i * 97) % 84) + (i % 3) * 2,
    size: 3 + ((i * 7) % 5),
    duration: 7 + ((i * 5) % 6),
    delay: (i * 1.3) % 8,
    drift: i % 2 === 0 ? 1 : -1,
  }));
}

function WordCycle() {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    CYCLE_ITEMS.forEach((_, i) => {
      timers.push(setTimeout(() => setIndex(i), CYCLE_START_MS + i * CYCLE_STEP_MS));
    });
    timers.push(setTimeout(() => setIndex(-1), CYCLE_END_MS));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="mt-8 flex h-6 items-center justify-center">
      <AnimatePresence mode="wait">
        {index >= 0 && (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm font-medium tracking-[0.15em] text-gold-300/90 uppercase"
          >
            {CYCLE_ITEMS[index]}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [exiting, setExiting] = useState(false);
  const particles = useMemo(() => makeParticles(14), []);

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
          transition={{ duration: EXIT_DURATION, ease: [0.76, 0, 0.24, 1] }}
          style={{ clipPath: "circle(150% at 50% 50%)" }}
        >
          <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12]" />

          {/* ambient pulsing glow */}
          <motion.div
            className="pointer-events-none absolute h-[36rem] w-[36rem] rounded-full bg-gold-500/10 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* floating particles */}
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="pointer-events-none absolute rounded-full bg-gold-300/40"
              style={{
                left: `${p.left}%`,
                bottom: "-5%",
                width: p.size,
                height: p.size,
              }}
              animate={{
                y: ["0vh", "-110vh"],
                x: [0, p.drift * 30, 0],
                opacity: [0, 0.8, 0.8, 0],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          <motion.div
            className="relative flex flex-col items-center px-6 text-center"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl bg-cream px-8 py-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] md:px-10 md:py-7"
            >
              <img
                src={logoLockup}
                alt="Arka Greens — Nature's Nutrient Powerhouse"
                className="h-14 w-auto md:h-20"
              />
            </motion.div>

            <WordCycle />
          </motion.div>

          {/* progress bar */}
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-cream/10">
            <motion.div
              className="h-full bg-gold-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: HOLD_MS / 1000, ease: "linear" }}
            />
          </div>

          <button
            onClick={() => setExiting(true)}
            className="absolute bottom-6 right-6 text-xs font-medium tracking-wide text-cream/40 transition-colors hover:text-cream/80"
          >
            Skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
