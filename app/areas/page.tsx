import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, SectionHead } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaBand } from '@/components/sections/CtaBand';
import { buildMetadata } from '@/lib/seo/metadata';
import { areas } from '@/lib/data/areas';

export const metadata: Metadata = buildMetadata({
  title: 'Areas We Serve in Dubai | Local Home Services | UAE Quick',
  description:
    'UAE Quick covers every Dubai community — Dubai Marina, Business Bay, JLT, JVC, Jumeirah, Downtown, Palm Jumeirah, Arabian Ranches and more. Same-day local home services.',
  path: '/areas',
  keywords: ['home services Dubai areas', 'maintenance Dubai Marina', 'handyman near me Dubai'],
});

export default function AreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Areas', path: '/areas' }]} />
      <Section>
        <Container>
          <SectionHead
            as="h1"
            eyebrow="Local coverage"
            title="Home Services Across Every Area in Dubai"
            intro="We know how each Dubai community and building works — from tower service-lift rules to gated villa access. Choose your area for local service details and response times."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">{a.type}</span>
                <h2 className="mt-1 text-lg font-bold text-brand">{a.name}</h2>
                <p className="mt-2 flex-1 text-sm text-slate-600">{a.shortDescription}</p>
                <span className="mt-4 text-sm font-semibold text-accent">View {a.name.split(' (')[0]} →</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
