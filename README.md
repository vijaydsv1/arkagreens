# Arka Greens

Marketing website for Arka Greens — fresh microgreens, sprouts, edible flowers, and DIY grow kits, based in Bangalore, India.

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- Tailwind CSS v4
- React Router
- Framer Motion
- lucide-react icons

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Structure

```
src/
  assets/       hero + section images
  components/
    layout/     Navbar, Footer, ScrollToTop
    ui/         shared primitives (Button, Card, Accordion, PageHero, Reveal, ...)
  data/         page content (products, testimonials, FAQs, blog posts)
  pages/        one file per route
```
