import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, SectionHead } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { TrustRow } from '@/components/sections/TrustRow';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { AreasGrid } from '@/components/sections/AreasGrid';
import { WhyChooseUs } from '@/components/sections/Features';
import { Reviews } from '@/components/sections/Reviews';
import { CtaBand } from '@/components/sections/CtaBand';
import { Faq } from '@/components/sections/Faq';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { JsonLd } from '@/components/JsonLd';
import { faqSchema } from '@/lib/seo/schema';
import { buildMetadata } from '@/lib/seo/metadata';
import { company, PHONE_E164, PHONE_DISPLAY } from '@/lib/data/site';
import { posts } from '@/lib/data/blog';
import type { FAQ } from '@/lib/data/types';

export const metadata: Metadata = buildMetadata({
  title: 'UAE Quick | Same-Day Home Maintenance Services in Dubai',
  description: company.description,
  path: '/',
});

const homeFaqs: FAQ[] = [
  { q: 'What home services does UAE Quick offer in Dubai?', a: 'AC repair and maintenance, handyman and plumbing, electrical work, cleaning, movers and packers, painting and partitions, interior design, garden maintenance, and pool and jacuzzi service - across every community in Dubai.' },
  { q: 'Do you charge a call-out fee?', a: 'No. You get a fixed, written quote before any work begins, with no call-out fee. The price you are quoted is the price you pay.' },
  { q: 'Which areas in Dubai do you cover?', a: 'All of Dubai - from apartment districts like Dubai Marina, JLT, Business Bay and Downtown to villa communities like Jumeirah, Arabian Ranches, Palm Jumeirah, Emirates Hills and Mirdif. Same-day service for bookings before 4 PM.' },
  { q: 'Are your technicians licensed and insured?', a: 'Yes. Our technicians work to DEWA and building-management standards, arrive with their own tools and transport, and every job is backed by a 30-day workmanship guarantee.' },
  { q: 'How quickly can you come?', a: 'For most services, book before 4 PM and we reach you the same day. Emergency AC and plumbing are prioritised in summer.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark text-white">
        <div className="absolute -right-16 -top-16 h-96 w-96 rounded-full bg-white/5" aria-hidden />
        <Container className="relative grid gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-5xl">
              Same-Day <span className="text-gold">Home Maintenance</span> Services in Dubai
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/90">
              AC repair, plumbing, handyman, electrical, cleaning, painting and moving - across every
              community in Dubai. Trained technicians, fixed pricing quoted upfront, and a 30-day
              workmanship guarantee.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={`tel:${PHONE_E164}`} variant="white" size="lg" external>
                📞 Call {PHONE_DISPLAY}
              </Button>
              <Button href={company.whatsappUrl} variant="green" size="lg" external>
                💬 WhatsApp Now
              </Button>
            </div>
            <TrustRow />
          </div>

          <div className="lg:pl-4">
            <div className="mb-3 text-center text-sm font-semibold uppercase tracking-wide text-gold">
              Get a free quote in minutes
            </div>
            <QuoteForm />
          </div>
        </Container>
      </section>

      {/* Services */}
      <Section>
        <Container>
          <SectionHead
            eyebrow="What we do"
            title="Home Services in Dubai, Under One Roof"
            intro="One trusted team for the whole home - book any service below and we handle it the same day, with fixed pricing and a 30-day guarantee."
          />
          <ServicesGrid />
        </Container>
      </Section>

      {/* Topical authority intro */}
      <Section muted>
        <Container>
          <div className="prose-local mx-auto max-w-3xl">
            <h2>Dubai&apos;s trusted home maintenance company</h2>
            <p>
              UAE Quick is a Dubai-based home maintenance company serving over 10,000 homes and offices
              across the emirate. Whether you need{' '}
              <Link href="/services/ac-repair">emergency AC repair in Dubai Marina</Link>, a same-day{' '}
              <Link href="/services/handyman-plumber">plumber in JLT</Link>, a{' '}
              <Link href="/services/cleaning">deep clean before a villa move-out in Jumeirah</Link>, or a{' '}
              <Link href="/services/electrician">licensed electrician in Business Bay</Link> - one call to{' '}
              <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a> covers it.
            </p>
            <p>
              The Dubai climate is hard on a home. Fine desert dust clogs AC coils and filters within
              weeks, humidity breeds mould in bathrooms and around vents, and hard water scales up taps,
              mixers and water heaters. That is why our most-booked jobs are{' '}
              <Link href="/services/ac-repair">AC servicing</Link>,{' '}
              <Link href="/services/handyman-plumber">leak and tap repairs</Link> and{' '}
              <Link href="/services/cleaning">deep and move-out cleaning</Link> - and why we recommend
              quarterly AC cleans rather than the once-a-year advice written for cooler climates.
            </p>
            <p>
              We cover the whole emirate, from high-rise apartments in{' '}
              <Link href="/areas/downtown-dubai">Downtown</Link> and{' '}
              <Link href="/areas/business-bay">Business Bay</Link> to villa communities like{' '}
              <Link href="/areas/arabian-ranches">Arabian Ranches</Link> and{' '}
              <Link href="/areas/palm-jumeirah">Palm Jumeirah</Link>, and we know how each building and
              community handles contractor access. <Link href="/areas">See all areas we serve →</Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* Why us */}
      <Section>
        <Container>
          <SectionHead eyebrow="Why UAE Quick" title="Why Dubai Chooses Us" />
          <WhyChooseUs />
        </Container>
      </Section>

      {/* Areas */}
      <section className="bg-brand-dark py-14 text-white md:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Serving Every Area in Dubai</h2>
            <p className="mt-3 text-white/80">
              Same-day coverage across 35+ Dubai communities. Tap your area for local service details.
            </p>
          </div>
          <AreasGrid dark />
        </Container>
      </section>

      {/* Reviews */}
      <Section muted>
        <Container>
          <SectionHead
            eyebrow="Reviews"
            title="Rated 4.8/5 by Dubai Homes"
            intro="Real feedback from customers across the emirate."
          />
          <Reviews />
        </Container>
      </Section>

      {/* Blog teaser */}
      <Section>
        <Container>
          <SectionHead eyebrow="Guides" title="Helpful Dubai Home Guides" />
          <div className="grid gap-5 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">{p.category}</span>
                <h3 className="mt-2 text-lg font-bold text-brand">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{p.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-accent">Read guide →</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Faq faqs={homeFaqs} title="Home Services in Dubai - FAQs" />
      <JsonLd data={faqSchema(homeFaqs)} />

      <CtaBand title="Book a Service in Dubai Today" />
    </>
  );
}
