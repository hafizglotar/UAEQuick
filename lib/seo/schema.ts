import { SITE_URL, company } from '@/lib/data/site';
import type { Service, Area, BlogPost, FAQ } from '@/lib/data/types';
import { services } from '@/lib/data/services';
import { areas } from '@/lib/data/areas';

/** Stable @id anchors so entities reference each other (entity-based SEO). */
export const ORG_ID = `${SITE_URL}/#organization`;
export const BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type Json = Record<string, unknown>;

/** Topics the business is an authority on - strengthens entity understanding
 *  for AI/generative engines (GEO/AIO). */
const KNOWS_ABOUT = [
  'Home maintenance',
  'Air conditioning repair',
  'Plumbing',
  'Handyman services',
  'Electrical services',
  'Deep cleaning',
  'Movers and packers',
  'Painting and partitions',
  'Interior design',
  'Garden maintenance',
  'Swimming pool maintenance',
];

const LANGUAGES = ['English', 'Arabic', 'Hindi', 'Urdu'];

const DUBAI: Json = { '@type': 'City', name: 'Dubai', '@id': 'https://www.wikidata.org/wiki/Q612' };

/** Public profiles. The Google Business Profile link is included only when configured. */
function sameAs(): string[] {
  return [
    company.social.googleBusinessProfile,
    company.social.instagram,
    company.social.facebook,
  ].filter(Boolean);
}

/** Every community we serve, as schema Places inside Dubai (one per /areas page). */
function areasServed(): Json[] {
  return areas.map((a) => ({
    '@type': 'Place',
    name: `${a.name.split(' (')[0]}, Dubai`,
    url: `${SITE_URL}/areas/${a.slug}`,
    containedInPlace: DUBAI,
  }));
}

/** "Mo-Su 08:00-22:00" style strings for schema openingHours. */
function openingHours(): string[] {
  const short: Record<string, string> = {
    Monday: 'Mo', Tuesday: 'Tu', Wednesday: 'We', Thursday: 'Th', Friday: 'Fr', Saturday: 'Sa', Sunday: 'Su',
  };
  return company.openingHoursSpec.map((o) => {
    const days = o.days.map((d) => short[d]);
    const range = days.length === 7 ? 'Mo-Su' : days.join(',');
    return `${range} ${o.opens}-${o.closes}`;
  });
}

function contactPoint(): Json {
  return {
    '@type': 'ContactPoint',
    telephone: company.phoneE164,
    contactType: 'customer service',
    areaServed: 'AE',
    availableLanguage: LANGUAGES,
  };
}

export function organizationSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: company.name,
    legalName: company.legalName,
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: company.logo,
      width: '320',
      height: '80',
    },
    image: company.logo,
    description: company.description,
    slogan: company.tagline,
    email: company.email,
    telephone: company.phoneE164,
    foundingDate: String(company.foundingYear),
    knowsAbout: KNOWS_ABOUT,
    areaServed: DUBAI,
    contactPoint: contactPoint(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    sameAs: sameAs(),
  };
}

export function websiteSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: company.name,
    description: company.description,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-AE',
  };
}

/**
 * Site-wide HomeAndConstructionBusiness node. No aggregateRating/review on
 * purpose: self-published ratings on a LocalBusiness are against Google's
 * review-snippet guidelines and can trigger a manual action.
 */
export function localBusinessSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': BUSINESS_ID,
    name: company.name,
    legalName: company.legalName,
    image: [company.logo, company.ogImage],
    logo: company.logo,
    url: `${SITE_URL}/`,
    telephone: company.phoneE164,
    email: company.email,
    description: company.description,
    slogan: company.tagline,
    priceRange: company.priceRange,
    currenciesAccepted: 'AED',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Bank Transfer',
    availableLanguage: LANGUAGES,
    knowsAbout: KNOWS_ABOUT,
    contactPoint: contactPoint(),
    sameAs: sameAs(),
    parentOrganization: { '@id': ORG_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: company.geo.latitude,
      longitude: company.geo.longitude,
    },
    areaServed: [DUBAI, ...areasServed()],
    openingHours: openingHours(),
    openingHoursSpecification: company.openingHoursSpec.map((o) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: o.days,
      opens: o.opens,
      closes: o.closes,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home Maintenance Services in Dubai',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
    })),
  };
}

export function faqSchema(faqs: FAQ[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(service: Service): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title}`,
    serviceType: service.name,
    category: service.category,
    description: service.shortDescription,
    image: service.image,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { '@id': BUSINESS_ID, name: company.name },
    areaServed: [DUBAI, ...areasServed()],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      price: service.pricing[0]?.price.replace(/[^0-9.]/g, '') || undefined,
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/services/${service.slug}`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.name} options`,
      itemListElement: service.pricing.map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: p.item },
        description: p.includes,
        priceCurrency: 'AED',
        price: p.price.replace(/[^0-9.]/g, '') || undefined,
      })),
    },
  };
}

export function areaServiceSchema(area: Area): Json {
  const shortName = area.name.split(' (')[0];
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Home Maintenance Services in ${shortName}, Dubai`,
    serviceType: 'Home maintenance',
    description: area.shortDescription,
    url: `${SITE_URL}/areas/${area.slug}`,
    provider: { '@id': BUSINESS_ID, name: company.name },
    areaServed: {
      '@type': 'Place',
      name: `${shortName}, Dubai`,
      url: `${SITE_URL}/areas/${area.slug}`,
      containedInPlace: DUBAI,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Services available in ${shortName}`,
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, url: `${SITE_URL}/services/${s.slug}` },
      })),
    },
  };
}

/** Service node for a /services/[service]/[area] page. */
export function serviceAreaSchema(service: Service, area: Area, description: string): Json {
  const shortName = area.name.split(' (')[0];
  const url = `${SITE_URL}/services/${service.slug}/${area.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Same-Day ${service.keyword} in ${shortName}`,
    serviceType: service.name,
    category: service.category,
    description,
    image: service.image,
    url,
    provider: { '@id': BUSINESS_ID, name: company.name },
    areaServed: {
      '@type': 'Place',
      name: `${shortName}, Dubai`,
      url: `${SITE_URL}/areas/${area.slug}`,
      containedInPlace: DUBAI,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      price: service.pricing[0]?.price.replace(/[^0-9.]/g, '') || undefined,
      availability: 'https://schema.org/InStock',
      url,
    },
  };
}

export function articleSchema(post: BlogPost): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { '@type': 'Organization', name: post.author, '@id': ORG_ID, url: `${SITE_URL}/` },
    publisher: { '@id': ORG_ID },
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: 'en-AE',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.keywords.join(', '),
  };
}

/** Generic WebPage node tied to the site graph - used by content pages that
 *  aren't a Service/Article so every page is a recognised entity. */
export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
}): Json {
  const url = `${SITE_URL}${opts.path === '/' ? '' : opts.path}`;
  return {
    '@context': 'https://schema.org',
    '@type': opts.type || 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en-AE',
    publisher: { '@id': ORG_ID },
  };
}

/** ItemList for a collection/listing page so AI engines can enumerate the set
 *  (services, areas, guides) as a single structured list. */
export function itemListSchema(
  name: string,
  items: { name: string; path: string }[]
): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: `${SITE_URL}${item.path}`,
    })),
  };
}
