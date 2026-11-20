import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/data/site';
import { services } from '@/lib/data/services';
import { areas } from '@/lib/data/areas';
import { posts } from '@/lib/data/blog';
import { CONTENT_UPDATED as U } from '@/lib/data/updated';

export default function sitemap(): MetadataRoute.Sitemap {
  // Real content dates, not build time (see lib/data/updated.ts).
  const d = (iso: string) => new Date(iso);
  const newestPost = posts.reduce((max, p) => (p.dateModified > max ? p.dateModified : max), posts[0].dateModified);

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: d(U.home), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: d(U.servicesIndex), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/areas`, lastModified: d(U.areasIndex), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: d(newestPost), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/quote`, lastModified: d(U.quote), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: d(U.contact), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/about`, lastModified: d(U.about), changeFrequency: 'yearly', priority: 0.5 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: d(U.services),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const areaPages: MetadataRoute.Sitemap = areas.map((a) => ({
    url: `${SITE_URL}/areas/${a.slug}`,
    lastModified: d(U.areas),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 9 services x 14 areas = 126 "Same Day {Service} in {Area}" pages.
  const serviceAreaPages: MetadataRoute.Sitemap = services.flatMap((s) =>
    areas.map((a) => ({
      url: `${SITE_URL}/services/${s.slug}/${a.slug}`,
      lastModified: d(U.serviceAreas),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  );

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...serviceAreaPages, ...blogPages];
}
