import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Section, SectionHead } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { AeoBlock } from '@/components/sections/AeoBlock';
import { Features } from '@/components/sections/Features';
import { Pricing } from '@/components/sections/Pricing';
import { Process } from '@/components/sections/Process';
import { Faq } from '@/components/sections/Faq';
import { AreasGrid } from '@/components/sections/AreasGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { JsonLd } from '@/components/JsonLd';
import { Icon } from '@/components/ui/Icon';
import { serviceSchema, faqSchema } from '@/lib/seo/schema';
import { buildMetadata } from '@/lib/seo/metadata';
import { serviceTitle, serviceH1 } from '@/lib/seo/titles';
import { services, getServiceBySlug, serviceSlugs, formServiceValue } from '@/lib/data/services';
import { company, PHONE_E164, PHONE_DISPLAY } from '@/lib/data/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: serviceTitle(service),
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = service.relatedServices
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Services', path: '/services' },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />

      {/* Hero with embedded quote form */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark text-white">
        <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            {service.emergency && (
              <span className="mb-4 inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-dark">
                Same-day · Emergency available
              </span>
            )}
            <h1 className="text-balance text-3xl font-extrabold leading-tight md:text-4xl">
              {serviceH1(service)}
            </h1>
            {/* AIO direct answer: price, response time, coverage - right under the H1 */}
            <div className="mt-5 rounded-2xl border-l-4 border-gold bg-white/10 p-5">
              <span className="block text-xs font-semibold uppercase tracking-wide text-gold">In short</span>
              <p className="mt-2 text-base leading-relaxed text-white/95 md:text-lg">{service.quickAnswer}</p>
            </div>
            <p className="mt-5 max-w-xl text-lg text-white/90">{service.heroSub}</p>
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
              Get a free quote
            </div>
            <QuoteForm defaultService={formServiceValue(service.slug)} />
          </div>
        </Container>
      </section>

      {/* Service image under the banner */}
      <Container className="relative z-10 pt-8 md:pt-12">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-cardHover md:aspect-[21/9]">
          <Image
            src={service.image}
            alt={`${service.name} in Dubai - UAE Quick`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </Container>

      {/* AEO content block */}
      <Section>
        <Container>
          <AeoBlock service={service} />
        </Container>
      </Section>

      {/* What we offer */}
      <Section muted>
        <Container>
          <SectionHead title={`${service.name} Services We Offer in Dubai`} />
          <Features items={service.features} />
        </Container>
      </Section>

      {/* Pricing */}
      <Section>
        <Container>
          <SectionHead title={`${service.name} Dubai - Transparent Pricing`} />
          <Pricing
            rows={service.pricing}
            note="Prices are fixed and quoted before any work begins. No call-out fee."
          />
        </Container>
      </Section>

      {/* Process */}
      <Section muted>
        <Container>
          <SectionHead title="How It Works" />
          <Process steps={service.process} />
        </Container>
      </Section>

      {/* FAQ */}
      <Faq faqs={service.faqs} title={`${service.name} in Dubai - FAQs`} />

      {/* Related services (internal linking) */}
      {related.length > 0 && (
        <Section muted>
          <Container>
            <SectionHead title="Related Services" />
            <div className="grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover"
                >
                  <Icon name={r.icon} size={28} className="text-brand" />
                  <h3 className="mt-2 font-bold text-brand">{r.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{r.shortDescription}</p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Areas */}
      <section className="bg-brand-dark py-14 text-white">
        <Container>
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 className="text-3xl font-bold">{service.name} Across Dubai</h2>
            <p className="mt-3 text-white/80">
              Same-day coverage in every Dubai community - pick your area for local pricing, access notes and FAQs.
            </p>
          </div>
          <AreasGrid dark hrefFor={(a) => `/services/${service.slug}/${a.slug}`} />
        </Container>
      </section>

      <CtaBand title={`Need ${service.name} in Dubai Today?`} />

      {/* Schema: Service + FAQ */}
      <JsonLd data={[serviceSchema(service), faqSchema(service.faqs)]} />
    </>
  );
}
