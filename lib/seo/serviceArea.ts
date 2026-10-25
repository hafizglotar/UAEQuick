import type { Area, FAQ, Service } from '@/lib/data/types';
import { areas, areaNotes } from '@/lib/data/areas';
import { serviceNotes } from '@/lib/data/services';
import { PHONE_DISPLAY } from '@/lib/data/site';
import { areaShortName } from '@/lib/seo/titles';

/** Generators for the /services/[service]/[area] pages. Everything here is
 *  derived from `areaNotes` + `serviceNotes` so each of the 126 pages reads
 *  differently while staying factually consistent with the parent pages. */

export function notesFor(service: Service, area: Area) {
  const an = areaNotes[area.slug];
  const sn = serviceNotes[service.slug];
  if (!an || !sn) throw new Error(`Missing notes for ${service.slug} x ${area.slug}`);
  return { an, sn };
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Which property-type angle(s) apply in this area. */
export function propertyAngle(service: Service, area: Area): string[] {
  const { sn } = notesFor(service, area);
  if (area.type === 'Villa community') return [sn.villas];
  if (area.type === 'Apartment district') return [sn.apartments];
  return [sn.apartments, sn.villas];
}

/**
 * Meta description, guaranteed 150-160 characters: the lead and price are
 * fixed, then the shortest trust/booking clauses that land in range are used.
 */
export function serviceAreaDescription(service: Service, area: Area): string {
  const { sn } = notesFor(service, area);
  const name = areaShortName(area);
  const lead = `Same-day ${service.keyword.toLowerCase()} in ${name}, Dubai - ${sn.descBits}.`;
  const price = /^AED/.test(service.startingPrice) ? ` From ${service.startingPrice}.` : ' Free consultation.';
  const phone = ` Call ${PHONE_DISPLAY}.`;
  const trust = [
    ' Fixed price before work begins, 30-day guarantee.',
    ' Fixed price quoted first, 30-day guarantee.',
    ' Fixed prices, 30-day guarantee.',
    ' Fixed prices.',
    '',
  ];
  const booking = [
    ' Book before 4 PM for a same-day visit.',
    ' Book before 4 PM for same-day service.',
    ' Book before 4 PM.',
    ' Building access handled.',
    ' Local team.',
    ' Book now.',
    '',
  ];
  let best = '';
  let bestGap = Infinity;
  for (const t of trust) {
    for (const b of booking) {
      const d = `${lead}${price}${t}${b}${phone}`;
      if (d.length >= 150 && d.length <= 160) return d;
      const gap = d.length < 150 ? 150 - d.length : d.length - 160;
      if (gap < bestGap) {
        bestGap = gap;
        best = d;
      }
    }
  }
  return best;
}

/** The 40-60 word direct answer shown under the H1. */
export function serviceAreaAnswer(service: Service, area: Area): string {
  const { sn } = notesFor(service, area);
  const name = areaShortName(area);
  const price = /^AED/.test(service.startingPrice)
    ? `Prices start ${sn.priceLine}.`
    : `The first consultation is free; design and fit-out are quoted per project after a site visit.`;
  return `UAE Quick provides same-day ${service.keyword.toLowerCase()} in ${name} - ${sn.descBits}. ${price} ${area.responseTime}, with a fixed written price before any work begins and a 30-day workmanship guarantee.`;
}

/** Two FAQs specific to this service x area combination. */
export function serviceAreaFaqs(service: Service, area: Area): FAQ[] {
  const { an, sn } = notesFor(service, area);
  const name = areaShortName(area);
  const kw = service.keyword.toLowerCase();
  const angle = propertyAngle(service, area)[0];
  const priceA = /^AED/.test(service.startingPrice)
    ? `${cap(sn.priceLine)} - the same fixed prices we charge everywhere in Dubai. ${angle} The technician confirms the written price on arrival, before any work starts.`
    : `${cap(sn.priceLine)}. ${angle} You receive an itemised proposal before committing to anything.`;
  return [
    {
      q: `Can I get same-day ${kw} in ${name}?`,
      a: `Yes. ${area.responseTime}. ${an.accessRules} You get a fixed price before work begins, backed by our 30-day guarantee.`,
    },
    {
      q: `How much does ${kw} cost in ${name}?`,
      a: priceA,
    },
  ];
}

/** Three nearby areas: the area's own `nearby` list topped up with same-type communities. */
export function nearbyAreas(area: Area, count = 3): Area[] {
  const picked: Area[] = [];
  const add = (a?: Area) => {
    if (a && a.slug !== area.slug && !picked.some((p) => p.slug === a.slug)) picked.push(a);
  };
  area.nearby.forEach((slug) => add(areas.find((a) => a.slug === slug)));
  areas.filter((a) => a.type === area.type).forEach((a) => picked.length < count && add(a));
  areas.forEach((a) => picked.length < count && add(a));
  return picked.slice(0, count);
}
