import type { Metadata } from 'next';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { company } from '@/lib/data/site';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service | UAE Quick',
  description: 'The terms that apply when you book a service with UAE Quick in Dubai - quotes and pricing, the 30-day workmanship guarantee, bookings and property access.',
  path: '/terms',
  noindex: true,
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Terms of Service', path: '/terms' }]} />
      <Section>
        <Container>
          <div className="prose-local mx-auto max-w-3xl">
            <h1 className="text-3xl font-extrabold text-brand">Terms of Service</h1>
            <p>
              These terms apply when you book a service with {company.name}. By requesting a quote or
              booking, you agree to them.
            </p>
            <h2>Quotes and pricing</h2>
            <p>
              Prices shown on this site are starting prices and indicative ranges. The final price is
              confirmed in a written quote before work begins. Parts and materials may be quoted
              separately where stated.
            </p>
            <h2>Guarantee</h2>
            <p>
              We back our workmanship with a 30-day guarantee. If the same fault recurs within that
              period as a result of our work, we will return and rectify it at no charge. The guarantee
              does not cover new or unrelated faults or issues caused by misuse.
            </p>
            <h2>Bookings and access</h2>
            <p>
              You are responsible for providing safe access to the property and any approvals your
              building or community requires. Where we can assist with building-management coordination,
              we will.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about these terms? Email{' '}
              <a href={`mailto:${company.email}`}>{company.email}</a>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
