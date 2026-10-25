import type { IconName } from '@/components/ui/Icon';

export interface PriceRow {
  item: string;
  includes: string;
  price: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export interface Feature {
  icon: IconName;
  title: string;
  text: string;
}

export interface Service {
  slug: string;
  /** When true, the service is hidden from every listing and its page 404s. */
  hidden?: boolean;
  /** Short label for navigation and cards */
  name: string;
  /**
   * Primary "same-day" keyword, e.g. "AC Repair". Drives the page title
   * ("Same Day {keyword} in Dubai | From {price} | UAE Quick"), the H1
   * ("Same-Day {keyword} in Dubai") and the service x area pages.
   */
  keyword: string;
  /** Descriptive service name used in schema and listings */
  title: string;
  category: 'Maintenance' | 'Repair' | 'Cleaning' | 'Improvement' | 'Logistics';
  /** lucide icon name rendered through components/ui/Icon */
  icon: IconName;
  image: string;
  shortDescription: string;
  /** 150-160 characters */
  metaDescription: string;
  startingPrice: string;
  /** Supporting paragraph below the direct answer (the same-day keyword lives in quickAnswer) */
  heroSub: string;
  /**
   * First paragraph under the H1 ("In short"): 40-60 words containing
   * "same-day {keyword}" once, the starting price, "book before 4 PM" and
   * "fixed price, 30-day guarantee", written for AI Overviews/ChatGPT.
   */
  quickAnswer: string;
  /** AEO: "What is …?" */
  whatIsIt: string;
  /** AEO: "Why is it needed?" */
  whyNeeded: string;
  /** AEO: common problems customers report */
  commonProblems: string[];
  /** GEO/AEO: Dubai-specific considerations */
  localConsiderations: string;
  /** AEO: typical cost guidance paragraph */
  costGuidance: string;
  features: Feature[];
  pricing: PriceRow[];
  process: ProcessStep[];
  faqs: FAQ[];
  /** Internal linking: related service slugs */
  relatedServices: string[];
  emergency?: boolean;
}

export interface Area {
  slug: string;
  name: string;
  type: 'Apartment district' | 'Villa community' | 'Mixed' | 'Commercial';
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  /** Unique, local intro paragraph */
  intro: string;
  /** Local context that makes the page non-generic */
  localContext: string;
  landmarks: string[];
  /** Common property types / building names to be specific */
  propertyNotes: string;
  /** Services especially in demand here (slugs) */
  topServices: string[];
  faqs: FAQ[];
  /** Typical response time line */
  responseTime: string;
  nearby: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  author: string;
  readingMinutes: number;
  image: string;
  /** Lead paragraph that doubles as an AEO answer */
  tldr: string;
  /** Body as ordered content blocks for clean, semantic rendering */
  body: BlogBlock[];
  faqs: FAQ[];
  relatedServices: string[];
}

export type BlogBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

/** Area-level facts combined with ServiceNotes to build unique service x area pages. */
export interface AreaNotes {
  /** Property mix, written to follow "{Area} is ..." */
  propertyTypes: string;
  /** How contractors get in: security, service lifts, gates, hours */
  accessRules: string;
  /** Maintenance problems that come up most in this community */
  commonProblems: string[];
  /** Short property descriptor for bullet prefixes, e.g. "sun-facing Marina towers" */
  propertyShort: string;
  /** Area-specific line shown under the price table on service x area pages */
  pricingNote: string;
  /** Booking advice used in the area FAQ (never repeats the body's access text) */
  bookingTip: string;
}

/** Service-level facts combined with AreaNotes to build unique service x area pages. */
export interface ServiceNotes {
  /** Short job list for meta descriptions, e.g. "AC cleaning, gas refill, repair and installation" */
  descBits: string;
  typicalJobs: string[];
  /** How the service plays out in apartment districts */
  apartments: string;
  /** How the service plays out in villa communities */
  villas: string;
  /** One practical booking/prep tip */
  tip: string;
  /** Price sentence fragment starting with "from", e.g. "from AED 150 for a split-unit clean" */
  priceLine: string;
}
