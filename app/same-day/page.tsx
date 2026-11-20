import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, SectionHead } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BlogBody } from '@/components/sections/BlogBody';
import { Faq } from '@/components/sections/Faq';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/JsonLd';
import { Icon } from '@/components/icons/Icon';
import { faqSchema, itemListSchema, webPageSchema } from '@/lib/seo/schema';
import { buildMetadata } from '@/lib/seo/metadata';
import { lowerKeyword, areaShortName } from '@/lib/seo/titles';
import { services } from '@/lib/data/services';
import { areas } from '@/lib/data/areas';
import { company, PHONE_E164, PHONE_DISPLAY } from '@/lib/data/site';
import { CONTENT_UPDATED, formatUpdated } from '@/lib/data/updated';
import type { BlogBlock, FAQ } from '@/lib/data/types';

const TITLE = 'How Same-Day Home Service Works in Dubai | 4 PM Cut-Off | UAE Quick';
const DESCRIPTION =
  'How same-day booking works at UAE Quick: the 4 PM cut-off, what happens after you call, fixed quotes, no call-out fee, and which Dubai areas we reach today.';

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: '/same-day' });

const intro: BlogBlock[] = [
  { type: 'h2', text: 'The one rule: book before 4 PM' },
  { type: 'p', text: 'Same-day service at UAE Quick runs on a single cut-off. If your booking is confirmed before 4 PM, a technician or cleaning team reaches you that day. We work from 8 AM to 10 PM, seven days a week, including weekends and public holidays, so a booking made at 3:30 PM on a Friday is treated exactly like one made on a Tuesday morning.' },
  { type: 'p', text: 'Bookings confirmed after 4 PM are offered the first slot the next morning. If a team happens to be finishing a job near you, we will offer an evening visit instead, but we do not promise it. After-hours emergencies outside 8 AM to 10 PM are quoted separately.' },
  { type: 'h2', text: 'What happens after you contact us' },
  { type: 'ol', items: [
    'You call, WhatsApp or send the quote form. A photo of the problem helps: the AC model sticker, the leak, the room to be cleaned.',
    'We reply within 15 minutes, confirm what the job is likely to involve and give you a time window for today.',
    'We ask about access. Tower security, service-lift bookings and community gate passes are the most common cause of delay, so we sort them before the team sets off.',
    'The technician arrives with their own tools, transport and the common parts for that trade.',
    'You get a fixed, written price after the technician has seen the job and before any work starts. There is no call-out fee if you decide not to go ahead.',
    'The work is done in the same visit wherever the parts are on the van. You pay once the job is finished.',
  ] },
  { type: 'h2', text: 'What "same-day" does and does not cover' },
  { type: 'p', text: 'Same-day means the visit happens today. For most repair and cleaning jobs the work is also finished today, because the technician carries the usual parts and supplies. A few jobs need a second visit by their nature, and we would rather say so up front than promise something we cannot do.' },
  { type: 'ul', items: [
    'Finished the same day in most cases: AC cleaning, gas refills and common AC repairs, leak and tap repairs, lock changes, furniture assembly, socket and light work, hourly and deep cleaning, sofa and mattress shampoo.',
    'Visit and quote the same day, work scheduled after: painting, gypsum partitions, interior design consultations, villa-wide duct cleaning and full house moves.',
    'Depends on parts: AC compressor or circuit-board replacements on specific models, and any fitting that has to be ordered to match what is installed.',
  ] },
  { type: 'p', text: 'If a part has to be ordered, the technician makes the system safe, tells you the price of the remaining work and books the return visit before leaving.' },
];

const pricing: BlogBlock[] = [
  { type: 'h2', text: 'Same-day costs the same as booking ahead' },
  { type: 'p', text: 'We do not add a same-day or urgency surcharge. The prices on each service page are the prices you pay whether you book for this afternoon or for next week, and they are the same in every community we cover. The quote is fixed in writing before work begins, and parts are quoted before they are fitted.' },
  { type: 'p', text: 'Every job carries a 30-day workmanship guarantee. AC repairs carry 90 days. If the same fault returns inside that period, we come back and put it right at no charge.' },
];

