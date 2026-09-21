import { motion } from "framer-motion";

const leafOuter =
  "M50 11 C68 24 77 45 71 63 C67 72 58 79 49 83 C43 70 41 49 44 32 C45 24 47 17 50 11 Z";
const leafVein = "M49 16 C42 32 42 55 51 78";
const smallLeaf =
  "M44 71 C31 68 20 71 13 80 C22 85 34 86 43 81 C45 79 46 75 44 71 Z";
const smallLeafVein = "M40 74 C32 74 24 76 18 80";
const sparkle = "M76 57 L80 70 L93 74 L80 78 L76 91 L72 78 L59 74 L72 70 Z";

export function LogoMark({
  className,
  animate = false,
  color = "currentColor",
  sparkleColor = "#d4b483",
}: {
  className?: string;
  animate?: boolean;
  color?: string;
  sparkleColor?: string;
}) {
  if (!animate) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none">
        <circle cx="50" cy="50" r="42" stroke={color} strokeWidth="6" />
        <path d={leafOuter} fill={color} />
        <path d={leafVein} stroke="#fff" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
        <path d={smallLeaf} fill={color} />
        <path d={smallLeafVein} stroke="#fff" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
        <path d={sparkle} fill={sparkleColor} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <motion.circle
        cx="50"
        cy="50"
        r="42"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0, rotate: -90 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "50px 50px" }}
      />
      <motion.path
        d={leafOuter}
        fill={color}
        initial={{ opacity: 0, scale: 0.6, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "50px 83px" }}
      />
      <motion.path
        d={leafVein}
        stroke="#fff"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />
      <motion.path
        d={smallLeaf}
        fill={color}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "44px 80px" }}
      />
      <motion.path
        d={smallLeafVein}
        stroke="#fff"
        strokeOpacity="0.3"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.95 }}
      />
      <motion.path
        d={sparkle}
        fill={sparkleColor}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0.7, 1], scale: [0, 1.3, 0.9, 1] }}
        transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
        style={{ transformOrigin: "76px 74px" }}
      />
    </svg>
  );
}
