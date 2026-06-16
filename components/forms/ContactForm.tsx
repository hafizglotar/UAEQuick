'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactValues } from '@/lib/validation';
import { Label, ErrorText, inputClass } from './Field';
import { useLead } from './useLead';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });
  const { status, submit } = useLead();

  const onSubmit = (data: ContactValues) =>
    submit(
      { kind: 'contact', ...data },
      { '👤 Name': data.name, '📞 Phone': data.phone, '✉ Email': data.email, '📝 Message': data.message }
    );

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-card">
        <div className="text-4xl">✅</div>
        <h3 className="mt-3 text-xl font-bold text-brand">Thanks - message sent!</h3>
        <p className="mt-2 text-slate-600">We&apos;ll get back to you shortly. We&apos;ve also opened WhatsApp so you can reach us instantly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card md:p-8">
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="c_company">Company</label>
        <input id="c_company" tabIndex={-1} autoComplete="off" {...register('company')} />
      </div>

      <div className="mb-4">
        <Label htmlFor="c_name" required>Your name</Label>
        <input id="c_name" className={inputClass(!!errors.name)} {...register('name')} />
        <ErrorText error={errors.name} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="c_email" required>Email</Label>
          <input id="c_email" type="email" className={inputClass(!!errors.email)} {...register('email')} />
          <ErrorText error={errors.email} />
        </div>
        <div>
          <Label htmlFor="c_phone" required>Phone</Label>
          <input id="c_phone" type="tel" inputMode="tel" className={inputClass(!!errors.phone)} placeholder="05X XXX XXXX" {...register('phone')} />
          <ErrorText error={errors.phone} />
        </div>
      </div>
      <div className="mt-4">
        <Label htmlFor="c_message" required>Message</Label>
        <textarea id="c_message" rows={5} className={inputClass(!!errors.message)} placeholder="How can we help?" {...register('message')} />
        <ErrorText error={errors.message} />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 w-full rounded-full bg-brand py-4 text-base font-bold text-white transition-colors hover:bg-accent disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
