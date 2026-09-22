// ---------------------------------------------------------------------------
// PLACEHOLDER RATES
// Real workshop pricing/curriculum details to be provided by the client --
// these are structural placeholders so the page works end-to-end. Replace
// before going live.
// ---------------------------------------------------------------------------

export interface WorkshopTier {
  id: string;
  level: string;
  name: string;
  price: number;
  unit: string;
  duration: string;
  format: string;
  tagline: string;
  featured?: boolean;
  topics: string[];
}

export const workshops: WorkshopTier[] = [
  {
    id: "workshop-beginner",
    level: "Beginner",
    name: "Grow at Home",
    price: 1499,
    unit: "per seat",
    duration: "3 hours · single session",
    format: "In-person (Bangalore) or Live Online",
    tagline: "Start growing your own microgreens with confidence",
    topics: [
      "Seed selection and sourcing",
      "Trays, growing medium, and setup",
      "Watering, light, and daily care",
      "Harvesting at peak nutrition",
      "Troubleshooting common issues",
    ],
  },
  {
    id: "workshop-intermediate",
    level: "Intermediate",
    name: "Grow & Sell",
    price: 3499,
    unit: "per seat",
    duration: "2 sessions · 6 hours total",
    format: "In-person (Bangalore) or Live Online",
    tagline: "Scale up production and start selling what you grow",
    featured: true,
    topics: [
      "Multi-variety cultivation at scale",
      "Climate control and yield optimization",
      "Food safety fundamentals",
      "Pricing and packaging your produce",
      "Local selling channels and subscriptions",
    ],
  },
  {
    id: "workshop-advanced",
    level: "Advanced",
    name: "Microgreens Business Blueprint",
    price: 7999,
    unit: "per seat",
    duration: "Full-day intensive + follow-up mentorship",
    format: "In-person (Bangalore) or Live Online",
    tagline: "Build a real microgreens business from the ground up",
    topics: [
      "Scaling production and equipment planning",
      "Branding, packaging, and photography",
      "Wholesale and chef/restaurant partnerships",
      "Marketing and customer acquisition",
      "Full business launch roadmap",
    ],
  },
];