const areasText: BlogBlock[] = [
  { type: 'h2', text: 'How to get the fastest visit' },
  { type: 'ul', items: [
    'Book as early in the day as you can. The 4 PM cut-off is the latest, not the target.',
    'Tell building security or your community gate that a contractor is coming, and book the service lift if your tower requires it.',
    'Send photos before the visit so the right parts are on the van.',
    'List every job you want done. One visit covering several small jobs is quicker and cheaper than separate bookings.',
    'Make sure someone is home for the time window, with parking or a visitor pass arranged.',
  ] },
];

const faqs: FAQ[] = [
  { q: 'What is the cut-off time for same-day service in Dubai?', a: 'Book before 4 PM and UAE Quick reaches you the same day. We operate 8 AM to 10 PM, seven days a week, including weekends and public holidays. Bookings after 4 PM get the first slot the next morning.' },
  { q: 'Does same-day service cost more?', a: 'No. There is no same-day surcharge and no call-out fee. You pay the same fixed prices shown on each service page, quoted in writing before any work starts.' },
  { q: 'Which areas of Dubai get same-day service?', a: `All ${areas.length} communities we cover, including Dubai Marina, JLT, Business Bay, Downtown Dubai, JVC, Al Barsha, Jumeirah, Palm Jumeirah, Arabian Ranches and Mirdif. Access rules differ by building and community, so we confirm those when you book.` },
  { q: 'Will the job be finished the same day?', a: 'Most repair and cleaning jobs are, because technicians carry common parts and supplies. Painting, partitions, interior design and full moves get a same-day visit and quote, with the work scheduled afterwards. Jobs that need a specific part ordered need a return visit.' },
  { q: 'What if I book after 4 PM?', a: 'You are offered the first slot the following morning. If a team is finishing nearby we may offer an evening visit. Emergencies outside 8 AM to 10 PM are quoted separately.' },
  { q: 'Do I pay before the visit?', a: 'No. You receive a fixed written price after the technician has assessed the job, and you pay once the work is done. Every job is covered by a 30-day workmanship guarantee, with 90 days on AC repairs.' },
];

/** One line per service on what "same-day" means for that trade. */
const sameDayScope: Record<string, string> = {
  'ac-repair': 'Diagnosis and most repairs, cleans and gas refills in one visit',
  'handyman-plumber': 'Leaks, taps, locks, furniture and mounting fixed on the spot',
  electrician: 'Lights, sockets, breakers and appliance wiring the same visit',
  cleaning: 'Hourly, deep and move-out cleans, sofa and mattress shampoo',
  'movers-packers': 'Same-day survey and quote; small moves the same day when a crew is free',
  painting: 'Same-day visit and written quote; painting scheduled after',
  'interior-design': 'Same-day consultation call or site visit',
  'garden-maintenance': 'One-off tidy, irrigation checks and repairs',
  'pool-maintenance': 'Cleaning, chemical balancing and pump checks',
};

