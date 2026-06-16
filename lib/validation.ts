import { z } from 'zod';

/** UAE phone: accepts 05XXXXXXXX, +9715XXXXXXXX, 009715XXXXXXXX and spaced variants. */
const uaePhone = z
  .string()
  .trim()
  .min(7, 'Please enter your phone number')
  .refine(
    (v) => /^(\+?971|00971|0)?\s?5\d(\s?\d){7}$/.test(v.replace(/[-()]/g, '')),
    'Enter a valid UAE mobile number (e.g. 05X XXX XXXX)'
  );

export const serviceValues = [
  'AC Repair / Maintenance',
  'Handyman & Plumber',
  'Electrician',
  'Cleaning',
  'Movers & Packers',
  'Painting & Partitions',
  'Interior Design',
  'Garden Maintenance',
  'Pool & Jacuzzi',
  'Vehicle Recovery',
  'Other',
] as const;

/** Quick Quote - the primary lead form. */
export const quoteSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  phone: uaePhone,
  service: z.enum(serviceValues, {
    errorMap: () => ({ message: 'Please choose a service' }),
  }),
  area: z.string().trim().min(2, 'Please choose your area'),
  preferredTime: z.string().trim().optional(),
  details: z.string().trim().max(1000, 'Please keep details under 1000 characters').optional(),
  // Honeypot - must stay empty (spam protection)
  company: z.string().max(0).optional(),
});
export type QuoteValues = z.infer<typeof quoteSchema>;

/** Contact form. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  email: z.string().trim().email('Enter a valid email'),
  phone: uaePhone,
  message: z.string().trim().min(10, 'Please add a little detail').max(1500),
  company: z.string().max(0).optional(),
});
export type ContactValues = z.infer<typeof contactSchema>;

/** Callback request - minimal friction. */
export const callbackSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  phone: uaePhone,
  preferredTime: z.string().trim().optional(),
  company: z.string().max(0).optional(),
});
export type CallbackValues = z.infer<typeof callbackSchema>;

/** Discriminated payload accepted by /api/lead. */
export const leadSchema = z.discriminatedUnion('kind', [
  quoteSchema.extend({ kind: z.literal('quote') }),
  contactSchema.extend({ kind: z.literal('contact') }),
  callbackSchema.extend({ kind: z.literal('callback') }),
]);
export type LeadPayload = z.infer<typeof leadSchema>;
