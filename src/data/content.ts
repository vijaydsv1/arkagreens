export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    location: "Bangalore",
    rating: 5,
    text: "ARKA GREENS has completely transformed my health! The microgreens are incredibly fresh and nutrient-dense. I've noticed significant improvements in my energy levels and digestion.",
  },
  {
    name: "Rajesh Kumar",
    location: "Bangalore",
    rating: 5,
    text: "Best quality microgreens I've ever purchased. The variety is amazing, and the delivery is always fresh and on time. Highly recommended!",
  },
  {
    name: "Ananya Patel",
    location: "Bangalore",
    rating: 5,
    text: "I started using ARKA GREENS sprouts for my morning smoothies. The difference in how I feel is remarkable. More energy, better digestion, and clearer skin!",
  },
  {
    name: "Vikram Singh",
    location: "Bangalore",
    rating: 5,
    text: "The edible flowers are stunning and taste amazing. Perfect for adding to my salads and making my meals both beautiful and nutritious.",
  },
  {
    name: "Meera Desai",
    location: "Bangalore",
    rating: 5,
    text: "I appreciate the transparency and quality standards. Every batch is lab-tested, and you can really taste the difference. Worth every penny!",
  },
  {
    name: "Arjun Nair",
    location: "Bangalore",
    rating: 5,
    text: "The DIY kit is fantastic! I'm now growing my own microgreens at home. The instructions are clear, and the support is excellent. Highly satisfied!",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What are microgreens?",
    answer:
      "Microgreens are young seedlings of vegetables, herbs, and other plants harvested 7-14 days after germination. They are nutrient-dense, containing up to 40 times more nutrients than mature plants.",
  },
  {
    question: "How should I store microgreens?",
    answer:
      "Store microgreens in the refrigerator in a sealed container or bag. They typically stay fresh for 5-7 days. Keep them dry and away from direct sunlight.",
  },
  {
    question: "Can I eat microgreens raw?",
    answer:
      "Yes! Microgreens are best consumed raw to preserve all their nutrients and enzymes. You can add them to salads, smoothies, sandwiches, or use them as garnishes.",
  },
  {
    question: "Are your products organic?",
    answer:
      "Yes, all ARKA GREENS products are 100% organic, grown without synthetic pesticides or chemicals. We are certified organic and lab-tested for safety and purity.",
  },
  {
    question: "How often should I consume microgreens?",
    answer:
      "You can consume microgreens daily. Start with small quantities (1-2 tablespoons) and increase gradually. They are safe for daily consumption as part of a balanced diet.",
  },
  {
    question: "Are microgreens safe for children and pets?",
    answer:
      "Yes, microgreens are safe for children. For pets, most varieties are safe, but consult your veterinarian first. Some varieties like cilantro and flax should be given in moderation.",
  },
  {
    question: "What is the difference between microgreens and sprouts?",
    answer:
      "Microgreens are grown in soil and harvested with leaves, while sprouts are grown in water and eaten whole including the root. Both are nutrient-dense but have different growing methods.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "We deliver fresh products within 24-48 hours of order placement. Delivery times may vary based on your location.",
  },
  {
    question: "Can I grow my own microgreens at home?",
    answer:
      "Absolutely! Our DIY Microgreen Grow Kits include everything you need to start growing at home. We provide detailed instructions and ongoing support.",
  },
  {
    question: "Are edible flowers safe to eat?",
    answer:
      "Yes, our edible flowers are specifically grown for consumption and are pesticide-free. Always use flowers grown for culinary purposes, not ornamental flowers.",
  },
  {
    question: "What nutrients are in microgreens?",
    answer:
      "Microgreens contain vitamins A, C, E, K, B-complex vitamins, minerals (calcium, iron, magnesium, zinc), antioxidants, enzymes, and amino acids.",
  },
  {
    question: "How are your products tested?",
    answer:
      "Every batch undergoes rigorous lab testing for microbial safety, pesticide absence, nutrient density, and freshness. We maintain the highest quality standards.",
  },
];

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "The Power of Microgreens: 40x More Nutrients",
    excerpt:
      "Discover why microgreens are nature's most nutrient-dense foods and how they can transform your health.",
    category: "Nutrition",
    date: "Mar 1, 2026",
  },
  {
    title: "5 Easy Microgreen Recipes for Beginners",
    excerpt: "Simple, delicious recipes to incorporate microgreens into your daily meals.",
    category: "Recipes",
    date: "Feb 28, 2026",
  },
  {
    title: "Sprouting at Home: A Complete Guide",
    excerpt: "Learn how to sprout seeds at home and grow your own living superfoods.",
    category: "How-To",
    date: "Feb 25, 2026",
  },
  {
    title: "Edible Flowers: Nature's Colorful Superfoods",
    excerpt: "Explore the nutritional and medicinal benefits of edible flowers.",
    category: "Superfood Benefits",
    date: "Feb 20, 2026",
  },
  {
    title: "Detoxification: The Natural Way with Greens",
    excerpt: "How microgreens and sprouts support your body's natural detoxification process.",
    category: "Health",
    date: "Feb 15, 2026",
  },
  {
    title: "Wellness Tips: Building a Healthy Lifestyle",
    excerpt: "Practical tips for incorporating superfoods into your daily wellness routine.",
    category: "Lifestyle",
    date: "Feb 10, 2026",
  },
];

export interface NutrientItem {
  name: string;
  benefit: string;
}

export const keyNutrients: NutrientItem[] = [
  { name: "Vitamins A, C, E, K", benefit: "Antioxidant protection and immune support" },
  { name: "B-Complex Vitamins", benefit: "Energy production and nervous system support" },
  { name: "Minerals", benefit: "Calcium, iron, magnesium, zinc, potassium for overall health" },
  { name: "Chlorophyll", benefit: "Blood purification and detoxification" },
  { name: "Enzymes", benefit: "Digestive support and nutrient absorption" },
  { name: "Amino Acids", benefit: "Complete protein for muscle and tissue repair" },
  { name: "Antioxidants", benefit: "Protection against oxidative stress and aging" },
  { name: "Phytonutrients", benefit: "Plant compounds with powerful health benefits" },
  { name: "Omega-3 Fatty Acids", benefit: "Heart and brain health support" },
];

export const growingSteps = [
  { title: "Sourcing", description: "Premium organic seeds selected from trusted suppliers" },
  { title: "Growing", description: "Cultivated in controlled environments with optimal conditions" },
  { title: "Testing", description: "Lab tested for purity, potency, and safety" },
  { title: "Delivery", description: "Fresh delivery within 24-48 hours" },
];

export const labTestingPoints = [
  "Microbial safety and purity",
  "Pesticide and chemical absence",
  "Nutrient density verification",
  "Freshness and shelf life",
];

export const usageInstructions = [
  {
    title: "Microgreens",
    steps: [
      "Wash gently before use",
      "Add to salads, sandwiches, or smoothies",
      "Use as garnish for any dish",
      "Consume fresh for maximum benefits",
    ],
  },
  {
    title: "Sprouts",
    steps: [
      "Rinse thoroughly with water",
      "Eat raw or lightly cooked",
      "Add to salads, wraps, or bowls",
      "Store in refrigerator for freshness",
    ],
  },
  {
    title: "Edible Flowers",
    steps: [
      "Gently wash and pat dry",
      "Use as salad garnish",
      "Add to desserts and drinks",
      "Use for visual appeal and nutrition",
    ],
  },
];

export const certifications = ["Organic Certified", "Lab Tested", "Pesticide-Free", "Non-GMO"];
