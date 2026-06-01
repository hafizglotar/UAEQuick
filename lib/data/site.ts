/**
 * Central site/business configuration — single source of truth for NAP
 * (Name, Address, Phone), used across metadata, schema, and UI.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://uaequick.com'
).replace(/\/$/, '');

export const PHONE_E164 = process.env.NEXT_PUBLIC_PHONE || '+971589331711';
export const PHONE_DISPLAY = '058 933 1711';
export const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '971589331711';

export const company = {
  name: 'UAE Quick',
  legalName: 'UAE Quick Technical Services LLC',
  tagline: "Dubai's same-day home maintenance team",
  description:
    'UAE Quick is a Dubai-based home maintenance company providing same-day AC repair, plumbing, handyman, electrical, cleaning, painting and moving services across every community in the emirate. Fixed pricing, licensed technicians, 30-day workmanship guarantee.',
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
  hours: '8:00 AM – 10:00 PM, 7 days a week',
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
  priceRange: 'AED 80 – AED 5,000',
  rating: { value: 4.8, count: 412 },
  social: {
    facebook: 'https://www.facebook.com/uaequick',
    instagram: 'https://www.instagram.com/uaequick',
  },
  logo: `${SITE_URL}/logo.svg`,
  // Default social image is generated dynamically by app/opengraph-image.tsx.
  ogImage: `${SITE_URL}/opengraph-image`,
} as const;

/** Primary navigation — kept small and intent-led for SXO. */
export const mainNav = [
  { label: 'Services', href: '/services' },
  { label: 'AC Repair', href: '/services/ac-repair' },
  { label: 'Handyman', href: '/services/handyman-plumber' },
  { label: 'Cleaning', href: '/services/cleaning' },
  { label: 'Areas', href: '/areas' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;
