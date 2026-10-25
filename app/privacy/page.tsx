import type { Metadata } from 'next';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { company } from '@/lib/data/site';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy | UAE Quick',
  description: 'How UAE Quick collects, uses and protects the personal information you share when you request a free quote, book a home service or contact our Dubai team.',
  path: '/privacy',
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Privacy Policy', path: '/privacy' }]} />
      <Section>
        <Container>
          <div className="prose-local mx-auto max-w-3xl">
            <h1 className="text-3xl font-extrabold text-brand">Privacy Policy</h1>
            <p>
              This policy explains how {company.name} handles the information you share with us when you
              request a quote, book a service or contact us.
            </p>
            <h2>Information we collect</h2>
            <p>
              When you submit a form we collect the details you provide - your name, phone number, email,
              area and the description of the job. We use this solely to respond to your request and
              provide the service.
            </p>
            <h2>How we use it</h2>
            <ul>
              <li>To contact you about your quote or booking.</li>
              <li>To schedule and deliver the service you requested.</li>
              <li>To improve our service quality.</li>
            </ul>
            <h2>Sharing</h2>
            <p>
              We do not sell your information. We share it only with the technician assigned to your job
              and any tool we use to deliver our service (for example a messaging or scheduling system).
            </p>
            <h2>Contact</h2>
            <p>
              For any privacy question, email{' '}
              <a href={`mailto:${company.email}`}>{company.email}</a>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
