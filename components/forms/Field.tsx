import { cn } from '@/lib/utils';
import type { FieldError } from 'react-hook-form';

const baseInput =
  'w-full rounded-lg border bg-slate-50 px-3.5 py-3 text-[15px] text-ink transition-colors focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20';

export function Label({
  htmlFor,
  children,
  required,
  className,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label htmlFor={htmlFor} className={cn('mb-1.5 block text-sm font-semibold text-brand', className)}>
      {children}
      {required && <span className="text-red-500"> *</span>}
    </label>
  );
}

export function ErrorText({ error }: { error?: FieldError }) {
  if (!error) return null;
  return <p className="mt-1 text-sm text-red-600">{error.message}</p>;
}

export function inputClass(hasError?: boolean) {
  return cn(baseInput, hasError ? 'border-red-400' : 'border-slate-300');
}
