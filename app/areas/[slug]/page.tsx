import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container, Section, SectionHead } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Faq } from '@/components/sections/Faq';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/JsonLd';
import { Icon } from '@/components/icons/Icon';
import { areaServiceSchema, faqSchema } from '@/lib/seo/schema';
import { buildMetadata } from '@/lib/seo/metadata';
import { getAreaBySlug, areaSlugs, areas } from '@/lib/data/areas';
import { services } from '@/lib/data/services';
import { company, PHONE_E164, PHONE_DISPLAY } from '@/lib/data/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return areaSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return buildMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const topServices = area.topServices
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;
  const nearby = area.nearby
    .map((s) => areas.find((x) => x.slug === s))
    .filter(Boolean) as typeof areas;
  const shortName = area.name.split(' (')[0];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Areas', path: '/areas' },
          { name: shortName, path: `/areas/${area.slug}` },
        ]}
      />

      <section className="bg-gradient-to-br from-brand to-brand-dark py-12 text-white md:py-16">
        <Container>
          <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            {area.type} · {area.responseTime}
          </span>
          <h1 className="max-w-3xl text-balance text-3xl font-extrabold leading-tight md:text-4xl">
            Home Services in {area.name}, Dubai
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">{area.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`tel:${PHONE_E164}`} variant="white" external>
              <Icon name="Phone" size={18} /> Call {PHONE_DISPLAY}
            </Button>
            <Button href={company.whatsappUrl} variant="green" external>
              <Icon name="MessageCircle" size={18} /> WhatsApp
            </Button>
            <Button href="/quote" variant="outline" className="border-white text-white hover:bg-white hover:text-brand">
              Get a Quote
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="prose-local mx-auto max-w-3xl">
            <h2>Local home maintenance in {shortName}</h2>
            <p>{area.localContext}</p>
            <h3>Property types in {shortName}</h3>
            <p>{area.propertyNotes}</p>
            {area.landmarks.length > 0 && (
              <p>
                <strong>Nearby:</strong> {area.landmarks.join(' · ')}
              </p>
            )}
          </div>
        </Container>
      </Section>

      <Section muted>
        <Container>
          <SectionHead title={`Most-Booked Services in ${shortName}`} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/${area.slug}`}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover"
              >
                <Icon name={s.icon} size={28} className="text-brand" />
                <h3 className="mt-2 font-bold text-brand">Same-day {s.keyword} in {shortName}</h3>
                <p className="mt-1 text-sm text-slate-600">From {s.startingPrice}</p>
              </Link>
            ))}
          </div>
          <h3 className="mt-10 text-center text-lg font-bold text-ink">Every service we offer in {shortName}</h3>
          <ul className="mt-4 flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}/${area.slug}`}
                  className="inline-block rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
                >
                  {s.keyword} in {shortName}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-slate-500">
            <Link href="/services" className="font-semibold text-brand hover:text-accent">See all services →</Link>
          </p>
        </Container>
      </Section>

      <Faq faqs={area.faqs} title={`Home Services in ${shortName} - FAQs`} />

      {nearby.length > 0 && (
        <Section muted>
          <Container>
            <SectionHead title="Nearby Areas We Serve" />
            <div className="flex flex-wrap justify-center gap-3">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/areas/${n.slug}`}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
                >
                  {n.name.split(' (')[0]}
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CtaBand title={`Book a Service in ${shortName} Today`} />

      <JsonLd data={[areaServiceSchema(area), faqSchema(area.faqs)]} />
    </>
  );
}
