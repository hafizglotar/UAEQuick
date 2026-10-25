'use client';

import { useState } from 'react';
import type { LeadPayload } from '@/lib/validation';
import { whatsappLink, leadToWhatsApp } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Submits a validated lead to /api/lead (server-side validation + delivery)
 * and, as the most reliable lead path in Dubai, also opens WhatsApp with the
 * details pre-filled. Returns status for the UI to render loading/success.
 */
export function useLead() {
  const [status, setStatus] = useState<Status>('idle');

  async function submit(payload: LeadPayload, whatsappFields: Record<string, string | undefined>) {
    setStatus('submitting');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      // GA4 conversions. `generate_lead` fires for every form (GA4's
      // recommended lead event); `quote_submit` additionally fires when the
      // quote form succeeds (home, service, service x area and /quote pages).
      // Mark only one of them as a key event in GA4 to avoid double counting.
      const service = 'service' in payload ? payload.service : undefined;
      trackEvent('generate_lead', { lead_kind: payload.kind, service });
      if (payload.kind === 'quote') {
        trackEvent('quote_submit', { service, area: payload.area });
      }
      // Open WhatsApp with the details pre-filled (primary lead channel).
      const url = whatsappLink(leadToWhatsApp(whatsappFields));
      window.open(url, '_blank', 'noopener');
    } catch {
      setStatus('error');
      // Even if the API fails, let the customer reach us on WhatsApp.
      const url = whatsappLink(leadToWhatsApp(whatsappFields));
      window.open(url, '_blank', 'noopener');
    }
  }

  return { status, submit, reset: () => setStatus('idle') };
}
