// ---------------------------------------------------------------------------
// Pricing not yet decided by the client -- shown as "To Be Announced" rather
// than a placeholder number. Replace once rates are confirmed.
// ---------------------------------------------------------------------------

export interface WorkshopTier {
  id: string;
  level: string;
  name: string;
  duration: string;
  schedule: string;
  tagline: string;
  featured?: boolean;
  topics: string[];
}

export const workshops: WorkshopTier[] = [
  {
    id: "workshop-beginner",
    level: "Beginner",
    name: "Grow at Home",
    duration: "1 Day",
    schedule: "10 AM – 6 PM",
    tagline: "Start growing your own microgreens with confidence",
    topics: [
      "Seed sourcing and selection",
      "Growing conditions and setup",
      "Daily care: watering, light, climate",
      "Harvesting at peak nutrition",
      "Troubleshooting common issues",
    ],
  },
  {
    id: "workshop-intermediate",
    level: "Intermediate",
    name: "Grow & Sell",
    duration: "2 Days",
    schedule: "10 AM – 6 PM",
    tagline: "Scale up production and start selling what you grow",
    featured: true,
    topics: [
      "Multi-variety cultivation at scale",
      "Growing condition optimization for yield",
      "Harvesting, food safety, and shelf life",
      "Pricing and packaging your produce",
      "Local selling channels and subscriptions",
    ],
  },
  {
    id: "workshop-advanced",
    level: "Advanced",
    name: "Microgreens Business Blueprint",
    duration: "3 Days",
    schedule: "10 AM – 6 PM",
    tagline: "Build a real microgreens business from the ground up",
    topics: [
      "Seed to harvest at commercial scale",
      "Scaling production and equipment planning",
      "Branding, packaging, and photography",
      "Wholesale and chef/restaurant partnerships",
      "Full business launch roadmap",
    ],
  },
];

export const onlineWorkshop = {
  name: "Live Online Session",
  duration: "1–2 Hours",
  tagline: "A condensed theory and practical walkthrough, live online — seed sourcing, growing conditions, and harvesting covered start to end.",
  topics: [
    "Live theory session with Q&A",
    "Practical demo: seed to harvest",
    "Growing conditions and setup guidance",
    "Recording shared after the session",
  ],
};
