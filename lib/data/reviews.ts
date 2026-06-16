export interface Review {
  author: string;
  area: string;
  service: string;
  rating: number;
  date: string;
  text: string;
}

/** Representative customer reviews used for Review schema and the reviews section. */
export const reviews: Review[] = [
  {
    author: 'Sarah M.',
    area: 'Dubai Marina',
    service: 'AC Repair',
    rating: 5,
    date: '2026-05-12',
    text: 'AC stopped cooling on a Friday in May. They came the same afternoon, found a clogged coil and low gas, quoted before starting and had it cold again within the hour. Fair price, no upsell.',
  },
  {
    author: 'Imran K.',
    area: 'JLT',
    service: 'Handyman & Plumber',
    rating: 5,
    date: '2026-04-28',
    text: 'Booked one handyman hour and got through five jobs - TV mounted, leaking tap fixed, two shelves up and the bathroom re-sealed. Saved me calling separate people. Will use again.',
  },
  {
    author: 'Aisha R.',
    area: 'Arabian Ranches',
    service: 'Garden & Pool',
    rating: 5,
    date: '2026-04-15',
    text: 'We use them weekly for the garden and pool. The same team comes each time, the lawn survived the summer and the pool has stayed clear. Easy monthly billing.',
  },
  {
    author: 'David L.',
    area: 'Business Bay',
    service: 'Office Cleaning',
    rating: 5,
    date: '2026-03-30',
    text: 'Needed an after-hours deep clean for the office. They worked around building service-lift hours and the place was spotless by Monday. Professional and reliable.',
  },
  {
    author: 'Fatima A.',
    area: 'Jumeirah',
    service: 'Movers & Packers',
    rating: 5,
    date: '2026-03-18',
    text: 'Villa move handled really well - packed everything, dismantled the beds and wardrobes and rebuilt them in the new place. Nothing damaged and they handled the building paperwork.',
  },
  {
    author: 'Omar S.',
    area: 'Mirdif',
    service: 'Electrician',
    rating: 5,
    date: '2026-02-22',
    text: 'Breaker kept tripping. The electrician traced it to a faulty socket, replaced it safely and checked the board. Explained everything and the price was exactly as quoted.',
  },
];
