import { motion } from "framer-motion";

const leafOuter =
  "M52 12 C69 27 76 47 69 64 C65 72 57 78 49 82 C44 69 42 50 44 33 C45 25 48 18 52 12 Z";
const leafVein = "M51 17 C45 33 45 55 53 76";
const smallLeaf =
  "M45 69 C32 66 21 70 14 79 C23 84 35 85 44 80 C46 78 47 73 45 69 Z";
const sparkle = "M75 58 L79 70 L91 74 L79 78 L75 90 L71 78 L59 74 L71 70 Z";

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
        style={{ transformOrigin: "52px 82px" }}
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
        style={{ transformOrigin: "45px 79px" }}
      />
      <motion.path
        d={sparkle}
        fill={sparkleColor}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0.7, 1], scale: [0, 1.3, 0.9, 1] }}
        transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
        style={{ transformOrigin: "75px 74px" }}
      />
    </svg>
  );
}
