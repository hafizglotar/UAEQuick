import type { Metadata } from 'next';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { CtaBand } from '@/components/sections/CtaBand';
import { buildMetadata } from '@/lib/seo/metadata';
import { PHONE_E164, PHONE_DISPLAY } from '@/lib/data/site';
import { Icon, type IconName } from '@/components/ui/Icon';

export const metadata: Metadata = buildMetadata({
  title: 'Get a Free Quote | Same-Day Home Services Dubai | UAE Quick',
  description:
    'Get a free, no-obligation quote for AC, handyman, plumbing, cleaning, painting and moving anywhere in Dubai. Fill the form and we reply on WhatsApp in minutes.',
  path: '/quote',
});

const benefits: { icon: IconName; title: string; text: string }[] = [
  { icon: 'Zap', title: 'Reply in minutes', text: 'Your request reaches our team on WhatsApp instantly.' },
  { icon: 'Coins', title: 'Fixed pricing', text: 'A written quote up front - no surprise charges.' },
  { icon: 'MapPin', title: 'All over Dubai', text: 'Same-day coverage in 35+ communities.' },
  { icon: 'ShieldCheck', title: '30-day guarantee', text: 'Licensed, insured and workmanship guaranteed.' },
];

export default function QuotePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Get a Quote', path: '/quote' }]} />
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-balance text-3xl font-extrabold leading-tight text-brand md:text-4xl">
                Get a Free Quote - Same-Day Service Across Dubai
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Tell us what you need and where you are. Fill the form and your request goes straight to
                our team on WhatsApp - we reply within minutes with a fixed price. No call-out fee, no
                obligation.
              </p>
              <ul className="mt-8 space-y-5">
                {benefits.map((b) => (
                  <li key={b.title} className="flex gap-4">
                    <Icon name={b.icon} size={26} className="mt-0.5 shrink-0 text-brand" />
                    <div>
                      <p className="font-bold text-ink">{b.title}</p>
                      <p className="text-sm text-slate-600">{b.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                <p className="font-semibold text-brand">Prefer to talk now?</p>
                <p className="mt-1 text-sm text-slate-600">
                  Call or WhatsApp{' '}
                  <a href={`tel:${PHONE_E164}`} className="font-semibold text-brand hover:text-accent">
                    {PHONE_DISPLAY}
                  </a>{' '}
 - 8 AM to 10 PM, 7 days a week.
                </p>
              </div>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>
      <CtaBand title="Need Help Right Now?" subtitle="Call us directly for same-day service anywhere in Dubai." />
    </>
  );
}
