'use client';

import { Button } from '@/components/ui/Button';
import { company, PHONE_E164, PHONE_DISPLAY } from '@/lib/data/site';
import { Icon } from '@/components/ui/Icon';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto flex min-h-[55vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <Icon name="TriangleAlert" size={48} className="text-gold" />
      <h1 className="mt-4 text-2xl font-bold text-brand">Something went wrong</h1>
      <p className="mt-2 text-slate-600">
        Sorry about that. Please try again - or reach us directly and we&apos;ll sort it out fast.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-accent"
        >
          Try again
        </button>
        <Button href={`tel:${PHONE_E164}`} variant="outline" external>
          <Icon name="Phone" size={18} /> Call {PHONE_DISPLAY}
        </Button>
        <Button href={company.whatsappUrl} variant="green" external>
          <Icon name="MessageCircle" size={18} /> WhatsApp
        </Button>
      </div>
    </div>
  );
}
