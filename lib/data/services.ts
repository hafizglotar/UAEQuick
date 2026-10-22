import type { Service } from './types';

const allServices: Service[] = [
  {
    slug: 'ac-repair',
    name: 'AC Repair',
    title: 'AC Repair & Maintenance in Dubai',
    category: 'Repair',
    icon: '❄️',
    image: '/services/ac-maintenance.avif',
    shortDescription:
      'Same-day AC repair, cleaning, gas refill and installation across Dubai. Fixed pricing from AED 150.',
    metaTitle: 'AC Repair Dubai | Same-Day AC Service & Gas Refill | UAE Quick',
    metaDescription:
      'AC not cooling? UAE Quick fixes it the same day across Dubai - split & duct AC repair, cleaning, gas refill and installation. Fixed prices from AED 150. Call 050 704 6234.',
    keywords: [
      'AC repair Dubai',
      'AC maintenance Dubai',
      'AC service Dubai',
      'AC gas refill Dubai',
      'AC not cooling Dubai',
      'split AC installation Dubai',
    ],
    startingPrice: 'AED 150',
    hero: {
      headline: 'AC Repair in Dubai - Same-Day, Cooling Back by Evening',
      sub: 'Cleaning, gas refill, repair and installation for split, ducted and window units. Fixed prices from AED 150, parts quoted before we touch the unit, 90-day repair warranty.',
    },
    quickAnswer:
      'AC repair in Dubai with UAE Quick starts at AED 200 for diagnosis and labour; a full split-unit cleaning is AED 150 and a gas refill from AED 250. A technician reaches most Dubai areas the same day and gives a fixed price before any work begins.',
    whatIsIt:
      'AC repair covers diagnosing and fixing a cooling system that has stopped working properly - whether that is a split unit in an apartment, a ducted system in a villa, or a window unit. Typical work includes recharging refrigerant gas, clearing blocked drain lines, replacing capacitors and thermostats, fixing the compressor or fan motor, and deep-cleaning coils and filters that have clogged in Dubai dust.',
    whyNeeded:
      'In Dubai a working AC is not a luxury - between May and September indoor temperatures climb fast and a failed unit becomes urgent within hours. Regular servicing also matters because the city\'s fine dust and high humidity clog filters and coils far quicker than in cooler climates, which raises your DEWA bill and shortens the compressor\'s life. Most cooling failures we see could have been prevented with a clean every 3-4 months.',
    commonProblems: [
      'AC running but not cooling - usually low gas, a dirty coil or a failing compressor',
      'Water leaking from the indoor unit onto the floor or ceiling - a blocked condensate drain',
      'Unit tripping the breaker or short-cycling - capacitor or electrical fault',
      'Bad smell or weak airflow - mould and dust build-up in filters and the evaporator',
      'Loud rattling or buzzing - loose fan, worn bearings or debris in the outdoor unit',
    ],
    localConsiderations:
      'Dubai apartments are typically chiller- or split-cooled, while villas in communities like Arabian Ranches and Jumeirah often run ducted FCU systems that need duct cleaning, not just filter changes. Building management in towers across Business Bay and Dubai Marina usually requires technicians to register at the front desk and work within fixed hours - our team handles that. We also follow DEWA safety standards for any electrical work on the unit.',
    costGuidance:
      'Expect AED 150 for a standard split-unit clean, AED 200+ for a repair visit (diagnosis plus labour, parts extra), and from AED 250 for a gas refill with leak check. Annual maintenance contracts with four visits start at AED 600, which works out cheaper than paying per visit and includes priority booking in summer.',
    features: [
      { icon: '🧊', title: 'AC Cleaning', text: 'Filter, coil and drain clean per split unit. From AED 150.' },
      { icon: '🛢️', title: 'Gas Refill', text: 'Leak check plus refrigerant top-up. From AED 250.' },
      { icon: '🌬️', title: 'Duct Cleaning', text: 'Per duct line - villa systems quoted on site. From AED 400.' },
      { icon: '🔧', title: 'AC Repair', text: 'Diagnosis and labour; parts quoted first. From AED 200.' },
      { icon: '🛠️', title: 'Split Installation', text: 'Indoor + outdoor unit, copper, drainage. From AED 450.' },
      { icon: '📅', title: 'Annual Contract', text: '4 visits a year + priority summer booking. From AED 600.' },
    ],
    pricing: [
      { item: 'AC Cleaning', includes: 'Filter, coil, drain - per split unit', price: 'AED 150' },
      { item: 'AC Gas Refill', includes: 'Leak check + refrigerant top-up', price: 'From AED 250' },
      { item: 'AC Duct Cleaning', includes: 'Per duct line (villa quoted on visit)', price: 'From AED 400' },
      { item: 'Split AC Installation', includes: 'Indoor + outdoor unit, copper, drainage', price: 'From AED 450' },
      { item: 'AC Repair', includes: 'Diagnosis + labour (parts extra)', price: 'From AED 200' },
      { item: 'Annual Maintenance', includes: '4 visits + priority booking', price: 'From AED 600' },
    ],
    process: [
      { title: 'Tell us the symptom', text: 'Call, WhatsApp or send a photo of the unit and the model sticker. We respond within 15 minutes.' },
      { title: 'Fixed quote first', text: 'The technician diagnoses on arrival and gives a written price before opening the unit - no surprise charges.' },
      { title: 'Same-day fix', text: 'Most repairs, cleans and gas refills are done in one visit with parts carried on the van.' },
      { title: '90-day warranty', text: 'Pay after the AC is cooling. If the same fault returns within 90 days, we come back free.' },
    ],
    faqs: [
      { q: 'How much does AC service cost in Dubai?', a: 'A standard split-unit cleaning is AED 150. A repair visit (diagnosis and labour) starts at AED 200 with parts quoted separately, and a gas refill with leak check is from AED 250. You get a fixed written price before any work starts.' },
      { q: 'How often should I clean my AC in Dubai?', a: 'Every 3-4 months. Dubai\'s dust and humidity clog filters and coils far faster than in milder climates, so a quarterly clean keeps the unit cooling efficiently and lowers your DEWA bill. Annual contracts include four visits scheduled across the year.' },
      { q: 'Do you provide emergency AC repair in Dubai?', a: 'Yes. We run AC repair from 8 AM to 10 PM, 7 days a week, including weekends and public holidays, and reach most Dubai areas the same day if you book before 4 PM. After-hours emergencies in peak summer are quoted separately.' },
      { q: 'Do you service all AC brands?', a: 'Yes - O General, Daikin, Carrier, Gree, Super General, LG, Samsung, Midea and the ducted FCU systems common in Dubai villas. Our technicians carry common capacitors, gas and drain parts on the van.' },
      { q: 'Is gas refill included in AC service?', a: 'No. A cleaning service covers the filter, coil and drain. Gas refill is a separate job because it requires a leak check first - there is no point topping up gas that will leak out again. Refill starts at AED 250.' },
      { q: 'Why is my AC running but not cooling?', a: 'The three most common causes in Dubai are low refrigerant gas (often a slow leak), a coil so clogged with dust that air cannot pass, or a failing compressor. A technician can identify which on the first visit and quote the fix before starting.' },
    ],
    relatedServices: ['handyman-plumber', 'electrician', 'cleaning'],
    emergency: true,
  },

  {
    slug: 'handyman-plumber',
    name: 'Handyman & Plumber',
    title: 'Handyman & Plumber in Dubai',
    category: 'Repair',
    icon: '🔧',
    image: '/services/services-imgs.avif',
    shortDescription:
      'Furniture fixing, leak repair, door locks, tap & sink, gypsum work. Same-day, from AED 80.',
    metaTitle: 'Handyman Dubai & Plumber | Same-Day Home Repairs | UAE Quick',
    metaDescription:
      'Same-day handyman and plumber in Dubai. Furniture fixing, leak repair, door locks, tap & sink, gypsum partitions. Fixed pricing from AED 80. Call 050 704 6234.',
    keywords: [
      'handyman Dubai',
      'plumber Dubai',
      'home maintenance Dubai',
      'leak repair Dubai',
      'furniture assembly Dubai',
      'plumbing services Dubai',
    ],
    startingPrice: 'AED 80',
    hero: {
      headline: 'Handyman & Plumber in Dubai - Same-Day Home Repairs',
      sub: 'From a stuck door to a leaking pipe, our handymen and plumbers fix it on the spot. Furniture, leaks, locks, taps, gypsum - from AED 80, same day across Dubai.',
    },
    quickAnswer:
      'A handyman in Dubai with UAE Quick starts at AED 80 for small jobs like furniture fixing, while plumbing leak repair starts at AED 200. One technician with their own tools and transport arrives the same day, and bundling several small jobs into one visit saves the call-out fee.',
    whatIsIt:
      'A handyman and plumber service handles the everyday repair and installation jobs around a home that do not need a specialist trade - assembling and fixing furniture, changing door locks, repairing taps and sinks, fixing leaks, hanging shelves and pictures, sealing silicone, installing gypsum partitions and servicing water tanks.',
    whyNeeded:
      'Dubai homes pick up a steady stream of small faults - flat-pack furniture that needs assembling, silicone that goes mouldy in humid bathrooms, taps that drip, doors that swell and stick. Left alone, a small leak under a sink can warp a kitchen cabinet or seep into a neighbour\'s ceiling, which becomes a building-management issue. One handyman visit clears the backlog before it turns into a bigger bill.',
    commonProblems: [
      'Dripping or loose taps and mixers, and slow-draining or blocked sinks',
      'Leaks under sinks, behind toilets or from the water heater',
      'IKEA / Home Centre furniture that needs assembling or has come loose',
      'Door locks that stick or need changing after a move-in',
      'Mouldy or peeling silicone around baths, sinks and kitchen counters',
      'Shelves, mirrors, TVs and curtain rails that need secure mounting',
    ],
    localConsiderations:
      'In Dubai towers, plumbing and any wet work usually needs to follow building-management rules and DEWA connection standards, and gypsum partitions in rented units may need landlord or management approval - we work to those standards. Hard water across much of Dubai also scales up taps, mixers and water-heater elements faster, which is why tap and sink repairs are one of our most-booked jobs.',
    costGuidance:
      'Small jobs like furniture fixing start at AED 80, a door lock change from AED 120, tap or sink repair from AED 150, and leak diagnosis and repair from AED 200 with parts extra. A one-hour handyman slot is AED 120 and is the best value if you have three to five small tasks to clear in one visit.',
    features: [
      { icon: '🛠️', title: 'Furniture Fixing', text: 'IKEA, Home Centre, custom - assembly and repair. From AED 80.' },
      { icon: '🚪', title: 'Door Lock Change', text: 'Smart locks, traditional locks, padlocks. From AED 120.' },
      { icon: '🚰', title: 'Tap & Sink Repair', text: 'Replace, fix leaks, install new mixers. From AED 150.' },
      { icon: '💧', title: 'Leak Repair', text: 'Pipe, ceiling and water-tank leaks. From AED 200.' },
      { icon: '🪵', title: 'Gypsum Partitions', text: 'Room dividers and false ceilings. From AED 350/m².' },
      { icon: '🖼️', title: 'Mounting & Hanging', text: 'TVs, shelves, mirrors, curtain rails - multiple in one visit.' },
    ],
    pricing: [
      { item: 'Furniture Fixing', includes: 'Assembly or repair (1 item)', price: 'AED 80' },
      { item: 'Door Lock Change', includes: 'Lock supplied & installed', price: 'From AED 120' },
      { item: 'Tap / Sink Repair', includes: 'Replace or fix leak', price: 'From AED 150' },
      { item: 'Leak Repair', includes: 'Diagnosis + fix (parts extra)', price: 'From AED 200' },
      { item: 'Gypsum Partition', includes: 'Per square metre', price: 'From AED 350' },
      { item: 'Handyman Hour', includes: '1 hour, multiple small jobs', price: 'AED 120' },
    ],
    process: [
      { title: 'Tell us the job', text: 'Call, WhatsApp or send a photo. We reply in 15 minutes and confirm a slot.' },
      { title: 'Free quote', text: 'A written quote before any work - and no call-out fee.' },
      { title: 'Same-day fix', text: 'The technician arrives with tools and parts and finishes on the spot.' },
      { title: '30-day guarantee', text: 'Pay after the job is done. If it fails again, we return free.' },
    ],
    faqs: [
      { q: 'How much does a handyman cost in Dubai?', a: 'A handyman starts from AED 80 for small jobs like furniture fixing or curtain installation. Plumbing leak repair starts from AED 200. All prices are fixed and quoted before work begins, with no call-out fee.' },
      { q: 'Do you offer emergency plumbing in Dubai?', a: 'We handle plumbing from 8 AM to 10 PM, 7 days a week, including weekends and public holidays, and reach most areas the same day. After-hours emergencies are quoted separately.' },
      { q: 'What handyman jobs do you handle?', a: 'Furniture assembly and repair, door lock changes, window and lock fixing, kitchen shelves, curtain rails, picture and TV hanging, gypsum partitions, false ceilings, tap and sink work, water-tank service, leak detection and silicone sealing.' },
      { q: 'Do handymen bring their own tools?', a: 'Yes. Every UAE Quick handyman arrives with their own tools and personal transport, so there are no supply runs or delays during your booking.' },
      { q: 'Can I book a handyman for multiple small jobs?', a: 'Yes, and it is the cheapest way to use the service. Bundling small jobs into one visit saves the call-out fee - most one-hour bookings cover three to five small tasks.' },
    ],
    relatedServices: ['ac-repair', 'electrician', 'painting'],
    emergency: true,
  },

  {
    slug: 'electrician',
    name: 'Electrician',
    title: 'Licensed Electrician Services in Dubai',
    category: 'Repair',
    icon: '⚡',
    image: '/services/uaequick-electrician-2.avif',
    shortDescription:
      'DEWA-aware electricians for wiring, lights, sockets, breakers and rewiring. From AED 100.',
    metaTitle: 'Electrician Dubai | Licensed Same-Day Electrical Repairs | UAE Quick',
    metaDescription:
      'Licensed electrician in Dubai for light fitting, sockets, breakers, appliance wiring and full rewiring. Safe, same-day, fixed pricing from AED 100. Call 050 704 6234.',
    keywords: [
      'electrician Dubai',
      'electrical services Dubai',
      'light fitting Dubai',
      'rewiring Dubai',
      'DEWA electrician Dubai',
      'emergency electrician Dubai',
    ],
    startingPrice: 'AED 100',
    hero: {
      headline: 'Licensed Electrician in Dubai - Same-Day Wiring & Repairs',
      sub: 'Lights, sockets, breakers, ceiling fans, appliance wiring and full rewiring - done safely to DEWA standards. Fixed pricing from AED 100, same day across Dubai.',
    },
    quickAnswer:
      'An electrician in Dubai with UAE Quick starts at AED 100 for a light fitting, socket or switch. Breaker and appliance wiring start from AED 150-200, and full apartment rewiring is quoted on site. All work follows DEWA safety standards and most jobs are same-day.',
    whatIsIt:
      'Electrical services cover installing, repairing and making safe the wiring and fittings in a home or office - fitting lights and chandeliers, replacing sockets and switches, installing ceiling fans, diagnosing and replacing tripping breakers (MCBs), wiring in ovens and washers, and full rewiring of older units.',
    whyNeeded:
      'Faulty electrics are a safety risk, not just an inconvenience - a socket that sparks, a breaker that keeps tripping, or warm wiring can lead to fire. In Dubai the heavy AC load through summer puts older circuits and distribution boards under strain, which is when undersized or aged wiring shows up. Getting electrical faults checked by someone who works to DEWA standards protects both your home and your tenancy.',
    commonProblems: [
      'A breaker (MCB) that keeps tripping or a distribution board that buzzes',
      'Sockets or switches that spark, feel warm or have stopped working',
      'Flickering or dead lights, or a chandelier that needs safe installation',
      'A new oven, dishwasher or washer that needs proper dedicated wiring',
      'Frequent power cuts to one room - often an overloaded or faulty circuit',
    ],
    localConsiderations:
      'All fixed electrical work in Dubai falls under DEWA regulations, and major works in some communities need DEWA approval or a registered contractor - our electricians work to those standards and advise when an approval is needed. Villa communities such as Arabian Ranches and Jumeirah often have larger loads and outdoor/garden circuits, while apartment buildings have shared distribution rules set by management.',
    costGuidance:
      'A single light fitting, socket or switch replacement is around AED 100. A ceiling fan supply-and-install is from AED 200, breaker diagnosis and replacement from AED 200, and appliance wiring from AED 150. Full apartment or villa rewiring is quoted after a site visit and typically starts from AED 2,500 depending on size.',
    features: [
      { icon: '💡', title: 'Light & Chandelier Fitting', text: 'Per light supplied by you. From AED 100.' },
      { icon: '🔌', title: 'Sockets & Switches', text: 'Replace per outlet, safely terminated. AED 100.' },
      { icon: '🌀', title: 'Ceiling Fans', text: 'Supply and install. From AED 200.' },
      { icon: '🔋', title: 'Breaker Repair', text: 'Diagnose and replace MCB. From AED 200.' },
      { icon: '🧺', title: 'Appliance Wiring', text: 'Oven, dishwasher, washer. From AED 150.' },
      { icon: '🏠', title: 'Full Rewiring', text: 'Apartment or villa, quoted on site. From AED 2,500.' },
    ],
    pricing: [
      { item: 'Light Fitting', includes: 'Per light (supplied by you)', price: 'AED 100' },
      { item: 'Socket / Switch', includes: 'Replace per outlet', price: 'AED 100' },
      { item: 'Ceiling Fan', includes: 'Supply and install', price: 'From AED 200' },
      { item: 'Breaker Repair', includes: 'Diagnose + replace MCB', price: 'From AED 200' },
      { item: 'Appliance Wiring', includes: 'Oven, dishwasher, washer', price: 'From AED 150' },
      { item: 'Full Rewiring', includes: 'Apartment quoted on visit', price: 'From AED 2,500' },
    ],
    process: [
      { title: 'Describe the fault', text: 'Call or WhatsApp with what is happening - tripping, sparking, no power. We respond in 15 minutes.' },
      { title: 'Safe diagnosis', text: 'The electrician isolates the circuit, finds the fault and quotes a fixed price before working.' },
      { title: 'Repair to standard', text: 'Work is completed and tested to DEWA safety standards, with parts carried on the van.' },
      { title: '30-day guarantee', text: 'Workmanship guaranteed for 30 days. Same fault again? We return free.' },
    ],
    faqs: [
      { q: 'How much does an electrician cost in Dubai?', a: 'A single light fitting, socket or switch is around AED 100. Ceiling fans and breaker repairs start from AED 200, appliance wiring from AED 150, and full rewiring is quoted on site from AED 2,500. Prices are fixed before work begins.' },
      { q: 'Are your electricians DEWA-licensed?', a: 'Our electricians work to DEWA safety standards and are experienced with Dubai distribution boards and building rules. For major works that legally require DEWA approval or a registered contractor, we advise you before starting.' },
      { q: 'Do you handle emergency electrical work in Dubai?', a: 'Yes - power failures, tripping breakers and sparking sockets are handled the same day from 8 AM to 10 PM, 7 days a week. If something is unsafe, isolate the circuit at the main board and call us.' },
      { q: 'Can you install chandeliers and ceiling lights?', a: 'Yes. We install chandeliers, ceiling lights, spotlights and pendant fittings, including the secure fixing needed for heavier chandeliers in high-ceiling villas. You supply the fitting; installation is from AED 100.' },
      { q: 'Do you do full villa or apartment rewiring?', a: 'Yes. Rewiring is quoted after a site visit because price depends on the number of points, the routing and whether the board needs upgrading. Apartment rewiring typically starts from AED 2,500.' },
    ],
    relatedServices: ['ac-repair', 'handyman-plumber', 'painting'],
    emergency: true,
  },

  {
    slug: 'cleaning',
    name: 'Cleaning',
    title: 'Cleaning Services in Dubai',
    category: 'Cleaning',
    icon: '🧽',
    image: '/services/uaequick-villa-cleaning.avif',
    shortDescription:
      'Deep cleaning, villa cleaning, move-in/out and upholstery. Supplies included, from AED 35/hr.',
    metaTitle: 'Cleaning Services Dubai | Deep, Villa & Move-Out Cleaning | UAE Quick',
    metaDescription:
      'Professional cleaning services in Dubai - deep cleaning, villa cleaning, move-in/move-out and sofa shampoo. Supplies included, from AED 35/hr. Call 050 704 6234.',
    keywords: [
      'cleaning services Dubai',
      'deep cleaning Dubai',
      'villa cleaning Dubai',
      'move out cleaning Dubai',
      'maid service Dubai',
      'sofa cleaning Dubai',
    ],
    startingPrice: 'AED 35/hr',
    hero: {
      headline: 'Cleaning Services in Dubai - Deep, Villa & Move-Out',
      sub: 'Trained cleaners with their own supplies and equipment. Hourly cleaning, full deep cleans, move-in/move-out and upholstery - from AED 35/hr across Dubai.',
    },
    quickAnswer:
      'Cleaning in Dubai with UAE Quick starts at AED 35 per hour (minimum two hours, supplies included). A one-bedroom deep clean is from AED 450, a two-bedroom from AED 650, and a 3-4 bedroom villa deep clean from AED 1,200. Cleaners bring all equipment and products.',
    whatIsIt:
      'Cleaning services range from regular hourly maid cleaning to intensive deep cleans that cover every surface - inside cupboards, behind appliances, grout, skirting, windows and balconies. It also includes specialist work like move-in/move-out cleans that return a unit to handover condition, and upholstery shampooing for sofas and mattresses.',
    whyNeeded:
      'Dubai\'s constant fine dust settles on every surface within days, and humidity encourages mould in bathrooms and around AC vents. Regular cleaning keeps that under control, while a deep clean is essential before moving in, after renovation, or at the end of a tenancy - most Dubai landlords and agents expect a professional move-out clean to release the security deposit.',
    commonProblems: [
      'Fine dust building up daily on floors, surfaces and AC grilles',
      'Bathroom grout, sealant and shower screens going mouldy in humidity',
      'Kitchen grease behind the hob and inside cupboards before a move-out',
      'Sofas and mattresses holding dust, stains and odours',
      'Post-renovation dust and paint marks that need a specialist clean',
    ],
    localConsiderations:
      'End-of-tenancy in Dubai almost always requires a professional move-out clean to recover the deposit, and many buildings ask cleaners to register at reception and use the service lift. Villa communities such as Jumeirah and Arabian Ranches usually want larger teams for full deep cleans, while apartment towers in Marina and JLT are mostly hourly and deep-clean bookings.',
    costGuidance:
      'Hourly cleaning is AED 35/hr with a two-hour minimum and supplies included. Deep cleans are priced by size: from AED 450 for a 1-bed, AED 650 for a 2-bed and AED 1,200 for a 3-4 bed villa. Move-in/move-out starts at AED 600 for a one-bed, sofa shampoo from AED 50 per seat and mattress cleaning from AED 80.',
    features: [
      { icon: '🧴', title: 'Hourly Cleaning', text: 'Min 2 hours, supplies included. AED 35/hr.' },
      { icon: '✨', title: 'Deep Cleaning', text: 'Full apartment scrub, top to bottom. From AED 450.' },
      { icon: '🏡', title: 'Villa Deep Clean', text: '3-4 bedroom villa, team of cleaners. From AED 1,200.' },
      { icon: '📦', title: 'Move-In / Move-Out', text: 'Handover-standard clean. From AED 600.' },
      { icon: '🛋️', title: 'Sofa Shampoo', text: 'Per seat, deep extraction. From AED 50.' },
      { icon: '🛏️', title: 'Mattress Cleaning', text: 'Per mattress, sanitised. From AED 80.' },
    ],
    pricing: [
      { item: 'Hourly Cleaning', includes: 'Min 2 hours, supplies included', price: 'AED 35/hr' },
      { item: 'Deep Clean 1BR', includes: 'Full apartment scrub', price: 'From AED 450' },
      { item: 'Deep Clean 2BR', includes: 'Full apartment scrub', price: 'From AED 650' },
      { item: 'Villa Deep Clean', includes: '3-4 bedroom villa', price: 'From AED 1,200' },
      { item: 'Move-In / Move-Out', includes: '1-bed apartment', price: 'From AED 600' },
      { item: 'Sofa Shampoo', includes: 'Per seat', price: 'From AED 50' },
      { item: 'Mattress Cleaning', includes: 'Per mattress', price: 'From AED 80' },
    ],
    process: [
      { title: 'Tell us the space', text: 'Share the property size and what you need - regular, deep or move-out. We quote on the spot.' },
      { title: 'Confirm a slot', text: 'Pick a time; we send a trained, vetted cleaner or team with all supplies and equipment.' },
      { title: 'We clean to a checklist', text: 'Deep and move-out cleans follow a room-by-room checklist so nothing is missed.' },
      { title: 'Walk-through', text: 'We walk the property with you at the end and re-do anything you are not happy with.' },
    ],
    faqs: [
      { q: 'How much do cleaning services cost in Dubai?', a: 'Hourly cleaning is AED 35/hr with a two-hour minimum and supplies included. Deep cleans start from AED 450 (1-bed), AED 650 (2-bed) and AED 1,200 for a 3-4 bed villa. Move-out cleaning starts at AED 600.' },
      { q: 'What is included in a deep clean?', a: 'A deep clean covers everything an hourly clean does not reach - inside cupboards and the oven, behind appliances, grout and sealant, skirting, doors, switches, windows from the inside, balconies and AC grilles. It follows a room-by-room checklist.' },
      { q: 'Do you bring your own cleaning supplies?', a: 'Yes. Cleaners arrive with all products and equipment, including a vacuum and steam/extraction gear for upholstery. If you prefer specific eco or fragrance-free products, just tell us in advance.' },
      { q: 'Do you do move-in / move-out cleaning?', a: 'Yes, and it is one of our most-booked services. A move-out clean returns the unit to handover condition, which is what most Dubai landlords and agents require before releasing the security deposit. From AED 600 for a one-bed.' },
      { q: 'Can I book regular weekly cleaning?', a: 'Yes. Many clients book weekly or twice-weekly hourly cleaning with the same cleaner where possible. Regular bookings get priority slots and a lower effective rate than one-off visits.' },
    ],
    relatedServices: ['pool-maintenance', 'garden-maintenance', 'handyman-plumber'],
  },

  {
    slug: 'movers-packers',
    name: 'Movers & Packers',
    title: 'Movers and Packers in Dubai',
    category: 'Logistics',
    icon: '📦',
    image: '/services/moving.avif',
    shortDescription:
      'Apartment, villa and office moves with packing, dismantling and reassembly. From AED 450.',
    metaTitle: 'Movers and Packers Dubai | Apartment, Villa & Office | UAE Quick',
    metaDescription:
      'Reliable movers and packers in Dubai. Apartment, villa and office moves with packing, dismantling, reassembly and insurance. From AED 450. Call 050 704 6234.',
    keywords: [
      'movers and packers Dubai',
      'movers Dubai',
      'house shifting Dubai',
      'villa movers Dubai',
      'office relocation Dubai',
      'furniture movers Dubai',
    ],
    startingPrice: 'AED 450',
    hero: {
      headline: 'Movers and Packers in Dubai - Apartment, Villa & Office',
      sub: 'Trained movers, padded trucks, full packing and furniture dismantling and reassembly. Transparent per-size pricing from AED 450, with weekend and evening slots.',
    },
    quickAnswer:
      'A move in Dubai with UAE Quick starts at AED 450 for a studio and AED 650 for a one-bedroom apartment, including a truck, movers and basic packing. A full villa move starts from AED 2,500. Packing materials, dismantling and reassembly are included in the quote.',
    whatIsIt:
      'Movers and packers handle the full house or office shift - supplying boxes and wrapping, packing your belongings, dismantling beds, wardrobes and TV units, loading and transporting in a padded truck, then reassembling and placing everything in the new home. It covers local moves within Dubai and relocations to other emirates.',
    whyNeeded:
      'Dubai\'s rental cycle means a lot of people move every one or two years, often at short notice. A professional move protects expensive furniture from damage in the heat and on stairs, handles the heavy lifting safely, and clears the old unit fast so you meet handover deadlines. Buildings also have strict moving rules - service-lift booking, approved hours, deposit - that an experienced crew manages for you.',
    commonProblems: [
      'Heavy wardrobes, beds and marble-top tables that must be dismantled to move',
      'Strict building rules - service-lift booking, allowed hours and a moving deposit',
      'Fragile items (glass, mirrors, electronics) needing proper wrapping',
      'Tight deadlines between handover of the old unit and access to the new one',
      'Last-minute or weekend moves when most companies are fully booked',
    ],
    localConsiderations:
      'Most Dubai towers require you to book the service lift and move within set hours, and many take a refundable moving deposit - our coordinators handle the paperwork with building management. Villa moves in communities like Arabian Ranches or Jumeirah usually need two trucks and a larger crew, while inter-emirate moves to Abu Dhabi or Sharjah are priced separately with travel.',
    costGuidance:
      'Pricing is by property size: studio from AED 450, 1-bed from AED 650, 2-bed from AED 950, 3-bed from AED 1,400 and a villa from AED 2,500 (two trucks, larger crew). Office moves start from AED 1,500 with weekend availability. Quotes include the truck, crew, basic packing materials, and dismantling and reassembly.',
    features: [
      { icon: '📦', title: 'Full Packing', text: 'Boxes, bubble wrap and labelling included in the quote.' },
      { icon: '🛏️', title: 'Dismantle & Reassemble', text: 'Beds, wardrobes and TV units taken apart and rebuilt.' },
      { icon: '🚚', title: 'Padded Trucks', text: 'Clean, covered trucks with blankets and straps.' },
      { icon: '🛡️', title: 'Transit Cover', text: 'Goods-in-transit protection on every move.' },
      { icon: '🏢', title: 'Office Moves', text: 'Out-of-hours and weekend relocations to limit downtime.' },
      { icon: '🌆', title: 'Inter-Emirate', text: 'Moves to Abu Dhabi, Sharjah and the northern emirates.' },
    ],
    pricing: [
      { item: 'Studio', includes: 'Truck + 2 movers + basic packing', price: 'From AED 450' },
      { item: '1-Bed Apartment', includes: 'Truck + 3 movers + packing', price: 'From AED 650' },
      { item: '2-Bed Apartment', includes: 'Truck + 3-4 movers + packing', price: 'From AED 950' },
      { item: '3-Bed Apartment', includes: 'Truck + 4 movers + packing', price: 'From AED 1,400' },
      { item: 'Villa Move', includes: '2 trucks + 5 movers + packing', price: 'From AED 2,500' },
      { item: 'Office Move', includes: 'Per visit, weekend availability', price: 'From AED 1,500' },
    ],
    process: [
      { title: 'Free survey & quote', text: 'Send a video walk-through or book a visit; we give a fixed per-size quote with no hidden extras.' },
      { title: 'We pack & protect', text: 'On moving day the crew packs, wraps fragile items and dismantles furniture.' },
      { title: 'Transport & place', text: 'A padded truck moves everything; we reassemble and place items where you want them.' },
      { title: 'Final check', text: 'We confirm nothing is missing or damaged before signing off. Transit cover applies throughout.' },
    ],
    faqs: [
      { q: 'How much do movers cost in Dubai?', a: 'A studio move starts at AED 450, a 1-bed from AED 650, a 2-bed from AED 950, a 3-bed from AED 1,400 and a villa from AED 2,500. Quotes include the truck, crew, basic packing, and dismantling and reassembly.' },
      { q: 'Do you provide packing materials?', a: 'Yes. Boxes, bubble wrap, packing paper and tape are included in the quote, and our crew packs for you. If you prefer to pack yourself, we can adjust the quote.' },
      { q: 'Do you dismantle and reassemble furniture?', a: 'Yes - beds, wardrobes, TV units, dining tables and office workstations are dismantled before the move and reassembled in the new place as part of the standard service.' },
      { q: 'Are my belongings insured during the move?', a: 'Every move includes goods-in-transit protection. For high-value items we recommend declaring them in advance so they are listed and wrapped accordingly.' },
      { q: 'Can you move on weekends or evenings?', a: 'Yes. We schedule around building service-lift hours and offer weekend and evening slots, which is often essential for office moves that need to avoid working-hour downtime.' },
    ],
    relatedServices: ['cleaning', 'handyman-plumber', 'painting'],
  },

  {
    slug: 'painting',
    name: 'Painting & Partitions',
    title: 'Painting Services & Partitions in Dubai',
    category: 'Improvement',
    icon: '🎨',
    image: '/services/uaequick-painting-1.avif',
    shortDescription:
      'Villa, apartment and office painting, plus gypsum partitions and false ceilings. From AED 350.',
    metaTitle: 'Painting Services Dubai | Villa & Apartment Painters | UAE Quick',
    metaDescription:
      'Professional painting services in Dubai - apartment, villa and office painting, gypsum partitions and false ceilings. Clean, fast, from AED 350. Call 050 704 6234.',
    keywords: [
      'painting services Dubai',
      'painters Dubai',
      'villa painting Dubai',
      'apartment painting Dubai',
      'gypsum partition Dubai',
      'false ceiling Dubai',
    ],
    startingPrice: 'AED 350',
    hero: {
      headline: 'Painting Services in Dubai - Villa, Apartment & Office',
      sub: 'Clean, low-odour painting with proper prep, furniture protection and tidy finishing. Plus gypsum partitions and false ceilings. From AED 350 per room.',
    },
    quickAnswer:
      'Painting in Dubai with UAE Quick starts at AED 350 for a single room (walls and ceiling), from AED 1,500 for a one-bedroom apartment and AED 2,500 for a two-bed. Villa painting is quoted on site from AED 5,000. Gypsum partitions are from AED 350/m² and false ceilings from AED 120/m².',
    whatIsIt:
      'Painting and partition services cover repainting interiors (and exteriors) with proper surface preparation - filling cracks, sanding, priming and applying two coats - as well as building gypsum partitions to divide rooms and installing false ceilings with lighting recesses. It also includes touch-up and end-of-tenancy repainting.',
    whyNeeded:
      'Dubai walls take a beating from AC condensation, humidity and everyday knocks, and many tenancy contracts require a fresh coat of paint at move-out. Repainting also resets a home after years of marks and hairline cracks, while gypsum partitions are a popular way to create a home office or extra bedroom in open-plan Dubai apartments without structural work.',
    commonProblems: [
      'Hairline cracks and filler marks showing through old paint',
      'Patches of damp or mould near AC units and bathroom walls',
      'Scuffed, marked walls that need repainting before a move-out inspection',
      'Open-plan apartments needing a partition for a home office or extra room',
      'Dated ceilings that would benefit from a false ceiling with recessed lighting',
    ],
    localConsiderations:
      'End-of-tenancy repainting is a common contract requirement in Dubai, and many buildings restrict painting to certain hours and require dust sheets in common areas. Gypsum partitions in rented units usually need landlord or building-management approval, which we help arrange. We use low-odour, fast-drying emulsions suited to air-conditioned interiors so rooms are usable quickly.',
    costGuidance:
      'A single room (walls and ceiling, standard emulsion) is from AED 350. A full one-bed apartment is from AED 1,500, a two-bed from AED 2,500 and villa interiors from AED 5,000 quoted on site. Gypsum partitions are from AED 350 per square metre and false ceilings from AED 120 per square metre. Premium and textured paints are quoted on request.',
    features: [
      { icon: '🖌️', title: 'Room Painting', text: 'Walls and ceiling, standard emulsion. From AED 350.' },
      { icon: '🏠', title: 'Full Apartment', text: 'Whole unit, walls and ceilings, proper prep. From AED 1,500.' },
      { icon: '🏡', title: 'Villa Painting', text: 'Interior and exterior, quoted on site. From AED 5,000.' },
      { icon: '🪵', title: 'Gypsum Partitions', text: 'Room dividers and home offices. From AED 350/m².' },
      { icon: '💡', title: 'False Ceilings', text: 'With recessed lighting recesses. From AED 120/m².' },
      { icon: '🛡️', title: 'Full Protection', text: 'Furniture and floors covered, surfaces prepped and primed.' },
    ],
    pricing: [
      { item: 'Single Room', includes: 'Walls + ceiling, standard emulsion', price: 'From AED 350' },
      { item: '1-Bed Apartment', includes: 'Full unit, walls + ceilings', price: 'From AED 1,500' },
      { item: '2-Bed Apartment', includes: 'Full unit, walls + ceilings', price: 'From AED 2,500' },
      { item: 'Villa Painting', includes: 'Interior, quoted on site', price: 'From AED 5,000' },
      { item: 'Gypsum Partition', includes: 'Per square metre', price: 'From AED 350' },
      { item: 'False Ceiling', includes: 'Per square metre', price: 'From AED 120' },
    ],
    process: [
      { title: 'Site visit & quote', text: 'We measure, check the surfaces and give a fixed quote with the paint type clearly stated.' },
      { title: 'Prep & protect', text: 'Furniture and floors are covered; cracks filled, sanded and primed before any colour goes on.' },
      { title: 'Two-coat finish', text: 'Two even coats applied with clean cutting-in around edges, sockets and skirting.' },
      { title: 'Clean handover', text: 'We remove sheets, clean up and walk the rooms with you. Touch-ups included.' },
    ],
    faqs: [
      { q: 'How much does painting cost in Dubai?', a: 'A single room is from AED 350, a one-bed apartment from AED 1,500, a two-bed from AED 2,500 and villa interiors from AED 5,000 quoted on site. Gypsum partitions are from AED 350/m² and false ceilings from AED 120/m².' },
      { q: 'Do you supply the paint or do I?', a: 'Standard emulsion is included in the quoted price. If you want a specific premium brand, colour-matched or textured finish, we will quote the paint separately so you know exactly what you are paying for.' },
      { q: 'How long does a paint job take?', a: 'A single room is usually done in a day, a one-bed apartment in one to two days and a two-bed in two to three days, including prep and two coats. Low-odour, fast-drying emulsions mean rooms are usable quickly.' },
      { q: 'Do you do gypsum partitions and false ceilings?', a: 'Yes. We build gypsum partitions to divide rooms or create a home office (from AED 350/m²) and install false ceilings with recessed lighting (from AED 120/m²). In rented units we help arrange any landlord or management approval.' },
      { q: 'Do you cover furniture and floors?', a: 'Always. Before painting we move or cover furniture, mask edges and lay dust sheets over floors, then clean everything up at the end so the room is ready to use.' },
    ],
    relatedServices: ['handyman-plumber', 'interior-design', 'cleaning'],
  },

  {
    slug: 'interior-design',
    name: 'Interior Design',
    title: 'Interior Design in Dubai',
    category: 'Improvement',
    icon: '🛋️',
    image: '/services/uaequick-interior-restaurant.avif',
    shortDescription:
      'Home, office and restaurant interior design with fit-out, joinery and approvals handled.',
    metaTitle: 'Interior Design Dubai | Home, Office & Restaurant Fit-Out | UAE Quick',
    metaDescription:
      'Bespoke interior design in Dubai for homes, offices and restaurants - concept, joinery, fit-out and approvals handled end to end. Free consultation. Call 050 704 6234.',
    keywords: [
      'interior design Dubai',
      'fit out Dubai',
      'home interior Dubai',
      'office interior design Dubai',
      'restaurant interior Dubai',
      'joinery Dubai',
    ],
    startingPrice: 'Free consultation',
    hero: {
      headline: 'Interior Design in Dubai - Home, Office & Restaurant',
      sub: 'From concept and 3D visuals to joinery, fit-out and authority approvals - managed end to end by one team. Start with a free consultation.',
    },
    quickAnswer:
      'Interior design in Dubai with UAE Quick covers homes, offices and restaurants end to end - concept and 3D visuals, custom joinery, fit-out and authority approvals. The initial consultation is free, and projects are quoted per scope after a site visit and a clear brief.',
    whatIsIt:
      'Interior design is the full process of planning and delivering a space - understanding how you live or work, producing a layout and look (with 3D visuals), specifying materials, lighting and furniture, building custom joinery, and managing the fit-out trades on site. A turnkey service also handles the approvals Dubai authorities and building management require.',
    whyNeeded:
      'Dubai homes and commercial spaces are often handed over as blank shells or dated layouts that do not match how people actually use them. Good interior design makes a space work harder - better storage, light and flow - and for restaurants and offices it directly affects customer experience and brand. Managing it through one team avoids the gaps and finger-pointing that happen when you hire designer, joiner and contractor separately.',
    commonProblems: [
      'A new-build handover shell with no layout, lighting plan or storage',
      'Dated or impractical layouts that waste space and light',
      'Coordinating designer, joiner and contractor separately and things falling between them',
      'Restaurant or office fit-outs that need approvals before opening',
      'Custom joinery (wardrobes, kitchens, reception desks) that off-the-shelf cannot match',
    ],
    localConsiderations:
      'Commercial fit-outs in Dubai need approvals from the relevant authority (DM, Trakhees, DDA or the free-zone), and building management has its own fit-out rules, deposits and working hours - we handle these as part of a turnkey project. Villa communities and apartment towers each have material and façade restrictions, and we design to suit Dubai\'s climate with durable, low-maintenance finishes.',
    costGuidance:
      'The first consultation is free. Design and fit-out are quoted per project after a site visit because cost depends entirely on scope, materials and finish level - a single-room refresh, a full apartment redesign and a restaurant fit-out are very different budgets. You receive an itemised proposal before committing.',
    features: [
      { icon: '✏️', title: 'Concept & 3D', text: 'Mood boards, layouts and photoreal 3D visuals before work starts.' },
      { icon: '🪚', title: 'Custom Joinery', text: 'Wardrobes, kitchens, TV units and reception desks built to spec.' },
      { icon: '🏗️', title: 'Turnkey Fit-Out', text: 'All trades managed on site by one project lead.' },
      { icon: '🍽️', title: 'Restaurant & Café', text: 'Front- and back-of-house design that meets approval standards.' },
      { icon: '🏢', title: 'Office Interiors', text: 'Workspaces, meeting rooms and branding-led reception areas.' },
      { icon: '📋', title: 'Approvals Handled', text: 'Authority and building-management approvals managed for you.' },
    ],
    pricing: [
      { item: 'Design Consultation', includes: 'Site visit, brief, direction', price: 'Free' },
      { item: 'Concept & 3D Package', includes: 'Layout + photoreal visuals', price: 'Quoted per project' },
      { item: 'Apartment Redesign', includes: 'Design + fit-out, per scope', price: 'Quoted on site' },
      { item: 'Villa Interior', includes: 'Full design + fit-out', price: 'Quoted on site' },
      { item: 'Restaurant / Café Fit-Out', includes: 'Design, build, approvals', price: 'Quoted per project' },
      { item: 'Office Fit-Out', includes: 'Workspace design + build', price: 'Quoted per project' },
    ],
    process: [
      { title: 'Free consultation', text: 'We visit, understand how you use the space and agree a brief and rough budget.' },
      { title: 'Concept & 3D', text: 'You see layouts, materials and photoreal 3D visuals before anything is built.' },
      { title: 'Build & fit-out', text: 'One project lead manages joinery and all trades on site, with approvals handled.' },
      { title: 'Handover', text: 'We snag, finish and hand over a space that matches the visuals.' },
    ],
    faqs: [
      { q: 'How much does interior design cost in Dubai?', a: 'It depends entirely on scope, materials and finish, so we quote per project after a free site visit. A single-room refresh, a full apartment redesign and a restaurant fit-out are very different budgets - you get an itemised proposal before committing.' },
      { q: 'Do you handle approvals and permits?', a: 'Yes. For commercial fit-outs we manage the relevant authority approvals (DM, Trakhees, DDA or free-zone) and building-management fit-out requirements, deposits and working hours as part of a turnkey project.' },
      { q: 'Do you supply furniture and joinery?', a: 'Yes. We design and build custom joinery - wardrobes, kitchens, TV units, reception desks - and can source and specify loose furniture, lighting and soft furnishings to match the concept.' },
      { q: 'How long does a typical project take?', a: 'A concept and 3D package takes around two to three weeks; a full apartment design-and-fit-out typically runs six to ten weeks depending on scope and approvals. We give a project timeline with the proposal.' },
      { q: 'Is the consultation really free?', a: 'Yes. The first consultation - site visit, understanding your brief and giving you direction and a rough budget - is free and with no obligation. You only commit once you are happy with the proposal.' },
    ],
    relatedServices: ['painting', 'handyman-plumber', 'ac-repair'],
  },

  {
    slug: 'garden-maintenance',
    name: 'Garden Maintenance',
    title: 'Garden Maintenance in Dubai',
    category: 'Maintenance',
    icon: '🌿',
    image: '/services/garden-maintenance.avif',
    shortDescription:
      'Landscaping, lawn care, irrigation and palm trimming for Dubai villas. From AED 200.',
    metaTitle: 'Garden Maintenance Dubai | Landscaping & Lawn Care | UAE Quick',
    metaDescription:
      'Garden maintenance in Dubai - lawn care, landscaping, irrigation systems and palm tree trimming for villas. Weekly plans from AED 400/mo. Call 050 704 6234.',
    keywords: [
      'garden maintenance Dubai',
      'landscaping Dubai',
      'lawn care Dubai',
      'irrigation Dubai',
      'gardener Dubai',
      'villa garden Dubai',
    ],
    startingPrice: 'AED 200',
    hero: {
      headline: 'Garden Maintenance in Dubai - Landscaping, Lawn Care & Irrigation',
      sub: 'Keep a villa garden green through the Dubai summer - mowing, trimming, weeding, irrigation and palm care on a schedule that suits you. From AED 200.',
    },
    quickAnswer:
      'Garden maintenance in Dubai with UAE Quick starts at AED 200 for a one-off tidy (mow, trim, weed). Regular plans are from AED 400/month bi-weekly or AED 600/month weekly. Irrigation installation is from AED 500 per zone and full landscape design from AED 3,000.',
    whatIsIt:
      'Garden maintenance keeps an outdoor space healthy and tidy - mowing and edging the lawn, trimming hedges and shrubs, weeding, fertilising, pruning and trimming palms, and maintaining or installing the irrigation system that keeps everything alive. It also extends to full landscape design and planting for new or tired gardens.',
    whyNeeded:
      'A Dubai garden cannot survive on rainfall - it depends entirely on irrigation, and in summer a misfiring sprinkler or a few skipped weeks can kill a lawn quickly in 45°C heat. Regular maintenance keeps grass and plants alive, controls the fast-growing weeds the irrigation encourages, and keeps palms safe and tidy. For villa communities, a well-kept garden is also often part of the tenancy expectations.',
    commonProblems: [
      'Lawn drying out or browning in summer from poor or broken irrigation',
      'Sprinkler zones that have stopped working or are watering unevenly',
      'Fast-growing weeds taking over beds and lawn edges',
      'Overgrown hedges, shrubs and palms that need regular trimming',
      'A tired or bare garden that needs replanting or a full redesign',
    ],
    localConsiderations:
      'Watering in Dubai is best done early morning or evening to limit evaporation, and most healthy villa gardens run an automatic drip and sprinkler system - keeping it tuned is the single biggest factor in a green lawn. Communities like Arabian Ranches, Jumeirah, Emirates Hills and The Meadows have the largest gardens and usually book weekly maintenance; smaller townhouse plots in Mirdif and Motor City often suit bi-weekly visits.',
    costGuidance:
      'A one-off clean-up (mow, trim, weed, tidy) is from AED 200. Regular maintenance is from AED 400/month for two visits or AED 600/month for four visits. Irrigation installation is from AED 500 per zone, palm tree trimming from AED 150 per tree, and a full landscape design project from AED 3,000.',
    features: [
      { icon: '🌱', title: 'Lawn Care', text: 'Mowing, edging, weeding and fertilising on schedule.' },
      { icon: '✂️', title: 'Trimming & Pruning', text: 'Hedges, shrubs and seasonal pruning kept tidy.' },
      { icon: '💧', title: 'Irrigation', text: 'Install, repair and tune drip and sprinkler zones. From AED 500.' },
      { icon: '🌴', title: 'Palm Tree Care', text: 'Safe trimming and cleaning per tree. From AED 150.' },
      { icon: '🪴', title: 'Planting & Supply', text: 'Seasonal plants, turf and beds supplied and planted.' },
      { icon: '🎨', title: 'Landscape Design', text: 'Full garden redesign and build. From AED 3,000.' },
    ],
    pricing: [
      { item: 'One-Off Clean', includes: 'Mow, trim, weed, tidy', price: 'From AED 200' },
      { item: 'Weekly Maintenance', includes: '4 visits/month', price: 'From AED 600/mo' },
      { item: 'Bi-Weekly', includes: '2 visits/month', price: 'From AED 400/mo' },
      { item: 'Irrigation Install', includes: 'Per zone', price: 'From AED 500' },
      { item: 'Landscape Design', includes: 'Per project', price: 'From AED 3,000' },
      { item: 'Palm Tree Trim', includes: 'Per tree', price: 'From AED 150' },
    ],
    process: [
      { title: 'Garden assessment', text: 'We look at the size, planting and irrigation and recommend a one-off or a schedule.' },
      { title: 'Agree a plan', text: 'Pick weekly or bi-weekly visits, or a one-off tidy, with a clear monthly price.' },
      { title: 'Regular upkeep', text: 'The same gardener mows, trims, weeds and checks irrigation each visit.' },
      { title: 'Seasonal care', text: 'We adjust watering and planting for summer and winter so the garden stays green.' },
    ],
    faqs: [
      { q: 'How much does garden maintenance cost in Dubai?', a: 'A one-off clean-up is from AED 200. Regular plans are from AED 400/month for two visits or AED 600/month for four. Irrigation work is from AED 500 per zone and palm trimming from AED 150 per tree.' },
      { q: 'Do you do irrigation and sprinkler systems?', a: 'Yes - we install, repair and fine-tune drip and sprinkler zones. In Dubai the irrigation system is the difference between a green lawn and a dead one, so we check and adjust it on every regular visit.' },
      { q: 'Can you supply plants?', a: 'Yes. We supply and plant seasonal flowers, shrubs, turf and trees suited to Dubai\'s climate, and can plan beds and planting as part of a one-off visit or a landscape design project.' },
      { q: 'Do you handle pest control?', a: 'We treat common garden pests and lawn issues as part of maintenance. For indoor or whole-property pest control we can refer you to a licensed specialist.' },
    ],
    relatedServices: ['pool-maintenance', 'cleaning', 'handyman-plumber'],
  },

  {
    slug: 'pool-maintenance',
    name: 'Pool & Jacuzzi',
    title: 'Swimming Pool Maintenance in Dubai',
    category: 'Maintenance',
    icon: '🏊',
    image: '/services/swimming-pool.avif',
    shortDescription:
      'Pool cleaning, chemical balancing, pump repair and jacuzzi service for Dubai villas. From AED 250.',
    metaTitle: 'Swimming Pool Maintenance Dubai | Cleaning & Repair | UAE Quick',
    metaDescription:
      'Swimming pool maintenance in Dubai - cleaning, chemical balancing, pump and filter repair, jacuzzi service and acid wash. Weekly plans from AED 500/mo. Call 050 704 6234.',
    keywords: [
      'swimming pool maintenance Dubai',
      'pool cleaning Dubai',
      'pool service Dubai',
      'jacuzzi service Dubai',
      'pool pump repair Dubai',
      'pool chemicals Dubai',
    ],
    startingPrice: 'AED 250',
    hero: {
      headline: 'Swimming Pool Maintenance in Dubai - Cleaning, Chemicals & Repair',
      sub: 'Keep a villa pool crystal clear and safe to swim - vacuuming, brushing, balanced chemicals, filter and pump care, plus jacuzzi service. From AED 250.',
    },
    quickAnswer:
      'Pool maintenance in Dubai with UAE Quick starts at AED 250 for a one-off clean. Regular plans are from AED 500/month bi-weekly or AED 800/month weekly with chemicals included. Pump repair starts from AED 500 and a full acid wash from AED 1,500. Jacuzzi service is from AED 300.',
    whatIsIt:
      'Pool maintenance keeps the water clean, balanced and safe - vacuuming and brushing the pool, skimming debris, emptying baskets, testing and dosing chemicals (chlorine, pH, alkalinity), backwashing and cleaning filters, and checking the pump and circulation. It also covers repairs to pumps and filters, jacuzzi servicing and deep acid-wash cleaning of tiles.',
    whyNeeded:
      'In Dubai\'s heat, pool water warms up fast and algae and bacteria can take hold within days if chemicals are not balanced - an unmaintained pool turns green or cloudy quickly and becomes unsafe and expensive to recover. Dust and debris also load the filters faster than in cooler climates. Regular service keeps the water swimmable, protects the pump and filter, and avoids the cost of a full shock-and-clean recovery.',
    commonProblems: [
      'Green, cloudy or algae-filled water from unbalanced chemicals',
      'Dust, leaves and debris loading skimmer baskets and filters quickly',
      'Pump not circulating or making noise - bearing or motor fault',
      'Filter pressure high and water not clearing - needs backwash or clean',
      'Heavy scale and staining on tiles needing an acid wash',
    ],
    localConsiderations:
      'Dubai\'s high temperatures and dust mean pools generally need weekly attention in summer, not monthly - chemicals burn off faster in the heat and evaporation changes the water balance. Villa communities such as Jumeirah, Emirates Hills, Arabian Ranches and Palm Jumeirah make up most pool bookings, and many run an automatic dosing and filtration setup that we tune and maintain on each visit.',
    costGuidance:
      'A one-off clean (vacuum, brush, chemical reset) is from AED 250. Regular maintenance is from AED 500/month bi-weekly or AED 800/month weekly with chemicals included. Pump repair is from AED 500, jacuzzi service from AED 300, and a full acid wash to remove scale and staining from AED 1,500.',
    features: [
      { icon: '🧹', title: 'Clean & Vacuum', text: 'Vacuum, brush, skim and empty baskets each visit.' },
      { icon: '⚗️', title: 'Chemical Balancing', text: 'Test and dose chlorine, pH and alkalinity. Included in plans.' },
      { icon: '🔁', title: 'Filter & Backwash', text: 'Clean filters and backwash so water stays clear.' },
      { icon: '🔧', title: 'Pump Repair', text: 'Diagnose and replace pumps and motors. From AED 500.' },
      { icon: '🛁', title: 'Jacuzzi Service', text: 'Jets, filtration and chemicals checked. From AED 300.' },
      { icon: '🧱', title: 'Acid Wash', text: 'Full tile clean to remove scale and stains. From AED 1,500.' },
    ],
    pricing: [
      { item: 'One-Off Pool Clean', includes: 'Vacuum, brush, chemical reset', price: 'From AED 250' },
      { item: 'Weekly Maintenance', includes: '4 visits/month, chemicals included', price: 'From AED 800/mo' },
      { item: 'Bi-Weekly', includes: '2 visits/month', price: 'From AED 500/mo' },
      { item: 'Jacuzzi Service', includes: 'Per visit, jets + chemicals', price: 'From AED 300' },
      { item: 'Pump Repair', includes: 'Diagnose + replace', price: 'From AED 500' },
      { item: 'Acid Wash', includes: 'Full pool tile clean', price: 'From AED 1,500' },
    ],
    process: [
      { title: 'Pool check', text: 'We assess size, equipment and current water condition and recommend a plan.' },
      { title: 'Agree a schedule', text: 'Weekly or bi-weekly visits with a fixed monthly price and chemicals included.' },
      { title: 'Service visit', text: 'Each visit we clean, test and balance chemicals, and check the pump and filter.' },
      { title: 'Report & repair', text: 'You get a quick condition update; any equipment fault is quoted before we fix it.' },
    ],
    faqs: [
      { q: 'How much does pool maintenance cost in Dubai?', a: 'A one-off clean is from AED 250. Regular plans are from AED 500/month bi-weekly or AED 800/month weekly with chemicals included. Pump repair is from AED 500 and a full acid wash from AED 1,500.' },
      { q: 'How often should a pool be cleaned in Dubai?', a: 'Weekly through the hot months. Dubai\'s heat burns off chlorine faster and evaporation shifts the water balance, so weekly service keeps the water safe and clear and prevents the green-water recovery that monthly care often leads to in summer.' },
      { q: 'Do you provide chemicals?', a: 'Yes - chlorine, pH and alkalinity chemicals are included in our weekly and bi-weekly plans, and we test and dose on every visit. One-off cleans include a chemical reset.' },
      { q: 'Can you repair pool pumps and filters?', a: 'Yes. We diagnose and repair or replace pumps, motors and filters, and handle backwashing and filter media changes. Pump repair starts from AED 500 with the fault and cost confirmed before work.' },
      { q: 'Do you service jacuzzis and hot tubs?', a: 'Yes. Jacuzzi service from AED 300 covers cleaning, checking the jets and filtration, and balancing the chemicals so it is safe and ready to use.' },
    ],
    relatedServices: ['garden-maintenance', 'cleaning', 'handyman-plumber'],
  },

  {
    slug: 'vehicle-recovery',
    hidden: true,
    name: 'Vehicle Recovery',
    title: '24/7 Vehicle Recovery in Dubai',
    category: 'Logistics',
    icon: '🚗',
    image: '/services/uaequick-vehicle-recovery.avif',
    shortDescription:
      '24/7 towing, jump start, flat tyre and fuel delivery across Dubai. From AED 100.',
    metaTitle: 'Vehicle Recovery Dubai 24/7 | Towing & Roadside Help | UAE Quick',
    metaDescription:
      '24/7 vehicle recovery in Dubai - towing, jump start, flat tyre help and fuel delivery. Fast roadside response from AED 100. Call 050 704 6234.',
    keywords: [
      'vehicle recovery Dubai',
      'car towing Dubai',
      'roadside assistance Dubai',
      'jump start Dubai',
      'flat tyre Dubai',
      'car recovery Dubai 24/7',
    ],
    startingPrice: 'AED 100',
    hero: {
      headline: '24/7 Vehicle Recovery in Dubai - Towing, Jump Start & Roadside Help',
      sub: 'Broken down, flat battery, flat tyre or out of fuel? We reach you fast, day or night, anywhere in Dubai. Roadside help from AED 100, towing from AED 150.',
    },
    quickAnswer:
      'Vehicle recovery in Dubai with UAE Quick is available 24/7. Jump start, flat tyre help and fuel delivery start at AED 100, local towing within Dubai from AED 150, and inter-emirate towing from AED 500. We aim to reach you fast and accept card payment on the road.',
    whatIsIt:
      'Vehicle recovery and roadside assistance gets a stranded car moving or safely transported - jump-starting a dead battery, changing or inflating a flat tyre, delivering fuel if you run dry, and flatbed towing a vehicle that cannot be driven to a garage, home or another emirate.',
    whyNeeded:
      'A breakdown on a Dubai highway in summer is both dangerous and time-sensitive - stopping in traffic or on the hard shoulder needs a fast, safe recovery. Dead batteries are extremely common because Dubai heat shortens battery life, and a flat tyre at speed or being out of fuel can leave you stuck far from help. A 24/7 recovery line means you are never stranded, day or night.',
    commonProblems: [
      'Dead battery - very common in Dubai heat, especially in summer',
      'Flat or blown tyre on a highway or in a car park',
      'Running out of fuel away from a station',
      'A car that will not start or has broken down and needs towing to a garage',
      'An accident-damaged vehicle that needs safe flatbed recovery',
    ],
    localConsiderations:
      'Breakdowns on Dubai\'s major roads - Sheikh Zayed Road, Al Khail, Emirates Road - need a quick, safe response because stopping in fast traffic is hazardous; move to the hard shoulder, switch on hazards and call. Dubai heat is the main reason batteries fail early, so jump starts are our most frequent roadside call. We tow to any garage you choose and can recover across to Abu Dhabi, Sharjah and the northern emirates.',
    costGuidance:
      'Roadside jobs - jump start, flat tyre, fuel delivery - start at AED 100. Local towing within Dubai is from AED 150 and inter-emirate towing (to Abu Dhabi, Sharjah, etc.) from AED 500. A late-night surcharge of AED 50 applies between 12 AM and 6 AM. We confirm the price before dispatch and accept card payment on the road.',
    features: [
      { icon: '🔋', title: 'Jump Start', text: 'Dead-battery boost to get you moving. From AED 100.' },
      { icon: '🛞', title: 'Flat Tyre', text: 'Change to your spare or inflate on the spot. From AED 100.' },
      { icon: '⛽', title: 'Fuel Delivery', text: '10 litres delivered to your location. From AED 100.' },
      { icon: '🚚', title: 'Local Towing', text: 'Flatbed tow anywhere within Dubai. From AED 150.' },
      { icon: '🌆', title: 'Inter-Emirate Tow', text: 'To Abu Dhabi, Sharjah and beyond. From AED 500.' },
      { icon: '🌙', title: '24/7 Response', text: 'Day or night, with a late-night surcharge after midnight.' },
    ],
    pricing: [
      { item: 'Jump Start', includes: 'Dead battery boost', price: 'From AED 100' },
      { item: 'Flat Tyre', includes: 'Change or inflate', price: 'From AED 100' },
      { item: 'Fuel Delivery', includes: '10L delivered', price: 'From AED 100' },
      { item: 'Local Recovery', includes: 'Tow within Dubai', price: 'From AED 150' },
      { item: 'Inter-Emirate Tow', includes: 'To AUH, SHJ, etc.', price: 'From AED 500' },
      { item: 'After-Midnight', includes: '12 AM-6 AM surcharge', price: '+AED 50' },
    ],
    process: [
      { title: 'Call us', text: 'Tell us your location, the problem and the vehicle. We confirm a fixed price and dispatch.' },
      { title: 'Stay safe', text: 'On a highway, move to the hard shoulder, switch on hazards and stand clear of traffic.' },
      { title: 'We reach you', text: 'The nearest unit comes to you fast for a roadside fix or flatbed recovery.' },
      { title: 'Pay on the road', text: 'Card or cash accepted on site - no need to arrange payment in advance.' },
    ],
    faqs: [
      { q: 'How much does car recovery cost in Dubai?', a: 'Roadside help - jump start, flat tyre, fuel delivery - starts at AED 100. Local towing within Dubai is from AED 150 and inter-emirate towing from AED 500. A AED 50 surcharge applies between 12 AM and 6 AM. The price is confirmed before we dispatch.' },
      { q: 'Are you available 24/7?', a: 'Yes. Vehicle recovery and roadside assistance run 24 hours a day, every day, including weekends and public holidays. A late-night surcharge applies between midnight and 6 AM.' },
      { q: 'How fast do you arrive in Dubai?', a: 'We dispatch the nearest available unit as soon as you call and aim to reach you quickly across Dubai. Exact time depends on your location and traffic - share an accurate location pin to speed it up.' },
      { q: 'Do you tow to any garage?', a: 'Yes. We tow to the garage, dealership, home or location of your choice within Dubai, and can recover across to other emirates from AED 500.' },
      { q: 'Do you accept card payment on the road?', a: 'Yes. We accept both card and cash on site, so there is no need to arrange payment in advance or find an ATM after a breakdown.' },
    ],
    relatedServices: ['handyman-plumber', 'ac-repair', 'electrician'],
  },
];

/**
 * Publicly visible services. Anything flagged `hidden` is excluded here, which
 * removes it from every listing (grid, footer, sitemap, related links) and from
 * `serviceSlugs`, so its /services/[slug] page 404s (dynamicParams is false).
 */
export const services: Service[] = allServices.filter((s) => !s.hidden);

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const serviceSlugs = services.map((s) => s.slug);
