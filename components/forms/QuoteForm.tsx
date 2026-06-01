'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { quoteSchema, serviceValues, type QuoteValues } from '@/lib/validation';
import { areas } from '@/lib/data/areas';
import { Label, ErrorText, inputClass } from './Field';
import { useLead } from './useLead';

export function QuoteForm({ defaultService }: { defaultService?: (typeof serviceValues)[number] }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { service: defaultService },
  });
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
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-card">
        <div className="text-4xl">✅</div>
        <h3 className="mt-3 text-xl font-bold text-brand">Request sent!</h3>
        <p className="mt-2 text-slate-600">
          We&apos;ve opened WhatsApp with your details — just press send there and we&apos;ll reply with a fixed price in minutes.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card md:p-8"
    >
      {/* Honeypot (hidden from users; bots fill it) */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" tabIndex={-1} autoComplete="off" {...register('company')} />
      </div>

      <div className="mb-4">
        <Label htmlFor="name" required>Your name</Label>
        <input id="name" className={inputClass(!!errors.name)} placeholder="e.g. Ahmed Khan" {...register('name')} />
        <ErrorText error={errors.name} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone" required>Phone / WhatsApp</Label>
          <input id="phone" type="tel" inputMode="tel" className={inputClass(!!errors.phone)} placeholder="05X XXX XXXX" {...register('phone')} />
          <ErrorText error={errors.phone} />
        </div>
        <div>
          <Label htmlFor="service" required>Service needed</Label>
          <select id="service" className={inputClass(!!errors.service)} defaultValue={defaultService ?? ''} {...register('service')}>
            <option value="" disabled>Select a service</option>
            {serviceValues.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <ErrorText error={errors.service} />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="area" required>Your area in Dubai</Label>
          <select id="area" className={inputClass(!!errors.area)} defaultValue="" {...register('area')}>
            <option value="" disabled>Select your area</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.name.split(' (')[0]}>{a.name.split(' (')[0]}</option>
            ))}
            <option value="Other (Dubai)">Other (Dubai)</option>
          </select>
          <ErrorText error={errors.area} />
        </div>
        <div>
          <Label htmlFor="preferredTime">Preferred time</Label>
          <input id="preferredTime" className={inputClass()} placeholder="e.g. Today afternoon" {...register('preferredTime')} />
        </div>
      </div>

      <div className="mt-4">
        <Label htmlFor="details">Job details</Label>
        <textarea id="details" rows={4} className={inputClass(!!errors.details)} placeholder="Describe the job — e.g. AC not cooling in 2 bedrooms, or a leaking kitchen tap." {...register('details')} />
        <ErrorText error={errors.details} />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp py-4 text-base font-bold text-white transition-colors hover:bg-whatsapp-dark disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : '💬 Send on WhatsApp'}
      </button>
      {status === 'error' && (
        <p className="mt-3 text-center text-sm text-slate-500">
          We&apos;ve opened WhatsApp so you can reach us directly — just press send.
        </p>
      )}
      <p className="mt-3 text-center text-xs text-slate-500">
        No call-out fee · No obligation · We reply in minutes
      </p>
    </form>
  );
}
