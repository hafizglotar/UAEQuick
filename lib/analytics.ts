// Analytics configuration + a universal event tracker.
//
// GA4 loads directly by default. If you set NEXT_PUBLIC_GTM_ID, a Google Tag
// Manager container loads instead (configure GA4 inside GTM in that case) so the
// two never double-count. IDs come from env so you can swap accounts without a
// code change; the current GA4 property is the fallback default.
import { track as vercelTrack } from '@vercel/analytics';

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-RCVRKGG978';
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

type EventParams = Record<string, string | number | boolean | undefined>;

interface AnalyticsWindow extends Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}

/**
 * Fire an interaction/conversion event to every analytics sink at once:
 * - GA4 direct → gtag('event', …)
 * - GTM → pushed to dataLayer as a Custom Event you can trigger tags on
 * - Vercel Web Analytics → track() custom event (recorded on Pro/Enterprise
 *   plans; silently ignored on Hobby)
 *
 * Every event carries `page_path` (the pathname it fired on) so call,
 * WhatsApp and quote conversions can be attributed to the page.
 */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;
  const w = window as AnalyticsWindow;
  const payload: EventParams = { page_path: window.location.pathname, ...params };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: name, ...payload });
  if (typeof w.gtag === 'function') w.gtag('event', name, payload);
  // Vercel accepts flat string/number/boolean/null properties only.
  const flat: Record<string, string | number | boolean | null> = {};
  for (const [k, v] of Object.entries(payload)) flat[k] = v === undefined ? null : v;
  try {
    vercelTrack(name, flat);
  } catch {
    // never let analytics break a conversion click
  }
}
