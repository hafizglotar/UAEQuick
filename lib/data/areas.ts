import type { Area } from './types';

export const areas: Area[] = [
  {
    slug: 'dubai-marina',
    name: 'Dubai Marina',
    type: 'Apartment district',
    metaTitle: 'Home Services Dubai Marina | AC, Handyman, Cleaning | UAE Quick',
    metaDescription:
      'Same-day AC repair, handyman, plumbing and cleaning in Dubai Marina. High-rise specialists who handle building access and service-lift rules. Call 050 704 6234.',
    shortDescription:
      'Same-day home services for Dubai Marina towers and apartments.',
    intro:
      'Dubai Marina is one of the densest high-rise communities in the city, and the homes here - studios to large apartments across towers like Marina Gate, Princess Tower and Cayan - share the same maintenance realities: AC units working hard against sun-facing glass, plumbing in compact bathrooms, and strict building rules for any technician coming on site. UAE Quick works in Marina daily and knows how each tower handles access.',
    localContext:
      'Marina towers almost always require technicians to register at security, use the service lift and work within set hours, and many have building-management sign-off for plumbing or partition work. Because units are sun-facing and glazed, AC cleaning and gas top-ups are the most common Marina bookings, followed by quick handyman jobs and end-of-tenancy cleans for the area\'s fast-moving rental market.',
    landmarks: ['Marina Walk', 'Marina Mall', 'JBR', 'Marina Gate', 'Pier 7'],
    propertyNotes:
      'Mostly 1-3 bedroom apartments and studios in high-rise towers, with a high turnover of tenants and frequent move-in/move-out cleans.',
    topServices: ['ac-repair', 'handyman-plumber', 'cleaning', 'movers-packers'],
    faqs: [
      { q: 'Do you cover all towers in Dubai Marina?', a: 'Yes - we work across Marina towers including Marina Gate, Princess Tower, Cayan Tower, the Marina Promenade and Marina Quays buildings. Our technicians are used to registering at security and using the service lift.' },
      { q: 'How fast can you reach Dubai Marina?', a: 'For bookings before 4 PM we reach most Marina apartments the same day. Emergency AC and plumbing are prioritised, subject to the building\'s access and service-lift hours.' },
    ],
    responseTime: 'Same-day for bookings before 4 PM',
    nearby: ['jlt', 'palm-jumeirah'],
  },

  {
    slug: 'business-bay',
    name: 'Business Bay',
    type: 'Mixed',
    metaTitle: 'Home Services Business Bay | AC, Handyman, Office Fit-Out | UAE Quick',
    metaDescription:
      'AC repair, handyman, plumbing, cleaning and office fit-out in Business Bay. Same-day for apartments and offices, building rules handled. Call 050 704 6234.',
    shortDescription:
      'Same-day services for Business Bay apartments and offices.',
    intro:
      'Business Bay mixes residential towers with offices along the canal, so the work here splits between apartment maintenance and commercial jobs - AC servicing, plumbing and handyman repairs for residents, plus office cleaning, electrical and fit-out work for the many companies based in the district. UAE Quick handles both, and is used to the after-hours scheduling that office work in Business Bay often needs.',
    localContext:
      'Business Bay buildings are strict on contractor access, service-lift booking and working hours, and office work frequently has to happen in the evening or at weekends to avoid disrupting staff. AC load is high in the glass towers here, and we see a steady mix of residential AC and plumbing calls alongside office painting, partitioning and electrical jobs.',
    landmarks: ['Bay Avenue', 'Dubai Canal', 'The Oberoi', 'Bay Square', 'Marasi Drive'],
    propertyNotes:
      'A mix of 1-3 bedroom apartments and commercial offices in high-rise towers, with significant demand for out-of-hours office work.',
    topServices: ['ac-repair', 'handyman-plumber', 'cleaning', 'electrician'],
    faqs: [
      { q: 'Do you do office maintenance in Business Bay?', a: 'Yes - office cleaning, electrical work, painting, partitioning and handyman repairs, scheduled in the evening or at weekends where needed to avoid disrupting your team.' },
      { q: 'Can you work after hours in Business Bay towers?', a: 'Yes. We coordinate with building management on service-lift hours and after-hours access, which is often essential for office jobs in the district.' },
    ],
    responseTime: 'Same-day for residential; scheduled slots for offices',
    nearby: ['downtown-dubai', 'jlt'],
  },

  {
    slug: 'jlt',
    name: 'JLT (Jumeirah Lakes Towers)',
    type: 'Apartment district',
    metaTitle: 'Home Services JLT | AC, Handyman, Cleaning Jumeirah Lakes | UAE Quick',
    metaDescription:
      'Same-day AC repair, handyman, plumbing and cleaning in JLT (Jumeirah Lakes Towers). Cluster specialists, building access handled. Call 050 704 6234.',
    shortDescription:
      'Same-day home services across all JLT clusters.',
    intro:
      'JLT is built around clusters of towers ringing the lakes, and each cluster has its own buildings, management and access rules. Whether you are in a studio near the metro or a larger apartment overlooking the water, the common jobs are AC servicing, plumbing fixes, quick handyman work and cleaning - and getting a technician in smoothly means knowing how each cluster handles contractor entry. UAE Quick works across all JLT clusters regularly.',
    localContext:
      'JLT towers require security registration and service-lift use, and the cluster layout means giving your tower and cluster letter speeds up arrival. The area has a large, mobile tenant base, so move-in/move-out cleans and handyman snag fixes are very common alongside AC and plumbing calls.',
    landmarks: ['JLT Park', 'DMCC Metro', 'Cluster lakes', 'Almas Tower', 'JLT Walk'],
    propertyNotes:
      'Studios to 3-bed apartments across clustered towers, with high tenant turnover and frequent end-of-tenancy cleans.',
    topServices: ['ac-repair', 'handyman-plumber', 'cleaning', 'movers-packers'],
    faqs: [
      { q: 'Which JLT clusters do you cover?', a: 'All of them - every cluster from A through to the higher letters. Telling us your cluster and tower when you book helps the technician reach you faster.' },
      { q: 'Do you handle JLT building access?', a: 'Yes. Our technicians register at security and use the service lift as each tower requires. Sharing the building name when you book helps us prepare.' },
    ],
    responseTime: 'Same-day for bookings before 4 PM',
    nearby: ['dubai-marina', 'business-bay'],
  },

  {
    slug: 'jvc',
    name: 'JVC (Jumeirah Village Circle)',
    type: 'Mixed',
    metaTitle: 'Home Services JVC | AC, Handyman, Cleaning Jumeirah Village | UAE Quick',
    metaDescription:
      'Same-day AC repair, handyman, plumbing and cleaning in JVC (Jumeirah Village Circle) - apartments, townhouses and villas. Call 050 704 6234.',
    shortDescription:
      'Home services for JVC apartments, townhouses and villas.',
    intro:
      'JVC is a fast-growing community of low- and mid-rise apartment buildings mixed with townhouses and villas, popular with families and first-time buyers. The blend of property types means a wide range of work - AC and plumbing in apartments, plus handyman, garden and full villa maintenance for the townhouses and villas. UAE Quick covers the whole circle, including the newer buildings still bedding in.',
    localContext:
      'Newer JVC buildings sometimes have teething snags - silicone, taps, minor leaks and AC drainage - that show up in the first year, which makes handyman and plumbing among the most-booked jobs here. Townhouse and villa owners add garden maintenance and the occasional pool service to the mix. Access is generally easier than the big towers, with parking close to most buildings.',
    landmarks: ['Circle Mall', 'JVC Community Park', 'Sunset Mall area', 'District centres'],
    propertyNotes:
      'A mix of studio-to-3-bed apartments, townhouses and small villas, many in newer buildings.',
    topServices: ['ac-repair', 'handyman-plumber', 'cleaning', 'garden-maintenance'],
    faqs: [
      { q: 'Do you cover both apartments and villas in JVC?', a: 'Yes. We service JVC apartments, townhouses and villas - AC, plumbing and handyman for apartments, plus garden maintenance and full villa upkeep for the houses.' },
      { q: 'Can you fix snags in a new JVC building?', a: 'Yes, this is one of our most common JVC jobs - first-year snags like silicone, dripping taps, AC drainage and minor leaks. We can usually clear several in one visit.' },
    ],
    responseTime: 'Same-day for bookings before 4 PM',
    nearby: ['sports-city', 'motor-city'],
  },

  {
    slug: 'jumeirah',
    name: 'Jumeirah',
    type: 'Villa community',
    metaTitle: 'Home Services Jumeirah | Villa AC, Handyman, Pool & Garden | UAE Quick',
    metaDescription:
      'Villa home services in Jumeirah - AC and duct repair, handyman, plumbing, pool, garden and cleaning. Same-day, villa specialists. Call 050 704 6234.',
    shortDescription:
      'Villa maintenance across Jumeirah 1, 2 and 3.',
    intro:
      'Jumeirah is a established villa community stretching along the coast, with a mix of older independent villas and renovated family homes. Villas here usually run ducted AC, have gardens and many have pools, so the maintenance need is broader than an apartment - AC and duct work, plumbing across multiple bathrooms, handyman jobs, garden upkeep, pool service and full deep cleans. UAE Quick handles the whole villa, not just one trade.',
    localContext:
      'Older Jumeirah villas often have ducted FCU AC systems that need duct cleaning and occasional larger repairs, and the gardens and pools need regular attention through the summer. Because many homes are independent villas rather than gated compounds, access is straightforward and we can bring larger teams for deep cleans, painting and full maintenance.',
    landmarks: ['Jumeirah Beach', 'Mercato Mall', 'Jumeirah Mosque', 'La Mer', 'Sunset Beach'],
    propertyNotes:
      'Independent and compound villas across Jumeirah 1-3, typically with gardens, pools and ducted AC.',
    topServices: ['ac-repair', 'pool-maintenance', 'garden-maintenance', 'handyman-plumber'],
    faqs: [
      { q: 'Do you maintain ducted AC in Jumeirah villas?', a: 'Yes. Many Jumeirah villas run ducted FCU systems that need duct cleaning and periodic repair rather than just filter changes - our AC team handles both, quoting on site for villa work.' },
      { q: 'Can one company handle my whole Jumeirah villa?', a: 'Yes. We cover AC, plumbing, handyman, pool, garden, painting and cleaning, so you can use one team for the whole property instead of coordinating several contractors.' },
    ],
    responseTime: 'Same-day for bookings before 4 PM',
    nearby: ['al-barsha', 'downtown-dubai'],
  },

  {
    slug: 'downtown-dubai',
    name: 'Downtown Dubai',
    type: 'Apartment district',
    metaTitle: 'Home Services Downtown Dubai | AC, Handyman, Cleaning | UAE Quick',
    metaDescription:
      'Same-day AC repair, handyman, plumbing and cleaning in Downtown Dubai - Burj Khalifa district towers. Building access handled. Call 050 704 6234.',
    shortDescription:
      'Premium-tower home services in Downtown Dubai.',
    intro:
      'Downtown Dubai is the city\'s premium high-rise core around Burj Khalifa and Dubai Mall, with apartments in towers like the Address Residences, Boulevard and Burj Views. Maintenance here is all about high-rise apartments and demanding building management - AC servicing, plumbing, handyman fixes and a high standard of finish on every job. UAE Quick works to the access and presentation standards Downtown buildings expect.',
    localContext:
      'Downtown towers have some of the strictest contractor access in the city - security registration, service-lift booking, approved hours and a tidy, professional standard on site. Sun-facing glass apartments make AC cleaning and gas top-ups frequent, and the area\'s premium rentals drive regular deep and move-out cleans.',
    landmarks: ['Burj Khalifa', 'Dubai Mall', 'Dubai Opera', 'The Boulevard', 'DIFC edge'],
    propertyNotes:
      'High-end 1-3 bedroom apartments and penthouses in premium towers with strict building management.',
    topServices: ['ac-repair', 'handyman-plumber', 'cleaning', 'electrician'],
    faqs: [
      { q: 'Do you work in Downtown towers like the Address and Boulevard?', a: 'Yes. We work across Downtown buildings and follow each tower\'s contractor access, service-lift and presentation rules, which are among the strictest in Dubai.' },
      { q: 'Can you do premium-finish handyman work Downtown?', a: 'Yes. Downtown jobs demand a clean, careful finish - TV mounting, fittings, repairs - and we send experienced technicians who work tidily and protect surfaces.' },
    ],
    responseTime: 'Same-day for bookings before 4 PM',
    nearby: ['business-bay', 'jumeirah'],
  },

  {
    slug: 'al-barsha',
    name: 'Al Barsha',
    type: 'Mixed',
    metaTitle: 'Home Services Al Barsha | AC, Handyman, Villa & Apartment | UAE Quick',
    metaDescription:
      'Same-day AC repair, handyman, plumbing, cleaning and garden in Al Barsha - villas and apartments. Local team, fast response. Call 050 704 6234.',
    shortDescription:
      'Villa and apartment services across Al Barsha.',
    intro:
      'Al Barsha is a central, well-connected community that mixes villa neighbourhoods (Barsha South, Al Barsha 1-3) with apartment buildings near Mall of the Emirates. That mix means a broad workload - full villa maintenance with gardens, plus AC, plumbing and handyman work for apartments. Being central, Al Barsha is one of the areas we can usually reach quickly.',
    localContext:
      'Al Barsha villas commonly have gardens and ducted or split AC across several rooms, so AC, garden and handyman work feature heavily, while the apartment buildings near MOE add cleaning, AC and plumbing calls. The community\'s central location off Sheikh Zayed Road means short response times for same-day jobs.',
    landmarks: ['Mall of the Emirates', 'Al Barsha Pond Park', 'Sharaf DG Metro', 'Barsha Heights edge'],
    propertyNotes:
      'Villas in Al Barsha 1-3 and Barsha South plus mid-rise apartments near Mall of the Emirates.',
    topServices: ['ac-repair', 'handyman-plumber', 'garden-maintenance', 'cleaning'],
    faqs: [
      { q: 'Do you cover Al Barsha villas and apartments?', a: 'Yes - full villa maintenance with gardens across Al Barsha 1-3 and Barsha South, plus AC, plumbing, handyman and cleaning for the apartment buildings near Mall of the Emirates.' },
      { q: 'How quickly can you reach Al Barsha?', a: 'Al Barsha is central and just off Sheikh Zayed Road, so it is one of the areas we can usually reach the same day, often within a few hours for urgent AC or plumbing jobs.' },
    ],
    responseTime: 'Same-day, often within hours',
    nearby: ['jumeirah', 'motor-city'],
  },

  {
    slug: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    type: 'Villa community',
    metaTitle: 'Home Services Palm Jumeirah | Villa AC, Pool, Handyman | UAE Quick',
    metaDescription:
      'Villa and apartment home services on Palm Jumeirah - AC, pool, garden, handyman, plumbing and cleaning. Frond and Shoreline access handled. Call 050 704 6234.',
    shortDescription:
      'Villa and apartment services across Palm Jumeirah.',
    intro:
      'Palm Jumeirah splits into the villa fronds, the Shoreline and Golden Mile apartments, and the newer Palm towers - each with its own access and maintenance profile. Frond villas need the full set: AC and duct work, pool service, garden care and handyman jobs, often with sea-facing exposure that is hard on AC and exteriors. UAE Quick covers the whole Palm, including the gated frond entries.',
    localContext:
      'Frond villas sit behind gated, guarded entries that require visitor registration, and their sea-facing position means AC units and outdoor finishes work hard against salt and humidity. Pool and garden maintenance are in constant demand on the fronds, while the Shoreline and Palm tower apartments add AC, plumbing and cleaning calls. We coordinate frond access in advance to avoid delays at the gate.',
    landmarks: ['Atlantis', 'Nakheel Mall', 'The Pointe', 'Golden Mile', 'Shoreline Apartments'],
    propertyNotes:
      'Frond villas with pools and gardens, plus Shoreline and Palm-tower apartments; gated frond access.',
    topServices: ['pool-maintenance', 'ac-repair', 'garden-maintenance', 'handyman-plumber'],
    faqs: [
      { q: 'Do you service the Palm Jumeirah fronds?', a: 'Yes. We service frond villas - pool, garden, AC, plumbing and handyman - and arrange the gated frond access and visitor registration in advance so the technician is not held up at the gate.' },
      { q: 'Do you maintain villa pools on the Palm?', a: 'Yes, pool maintenance is one of our busiest Palm services. Weekly plans with chemicals included keep frond-villa pools clear through the summer despite the heat and sea exposure.' },
    ],
    responseTime: 'Same-day for bookings before 4 PM',
    nearby: ['dubai-marina', 'jumeirah'],
  },

  {
    slug: 'arabian-ranches',
    name: 'Arabian Ranches',
    type: 'Villa community',
    metaTitle: 'Home Services Arabian Ranches | Villa AC, Garden, Pool | UAE Quick',
    metaDescription:
      'Villa home services in Arabian Ranches - AC and duct repair, garden, pool, handyman, plumbing and painting. Family-villa specialists. Call 050 704 6234.',
    shortDescription:
      'Full villa maintenance across Arabian Ranches.',
    intro:
      'Arabian Ranches is an established gated villa community of family homes with gardens and, in many cases, private pools. The maintenance need is the full villa package - ducted AC across several rooms, garden upkeep that has to fight the summer heat, pool service, plus regular handyman, plumbing and painting work. UAE Quick is set up for villa work here, with teams that can cover a whole property in one visit.',
    localContext:
      'Ranches villas almost all run ducted AC systems, so duct cleaning and FCU servicing matter as much as filter changes, and the large gardens depend entirely on a healthy irrigation system through summer. As a gated community, entry needs visitor registration, which we arrange in advance. Weekly garden and pool plans are common here given the size of the plots.',
    landmarks: ['Arabian Ranches Golf Club', 'The Ranches Souk', 'Dubai Polo Club', 'Community pools'],
    propertyNotes:
      'Family villas with gardens and many with private pools; ducted AC throughout; gated access.',
    topServices: ['ac-repair', 'garden-maintenance', 'pool-maintenance', 'painting'],
    faqs: [
      { q: 'Do you handle ducted AC in Arabian Ranches villas?', a: 'Yes. Ranches villas run ducted FCU systems, so we do duct cleaning and FCU servicing as well as standard maintenance, quoting villa AC work on site after checking the system.' },
      { q: 'Can you maintain my Ranches garden and pool together?', a: 'Yes. Many Ranches owners book weekly or bi-weekly garden and pool plans together, so one team keeps both in good shape through the summer on a single schedule.' },
    ],
    responseTime: 'Same-day for bookings before 4 PM',
    nearby: ['motor-city', 'sports-city'],
  },

  {
    slug: 'mirdif',
    name: 'Mirdif',
    type: 'Villa community',
    metaTitle: 'Home Services Mirdif | Villa AC, Handyman, Garden, Cleaning | UAE Quick',
    metaDescription:
      'Same-day villa home services in Mirdif - AC repair, handyman, plumbing, garden and cleaning. Family-home specialists, fast response. Call 050 704 6234.',
    shortDescription:
      'Villa and townhouse services across Mirdif.',
    intro:
      'Mirdif is a long-established, family-focused community of independent villas and townhouses, including Uptown Mirdif and the surrounding streets. Homes here are lived-in family properties that need steady, practical maintenance - AC servicing, plumbing, handyman work, garden upkeep and regular cleaning - rather than one-off luxury jobs. UAE Quick has a strong base of repeat villa customers in Mirdif.',
    localContext:
      'Mirdif villas are mostly independent homes with gardens and split or ducted AC, and being a settled community the work skews towards reliable, recurring maintenance - AC cleans before summer, garden visits, and handyman fixes around the house. Access is easy with parking outside most villas, so we can bring teams for larger jobs like deep cleans and painting.',
    landmarks: ['Mirdif City Centre', 'Uptown Mirdif', 'Mushrif Park', 'Mirdif 35 area'],
    propertyNotes:
      'Independent villas and townhouses with gardens, popular with families; easy street access and parking.',
    topServices: ['ac-repair', 'handyman-plumber', 'garden-maintenance', 'cleaning'],
    faqs: [
      { q: 'Do you do regular villa maintenance in Mirdif?', a: 'Yes. Many Mirdif families book us for recurring work - pre-summer AC cleans, garden visits and handyman jobs - so the house is maintained steadily rather than only when something breaks.' },
      { q: 'How fast can you reach Mirdif?', a: 'We cover Mirdif daily and reach most homes the same day for bookings before 4 PM, with urgent AC and plumbing jobs prioritised.' },
    ],
    responseTime: 'Same-day for bookings before 4 PM',
    nearby: ['silicon-oasis', 'al-barsha'],
  },

  {
    slug: 'silicon-oasis',
    name: 'Dubai Silicon Oasis',
    type: 'Mixed',
    metaTitle: 'Home Services Silicon Oasis | AC, Handyman, Cleaning | UAE Quick',
    metaDescription:
      'Same-day AC repair, handyman, plumbing and cleaning in Dubai Silicon Oasis (DSO) - apartments, villas and offices. Call 050 704 6234.',
    shortDescription:
      'Apartment, villa and office services in Silicon Oasis.',
    intro:
      'Dubai Silicon Oasis (DSO) is a self-contained community mixing apartment buildings, villa clusters like Cedre Villas, and a large base of offices and tech companies. The work here spans residential AC, plumbing and handyman jobs, villa maintenance with gardens, and commercial cleaning and electrical work for the offices. UAE Quick covers the whole of DSO, residential and commercial.',
    localContext:
      'DSO\'s mid-rise apartment buildings generate steady AC, plumbing and cleaning calls, while the villa clusters add garden and full home maintenance, and the office and free-zone units need cleaning, electrical and handyman support. The community is a little further out, but we schedule efficiently and reach most of DSO the same day.',
    landmarks: ['Cedre Villas', 'Silicon Central Mall', 'DSO HQ', 'Le Solarium', 'Palace Towers'],
    propertyNotes:
      'Mid-rise apartments, Cedre and other villa clusters, plus offices and free-zone units.',
    topServices: ['ac-repair', 'handyman-plumber', 'cleaning', 'electrician'],
    faqs: [
      { q: 'Do you cover Cedre Villas in Silicon Oasis?', a: 'Yes. We service the DSO villa clusters including Cedre Villas - AC, plumbing, handyman, garden and cleaning - as well as the apartment buildings and offices across the community.' },
      { q: 'Do you do office work in Silicon Oasis?', a: 'Yes. We support DSO offices and free-zone units with cleaning, electrical, handyman and painting work, scheduled around your working hours where needed.' },
    ],
    responseTime: 'Same-day for bookings before 4 PM',
    nearby: ['mirdif', 'sports-city'],
  },

  {
    slug: 'motor-city',
    name: 'Motor City',
    type: 'Mixed',
    metaTitle: 'Home Services Motor City | AC, Handyman, Garden, Cleaning | UAE Quick',
    metaDescription:
      'Same-day home services in Motor City - AC repair, handyman, plumbing, garden and cleaning for apartments and townhouses. Call 050 704 6234.',
    shortDescription:
      'Apartment and townhouse services across Motor City.',
    intro:
      'Motor City combines the apartment buildings of Uptown Motor City with townhouse and villa enclaves like Green Community Motor City, all set around green, low-rise streets. The work is a balanced mix - AC, plumbing and handyman jobs in apartments, plus garden and full home maintenance for the townhouses and villas. UAE Quick covers both sides of the community.',
    localContext:
      'Motor City\'s low- and mid-rise buildings make access easy compared with the big towers, and the leafy townhouse areas add regular garden and handyman work to the usual AC and plumbing calls. The community sits near Sports City and Arabian Ranches, so we route teams efficiently across all three.',
    landmarks: ['Uptown Motor City', 'Green Community', 'First Avenue Mall', 'Dubai Autodrome'],
    propertyNotes:
      'Apartment buildings plus townhouses and villas with gardens; low-rise, easy access.',
    topServices: ['ac-repair', 'handyman-plumber', 'garden-maintenance', 'cleaning'],
    faqs: [
      { q: 'Do you cover both apartments and townhouses in Motor City?', a: 'Yes - AC, plumbing and handyman for the Uptown Motor City apartments, plus garden maintenance and full home upkeep for the townhouses and villas in Green Community and nearby.' },
      { q: 'Can you maintain a Motor City garden?', a: 'Yes. Townhouse and villa gardens here book one-off tidies or regular weekly and bi-weekly plans, including irrigation checks to keep lawns green through summer.' },
    ],
    responseTime: 'Same-day for bookings before 4 PM',
    nearby: ['sports-city', 'arabian-ranches'],
  },

  {
    slug: 'sports-city',
    name: 'Dubai Sports City',
    type: 'Mixed',
    metaTitle: 'Home Services Dubai Sports City | AC, Handyman, Cleaning | UAE Quick',
    metaDescription:
      'Same-day AC repair, handyman, plumbing and cleaning in Dubai Sports City - apartments and villas. Local team, fast response. Call 050 704 6234.',
    shortDescription:
      'Apartment and villa services across Dubai Sports City.',
    intro:
      'Dubai Sports City is a community of apartment towers and villa clusters built around its stadiums and academies, popular with families and sharers for its value and space. The typical work is apartment AC, plumbing, handyman and cleaning, plus garden and full home maintenance for the villas. UAE Quick covers the towers and the villa enclaves alike.',
    localContext:
      'Sports City\'s apartment buildings see steady AC, plumbing and end-of-tenancy cleaning demand from a mobile tenant base, while the villa clusters add garden and handyman work. The area neighbours Motor City and JVC, so we schedule across the cluster of communities to keep response times short.',
    landmarks: ['Dubai International Stadium', 'ICC Academy', 'The Els Club', 'Victory Heights edge'],
    propertyNotes:
      'Apartment towers plus villa clusters such as Victory Heights nearby; mixed family and sharer tenants.',
    topServices: ['ac-repair', 'handyman-plumber', 'cleaning', 'garden-maintenance'],
    faqs: [
      { q: 'Do you cover Sports City apartments and villas?', a: 'Yes. We handle AC, plumbing, handyman and cleaning for the apartment towers and add garden and full home maintenance for the surrounding villa clusters.' },
      { q: 'Do you do move-out cleaning in Sports City?', a: 'Yes - move-in/move-out cleaning is common here given the mobile tenant base. A move-out clean returns the unit to handover condition to help release the deposit.' },
    ],
    responseTime: 'Same-day for bookings before 4 PM',
    nearby: ['motor-city', 'jvc'],
  },

  {
    slug: 'emirates-hills',
    name: 'Emirates Hills',
    type: 'Villa community',
    metaTitle: 'Home Services Emirates Hills | Luxury Villa AC, Pool, Garden | UAE Quick',
    metaDescription:
      'Premium villa home services in Emirates Hills - AC and duct care, pool, landscaping, handyman and painting. Discreet, gated-access specialists. Call 050 704 6234.',
    shortDescription:
      'Premium villa maintenance across Emirates Hills.',
    intro:
      'Emirates Hills is Dubai\'s premier gated villa community - large custom mansions with extensive gardens, private pools and high finish levels overlooking the Montgomerie golf course. Maintenance here means a discreet, careful service across the whole estate: ducted AC, landscaping, pool care, handyman and painting, all to a standard that matches the homes. UAE Quick handles Emirates Hills properties with experienced teams and arranged gated access.',
    localContext:
      'Emirates Hills villas are large, custom-built homes with extensive grounds, so AC systems are big and ducted, gardens need serious landscaping and irrigation, and pools need consistent weekly care. The community is strictly gated with guarded entry and a premium on discretion and finish, so we send experienced technicians and arrange visitor access in advance.',
    landmarks: ['Montgomerie Golf Course', 'Emirates Hills lakes', 'The Address Montgomerie', 'Springs/Meadows edge'],
    propertyNotes:
      'Large custom villas and mansions with extensive gardens and private pools; strictly gated, premium finish.',
    topServices: ['ac-repair', 'pool-maintenance', 'garden-maintenance', 'painting'],
    faqs: [
      { q: 'Do you provide premium villa maintenance in Emirates Hills?', a: 'Yes. We service Emirates Hills mansions across AC, pool, landscaping, handyman and painting, sending experienced teams and working to the discretion and finish the community expects.' },
      { q: 'Do you handle gated access in Emirates Hills?', a: 'Yes. We arrange visitor registration and gated entry in advance so the technician or team is cleared at the gate and your service runs to schedule.' },
    ],
    responseTime: 'Same-day for bookings before 4 PM',
    nearby: ['arabian-ranches', 'dubai-marina'],
  },
];

export const getAreaBySlug = (slug: string): Area | undefined =>
  areas.find((a) => a.slug === slug);

export const areaSlugs = areas.map((a) => a.slug);
