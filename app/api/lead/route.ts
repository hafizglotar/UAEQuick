import { NextResponse } from 'next/server';
import { leadSchema } from '@/lib/validation';

export const runtime = 'nodejs';

/**
 * Lead intake endpoint. Validates server-side with the same Zod schema as the
 * client, rejects honeypot/spam, then forwards to whichever delivery channel
 * is configured (generic webhook and/or Resend email). If none is configured
 * it logs the lead — the client also opens WhatsApp, so no lead is ever lost.
 */
export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'Validation failed', issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const lead = parsed.data;

  // Honeypot: a filled "company" field means a bot. Pretend success, drop it.
  if ('company' in lead && lead.company) {
    return NextResponse.json({ ok: true });
  }

  const record = { ...lead, receivedAt: new Date().toISOString() };

  try {
    await deliver(record);
  } catch (err) {
    // Don't fail the user — the client also opens WhatsApp as a fallback.
    console.error('[lead] delivery error:', err);
  }

  return NextResponse.json({ ok: true });
}

async function deliver(record: Record<string, unknown>) {
  const webhook = process.env.LEAD_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const notify = process.env.LEAD_NOTIFY_EMAIL;

  if (webhook) {
    await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record),
    });
  }

  if (resendKey && notify) {
    const lines = Object.entries(record)
      .map(([k, v]) => `<strong>${k}:</strong> ${String(v)}`)
      .join('<br>');
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'UAE Quick Leads <leads@uaequick.com>',
        to: [notify],
        subject: `New ${String(record.kind)} lead — UAE Quick`,
        html: `<h2>New lead</h2><p>${lines}</p>`,
      }),
    });
  }

  if (!webhook && !resendKey) {
    console.log('[lead] (no delivery channel configured):', record);
  }
}
