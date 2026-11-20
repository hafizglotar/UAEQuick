/**
 * When each group of pages last had a real content change. Drives sitemap
 * <lastmod>, the visible "Last updated" line and WebPage dateModified.
 *
 * Bump a date here only when the copy, prices or facts on those pages change -
 * never on every deploy. A lastmod that moves with each build teaches crawlers
 * to ignore it.
 */
export const CONTENT_UPDATED = {
  home: '2026-11-18',
  servicesIndex: '2026-10-25',
  areasIndex: '2026-10-25',
  quote: '2026-11-18',
  contact: '2026-11-13',
  about: '2026-10-25',
  /** /services/[service] - titles, answers and FAQs last rewritten. */
  services: '2026-10-26',
  /** /areas/[slug] */
  areas: '2026-10-26',
  /** /services/[service]/[area] - cross-service links added. */
  serviceAreas: '2026-11-18',
} as const;

/** "26 October 2026" */
export const formatUpdated = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
