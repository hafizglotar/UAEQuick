'use client';

import { useState } from 'react';
import type { FAQ } from '@/lib/data/types';
import { Container, SectionHead } from '@/components/ui/Container';
import { Icon } from '@/components/icons/Icon';

/**
 * Accessible FAQ accordion. The full answer text is always in the DOM
 * (only visually collapsed) so crawlers and AI engines can extract it.
 */
export function Faq({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQ[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionHead title={title} />
        <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[17px] font-semibold text-ink"
                  >
                    {f.q}
                    <Icon name={isOpen ? 'Minus' : 'Plus'} size={18} className="shrink-0 text-brand" />
                  </button>
                </h3>
                <div className={isOpen ? 'block' : 'hidden'}>
                  <p className="px-5 pb-5 leading-relaxed text-slate-600">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
