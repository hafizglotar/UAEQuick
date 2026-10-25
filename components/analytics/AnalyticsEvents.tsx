'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Site-wide click tracking for the two key conversion actions - phone calls
 * (`call_click` on every tel: link) and WhatsApp (`whatsapp_click` on every
 * wa.me link) - via a single delegated listener, so new buttons are measured
 * automatically. `page_path` is added by trackEvent. Renders nothing.
 */
export function AnalyticsEvents() {
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

  return null;
}
