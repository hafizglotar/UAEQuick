import type { Metadata } from 'next';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import { CallbackForm } from '@/components/forms/CallbackForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/seo/schema';
import { buildMetadata } from '@/lib/seo/metadata';
import { company, PHONE_E164, PHONE_DISPLAY } from '@/lib/data/site';

export const metadata: Metadata = buildMetadata({
  title: 'Contact UAE Quick | Home Services Dubai | Call 058 933 1711',
  description:
    'Contact UAE Quick for same-day home services in Dubai. Call 058 933 1711, WhatsApp us, or send a message. Open 8 AM–10 PM, 7 days. Based in Al Quoz, Dubai.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />
      <JsonLd
        data={webPageSchema({
          path: '/contact',
          name: 'Contact UAE Quick',
          description: 'Contact UAE Quick for same-day home services in Dubai — call, WhatsApp or message.',
          type: 'ContactPage',
        })}
      />
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl font-extrabold text-brand md:text-4xl">Contact UAE Quick</h1>
              <p className="mt-4 text-lg text-slate-600">
                The fastest way to reach us is by phone or WhatsApp — we answer 8 AM to 10 PM, 7 days a
                week. Or leave a message and we&apos;ll get back to you.
              </p>
              <dl className="mt-8 space-y-4 text-[15px]">
                <div className="flex gap-3">
                  <dt className="font-semibold text-brand">📞 Phone</dt>
                  <dd>
                    <a href={`tel:${PHONE_E164}`} className="hover:text-accent">{PHONE_DISPLAY}</a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-semibold text-brand">💬 WhatsApp</dt>
                  <dd>
                    <a href={company.whatsappUrl} target="_blank" rel="noopener" className="hover:text-accent">
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-semibold text-brand">✉ Email</dt>
                  <dd>
                    <a href={`mailto:${company.email}`} className="hover:text-accent">{company.email}</a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-semibold text-brand">📍 Address</dt>
                  <dd>{company.address.street}, {company.address.locality}, Dubai, UAE</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-semibold text-brand">🕐 Hours</dt>
                  <dd>{company.hours}</dd>
                </div>
              </dl>

              <div className="mt-8 rounded-2xl bg-brand-dark p-6 text-white">
                <p className="font-bold">Request a callback</p>
                <p className="mt-1 text-sm text-white/80">Leave your number and we&apos;ll call you.</p>
                <div className="mt-4">
                  <CallbackForm compact />
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-ink">Send us a message</h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
