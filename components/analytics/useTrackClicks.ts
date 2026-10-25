'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Site-wide click tracking via one delegated listener (used once, from the
 * layout through <AnalyticsEvents />):
 * - `call_click`     on every tel: link
 * - `whatsapp_click` on every wa.me / api.whatsapp.com link
 * Each event carries link_url, link_text and page_path (added by trackEvent).
 * `quote_submit` fires from useLead() when a quote form succeeds.
 */
export function useTrackClicks(): void {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      const linkText = (anchor.textContent || '').trim().slice(0, 80);
      if (href.startsWith('tel:')) {
        trackEvent('call_click', { link_url: href, link_text: linkText });
      } else if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        trackEvent('whatsapp_click', { link_url: href, link_text: linkText });
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}
