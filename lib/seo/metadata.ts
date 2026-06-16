import type { Metadata } from 'next';
import { SITE_URL, company } from '@/lib/data/site';

interface MetaInput {
  title: string;
  description: string;
  /** Path beginning with "/" (e.g. "/services/ac-repair") */
  path: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

/**
 * Central metadata builder - guarantees canonical, Open Graph and Twitter
 * tags on every page. Used by every route's generateMetadata / metadata export.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  noindex,
}: MetaInput): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  // When a page supplies its own image, use it; otherwise let Next's
  // file-convention opengraph-image.tsx provide the branded default.
  const images = image ? [{ url: image, width: 1200, height: 630, alt: title }] : undefined;

  return {
    // Absolute: these titles already include the brand, so bypass the
    // layout's "%s | UAE Quick" template (avoids a doubled suffix).
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: 'en_AE',
      type,
      ...(images ? { images } : {}),
      ...(type === 'article' ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
