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
  icon: string;
  title: string;
  text: string;
}

export interface Service {
  slug: string;
  /** Short label for navigation and cards */
  name: string;
  /** Page H1 */
  title: string;
  category: 'Maintenance' | 'Repair' | 'Cleaning' | 'Improvement' | 'Logistics';
  icon: string;
  image: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  startingPrice: string;
  hero: { headline: string; sub: string };
  /** AEO: concise, extractable answer for snippets / AI overviews */
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