export default function SameDayPage() {
  const apartments = areas.filter((a) => a.type === 'Apartment district');
  const villas = areas.filter((a) => a.type === 'Villa community');
  const mixed = areas.filter((a) => a.type !== 'Apartment district' && a.type !== 'Villa community');
  const groups = [
    { label: 'Apartment and tower districts', note: 'Tell security and book the service lift where the building requires it.', list: apartments },
    { label: 'Villa communities', note: 'Send the gate pass or approve the visit in your community app.', list: villas },
    { label: 'Mixed communities', note: 'Arrange a parking spot or visitor pass for the van.', list: mixed },
  ].filter((g) => g.list.length > 0);

  return (
    <>
      <Breadcrumbs items={[{ name: 'Same-Day Service', path: '/same-day' }]} />

      <section className="bg-gradient-to-br from-brand to-brand-dark py-12 text-white md:py-16">
        <Container>
          <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Book before 4 PM · 8 AM-10 PM, 7 days
          </span>
          <h1 className="max-w-3xl text-balance text-3xl font-extrabold leading-tight md:text-4xl">
            How Same-Day Booking Works at UAE Quick
          </h1>
          <div className="mt-5 max-w-3xl rounded-2xl border-l-4 border-gold bg-white/10 p-5">
            <span className="block text-xs font-semibold uppercase tracking-wide text-gold">In short</span>
            <p className="mt-2 text-base leading-relaxed text-white/95 md:text-lg">
              Book before 4 PM and a UAE Quick technician or cleaning team reaches you the same day, anywhere in the{' '}
              {areas.length} Dubai communities we cover. You get a fixed written quote before work starts, there is no
              call-out fee and no same-day surcharge, and every job carries a 30-day guarantee.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`tel:${PHONE_E164}`} variant="white" size="lg" external>
              <Icon name="Phone" size={18} /> Call {PHONE_DISPLAY}
            </Button>
            <Button href={company.whatsappUrl} variant="green" size="lg" external>
              <Icon name="MessageCircle" size={18} /> WhatsApp
            </Button>
            <Button href="/quote" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand">
              Get a Quote
            </Button>
          </div>
          <p className="mt-4 text-xs text-white/70">
            Last updated <time dateTime={CONTENT_UPDATED.sameDay}>{formatUpdated(CONTENT_UPDATED.sameDay)}</time>
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <BlogBody blocks={intro} />
          </div>
        </Container>
      </Section>

      {/* Services available same-day, with live starting prices */}
      <Section muted>
        <Container>
          <SectionHead
            title="Services You Can Book for Today"
            intro="Starting prices are the same whether you book for today or later. Each links to full pricing."
          />
          <div className="mx-auto max-w-4xl overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-2xl bg-white text-left text-sm shadow-card">
              <thead>
                <tr className="bg-brand text-white">
                  <th className="px-4 py-3 font-semibold">Service</th>
                  <th className="px-4 py-3 font-semibold">What same-day covers</th>
                  <th className="px-4 py-3 font-semibold">Starts from</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.slug} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-semibold">
                      <Link href={`/services/${s.slug}`} className="text-brand underline decoration-accent/40 underline-offset-2 hover:text-accent">
                        {s.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{sameDayScope[s.slug] ?? s.shortDescription}</td>
                    <td className="px-4 py-3 font-semibold text-ink">{s.startingPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mx-auto mt-8 max-w-3xl">
            <BlogBody blocks={pricing} />
          </div>
        </Container>
      </Section>

      {/* Areas */}
      <Section>
        <Container>
          <SectionHead
            title="Areas We Reach the Same Day"
            intro="Access, not distance, usually decides how quickly a team can start."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {groups.map((g) => (
              <div key={g.label} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
                <h3 className="font-bold text-brand">{g.label}</h3>
                <p className="mt-1 text-sm text-slate-600">{g.note}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {g.list.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/areas/${a.slug}`} className="font-semibold text-ink hover:text-accent">
                        {areaShortName(a)}
                      </Link>
                      <span className="text-slate-500"> - {a.responseTime}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-3xl">
            <BlogBody blocks={areasText} />
            <p className="mt-4 text-slate-700">
              Looking for one trade in one place? Each service has a local page, for example{' '}
              <Link href="/services/ac-repair/dubai-marina" className="font-semibold text-brand underline decoration-accent/40 underline-offset-2 hover:text-accent">
                {lowerKeyword(services[0].keyword)} in Dubai Marina
              </Link>
              ,{' '}
              <Link href="/services/handyman-plumber/jvc" className="font-semibold text-brand underline decoration-accent/40 underline-offset-2 hover:text-accent">
                a handyman or plumber in JVC
              </Link>{' '}
              or{' '}
              <Link href="/services/cleaning/business-bay" className="font-semibold text-brand underline decoration-accent/40 underline-offset-2 hover:text-accent">
                cleaning in Business Bay
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      <Faq faqs={faqs} title="Same-Day Service - FAQs" />

      <CtaBand title="Need Someone at Your Door Today?" />

      <JsonLd
        data={[
          webPageSchema({ path: '/same-day', name: 'How Same-Day Booking Works at UAE Quick', description: DESCRIPTION, dateModified: CONTENT_UPDATED.sameDay }),
          itemListSchema('Services available same-day in Dubai', services.map((s) => ({ name: s.name, path: `/services/${s.slug}` }))),
          faqSchema(faqs),
        ]}
      />
    </>
  );
}
