import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
import { faqSchema, webPageSchema, sameDayServiceSchema } from '@/lib/seo/schema';
import { buildMetadata } from '@/lib/seo/metadata';
import { areaShortName, lowerKeyword } from '@/lib/seo/titles';
import { getServiceBySlug, formServiceValue } from '@/lib/data/services';
import { getSubService } from '@/lib/data/subServices';
import { sameDayPages, getSameDayPage } from '@/lib/data/sameDayPages';
import { areas } from '@/lib/data/areas';
import { company, PHONE_E164, PHONE_DISPLAY } from '@/lib/data/site';
import { CONTENT_UPDATED, formatUpdated } from '@/lib/data/updated';

export const dynamicParams = false;

export function generateStaticParams() {
  return sameDayPages.map((p) => ({ service: p.slug }));
}

type Params = Promise<{ service: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const page = getSameDayPage((await params).service);
  const parent = page && getServiceBySlug(page.parent);
  if (!page || !parent) return {};
  return buildMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/same-day/${page.slug}`,
    image: parent.image,
  });
}

export default async function SameDayServicePage({ params }: { params: Params }) {
  const page = getSameDayPage((await params).service);
  const parent = page && getServiceBySlug(page.parent);
  if (!page || !parent) notFound();

  const path = `/same-day/${page.slug}`;
  // Prices are read from the parent service's table, never restated as new facts.
  const rows = page.priceItems
    .map((item) => parent.pricing.find((r) => r.item === item))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));
  const localAreas = page.areas
    .map((slug) => areas.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  const jobs = page.jobs
    .map((slug) => getSubService(page.parent, slug))
    .filter((j): j is NonNullable<typeof j> => Boolean(j));
  const others = sameDayPages.filter((p) => p.slug !== page.slug);
  const parentAnchor = `same-day ${lowerKeyword(parent.keyword)} in Dubai`;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'How Booking Works', path: '/same-day' },
          { name: `${page.name} Today`, path },
        ]}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark text-white">
        <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              Book before 4 PM · 8 AM-10 PM, 7 days
            </span>
            <h1 className="text-balance text-3xl font-extrabold leading-tight md:text-4xl">{page.h1}</h1>
            <div className="mt-5 rounded-2xl border-l-4 border-gold bg-white/10 p-5">
              <span className="block text-xs font-semibold uppercase tracking-wide text-gold">In short</span>
              <p className="mt-2 text-base leading-relaxed text-white/95 md:text-lg">{page.answer}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={`tel:${PHONE_E164}`} variant="white" size="lg" external>
                <Icon name="Phone" size={18} /> Call {PHONE_DISPLAY}
              </Button>
              <Button href={company.whatsappUrl} variant="green" size="lg" external>
                <Icon name="MessageCircle" size={18} /> WhatsApp
              </Button>
            </div>
            <p className="mt-5 text-sm text-white/80">No call-out fee · Fixed written quote · 30-day guarantee</p>
            <p className="mt-2 text-xs text-white/70">
              Last updated{' '}
              <time dateTime={CONTENT_UPDATED.sameDayServices}>{formatUpdated(CONTENT_UPDATED.sameDayServices)}</time>
            </p>
          </div>
          <div>
            <div className="mb-3 text-center text-sm font-semibold uppercase tracking-wide text-gold">
              Request a visit today
            </div>
            <QuoteForm defaultService={formServiceValue(parent.slug)} />
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <BlogBody blocks={page.body} />
          </div>
        </Container>
      </Section>

      {rows.length > 0 && (
        <Section muted>
          <Container>
            <SectionHead title={`${page.name} Prices - the Same Today or Booked Ahead`} />
            <Pricing rows={rows} note="Prices are fixed and quoted before any work begins. No call-out fee, no same-day surcharge." />
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-600">
              Full price list:{' '}
              <Link href={`/services/${parent.slug}`} className="font-semibold text-brand underline decoration-accent/40 underline-offset-2 hover:text-accent">
                {parentAnchor}
              </Link>
              .
            </p>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <SectionHead
            title={`${page.name} Today, by Area`}
            intro="Each area has its own page with local access rules and arrival notes."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {localAreas.map((a) => (
              <div key={a.slug} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
                <Link href={`/services/${parent.slug}/${a.slug}`} className="font-bold text-brand hover:text-accent">
                  {parent.name} in {areaShortName(a)} →
                </Link>
                <p className="mt-1 text-sm text-slate-600">{a.responseTime}</p>
                <Link href={`/areas/${a.slug}`} className="mt-2 inline-block text-sm font-semibold text-ink hover:text-accent">
                  All services in {areaShortName(a)}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-600">
            We cover {areas.length} Dubai communities.{' '}
            <Link href="/areas" className="font-semibold text-brand underline decoration-accent/40 underline-offset-2 hover:text-accent">
              See every area
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Faq faqs={page.faqs} title={`${page.name} Today - FAQs`} />

      <Section muted>
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h2 className="text-xl font-bold text-brand">Main service page</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href={`/services/${parent.slug}`} className="font-semibold text-ink hover:text-accent">
                    {parent.title} →
                  </Link>
                </li>
                <li>
                  <Link href="/same-day" className="font-semibold text-ink hover:text-accent">
                    How booking and the 4 PM cut-off work →
                  </Link>
                </li>
              </ul>
            </div>
            {jobs.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-brand">Specific jobs</h2>
                <ul className="mt-4 space-y-2">
                  {jobs.map((j) => (
                    <li key={j.slug}>
                      <Link href={`/services/${j.parent}/${j.slug}`} className="font-semibold text-ink hover:text-accent">
                        {j.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h2 className="text-xl font-bold text-brand">Need a different trade today?</h2>
              <ul className="mt-4 space-y-2">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/same-day/${o.slug}`} className="font-semibold text-ink hover:text-accent">
                      {o.name} today →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand title={`Need ${page.name === 'Cleaning' ? 'Cleaners' : `a${/^[AE]/.test(page.name) ? 'n' : ''} ${page.name === 'AC Repair' ? 'AC Technician' : page.name}`} Today?`} />

      <JsonLd
        data={[
          sameDayServiceSchema(parent, page, rows),
          webPageSchema({ path, name: page.h1, description: page.metaDescription, dateModified: CONTENT_UPDATED.sameDayServices }),
          faqSchema(page.faqs),
        ]}
      />
    </>
  );
}
