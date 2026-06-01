import type { Metadata } from 'next';
import { Container, Section, SectionHead } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { WhyChooseUs } from '@/components/sections/Features';
import { CtaBand } from '@/components/sections/CtaBand';
import { buildMetadata } from '@/lib/seo/metadata';
import { company } from '@/lib/data/site';

export const metadata: Metadata = buildMetadata({
  title: 'About UAE Quick | Dubai Home Maintenance Company',
  description:
    'UAE Quick is a Dubai-based home maintenance company serving 10,000+ homes and offices with same-day AC, plumbing, handyman, electrical and cleaning services since 2018.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'About', path: '/about' }]} />
      <Section>
        <Container>
          <div className="prose-local mx-auto max-w-3xl">
            <h1 className="text-3xl font-extrabold text-brand md:text-4xl">About UAE Quick</h1>
            <p className="mt-4 text-lg">
              UAE Quick is a Dubai-based home maintenance company that has served more than 10,000 homes
              and offices across the emirate since {company.foundingYear}. We started with a simple idea:
              make it easy to get a trusted technician to your door the same day, with a price agreed
              upfront and no surprises.
            </p>
            <h2>What we believe</h2>
            <p>
              Dubai homes face a specific set of challenges — relentless dust, summer heat that pushes AC
              systems to their limit, humidity that breeds mould, and hard water that scales up plumbing.
              We built our service around those realities, with technicians who know the difference
              between a tower split system in Marina and a ducted villa system in Arabian Ranches, and who
              understand how each building and community handles access.
            </p>
            <h2>How we work</h2>
            <p>
              Every job starts with a fixed, written quote and no call-out fee. Our technicians carry
              their own tools and transport so there are no delays, and we back every repair with a 30-day
              workmanship guarantee. We work to DEWA and building-management standards across Dubai, and we
              are open 8 AM to 10 PM, seven days a week.
            </p>
          </div>
        </Container>
      </Section>
      <Section muted>
        <Container>
          <SectionHead title="Why Dubai Trusts Us" />
          <WhyChooseUs />
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
