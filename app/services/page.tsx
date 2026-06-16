import type { Metadata } from 'next';
import { Container, Section, SectionHead } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { AreasGrid } from '@/components/sections/AreasGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { Faq } from '@/components/sections/Faq';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema, itemListSchema, webPageSchema } from '@/lib/seo/schema';
import { buildMetadata } from '@/lib/seo/metadata';
import { services } from '@/lib/data/services';
import type { FAQ } from '@/lib/data/types';

export const metadata: Metadata = buildMetadata({
  title: 'Home Maintenance Services in Dubai | All Services | UAE Quick',
  description:
    'All UAE Quick home services in Dubai - AC repair, handyman, plumbing, electrical, cleaning, movers, painting, garden, pool and vehicle recovery. Same-day, fixed pricing.',
  path: '/services',
  keywords: ['home maintenance Dubai', 'home services Dubai', 'maintenance company Dubai'],
});

const faqs: FAQ[] = [
  { q: 'What home services does UAE Quick offer in Dubai?', a: 'AC repair and maintenance, handyman and plumbing, electrical work, cleaning, movers and packers, painting and partitions, interior design, garden maintenance, pool and jacuzzi service, and 24/7 vehicle recovery.' },
  { q: 'Can I book multiple services in one visit?', a: 'Yes. We can combine jobs across trades in a single booking, which often saves time and the call-out fee - for example a handyman fixing several small jobs while an AC clean is done.' },
  { q: 'Do you charge a call-out fee?', a: 'No. Every job is quoted with a fixed, written price before work begins, with no call-out fee.' },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Services', path: '/services' }]} />
      <Section>
        <Container>
          <SectionHead
            as="h1"
            eyebrow="Our services"
            title="Home Maintenance Services in Dubai"
            intro="One trusted team for the whole home and office. Every service is same-day across Dubai, with fixed pricing quoted upfront and a 30-day workmanship guarantee."
          />
          <ServicesGrid />
        </Container>
      </Section>

      <section className="bg-brand-dark py-14 text-white">
        <Container>
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Available Across Every Dubai Community</h2>
          </div>
          <AreasGrid dark />
        </Container>
      </section>

      <Faq faqs={faqs} title="Services in Dubai - FAQs" />
      <JsonLd
        data={[
          webPageSchema({
            path: '/services',
            name: 'Home Maintenance Services in Dubai',
            description: 'All UAE Quick home services in Dubai - same-day, fixed pricing.',
            type: 'CollectionPage',
          }),
          itemListSchema(
            'Home Maintenance Services in Dubai',
            services.map((s) => ({ name: s.title, path: `/services/${s.slug}` }))
          ),
          faqSchema(faqs),
        ]}
      />
      <CtaBand />
    </>
  );
}
