'use client';

import { useState } from 'react';
import type { LeadPayload } from '@/lib/validation';
import { whatsappLink, leadToWhatsApp } from '@/lib/utils';

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
