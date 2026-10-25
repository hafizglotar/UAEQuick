import type { Area, Service } from '@/lib/data/types';

/** "AED 150" -> "From AED 150"; "Free consultation" -> "Free Consultation". */
export function priceLabel(service: Service): string {
  const p = service.startingPrice;
  return /^AED/.test(p) ? `From ${p}` : p.replace(/\b\w/g, (c) => c.toUpperCase());
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
