// ---------------------------------------------------------------------------
// PLACEHOLDER PRICING
// No real prices exist yet (the original site was inquiry-only). These are
// flat per-category placeholders so the shop UI works end-to-end -- replace
// with real prices before going live.
// ---------------------------------------------------------------------------
export const PRICING = {
  microgreen: { price: 70, unit: "50g pack" },
  sprout: { price: 50, unit: "100g pack" },
  flower: { price: 120, unit: "20g pack" },
};

export interface ProductItem {
  id: string;
  name: string;
  benefits: string;
  price: number;
  unit: string;
}

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function withPricing(
  category: "microgreen" | "sprout" | "flower",
  items: { name: string; benefits: string }[],
): ProductItem[] {
  return items.map((item) => ({
    id: `${category}-${slugify(item.name)}`,
    ...item,
    ...PRICING[category],
  }));
}

export const microgreens: ProductItem[] = withPricing("microgreen", [
  { name: "Wheatgrass", benefits: "Detox, Energy, Immunity" },
  { name: "Sunflower", benefits: "Protein, Minerals, Taste" },
  { name: "Pea Shoots", benefits: "Sweet, Tender, Nutritious" },
  { name: "Radish", benefits: "Peppery, Digestive Support" },
  { name: "Purple Radish", benefits: "Antioxidants, Visual Appeal" },
  { name: "Mustard", benefits: "Spicy, Metabolism Boost" },
  { name: "Fenugreek", benefits: "Bitter, Blood Sugar Support" },
  { name: "Flax", benefits: "Omega-3, Heart Health" },
  { name: "Arugula", benefits: "Peppery, Detox Support" },
  { name: "Kale", benefits: "Nutrient Dense, Hearty" },
  { name: "Cabbage", benefits: "Crunchy, Digestive Health" },
  { name: "Cauliflower", benefits: "Mild, Sulforaphane Rich" },
  { name: "Pok Choi", benefits: "Asian Flavor, Calcium Rich" },
  { name: "Basil", benefits: "Aromatic, Anti-inflammatory" },
  { name: "Onion", benefits: "Pungent, Immune Support" },
  { name: "Beetroot", benefits: "Sweet, Nitrates for Energy" },
  { name: "Spinach", benefits: "Iron Rich, Mild Taste" },
  { name: "Carrot", benefits: "Sweet, Beta-Carotene" },
  { name: "Broccoli", benefits: "Cruciferous, Detox" },
  { name: "Sweet Corn", benefits: "Sweet, Lutein for Eyes" },
  { name: "Amaranthus Red", benefits: "Colorful, Antioxidants" },
  { name: "Cilantro", benefits: "Fresh, Detox Support" },
  { name: "Roselle", benefits: "Tart, Vitamin C Rich" },
  { name: "Kohlrabi", benefits: "Mild, Vitamin K Rich" },
  { name: "Garlic", benefits: "Pungent, Antimicrobial" },
  { name: "Chia", benefits: "Omega-3, Complete Protein" },
  { name: "Celery", benefits: "Hydrating, Mineral Rich" },
  { name: "Lettuce", benefits: "Tender, Lutein Rich" },
  { name: "Chives", benefits: "Onion Flavor, Minerals" },
]);

export const sprouts: ProductItem[] = withPricing("sprout", [
  { name: "Mung Bean", benefits: "Protein, Digestive Enzymes" },
  { name: "Alfalfa", benefits: "Complete Amino Acids" },
  { name: "Broccoli", benefits: "Sulforaphane, Detox" },
  { name: "Fenugreek", benefits: "Blood Sugar Support" },
  { name: "Radish", benefits: "Peppery, Metabolism" },
  { name: "Wheat", benefits: "Complete Nutrition" },
  { name: "Chia", benefits: "Omega-3, Fiber" },
  { name: "Clover", benefits: "Hormone Balance" },
  { name: "Lentil", benefits: "Protein, Iron" },
  { name: "Sunflower", benefits: "Vitamin E, Minerals" },
  { name: "Mustard", benefits: "Spicy, Metabolism" },
]);

export const edibleFlowers: ProductItem[] = withPricing("flower", [
  { name: "Nasturtium", benefits: "Peppery, Vitamin C" },
  { name: "Pansy", benefits: "Mild, Colorful" },
  { name: "Viola", benefits: "Sweet, Antioxidants" },
  { name: "Marigold", benefits: "Golden, Anti-inflammatory" },
  { name: "Calendula", benefits: "Healing, Skin Health" },
  { name: "Dianthus", benefits: "Spicy, Aromatic" },
  { name: "Cornflower", benefits: "Blue Beauty, Antioxidants" },
  { name: "Borage", benefits: "Cucumber Flavor, Cooling" },
  { name: "Lavender", benefits: "Floral, Calming" },
  { name: "Daisy", benefits: "Cheerful, Mild" },
  { name: "Chamomile", benefits: "Soothing, Sleep Support" },
  { name: "Hollyhock", benefits: "Showy, Antioxidants" },
  { name: "Impatiens", benefits: "Colorful, Delicate" },
  { name: "Begonia", benefits: "Tangy, Vitamin C" },
]);

export interface GrowKit {
  id: string;
  name: string;
  tag: string;
  price: number;
  unit: string;
  featured?: boolean;
  items: string[];
}

export const growKits: GrowKit[] = [
  {
    id: "kit-starter",
    name: "Starter Kit",
    tag: "Perfect for beginners",
    price: 899,
    unit: "1 kit",
    items: [
      "Grow tray with drainage",
      "Premium cocopeat substrate",
      "Organic seed selection",
      "Growing guide and tips",
    ],
  },
  {
    id: "kit-premium",
    name: "Premium Kit",
    tag: "For serious growers",
    price: 1799,
    unit: "1 kit",
    featured: true,
    items: [
      "Multiple grow trays",
      "Bulk cocopeat and nutrients",
      "Complete seed variety pack",
      "Video tutorials and support",
    ],
  },
];
