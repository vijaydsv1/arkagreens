import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoLockupWhite from "@/assets/logo-lockup-white.png";

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

function LogoReveal() {
  return (
    <div className="relative">
      <motion.div
        initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={logoLockupWhite}
          alt="Arka Greens — Nature's Nutrient Powerhouse"
          className="h-16 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] md:h-24"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
        />
      </motion.div>

      {/* light sweep, masked to the logo's own silhouette */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          WebkitMaskImage: `url(${logoLockupWhite})`,
          maskImage: `url(${logoLockupWhite})`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      >
        <motion.div
          className="absolute inset-y-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-95"
          initial={{ left: "-45%" }}
          animate={{ left: "125%" }}
          transition={{ duration: 0.85, delay: 1.15, ease: "easeIn" }}
        />
      </div>
    </div>
  );
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

          {/* one-time flash as the reveal completes */}
          <motion.div
            className="pointer-events-none absolute h-64 w-64 rounded-full bg-cream blur-2xl"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.5, 0], scale: [0.6, 1.4, 1.8] }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          />

          <motion.div
            className="relative flex flex-col items-center px-6 text-center"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
          >
            {/* slow rotating aura behind the mark */}
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:h-96 md:w-96"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(212,180,131,0.4), rgba(47,92,61,0.25), rgba(212,180,131,0.15), rgba(47,92,61,0.3), rgba(212,180,131,0.4))",
              }}
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{
                opacity: { duration: 1, delay: 0.8 },
                rotate: { duration: 16, repeat: Infinity, ease: "linear" },
              }}
            />

            <LogoReveal />

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
