'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { callbackSchema, type CallbackValues } from '@/lib/validation';
import { Label, ErrorText, inputClass } from './Field';
import { useLead } from './useLead';
import { Icon } from '@/components/ui/Icon';

/** Minimal-friction callback request - name + phone. */
export function CallbackForm({ compact }: { compact?: boolean }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CallbackValues>({ resolver: zodResolver(callbackSchema) });
  const { status, submit } = useLead();

  const onSubmit = (data: CallbackValues) =>
    submit(
      { kind: 'callback', ...data },
      { '👤 Name': data.name, '📞 Phone': data.phone, '🕐 Preferred time': data.preferredTime, '📝 Note': 'Requested a callback' }
    );

  if (status === 'success') {
    return (
      <div className="rounded-xl bg-white/10 p-5 text-center text-white">
        <p className="flex items-center justify-center gap-2 font-semibold">
          <Icon name="CircleCheck" size={20} /> Got it - we&apos;ll call you back shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={compact ? 'space-y-3' : 'grid gap-3 sm:grid-cols-3 sm:items-start'}>
      <div className="absolute left-[-9999px]" aria-hidden>
        <input tabIndex={-1} autoComplete="off" {...register('company')} />
      </div>
      <div>
        <Label htmlFor="cb_name" required className="text-white">Name</Label>
        <input id="cb_name" className={inputClass(!!errors.name)} {...register('name')} />
        <ErrorText error={errors.name} />
      </div>
      <div>
        <Label htmlFor="cb_phone" required className="text-white">Phone</Label>
        <input id="cb_phone" type="tel" inputMode="tel" className={inputClass(!!errors.phone)} placeholder="05X XXX XXXX" {...register('phone')} />
        <ErrorText error={errors.phone} />
      </div>
      <div className={compact ? '' : 'self-end'}>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full rounded-full bg-accent py-3 font-bold text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Request Callback'}
        </button>
      </div>
    </form>
  );
}
