'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { quoteSchema, serviceValues, type QuoteValues } from '@/lib/validation';
import { areas } from '@/lib/data/areas';
import { Label, ErrorText, inputClass } from './Field';
import { useLead } from './useLead';

/**
 * Compact quote form for the header dropdown — name, phone, service, area.
 * Rendered on every page via the global Header so visitors can request a
 * fixed price without leaving the page they're on.
 */
export function HeaderQuoteForm({ onSuccess }: { onSuccess?: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteValues>({ resolver: zodResolver(quoteSchema) });
  const { status, submit } = useLead();

  const onSubmit = (data: QuoteValues) =>
    submit(
      { kind: 'quote', ...data },
      {
        '👤 Name': data.name,
        '📞 Phone': data.phone,
        '🛠️ Service': data.service,
        '📍 Area': data.area,
        '🕐 Preferred time': data.preferredTime,
        '📝 Details': data.details,
      }
    );

  if (status === 'success') {
    return (
      <div className="p-5 text-center">
        <div className="text-3xl">✅</div>
        <h3 className="mt-2 text-base font-bold text-brand">Request sent!</h3>
        <p className="mt-1 text-sm text-slate-600">
          We&apos;ve opened WhatsApp with your details — just press send and we&apos;ll reply in minutes.
        </p>
        {onSuccess && (
          <button
            type="button"
            onClick={onSuccess}
            className="mt-4 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-ink hover:bg-slate-50"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="p-4">
      <p className="mb-3 text-sm font-bold text-brand">Get a free fixed-price quote</p>

      {/* Honeypot */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <input tabIndex={-1} autoComplete="off" {...register('company')} />
      </div>

      <div className="space-y-3">
        <div>
          <Label htmlFor="hq_name" required>Name</Label>
          <input id="hq_name" className={inputClass(!!errors.name)} placeholder="e.g. Ahmed Khan" {...register('name')} />
          <ErrorText error={errors.name} />
        </div>
        <div>
          <Label htmlFor="hq_phone" required>Phone / WhatsApp</Label>
          <input id="hq_phone" type="tel" inputMode="tel" className={inputClass(!!errors.phone)} placeholder="05X XXX XXXX" {...register('phone')} />
          <ErrorText error={errors.phone} />
        </div>
        <div>
          <Label htmlFor="hq_service" required>Service needed</Label>
          <select id="hq_service" className={inputClass(!!errors.service)} defaultValue="" {...register('service')}>
            <option value="" disabled>Select a service</option>
            {serviceValues.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <ErrorText error={errors.service} />
        </div>
        <div>
          <Label htmlFor="hq_area" required>Your area in Dubai</Label>
          <select id="hq_area" className={inputClass(!!errors.area)} defaultValue="" {...register('area')}>
            <option value="" disabled>Select your area</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.name.split(' (')[0]}>{a.name.split(' (')[0]}</option>
            ))}
            <option value="Other (Dubai)">Other (Dubai)</option>
          </select>
          <ErrorText error={errors.area} />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp py-3 text-sm font-bold text-white transition-colors hover:bg-whatsapp-dark disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : '💬 Send on WhatsApp'}
      </button>
      <p className="mt-2 text-center text-xs text-slate-500">
        No call-out fee · We reply in minutes
      </p>
    </form>
  );
}
