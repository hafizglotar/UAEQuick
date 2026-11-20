/**
 * Central site/business configuration - single source of truth for NAP
 * (Name, Address, Phone), used across metadata, schema, and UI.
 */

/**
 * Canonical origin = the production host. Vercel serves the site on
 * www.uaequick.com and 308-redirects the bare domain to it, so canonical tags,
 * og:url, sitemap, schema and llms.txt all use www. Hardcoded on purpose so it
 * can never follow a different serving host.
 */
export const SITE_URL = 'https://www.uaequick.com';

export const PHONE_E164 = process.env.NEXT_PUBLIC_PHONE || '+971547585760';
export const PHONE_DISPLAY = '054 758 5760';
export const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '971589331711';
/** WhatsApp number as shown to visitors, derived from WHATSAPP so the label can
 *  never drift from the link: 971589331711 -> "058 933 1711". */
export const WHATSAPP_DISPLAY = WHATSAPP.replace(/^971(\d{2})(\d{3})(\d{4})$/, '0$1 $2 $3');

export const company = {
  name: 'UAE Quick',
  legalName: 'UAE Quick Technical Services LLC',
  tagline: "Dubai's same-day home maintenance team",
  description:
    'Same-day home maintenance in Dubai - AC repair, plumbing, handyman, electrical, cleaning, painting and moving. Fixed pricing, licensed techs, 30-day guarantee.',
  phoneE164: PHONE_E164,
  phoneDisplay: PHONE_DISPLAY,
  whatsapp: WHATSAPP,
  whatsappUrl: `https://wa.me/${WHATSAPP}`,
  email: 'info@uaequick.com',
  address: {
    // Matches the Google Business Profile pin (Al Nahda 1). Keep this, the
    // geo below and the profile in sync - mismatched NAP hurts local ranking.
    street: 'Al Nahda 1',
    locality: 'Al Nahda',
    region: 'Dubai',
    country: 'AE',
    postalCode: '00000',
  },
  geo: { latitude: 25.2878788, longitude: 55.3653017 },
  hours: '8:00 AM-10:00 PM, 7 days a week',
  openingHoursSpec: [
    {
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '22:00',
    },
  ],
  foundingYear: 2018,
  // Dubai DED trade licence number. Set NEXT_PUBLIC_TRADE_LICENCE in the hosting
  // env; the footer shows "Trade Licence No. ..." only when it is set.
  tradeLicence: process.env.NEXT_PUBLIC_TRADE_LICENCE || '',
  priceRange: 'AED 35 - AED 1200',
  rating: { value: 4.8, count: 412 },
  social: {
    facebook: 'https://www.facebook.com/uaequick',
    instagram: 'https://www.instagram.com/uaequick',
    // Google Business Profile, as a stable place-ID link (no map viewport or
    // tracking params). Linked from the footer and hero review tiles and listed
    // in schema sameAs. NEXT_PUBLIC_GBP_URL overrides it.
    googleBusinessProfile:
      process.env.NEXT_PUBLIC_GBP_URL || 'https://www.google.com/maps?cid=2858655413164743471',
  },
  logo: `${SITE_URL}/logo.svg`,
  // Default social image is generated dynamically by app/opengraph-image.tsx.
  ogImage: `${SITE_URL}/opengraph-image`,
} as const;

/** Primary navigation - kept small and intent-led for SXO. */
export const mainNav = [
  { label: 'Services', href: '/services' },
  { label: 'AC Repair', href: '/services/ac-repair' },
  { label: 'Handyman', href: '/services/handyman-plumber' },
  { label: 'Cleaning', href: '/services/cleaning' },
  { label: 'Areas', href: '/areas' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;
