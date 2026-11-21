import type { BlogBlock, FAQ } from './types';

/**
 * /same-day/{slug} pages - "I need this trade today" for one service.
 *
 * Built at the owner's request on 2026-11-22 from docs/topical-map.csv.
 *
 * CANNIBALIZATION GUARD: each parent /services/{service} page already ranks
 * for "same day {service} Dubai" and owns that exact title and H1. These pages
 * therefore lead with the urgent / "today" wording, keep their own title and
 * H1, and link to the parent with the same-day anchor so the parent stays the
 * primary page. Do not rename these titles or H1s to "Same-Day {Service} in
 * Dubai".
 *
 * FACTS: only what the site already states (prices from the parent's pricing
 * rows, 4 PM cut-off, 8 AM-10 PM 7 days, no call-out fee, fixed written quote,
 * 30-day guarantee / 90 days on AC repairs, 14 areas). Anything else is written
 * as [ASK OWNER: ...] and must be resolved before the page goes live.
 */
export interface SameDayPage {
  slug: string;
  /** Parent service slug */
  parent: string;
  /** Trade label, e.g. "AC Repair" */
  name: string;
  title: string;
  /** 150-160 characters */
  metaDescription: string;
  h1: string;
  /** Direct answer under the H1 */
  answer: string;
  /** Rows of the parent's pricing table to show */
  priceItems: string[];
  body: BlogBlock[];
  faqs: FAQ[];
  /** Area slugs, linked as /services/{parent}/{area} and /areas/{area} */
  areas: string[];
  /** Sub-service slugs under the parent to link to */
  jobs: string[];
}

const ACCESS: BlogBlock[] = [
  { type: 'h2', text: 'Building access is what decides the arrival time' },
  { type: 'p', text: 'Across the 14 communities we cover, the delay is rarely the drive. It is the security desk, the service lift or the community gate. Tell tower security a contractor is coming and book the service lift if your building requires one. In gated villa communities, send the gate pass or approve the visit in your community app. Give us the tower or villa number when you book so we can register in advance.' },
];

