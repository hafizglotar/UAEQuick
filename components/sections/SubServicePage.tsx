import Link from 'next/link';
import { Container, Section, SectionHead } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BlogBody } from '@/components/sections/BlogBody';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';
import { CtaBand } from '@/components/sections/CtaBand';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { JsonLd } from '@/components/JsonLd';
import { Icon } from '@/components/icons/Icon';
import { subServiceSchema, faqSchema, webPageSchema } from '@/lib/seo/schema';
import { areaShortName, lowerKeyword } from '@/lib/seo/titles';
import { formServiceValue } from '@/lib/data/services';
import { subServicesFor, type SubService } from '@/lib/data/subServices';
import { areas } from '@/lib/data/areas';
import { company, PHONE_E164, PHONE_DISPLAY } from '@/lib/data/site';
import { CONTENT_UPDATED, formatUpdated } from '@/lib/data/updated';
import type { Service } from '@/lib/data/types';

/** A /services/{parent}/{sub-service} page: one specific job, linked up to its parent. */
export function SubServicePage({ service, sub }: { service: Service; sub: SubService }) {
  const path = `/services/${service.slug}/${sub.slug}`;
  // Prices are read from the parent's table so the two can never disagree.
  const rows = sub.priceItems
    .map((item) => service.pricing.find((r) => r.item === item))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));
  const siblings = subServicesFor(service.slug).filter((s) => s.slug !== sub.slug);
  const localAreas = sub.areas
    .map((slug) => areas.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  const kwLower = lowerKeyword(service.keyword);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Services', path: '/services' },
          { name: service.name, path: `/services/${service.slug}` },
          { name: sub.name, path },
        ]}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark text-white">
        <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              {service.name} · Fixed price quoted first
            </span>
            <h1 className="text-balance text-3xl font-extrabold leading-tight md:text-4xl">{sub.h1}</h1>
            <div className="mt-5 rounded-2xl border-l-4 border-gold bg-white/10 p-5">
              <span className="block text-xs font-semibold uppercase tracking-wide text-gold">In short</span>
              <p className="mt-2 text-base leading-relaxed text-white/95 md:text-lg">{sub.answer}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={`tel:${PHONE_E164}`} variant="white" size="lg" external>
                <Icon name="Phone" size={18} /> Call {PHONE_DISPLAY}
              </Button>
              <Button href={company.whatsappUrl} variant="green" size="lg" external>
                <Icon name="MessageCircle" size={18} /> WhatsApp
              </Button>
            </div>
            <p className="mt-5 text-sm text-white/80">
              No call-out fee · 30-day guarantee ·{' '}
              <Link href="/same-day" className="underline underline-offset-2 hover:text-white">
                Book before 4 PM for a visit today
              </Link>
            </p>
            <p className="mt-2 text-xs text-white/70">
              Last updated{' '}
              <time dateTime={CONTENT_UPDATED.subServices}>{formatUpdated(CONTENT_UPDATED.subServices)}</time>
            </p>
          </div>
          <div>
            <div className="mb-3 text-center text-sm font-semibold uppercase tracking-wide text-gold">
              Get a free quote
            </div>
            <QuoteForm defaultService={formServiceValue(service.slug)} />
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <BlogBody blocks={sub.body} />
          </div>
        </Container>
      </Section>

      {rows.length > 0 && (
        <Section muted>
          <Container>
            <SectionHead title={`${sub.name} Prices in Dubai`} />
            <Pricing rows={rows} note="Prices are fixed and quoted before any work begins. No call-out fee." />
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-600">
              See the{' '}
              <Link href={`/services/${service.slug}`} className="font-semibold text-brand underline decoration-accent/40 underline-offset-2 hover:text-accent">
                full {kwLower} price list
              </Link>
              .
            </p>
          </Container>
        </Section>
      )}

      <Faq faqs={sub.faqs} title={`${sub.name} - FAQs`} />

      <Section muted>
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h2 className="text-xl font-bold text-brand">Part of our {kwLower} service</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href={`/services/${service.slug}`} className="font-semibold text-ink hover:text-accent">
                    {service.title} →
                  </Link>
                </li>
                <li>
                  <Link href="/same-day" className="font-semibold text-ink hover:text-accent">
                    How same-day booking works →
                  </Link>
                </li>
              </ul>
            </div>
            {siblings.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-brand">Related jobs</h2>
                <ul className="mt-4 space-y-2">
                  {siblings.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${service.slug}/${s.slug}`} className="font-semibold text-ink hover:text-accent">
                        {s.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {localAreas.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-brand">{service.name} near you</h2>
                <ul className="mt-4 space-y-2">
                  {localAreas.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/services/${service.slug}/${a.slug}`} className="font-semibold text-ink hover:text-accent">
                        {service.name} in {areaShortName(a)} →
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/areas" className="font-semibold text-ink hover:text-accent">
                      All areas we cover →
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <CtaBand title={`Need ${sub.name} in Dubai?`} />

      <JsonLd
        data={[
          subServiceSchema(service, sub, rows),
          webPageSchema({ path, name: sub.h1, description: sub.metaDescription, dateModified: CONTENT_UPDATED.subServices }),
          faqSchema(sub.faqs),
        ]}
      />
    </>
  );
}
