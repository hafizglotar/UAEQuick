/**
 * Central site/business configuration - single source of truth for NAP
 * (Name, Address, Phone), used across metadata, schema, and UI.
 */

/**
 * Canonical origin. Hardcoded on purpose: canonical tags, sitemap, schema and
 * llms.txt must always say https://uaequick.com, whatever host Vercel happens
 * to serve the page on.
 */
export const SITE_URL = 'https://uaequick.com';

export const PHONE_E164 = process.env.NEXT_PUBLIC_PHONE || '+971507046234';
export const PHONE_DISPLAY = '050 704 6234';
export const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '971589331711';

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
    street: 'Al Quoz Industrial Area 3',
    locality: 'Al Quoz',
    region: 'Dubai',
    country: 'AE',
    postalCode: '00000',
  },
  geo: { latitude: 25.1339, longitude: 55.2256 },
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
  priceRange: 'AED 35 - AED 1200',
  rating: { value: 4.8, count: 412 },
  social: {
    facebook: 'https://www.facebook.com/uaequick',
    instagram: 'https://www.instagram.com/uaequick',
    // Google Business Profile share link (https://g.page/... or maps.app.goo.gl/...).
    // Set NEXT_PUBLIC_GBP_URL in the hosting env; included in schema sameAs when set.
    googleBusinessProfile: process.env.NEXT_PUBLIC_GBP_URL || '',
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
