import { SITE_URL, company } from '@/lib/data/site';
import type { Service, Area, BlogPost, FAQ } from '@/lib/data/types';
import { reviews } from '@/lib/data/reviews';

/** Stable @id anchors so entities reference each other (entity-based SEO). */
export const ORG_ID = `${SITE_URL}/#organization`;
export const BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: company.name,
    legalName: company.legalName,
    url: `${SITE_URL}/`,
    logo: company.logo,
    description: company.description,
    email: company.email,
    telephone: company.phoneE164,
    foundingDate: String(company.foundingYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      addressCountry: company.address.country,
    },
    sameAs: [company.social.facebook, company.social.instagram],
  };
}

export function websiteSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: company.name,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-AE',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function localBusinessSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': BUSINESS_ID,
    name: company.name,
    image: company.logo,
    url: `${SITE_URL}/`,
    telephone: company.phoneE164,
    email: company.email,
    priceRange: company.priceRange,
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
    areaServed: { '@type': 'City', name: 'Dubai' },
    openingHoursSpecification: company.openingHoursSpec.map((o) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: o.days,
      opens: o.opens,
      closes: o.closes,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(company.rating.value),
      reviewCount: String(company.rating.count),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.slice(0, 4).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      datePublished: r.date,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(r.rating),
        bestRating: '5',
      },
      reviewBody: r.text,
    })),
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
    description: service.shortDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'City', name: 'Dubai' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      price: service.pricing[0]?.price.replace(/[^0-9.]/g, '') || undefined,
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
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Home Maintenance Services in ${area.name}, Dubai`,
    description: area.shortDescription,
    url: `${SITE_URL}/areas/${area.slug}`,
    provider: { '@id': BUSINESS_ID },
    areaServed: {
      '@type': 'Place',
      name: `${area.name}, Dubai`,
      containedInPlace: { '@type': 'City', name: 'Dubai' },
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
    author: { '@type': 'Organization', name: post.author, url: `${SITE_URL}/` },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.keywords.join(', '),
  };
}
