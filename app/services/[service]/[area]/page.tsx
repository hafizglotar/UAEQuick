import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container, Section, SectionHead } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';
import { CtaBand } from '@/components/sections/CtaBand';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { JsonLd } from '@/components/JsonLd';
import { Icon } from '@/components/ui/Icon';
import { serviceAreaSchema, faqSchema } from '@/lib/seo/schema';
import { buildMetadata } from '@/lib/seo/metadata';
import { serviceAreaTitle, serviceAreaH1, areaShortName, lowerKeyword } from '@/lib/seo/titles';
import {
  notesFor,
  propertyAngle,
  serviceAreaDescription,
  serviceAreaAnswer,
  serviceAreaFaqs,
  serviceAreaIssues,
  nearbyAreas,
} from '@/lib/seo/serviceArea';
import { services, getServiceBySlug, serviceSlugs, formServiceValue } from '@/lib/data/services';
import { getAreaBySlug, areaSlugs } from '@/lib/data/areas';
import { company, PHONE_E164, PHONE_DISPLAY } from '@/lib/data/site';

export const dynamicParams = false;

/** 9 public services x 14 areas = 126 static pages. */
export function generateStaticParams() {
  return serviceSlugs.flatMap((service) => areaSlugs.map((area) => ({ service, area })));
}

type Params = Promise<{ service: string; area: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { service: serviceSlug, area: areaSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const area = getAreaBySlug(areaSlug);
  if (!service || !area) return {};
  return buildMetadata({
    title: serviceAreaTitle(service, area),
    description: serviceAreaDescription(service, area),
    path: `/services/${service.slug}/${area.slug}`,
    image: service.image,
  });
}

export default async function ServiceAreaPage({ params }: { params: Params }) {
  const { service: serviceSlug, area: areaSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const area = getAreaBySlug(areaSlug);
  if (!service || !area) notFound();

  const { an, sn } = notesFor(service, area);
  const shortName = areaShortName(area);
  const kw = service.keyword;
  const kwLower = lowerKeyword(service.keyword);
  const faqs = serviceAreaFaqs(service, area);
  const description = serviceAreaDescription(service, area);
  const nearby = nearbyAreas(area, 3);
  const related = service.relatedServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean)
    .slice(0, 2) as typeof services;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Services', path: '/services' },
          { name: service.name, path: `/services/${service.slug}` },
          { name: shortName, path: `/services/${service.slug}/${area.slug}` },
        ]}
      />

      {/* Hero: H1 + direct answer + quote form */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark text-white">
        <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              {area.type} · {area.responseTime}
            </span>
            <h1 className="text-balance text-3xl font-extrabold leading-tight md:text-4xl">
              {serviceAreaH1(service, area)}
            </h1>
            <div className="mt-5 rounded-2xl border-l-4 border-gold bg-white/10 p-5">
              <span className="block text-xs font-semibold uppercase tracking-wide text-gold">In short</span>
              <p className="mt-2 text-base leading-relaxed text-white/95 md:text-lg">
                {serviceAreaAnswer(service, area)}
              </p>
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
              Starting from <span className="font-bold text-gold">{service.startingPrice}</span> · Fixed
              pricing · 30-day guarantee
            </p>
          </div>
          <div>
            <div className="mb-3 text-center text-sm font-semibold uppercase tracking-wide text-gold">
              Get a free quote for {shortName}
            </div>
            <QuoteForm defaultService={formServiceValue(service.slug)} />
          </div>
        </Container>
      </section>

      {/* Local detail: area notes x service notes */}
      <Section>
        <Container>
          <div className="prose-local mx-auto max-w-3xl">
            <h2>
              {kw} for {shortName} homes
            </h2>
            <p>
              {shortName} is {an.propertyTypes}.
            </p>
            {propertyAngle(service, area).map((text) => (
              <p key={text}>{text}</p>
            ))}
            <h3>Working in {shortName}</h3>
            <p>{area.localContext}</p>
            <p>
              Our technicians are in {shortName} most days - around {area.landmarks.slice(0, 3).join(', ')} - and the
              same team covers {nearby.map((n) => areaShortName(n)).join(', ')} nearby.
            </p>
            <h3>Getting a technician in</h3>
            <p>{an.accessRules}</p>
            <h2>
              Common {kwLower} issues in {shortName}
            </h2>
            <ul>
              {serviceAreaIssues(service, area).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>What else we see in {shortName}</h3>
            <ul>
              {an.commonProblems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Typical {kwLower} jobs</h3>
            <ul>
              {sn.typicalJobs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Tip:</strong> {sn.tip}
            </p>
            <p>
              Read more about <Link href={`/services/${service.slug}`}>{kwLower} across Dubai</Link> or{' '}
              <Link href={`/areas/${area.slug}`}>all our services in {shortName}</Link>.
            </p>
          </div>
        </Container>
      </Section>

      {/* Pricing */}
      <Section muted>
        <Container>
          <SectionHead title={`${kw} Prices in ${shortName}`} />
          <Pricing
            rows={service.pricing}
            note={`The same fixed prices apply across Dubai, including ${shortName}. Quoted in writing before any work begins - no call-out fee.`}
          />
          <p className="mx-auto mt-3 max-w-3xl rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-ink">
            {shortName}: {an.pricingNote}
          </p>
        </Container>
      </Section>

      <Faq faqs={faqs} title={`${kw} in ${shortName} - FAQs`} />

      {/* Internal links: nearby areas for this service, related services in this area */}
      <Section muted>
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-brand">{kw} near {shortName}</h2>
              <ul className="mt-4 space-y-2">
                {nearby.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/services/${service.slug}/${n.slug}`}
                      className="font-semibold text-ink hover:text-accent"
                    >
                      Same-day {kwLower} in {areaShortName(n)} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand">Other services in {shortName}</h2>
              <ul className="mt-4 space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/services/${r.slug}/${area.slug}`}
                      className="font-semibold text-ink hover:text-accent"
                    >
                      Same-day {lowerKeyword(r.keyword)} in {shortName} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand title={`Need ${service.name} in ${shortName} Today?`} />

      <JsonLd data={[serviceAreaSchema(service, area, description), faqSchema(faqs)]} />
    </>
  );
}
