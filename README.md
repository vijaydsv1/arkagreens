# Arka Greens

Shop website for Arka Greens — fresh microgreens, sprouts, edible flowers, and DIY grow kits, based in Bangalore, India. Cart & checkout submit order inquiries (no online payment yet); a FastAPI backend handles contact, newsletter, and order-inquiry submissions.

## Stack

**Frontend**
- [Vite](https://vite.dev) + React 19 + TypeScript
- Tailwind CSS v4
- React Router, Framer Motion, lucide-react

**Backend** (`backend/`)
- FastAPI + SQLAlchemy (SQLite)

## Development

Frontend:

```bash
npm install
cp .env.example .env.local   # set VITE_API_URL if the backend runs on a different port
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build
```

Backend:

```bash
cd backend
python -m venv venv
./venv/Scripts/activate      # Windows; use `source venv/bin/activate` on macOS/Linux
pip install -r requirements.txt
cp .env.example .env         # fill in SMTP_* to enable real email notifications
uvicorn app.main:app --reload --port 8001
```

Without SMTP credentials in `backend/.env`, the API still works and stores every
submission in `backend/arkagreens.db` — it just skips sending the notification
email (logged, not an error). Fill in `SMTP_USER`/`SMTP_PASSWORD` (e.g. a Gmail
app password) to enable real delivery to `TO_EMAIL`.

## Structure

```
src/
  assets/         hero + section images
  components/
    layout/       Navbar, Footer, ScrollToTop
    ui/           shared primitives (Button, Card, Accordion, PageHero, Reveal, ...)
    cart/         CartDrawer
  context/         CartContext (cart state, persisted to localStorage)
  data/            page content (products w/ placeholder pricing, testimonials, FAQs, blog posts)
  lib/             api.ts (backend client)
  pages/           one file per route, including Checkout

backend/
  app/
    main.py        FastAPI app, CORS, /api/health
    models.py        ContactMessage, NewsletterSubscriber, Order, OrderItem
    routers/          /api/contact, /api/newsletter, /api/orders
    email.py          best-effort SMTP notification (never blocks a submission)
```

## Known placeholders to replace before going live

- **Pricing** (`src/data/products.ts`): flat per-category placeholder prices — replace with real prices.
- **SMTP credentials** (`backend/.env`): email notifications are a no-op until these are filled in.
- **Payments**: checkout only submits an order inquiry; no payment gateway is wired up yet.