export const sameDayPages: SameDayPage[] = [
  {
    slug: 'ac-repair',
    parent: 'ac-repair',
    name: 'AC Repair',
    title: 'Urgent AC Repair in Dubai Today | Book Before 4 PM | UAE Quick',
    metaDescription:
      'AC stopped cooling? Book before 4 PM and a UAE Quick technician reaches you today. What gets fixed in one visit, what to do while you wait, and fixed prices.',
    h1: 'AC Repair Today in Dubai: Getting a Same-Day Visit',
    answer:
      'If your AC has failed, book before 4 PM and a UAE Quick technician reaches you the same day, between 8 AM and 10 PM, seven days a week. A repair visit starts from AED 200 for diagnosis and labour, a clean is AED 150 per split unit and a gas refill starts from AED 250. The price is fixed in writing before the unit is opened, and there is no call-out fee.',
    priceItems: ['AC Repair', 'AC Cleaning', 'AC Gas Refill', 'AC Duct Cleaning'],
    body: [
      { type: 'h2', text: 'What we usually fix in the first visit' },
      { type: 'p', text: 'Technicians carry gas, common capacitors and drain parts on the van, so most cooling failures are dealt with on the day:' },
      { type: 'ul', items: [
        'AC running but not cooling: usually low gas, a dirty coil or a failing capacitor.',
        'Water leaking from the indoor unit: a blocked condensate drain, cleared and flushed.',
        'Unit tripping the breaker or short-cycling: a capacitor or electrical fault.',
        'Bad smell or weak airflow: mould and dust in the filters and evaporator, removed with a clean.',
        'Loud rattling or buzzing: a loose fan, worn bearings or debris in the outdoor unit.',
      ] },
      { type: 'p', text: 'We service split, ducted and window units, including O General, Daikin, Carrier, Gree, Super General, LG, Samsung and Midea, and the ducted fan coil units common in Dubai villas.' },
      { type: 'h2', text: 'What can need a second visit' },
      { type: 'p', text: 'A same-day visit means the diagnosis happens today. Where a specific part has to be ordered, such as a compressor or a control board for a particular model, the technician tells you the price of the remaining work and books the return before leaving. Whole-villa duct cleaning is quoted on the visit and scheduled, because of the time it takes.' },
      { type: 'h2', text: 'What to do while you wait' },
      { type: 'ol', items: [
        'If the unit is tripping the breaker, leave it off. Resetting it repeatedly can damage the compressor.',
        'If water is dripping, switch the unit off and put a towel or bucket under it to protect the floor and wall.',
        'If it is running but blowing warm air, switch it off. Running a unit that is low on gas makes the fault worse.',
        'Close curtains on sun-facing windows and keep doors shut to hold the cool air you have.',
        'Take a photo of the indoor unit and the model sticker and send it on WhatsApp, so the right parts are on the van.',
      ] },
      { type: 'h2', text: 'What to tell us when you book' },
      { type: 'ul', items: [
        'What the unit is doing: not cooling, leaking, tripping, noisy or completely dead.',
        'The type of system: wall-mounted split, ducted through ceiling vents, or window unit.',
        'How many units are affected. One visit can cover several.',
        'Your building or villa number, and any access rules you know of.',
      ] },
      ...ACCESS,
      { type: 'h2', text: 'What it costs' },
      { type: 'p', text: 'Booking for today costs the same as booking ahead. The technician diagnoses the fault, then gives you a fixed written price covering labour and any parts before starting. You pay once the AC is cooling. AC repairs carry a 90-day warranty: if the same fault returns, we come back free. After-hours emergencies outside 8 AM to 10 PM in peak summer are quoted separately.' },
      { type: 'p', text: 'For full pricing, the brands we cover and annual maintenance plans, see [same-day AC repair in Dubai](/services/ac-repair).' },
      { type: 'p', text: '[ASK OWNER: what is the typical arrival time after a same-day AC booking, for example "within 2 to 4 hours"? The site only says "within hours".]' },
    ],
    faqs: [
      { q: 'How late can I book AC repair for today?', a: 'Book before 4 PM and a technician reaches most Dubai areas the same day. We work 8 AM to 10 PM, seven days a week, including weekends and public holidays. Bookings after 4 PM get the first slot the next morning.' },
      { q: 'Is there a call-out fee for an urgent AC visit?', a: 'No. There is no call-out fee and no same-day surcharge. A repair visit starts from AED 200 for diagnosis and labour, with parts quoted separately before they are fitted.' },
      { q: 'Should I keep my AC running if it is not cooling?', a: 'No. Switch it off. A unit that runs while low on gas or with a blocked coil works the compressor harder, and the compressor is the most expensive part to replace.' },
      { q: 'Will the AC be fixed in one visit?', a: 'Most repairs, cleans and gas refills are done in one visit because the common parts are carried on the van. If a specific part has to be ordered, you get a fixed price for the remaining work and a return visit is booked.' },
      { q: 'Do you repair AC at weekends?', a: 'Yes. AC repair runs from 8 AM to 10 PM, seven days a week, including weekends and public holidays.' },
    ],
    areas: ['dubai-marina', 'business-bay', 'jlt', 'jvc', 'downtown-dubai'],
    jobs: ['gas-refill', 'ac-cleaning', 'duct-cleaning', 'installation'],
  },
  {
    slug: 'plumber',
    parent: 'handyman-plumber',
    name: 'Plumber',
    title: 'Emergency Plumber in Dubai Today | Book Before 4 PM | UAE Quick',
    metaDescription:
      'Leak, dripping tap or blocked sink? Book before 4 PM and a UAE Quick plumber reaches you today. First steps to stop the water, fixed prices, no call-out fee.',
    h1: 'Plumber Today in Dubai: Getting a Same-Day Visit',
    answer:
      'For a leak or a plumbing fault that cannot wait, book before 4 PM and a UAE Quick plumber reaches you the same day, between 8 AM and 10 PM, seven days a week. Leak diagnosis and repair starts from AED 200 with parts extra, and tap or sink repair from AED 150. You get a fixed written price before work starts, with no call-out fee.',
    priceItems: ['Leak Repair', 'Tap / Sink Repair', 'Handyman Hour'],
    body: [
      { type: 'h2', text: 'Stop the water first' },
      { type: 'ol', items: [
        'Close the small angle valve under the sink or behind the toilet if the leak is at one fitting.',
        'If you cannot find it, close the main valve for the apartment or villa.',
        'Switch the water heater off at its isolator if the leak is near it.',
        'Move anything electrical away from the water and mop up, especially on wooden floors.',
        'If water is coming through a ceiling or wall, tell building management as well. The source may be a common pipe or the unit above.',
      ] },
      { type: 'p', text: 'Then send us a photo on WhatsApp. It tells the plumber which parts to bring.' },
      { type: 'h2', text: 'Plumbing jobs we handle the same day' },
      { type: 'ul', items: [
        'Leaks under sinks, behind toilets or from the water heater.',
        'Dripping or loose taps and mixers.',
        'Slow-draining or blocked sinks.',
        'Mouldy or peeling silicone around baths, sinks and kitchen counters that is letting water through.',
        'Water-tank service.',
      ] },
      { type: 'p', text: 'The plumber arrives with tools, transport and common parts, and finishes on the spot wherever the part is on the van.' },
      { type: 'h2', text: 'What can need a second visit' },
      { type: 'p', text: 'A fitting that has to match what is installed, such as a specific mixer cartridge, may need to be sourced. A leak hidden behind tiles or above a ceiling takes longer to trace, and opening it up is quoted before any cutting starts. Wet work in towers can need building-management approval, which we arrange where it is required.' },
      { type: 'h2', text: 'What to tell us when you book' },
      { type: 'ul', items: [
        'Where the water is coming from, and whether you have been able to stop it.',
        'Whether it is a tap, a pipe under a sink, a toilet, the water heater or a ceiling.',
        'Your building or villa number.',
        'Any other small jobs you want done in the same visit.',
      ] },
      ...ACCESS,
      { type: 'h2', text: 'What it costs' },
      { type: 'p', text: 'A same-day plumbing visit costs the same as one booked ahead. Leak diagnosis and repair starts from AED 200 with parts extra, and a tap or sink repair from AED 150. The quote is written and fixed before work begins, there is no call-out fee, and you pay after the job is done. Workmanship is guaranteed for 30 days: if the repair fails again, we return free. After-hours emergencies outside 8 AM to 10 PM are quoted separately.' },
      { type: 'p', text: 'If you have several small tasks, a one-hour slot at AED 120 covers them in one visit. Full details are on our [same-day handyman and plumber service in Dubai](/services/handyman-plumber) page.' },
      { type: 'p', text: '[ASK OWNER: do you repair or replace water heaters on a same-day visit, and what is the starting price? The site lists water-heater leaks as a common problem but gives no price.]' },
      { type: 'p', text: '[ASK OWNER: do you clear blocked drains beyond the sink trap, for example floor drains and main lines, and at what price?]' },
    ],
    faqs: [
      { q: 'Can I get a plumber in Dubai today?', a: 'Yes. Book before 4 PM and a plumber reaches most Dubai areas the same day with tools and common parts. We work 8 AM to 10 PM, seven days a week, including weekends and public holidays.' },
      { q: 'How much does an urgent plumber cost in Dubai?', a: 'Leak diagnosis and repair starts from AED 200 with parts extra, and tap or sink repair from AED 150. There is no call-out fee and no same-day surcharge. The price is fixed in writing before work begins.' },
      { q: 'What should I do about a leak before the plumber arrives?', a: 'Turn the water off at the angle valve or the main valve, switch off the water heater if the leak is near it, move electrical items away and take a photo. Tell building management if water is coming through a ceiling or wall.' },
      { q: 'Do you offer emergency plumbing at night?', a: 'We handle plumbing from 8 AM to 10 PM, seven days a week. After-hours emergencies are quoted separately.' },
      { q: 'Is the plumbing repair guaranteed?', a: 'Yes. Every job carries a 30-day workmanship guarantee. If the same fault returns in that period, we come back and fix it at no charge.' },
    ],
    areas: ['dubai-marina', 'business-bay', 'jlt', 'jvc', 'downtown-dubai'],
    jobs: ['leak-repair', 'tap-sink-repair'],
  },
  {
    slug: 'cleaning',
    parent: 'cleaning',
    name: 'Cleaning',
    title: 'Cleaners Available Today in Dubai | Book Before 4 PM | UAE Quick',
    metaDescription:
      'Need cleaners today? Book before 4 PM and a UAE Quick cleaner or team arrives the same day with all supplies. Hourly from AED 35, deep cleans from AED 450.',
    h1: 'Cleaners Today in Dubai: Booking a Same-Day Clean',
    answer:
      'Book before 4 PM and a UAE Quick cleaner or team reaches you the same day with all supplies and equipment, between 8 AM and 10 PM, seven days a week. Hourly cleaning is AED 35 an hour with a two-hour minimum, a one-bed deep clean starts from AED 450 and a move-out clean from AED 600. The price is fixed before the team starts.',
    priceItems: ['Hourly Cleaning', 'Deep Clean 1BR', 'Deep Clean 2BR', 'Villa Deep Clean', 'Move-In / Move-Out', 'Sofa Shampoo'],
    body: [
      { type: 'h2', text: 'When a same-day clean makes sense' },
      { type: 'ul', items: [
        'Guests are arriving tonight or tomorrow morning.',
        'The landlord or agent has brought the handover inspection forward.',
        'You are moving in and the unit is dustier than expected.',
        'A spill or stain on a sofa or mattress needs treating before it sets.',
        'Painters or a contractor have just finished and left dust behind.',
        'Your regular cleaner has cancelled.',
      ] },
      { type: 'h2', text: 'Which clean to book' },
      { type: 'p', text: 'Choosing the right type matters more when time is short, because it decides how many people we send and how long they need.' },
      { type: 'ul', items: [
        'Hourly cleaning covers a normal tidy and surface clean: floors, kitchen surfaces, bathrooms, dusting. Minimum two hours, supplies included.',
        'A deep clean reaches what an hourly clean does not: inside cupboards and the oven, behind appliances, grout and sealant, skirting, doors, switches, windows from the inside, balconies and AC grilles.',
        'A move-in or move-out clean returns an empty unit to handover condition and follows a room-by-room checklist.',
        'Sofa and mattress shampoo is priced per seat and per mattress and can be added to any of the above.',
      ] },
      { type: 'p', text: 'Tell us the property size and which of these you need and we quote on the spot.' },
      { type: 'h2', text: 'What can need more than today' },
      { type: 'p', text: 'Larger jobs depend on how much of the day is left. Villa deep cleans usually need a bigger team, and a late booking for a large property may be split, with the urgent rooms done today and the rest the next morning. We tell you which when you book, before you commit.' },
      { type: 'p', text: '[ASK OWNER: what is the latest time you will start a full deep clean or a villa clean on the same day, and how many cleaners are in a standard team?]' },
      { type: 'h2', text: 'How to get the most from a short-notice clean' },
      { type: 'ol', items: [
        'Clear floors and surfaces of personal items so the time goes on cleaning, not tidying.',
        'Say which rooms matter most, in case time runs short.',
        'For a move-out clean, the unit needs to be empty. Book it for after the movers have gone.',
        'Mention pets, allergies or a preference for fragrance-free products.',
        'Tell building reception that cleaners are coming and whether they should use the service lift.',
      ] },
      ...ACCESS,
      { type: 'h2', text: 'What it costs' },
      { type: 'p', text: 'There is no surcharge for booking today. Hourly cleaning is AED 35 an hour with a two-hour minimum and supplies included. Deep cleans are priced by size, from AED 450 for a one-bed, AED 650 for a two-bed and AED 1,200 for a three to four bedroom villa. Move-in and move-out cleaning starts at AED 600 for a one-bed, sofa shampoo from AED 50 per seat and mattress cleaning from AED 80.' },
      { type: 'p', text: 'At the end the team walks the property with you and redoes anything you are not happy with. The work is backed by our 30-day guarantee. Full details are on our [same-day cleaning in Dubai](/services/cleaning) page.' },
    ],
    faqs: [
      { q: 'Can I book cleaners for today in Dubai?', a: 'Yes. Book before 4 PM and a cleaner or team reaches most Dubai areas the same day with all supplies and equipment. We work 8 AM to 10 PM, seven days a week.' },
      { q: 'How much does a same-day clean cost?', a: 'The same as a clean booked ahead. Hourly cleaning is AED 35 an hour with a two-hour minimum, deep cleans start from AED 450 for a one-bed and move-out cleaning from AED 600. There is no same-day surcharge.' },
      { q: 'Do the cleaners bring their own supplies?', a: 'Yes. Cleaners arrive with all products and equipment, including a vacuum and extraction gear for upholstery. Tell us in advance if you prefer eco or fragrance-free products.' },
      { q: 'Can I get a move-out clean on the same day?', a: 'Yes, if the unit is empty and you book before 4 PM. Move-out cleaning starts from AED 600 for a one-bed apartment and follows a room-by-room checklist, ending with a walk-through.' },
      { q: 'What if I am not happy with the clean?', a: 'The team walks the property with you at the end and redoes anything you are not satisfied with. The work is also covered by our 30-day guarantee.' },
    ],
    areas: ['dubai-marina', 'business-bay', 'jlt', 'jvc', 'downtown-dubai'],
    jobs: ['move-out-cleaning', 'sofa-mattress-cleaning'],
  },
  {
    slug: 'electrician',
    parent: 'electrician',
    name: 'Electrician',
    title: 'Electrician Available Today in Dubai | Book Before 4 PM | UAE Quick',
    metaDescription:
      'Power tripping or a sparking socket? Book before 4 PM and a UAE Quick electrician reaches you today. What to switch off first, and fixed prices from AED 100.',
    h1: 'Electrician Today in Dubai: Getting a Same-Day Visit',
    answer:
      'For a power fault that cannot wait, book before 4 PM and a UAE Quick electrician reaches you the same day, between 8 AM and 10 PM, seven days a week. A light, socket or switch is AED 100, and breaker diagnosis and replacement starts from AED 200. The electrician isolates the circuit, finds the fault and quotes a fixed price before working, to DEWA safety standards.',
    priceItems: ['Breaker Repair', 'Socket / Switch', 'Light Fitting', 'Appliance Wiring', 'Ceiling Fan'],
    body: [
      { type: 'h2', text: 'If something is unsafe, isolate it first' },
      { type: 'ol', items: [
        'If a socket or switch is sparking, warm or smells of burning, do not use it. Switch off that circuit at the distribution board.',
        'If you are not sure which breaker it is, switch off the main breaker.',
        'Unplug appliances on the affected circuit.',
        'If a breaker trips again as soon as you reset it, leave it off. It is tripping for a reason.',
        'Keep water away from the area, and do not open sockets or the board yourself.',
      ] },
      { type: 'p', text: 'Then call or WhatsApp and describe what is happening: tripping, sparking or no power. We respond within 15 minutes.' },
      { type: 'h2', text: 'Electrical faults we handle the same day' },
      { type: 'ul', items: [
        'A breaker that keeps tripping, or a distribution board that buzzes.',
        'Sockets or switches that spark, feel warm or have stopped working.',
        'Flickering or dead lights.',
        'Frequent power cuts to one room, often an overloaded or faulty circuit.',
        'A new oven, dishwasher or washer that needs proper dedicated wiring.',
      ] },
      { type: 'p', text: 'Work is completed and tested to DEWA safety standards, with common parts carried on the van.' },
      { type: 'h2', text: 'What can need a second visit' },
      { type: 'p', text: 'Full apartment or villa rewiring is quoted after a site visit, because the price depends on the number of points, the routing and whether the board needs upgrading. Some major works in Dubai need DEWA approval or a registered contractor, and we tell you before starting if your job is one of them. Light fittings are supplied by you, so have the fitting on site if you want it installed today.' },
      { type: 'h2', text: 'What to tell us when you book' },
      { type: 'ul', items: [
        'What is happening and where: one socket, one room or the whole home.',
        'Whether a breaker has tripped, and whether it resets.',
        'Whether you noticed it after plugging in or installing a particular appliance.',
        'Apartment or villa, and your building or villa number.',
      ] },
      ...ACCESS,
      { type: 'h2', text: 'What it costs' },
      { type: 'p', text: 'A visit today costs the same as one booked ahead, with no call-out fee. A single light fitting, socket or switch replacement is AED 100. Breaker diagnosis and replacement starts from AED 200, a ceiling fan supplied and installed from AED 200, and appliance wiring from AED 150. The price is fixed before work begins, and workmanship is guaranteed for 30 days.' },
      { type: 'p', text: 'For the full list of electrical work and prices, see our [same-day electrician in Dubai](/services/electrician) page.' },
      { type: 'p', text: '[ASK OWNER: are your electricians, or the company, registered with DEWA as an approved contractor? The site says they "work to DEWA safety standards" and I have not claimed more than that.]' },
    ],
    faqs: [
      { q: 'Can I get an electrician in Dubai today?', a: 'Yes. Book before 4 PM and an electrician reaches most Dubai areas the same day, seven days a week, between 8 AM and 10 PM. The fault is diagnosed and quoted at a fixed price before any work starts.' },
      { q: 'What should I do if my power keeps tripping?', a: 'Unplug the appliances on that circuit and reset the breaker once. If it trips again, leave it off and call an electrician. A breaker that keeps tripping is protecting you from a fault.' },
      { q: 'Is a sparking socket an emergency?', a: 'Treat it as one. Stop using it, switch the circuit off at the distribution board and call us. Power failures, tripping breakers and sparking sockets are handled the same day from 8 AM to 10 PM.' },
      { q: 'How much does an urgent electrician cost in Dubai?', a: 'There is no call-out fee or same-day surcharge. A socket, switch or light fitting is AED 100, and breaker repair or a ceiling fan starts from AED 200. The price is fixed before work begins.' },
      { q: 'Is the electrical work guaranteed?', a: 'Yes. Workmanship is guaranteed for 30 days. If the same fault returns in that time, we come back free.' },
    ],
    areas: ['dubai-marina', 'business-bay', 'jlt', 'jvc', 'downtown-dubai'],
    jobs: [],
  },
  {
    slug: 'handyman',
    parent: 'handyman-plumber',
    name: 'Handyman',
    title: 'Handyman Available Today in Dubai | Book Before 4 PM | UAE Quick',
    metaDescription:
      'Need a handyman today? Book before 4 PM and UAE Quick sends one with tools and transport. Furniture, locks, mounting and small repairs from AED 80, no call-out.',
    h1: 'Handyman Today in Dubai: Getting a Same-Day Visit',
    answer:
      'Book before 4 PM and a UAE Quick handyman reaches you the same day with tools and transport, between 8 AM and 10 PM, seven days a week. Furniture assembly or repair is AED 80 for one item, a door lock change starts from AED 120, and a one-hour slot covering several small jobs is AED 120. You get a written quote first and there is no call-out fee.',
    priceItems: ['Furniture Fixing', 'Handyman Hour', 'Door Lock Change', 'Gypsum Partition'],
    body: [
      { type: 'h2', text: 'Jobs a handyman can do today' },
      { type: 'ul', items: [
        'Furniture assembly and repair, including IKEA and Home Centre flat-pack.',
        'Door lock changes, and locks that stick or need replacing after a move-in.',
        'Shelves, mirrors, pictures, TVs and curtain rails that need secure mounting.',
        'Window and lock fixing, and kitchen shelves.',
        'Silicone sealing around baths, sinks and kitchen counters.',
      ] },
      { type: 'p', text: 'Every handyman arrives with their own tools and personal transport, so there are no supply runs during your booking.' },
      { type: 'h2', text: 'Book by the job or by the hour' },
      { type: 'p', text: 'A single small job, such as one piece of furniture, is AED 80. If you have three to five small tasks, the one-hour slot at AED 120 is the better value, because everything is cleared in one visit. Write the full list before you call. People usually remember the extra jobs once the handyman is already there, and a complete list lets us allow the right amount of time.' },
      { type: 'h2', text: 'What can need a second visit' },
      { type: 'p', text: 'Gypsum partitions and false ceilings are measured and quoted first, then scheduled. In rented units they may also need landlord or building-management approval. Large wardrobe systems and storage beds take longer than a standard slot, so tell us the product name or send a photo of the box and we will say whether it fits today.' },
      { type: 'h2', text: 'How to prepare for a same-day visit' },
      { type: 'ol', items: [
        'Put flat-pack boxes in the room where the furniture will stand, and check nothing is missing from the delivery.',
        'Have the items to be mounted on site: the TV bracket, shelves, curtain rail or mirror.',
        'Decide the exact position for anything going on a wall.',
        'Clear enough floor space to work.',
        'Tell us your building or villa number and any access rules.',
      ] },
      ...ACCESS,
      { type: 'h2', text: 'What it costs' },
      { type: 'p', text: 'A handyman booked for today costs the same as one booked ahead. Small jobs start at AED 80, a door lock change from AED 120 with the lock supplied and installed, and a one-hour slot is AED 120. Gypsum partitions are from AED 350 per square metre. The quote is written and fixed before work begins, there is no call-out fee, and you pay after the job is done. Every job has a 30-day guarantee.' },
      { type: 'p', text: 'For a leak or a dripping tap, see [getting a plumber today](/same-day/plumber). The full service and price list is on our [same-day handyman and plumber in Dubai](/services/handyman-plumber) page.' },
      { type: 'p', text: '[ASK OWNER: what do you charge for TV wall mounting and for curtain rail installation? The site lists both jobs but only prices "small jobs from AED 80".]' },
    ],
    faqs: [
      { q: 'Can I get a handyman in Dubai today?', a: 'Yes. Book before 4 PM and a handyman reaches most Dubai areas the same day with tools and transport. We work 8 AM to 10 PM, seven days a week.' },
      { q: 'How much does a same-day handyman cost?', a: 'Small jobs like furniture fixing start from AED 80, a door lock change from AED 120, and a one-hour slot for several small jobs is AED 120. There is no call-out fee and no same-day surcharge.' },
      { q: 'Can one handyman do several jobs in one visit?', a: 'Yes, and it is the cheapest way to use the service. A one-hour slot at AED 120 typically covers three to five small tasks.' },
      { q: 'Do handymen bring their own tools?', a: 'Yes. Every UAE Quick handyman arrives with their own tools and personal transport.' },
      { q: 'Is handyman work guaranteed?', a: 'Yes. Every job is covered by a 30-day workmanship guarantee. If it fails again, we return free.' },
    ],
    areas: ['dubai-marina', 'business-bay', 'jlt', 'jvc', 'downtown-dubai'],
    jobs: ['furniture-assembly', 'door-lock-change'],
  },
];

export const getSameDayPage = (slug: string): SameDayPage | undefined =>
  sameDayPages.find((p) => p.slug === slug);
