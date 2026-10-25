import type { Area, Service } from '@/lib/data/types';

/** "AED 150" -> "From AED 150"; "Free consultation" -> "Free Consultation". */
export function priceLabel(service: Service): string {
  const p = service.startingPrice;
  return /^AED/.test(p) ? `From ${p}` : p.replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Lower-case a keyword for mid-sentence use while keeping acronyms:
 * "AC Repair" -> "AC repair", "Handyman & Plumber" -> "handyman & plumber".
 */
export function lowerKeyword(keyword: string): string {
  return keyword
    .split(' ')
    .map((w) => (w.length > 1 && w === w.toUpperCase() ? w : w.toLowerCase()))
    .join(' ');
}

/** Lower-case the first character unless the word is an acronym ("AC running" stays). */
export function lowerFirst(text: string): string {
  const first = text.split(' ')[0];
  if (first.length > 1 && first === first.toUpperCase()) return text;
  return text.charAt(0).toLowerCase() + text.slice(1);
}

/** Area display name without the bracketed long form, e.g. "JLT". */
export function areaShortName(area: Area): string {
  return area.name.split(' (')[0];
}

/** <title> pattern: "Same Day {Service} in Dubai | From AED {price} | UAE Quick" */
export function serviceTitle(service: Service): string {
  return `Same Day ${service.keyword} in Dubai | ${priceLabel(service)} | UAE Quick`;
}

/** H1 pattern: "Same-Day {Service} in Dubai" */
export function serviceH1(service: Service): string {
  return `Same-Day ${service.keyword} in Dubai`;
}

/** <title> pattern for service x area pages: "Same Day {Service} in {Area} | UAE Quick" */
export function serviceAreaTitle(service: Service, area: Area): string {
  return `Same Day ${service.keyword} in ${areaShortName(area)} | UAE Quick`;
}

/** H1 pattern for service x area pages */
export function serviceAreaH1(service: Service, area: Area): string {
  return `Same-Day ${service.keyword} in ${areaShortName(area)}`;
}
