import { WHATSAPP } from '@/lib/data/site';

/** Join class names, dropping falsy values. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/** Build a WhatsApp deep link with a pre-filled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Compose a structured WhatsApp message from a lead. */
export function leadToWhatsApp(fields: Record<string, string | undefined>): string {
  const lines = ['*New Request - UAE Quick*', ''];
  for (const [label, value] of Object.entries(fields)) {
    if (value) lines.push(`${label}: ${value}`);
  }
  lines.push('', 'Please send me a quote. Thank you!');
  return lines.join('\n');
}
