# UAE Quick - Dubai Home Maintenance (Next.js)

Production Next.js (App Router, TypeScript, Tailwind) site for UAE Quick, built to rank in
Dubai local search and convert visitors into leads. Optimized for **SEO, GEO (AI engines),
AEO (answer engines), SXO (search experience)** and conversion.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in values (see below)
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
npm run typecheck            # strict TS check
```

Requires Node 20.9+ (tested on Node 22).

## Environment variables (`.env.local`)

| Var | Purpose |
| --- | --- |
| `CANONICAL_HOST_REDIRECT` | Set to `1` to 308 www.uaequick.com -> uaequick.com in code. Only after uaequick.com is the primary domain in Vercel (otherwise it loops). The canonical origin itself is hardcoded. |
| `NEXT_PUBLIC_PHONE` / `NEXT_PUBLIC_WHATSAPP` | Public phone (E.164) and WhatsApp number. |
| `LEAD_WEBHOOK_URL` | Optional. `/api/lead` POSTs each lead here (Zapier/Make/CRM). |
| `RESEND_API_KEY` + `LEAD_NOTIFY_EMAIL` | Optional. Email each lead via Resend. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional Search Console meta tag. |

**Leads never get lost:** even with no delivery channel configured, every form also opens
WhatsApp with the details pre-filled (the primary lead channel in Dubai), and the API logs the lead.

## Project structure

```
app/
  layout.tsx            Root layout - fonts, header/footer, site-wide schema
  page.tsx              Home
  services/             Services hub + [slug] (10 services, SSG)
  areas/                Areas hub + [slug] (14 Dubai areas, SSG)
  blog/                 Blog hub + [slug] (6 posts, SSG, Article schema)
  quote/ contact/ about/ privacy/ terms/
  api/lead/route.ts     Server-side lead intake (Zod validation + delivery)
  sitemap.ts robots.ts  Auto-generated /sitemap.xml and /robots.txt
  loading.tsx error.tsx not-found.tsx
components/
  layout/   Header (mobile menu), Footer, Breadcrumbs, StickyCTAs
  sections/ Hero parts, AeoBlock, Pricing, Process, Features, Faq, Reviews, CtaBand, grids
  forms/    QuoteForm, ContactForm, CallbackForm (React Hook Form + Zod) + useLead hook
  seo/      JsonLd
  ui/       Container, Section, Button
lib/
  data/     site, services, areas, blog, reviews, types  ← edit content here
  seo/      schema.ts (all JSON-LD), metadata.ts (canonical/OG/Twitter builder)
  validation.ts (Zod), utils.ts
legacy/     Previous static HTML site (reference only - not built)
```

## Editing content

All content is data-driven - **no need to touch JSX to add or edit pages**:

- **Services** → `lib/data/services.ts`. Add an object to the array → a new
  `/services/<slug>` page, sitemap entry, schema and footer link appear automatically.
- **Areas** → `lib/data/areas.ts`. Same pattern → `/areas/<slug>`.
- **Blog posts** → `lib/data/blog.ts`. Body uses typed content blocks
  (`h2/h3/p/ul/ol/quote/table`).
- **Business info / phone / hours / rating** → `lib/data/site.ts`.
- **Reviews** → `lib/data/reviews.ts` (feeds Review + AggregateRating schema).

## SEO / GEO / AEO coverage

- **Per-page metadata** via `buildMetadata()` - canonical, Open Graph, Twitter cards, robots.
- **Structured data** (JSON-LD): Organization, WebSite (+SearchAction), LocalBusiness
  (HomeAndConstructionBusiness, with AggregateRating + Reviews), Service + OfferCatalog,
  BreadcrumbList, FAQPage, and Article on blog posts - all entity-linked via stable `@id`s.
- **AEO blocks** on every service page: What / Why / Common problems / Local Dubai
  considerations / Cost, plus a "quick answer" summary written for featured snippets and AI
  overviews. FAQ answers are always in the DOM (accordion only hides visually).
- **Internal linking**: services ↔ areas ↔ blog cross-link throughout; footer links every service.
- **Sitemap + robots** generated from the data layer.
- **Legacy redirects**: old WordPress pretty-URLs 301 to new paths (see `next.config.mjs`).

## Performance / SXO

- Static generation (SSG) for all content pages; only `/api/lead` is dynamic.
- `next/font` (Inter) self-hosted with `display: swap`.
- Mobile-first, accessible (skip link, focus rings, ARIA on menu/FAQ/forms), sticky
  call + WhatsApp bar on mobile and floating WhatsApp on desktop.
- Security headers set in `next.config.mjs`.

## Assets to add before launch

Drop these into `public/` (referenced by schema/OG - currently placeholders):

- `logo.png` - company logo (used in Organization/LocalBusiness schema)
- `og-default.jpg` - 1200×630 social share image
- `favicon.ico` / `app/icon.png` - site icon

## Deploy

Works out of the box on Vercel (recommended) or any Node host. Set the env vars above in your
host's dashboard. `npm run build` then `npm start`, or connect the repo to Vercel.
```
