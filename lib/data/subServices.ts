import type { BlogBlock, FAQ } from './types';

/**
 * Sub-service pages at /services/{parent}/{slug} - one specific job each.
 *
 * Rules (see TOPICAL_MAP.md):
 * - Prices are never written here as new facts: `priceItems` names rows of the
 *   parent service's pricing table, and the copy only quotes those figures.
 * - A sub-service must not target the parent's "same day {service} Dubai"
 *   keyword or the keyword of an existing blog post.
 * - Slugs must not collide with an area slug (same URL depth as service x area).
 */
export interface SubService {
  parent: string;
  slug: string;
  /** Short label for link blocks, e.g. "AC Gas Refill" */
  name: string;
  /** <title> */
  title: string;
  /** 150-160 characters */
  metaDescription: string;
  h1: string;
  /** Direct answer under the H1, 40-60 words */
  answer: string;
  /** `item` names of rows in the parent service's pricing table */
  priceItems: string[];
  body: BlogBlock[];
  faqs: FAQ[];
  /** Area slugs to link to as /services/{parent}/{area} */
  areas: string[];
}

export const subServices: SubService[] = [
  // ───────────────────────── AC repair ─────────────────────────
  {
    parent: 'ac-repair',
    slug: 'gas-refill',
    name: 'AC Gas Refill',
    title: 'AC Gas Refill in Dubai | From AED 250 | UAE Quick',
    metaDescription:
      'AC gas refill in Dubai from AED 250 with a leak check included. Find out when a top-up is really needed, how the visit works and why gas runs low. Book today.',
    h1: 'AC Gas Refill in Dubai',
    answer:
      'An AC gas refill in Dubai from UAE Quick starts from AED 250 and always includes a leak check, because an AC only loses refrigerant if it is leaking. The technician tests pressures, finds and seals the leak where possible, recharges to the correct level and confirms the cooling before you pay.',
    priceItems: ['AC Gas Refill', 'AC Repair', 'AC Cleaning'],
    body: [
      { type: 'h2', text: 'When an AC actually needs gas' },
      { type: 'p', text: 'Refrigerant is not a fuel and it does not get used up. It circulates in a sealed loop, so a unit that is low on gas has a leak somewhere, usually at a flare joint, a service valve or a corroded section of coil. That is why a top-up on its own only buys a few weeks. The useful questions are how low the system is and where the gas is going.' },
      { type: 'p', text: 'Low gas is also only one of several reasons an AC stops cooling. A dirty coil, a blocked filter or a weak capacitor produce the same complaint, and all three are cheaper to fix. A proper visit rules those out before any refrigerant is added.' },
      { type: 'h3', text: 'Signs that point to low refrigerant' },
      { type: 'ul', items: [
        'Air from the indoor unit is cool but not cold, and the room never reaches the set temperature.',
        'Ice forms on the copper pipe or on the indoor coil.',
        'The outdoor unit runs constantly without cycling off.',
        'A hissing or bubbling sound near the indoor unit or pipework.',
        'The DEWA bill climbs while cooling gets worse.',
      ] },
      { type: 'h2', text: 'What the gas refill visit includes' },
      { type: 'ol', items: [
        'Pressure test with gauges to confirm the system is actually low, and by how much.',
        'Leak check on joints, valves and accessible coil sections.',
        'A fixed written price before any gas is added, including any repair needed to stop the leak.',
        'Recharge with the refrigerant your unit is designed for. Mixing types damages the compressor.',
        'Cooling test at the vents and a final pressure reading before payment.',
      ] },
      { type: 'p', text: 'If the leak is inside a coil that cannot be repaired economically, the technician will say so and quote the alternatives before recharging, so you are not paying for gas that will escape again.' },
      { type: 'h2', text: 'Why gas runs low faster in Dubai' },
      { type: 'p', text: 'Units here run for most of the year, often around the clock in summer. Vibration loosens flare joints over time, and salt-laden humid air near the coast corrodes outdoor coils faster than inland. Units on sun-facing balconies and rooftops work hardest. A clean every three to four months keeps pressures normal and makes a slow leak easier to spot early.' },
      { type: 'p', text: 'If your unit has not been cleaned recently, it is worth combining the refill with [an AC cleaning](/services/ac-repair/ac-cleaning) in the same visit. A blocked coil raises operating pressure and puts extra stress on the same joints that leak.' },
    ],
    faqs: [
      { q: 'How much does an AC gas refill cost in Dubai?', a: 'With UAE Quick an AC gas refill starts from AED 250 and includes a leak check. The final price depends on how much refrigerant the system needs and whether a leak has to be repaired, and it is quoted in writing before any work begins.' },
      { q: 'How often does an AC need a gas refill?', a: 'It should not need one on a schedule. Refrigerant runs in a sealed circuit, so a unit only loses gas if there is a leak. If you are topping up every year, the leak has not been fixed.' },
      { q: 'Can low gas damage my AC?', a: 'Yes. Running low makes the compressor work harder and run hotter, and can cause the indoor coil to ice up. Left long enough, it can lead to compressor failure, which is the most expensive AC repair.' },
    ],
    areas: ['dubai-marina', 'jvc', 'business-bay'],
  },
  {
    parent: 'ac-repair',
    slug: 'duct-cleaning',
    name: 'AC Duct Cleaning',
    title: 'AC Duct Cleaning in Dubai | From AED 400 | UAE Quick',
    metaDescription:
      'AC duct cleaning in Dubai from AED 400 per duct line. For ducted villa systems and apartment FCUs: what gets cleaned, how long it takes and when it is needed.',
    h1: 'AC Duct Cleaning in Dubai',
    answer:
      'AC duct cleaning in Dubai from UAE Quick starts from AED 400 per duct line, with whole villas quoted on a visit. It removes the dust, sand and mould that settle inside ducted systems and blow back into rooms, and it is usually paired with a clean of the fan coil unit that feeds the ducts.',
    priceItems: ['AC Duct Cleaning', 'AC Cleaning', 'Annual Maintenance'],
    body: [
      { type: 'h2', text: 'What duct cleaning is, and what it is not' },
      { type: 'p', text: 'A ducted system has a fan coil unit hidden above the ceiling that pushes cooled air through ducts to grilles in each room. A standard AC clean covers the filter, coil and drain of that unit. Duct cleaning goes further: it cleans the inside of the ductwork itself, plus the supply and return grilles, where dust collects out of reach of a normal service.' },
      { type: 'p', text: 'Split units mounted on the wall have no ducts, so they need [a standard AC clean](/services/ac-repair/ac-cleaning) instead. If you are not sure which system you have, a photo of the vents is enough for us to tell.' },
      { type: 'h2', text: 'Signs your ducts need cleaning' },
      { type: 'ul', items: [
        'Dust settles on furniture again within a day or two of cleaning.',
        'A musty smell when the AC starts, especially after it has been off.',
        'Black or grey marks around the ceiling grilles.',
        'Weak airflow from some rooms while others are fine.',
        'The home has just been renovated, or you have moved into a villa that stood empty.',
        'Family members with allergies or asthma are worse indoors.',
      ] },
      { type: 'h2', text: 'How the visit works' },
      { type: 'ol', items: [
        'Inspection of the fan coil unit, accessible duct runs and every grille, with photos of what is inside.',
        'A fixed written quote per duct line, or for the whole property, before work starts.',
        'Furniture and floors below the grilles are covered.',
        'Grilles are removed and washed. Duct interiors are brushed and vacuumed, and the fan coil unit coil, filter and drain tray are cleaned.',
        'Everything is refitted and the system is run to check airflow in each room.',
      ] },
      { type: 'h2', text: 'Why ducts get dirty quickly in Dubai' },
      { type: 'p', text: 'Fine desert dust gets past filters every time a door or window opens, and construction nearby makes it worse. Humidity then lets that dust hold moisture inside cool ductwork, which is where mould starts. Villas in established communities often have long duct runs installed many years ago that have never been opened.' },
      { type: 'p', text: 'For most homes a duct clean every one to two years is enough, with the fan coil unit cleaned every three to four months in between. An annual maintenance plan covers those regular visits and gives priority booking.' },
    ],
    faqs: [
      { q: 'How much does AC duct cleaning cost in Dubai?', a: 'UAE Quick charges from AED 400 per duct line. Whole-villa cleaning is quoted after a visit, because the price depends on the number of fan coil units, the length of the duct runs and how accessible they are.' },
      { q: 'How often should AC ducts be cleaned?', a: 'Every one to two years for most Dubai homes, and after any renovation or long vacancy. The fan coil unit that feeds the ducts should still be cleaned every three to four months.' },
      { q: 'How long does duct cleaning take?', a: 'A single duct line is usually done within a few hours. A full villa with several fan coil units is typically a full-day job, and we confirm the timing with the written quote.' },
    ],
    areas: ['arabian-ranches', 'jumeirah', 'emirates-hills'],
  },
  {
    parent: 'ac-repair',
    slug: 'ac-cleaning',
    name: 'AC Cleaning',
    title: 'AC Cleaning Service in Dubai | AED 150 per Unit | UAE Quick',
    metaDescription:
      'AC cleaning service in Dubai at AED 150 per split unit: filter, indoor coil, drain line and outdoor unit. See what is included and how often to book a clean.',
    h1: 'AC Cleaning Service in Dubai',
    answer:
      'An AC cleaning service in Dubai from UAE Quick costs AED 150 per split unit and covers the filter, indoor coil and drain line. It restores airflow, stops most water leaks and smells, and lowers running costs. In Dubai dust and humidity, a clean every three to four months keeps a unit working properly.',
    priceItems: ['AC Cleaning', 'Annual Maintenance', 'AC Duct Cleaning'],
    body: [
      { type: 'h2', text: 'What an AC clean covers' },
      { type: 'ul', items: [
        'Filters removed, washed and dried.',
        'Indoor evaporator coil cleaned of the dust and film that block airflow.',
        'Drain tray and condensate drain line flushed so water runs outside instead of down your wall.',
        'Blower and louvres wiped, and the casing cleaned.',
        'Outdoor unit checked, with the condenser coil cleared of dust and debris.',
        'Cooling and drainage tested before the technician leaves.',
      ] },
      { type: 'p', text: 'The price is per split unit. Homes with several units are done in one visit, and ducted systems are priced differently because the unit sits above the ceiling. For those, see [AC duct cleaning](/services/ac-repair/duct-cleaning).' },
      { type: 'h2', text: 'Problems a clean usually fixes' },
      { type: 'p', text: 'Many calls that start as "my AC is broken" end as a cleaning job. A coil coated in dust cannot absorb heat, so the unit runs constantly and still feels weak. A blocked drain line sends condensate back into the room. Mould on the coil and in the tray produces the sour smell some units give off when they start.' },
      { type: 'ul', items: [
        'Weak or uneven airflow.',
        'Water dripping from the indoor unit.',
        'Musty or sour smell.',
        'Unit running all day without reaching temperature.',
        'Higher electricity use than the same months last year.',
      ] },
      { type: 'p', text: 'If a clean does not restore cooling, the fault is usually refrigerant or electrical. The technician will test pressures and tell you whether an [AC gas refill](/services/ac-repair/gas-refill) or a repair is needed, with a price first.' },
      { type: 'h2', text: 'How often to clean an AC in Dubai' },
      { type: 'p', text: 'Every three to four months. That is more often than manufacturers suggest for milder climates, because units here run most of the year and pull in fine dust constantly. Homes near construction, on low floors facing a road, or with pets and smokers benefit from the shorter end of that range.' },
      { type: 'p', text: 'The best time for a full clean is before summer, in March or April, with a follow-up mid-season. An annual maintenance plan spreads four visits across the year and includes priority booking when something does fail.' },
      { type: 'h2', text: 'What you can do between visits' },
      { type: 'p', text: 'Rinsing the mesh filters every few weeks helps and takes five minutes. It does not replace a service, because the coil and drain line behind the filter are where the real build-up happens, and reaching them means opening the unit.' },
    ],
    faqs: [
      { q: 'How much does AC cleaning cost in Dubai?', a: 'UAE Quick charges AED 150 per split unit for a clean covering the filter, coil and drain. Ducted systems are priced from AED 400 per duct line, and an annual plan with four visits starts from AED 600.' },
      { q: 'How long does an AC clean take?', a: 'Most split units are finished in well under an hour each. A home with several units is done in a single visit.' },
      { q: 'Will cleaning stop my AC leaking water?', a: 'In most cases, yes. Water dripping from the indoor unit is usually a blocked condensate drain, which is flushed as part of the clean. If the leak continues, the technician checks the drain slope and tray.' },
    ],
    areas: ['jlt', 'downtown-dubai', 'al-barsha'],
  },
  {
    parent: 'ac-repair',
    slug: 'installation',
    name: 'Split AC Installation',
    title: 'Split AC Installation in Dubai | From AED 450 | UAE Quick',
    metaDescription:
      'Split AC installation in Dubai from AED 450: indoor and outdoor unit, copper piping and drainage. What is included, building rules to check and how to prepare.',
    h1: 'Split AC Installation in Dubai',
    answer:
      'Split AC installation in Dubai from UAE Quick starts from AED 450 and covers mounting the indoor and outdoor units, copper piping, drainage and testing. The technician checks the position, pipe run and power supply first and gives a fixed written price before drilling, including any extra piping your layout needs.',
    priceItems: ['Split AC Installation', 'AC Gas Refill', 'Annual Maintenance'],
    body: [
      { type: 'h2', text: 'What the installation includes' },
      { type: 'ul', items: [
        'Indoor unit mounted level on a wall bracket, positioned for airflow across the room.',
        'Outdoor unit fixed on a bracket or stand with clearance to breathe.',
        'Copper refrigerant piping run between the two, insulated and sealed where it passes through the wall.',
        'Condensate drain routed with a proper fall so water runs away from the building.',
        'Electrical connection to an existing suitable supply, then vacuuming of the lines, pressure check and a full cooling test.',
      ] },
      { type: 'p', text: 'The starting price assumes a standard pipe run between the two units. Longer runs, core drilling through thick walls, a new power line or a rooftop outdoor unit are quoted before work begins, so the figure you approve is the figure you pay.' },
      { type: 'h2', text: 'Before you book: things to check' },
      { type: 'ol', items: [
        'Building rules. Many towers only allow outdoor units in a designated spot, and some require a work permit or a refundable deposit from the management office.',
        'Landlord approval if you rent. New wall penetrations usually need written consent.',
        'Unit size. An undersized unit runs flat out and never cools; an oversized one short-cycles and leaves the room clammy. Tell us the room size and sun exposure.',
        'Power supply. A dedicated AC socket or isolator near the indoor unit avoids extension leads and tripped breakers.',
        'Drain route. The indoor unit needs somewhere for condensate to go.',
      ] },
      { type: 'p', text: 'If the supply needs upgrading, our [electricians](/services/electrician) can do that in the same visit so the installation is not delayed.' },
      { type: 'h2', text: 'Relocating or replacing an existing unit' },
      { type: 'p', text: 'Moving a unit to another room or another home is a different job from a fresh install. The refrigerant has to be pumped down into the outdoor unit first, the pipes disconnected cleanly, and the system vacuumed and tested at the new location. Reusing old copper is possible when it is in good condition and long enough; otherwise new pipework is quoted.' },
      { type: 'p', text: 'When replacing an old unit, the technician checks whether the existing pipes suit the new refrigerant type. Many older systems do not match modern units, and connecting them anyway shortens the life of the new compressor.' },
      { type: 'h2', text: 'After the install' },
      { type: 'p', text: 'You are shown the unit running, the drain flowing and the temperature at the vent before paying. Keep the model sticker photo and the installation date: they make later servicing and any warranty claim with the manufacturer straightforward. Plan the first [AC cleaning](/services/ac-repair/ac-cleaning) three to four months after installation.' },
    ],
    faqs: [
      { q: 'How much does split AC installation cost in Dubai?', a: 'UAE Quick installs split units from AED 450, covering the indoor and outdoor unit, copper and drainage on a standard pipe run. Longer runs, core drilling or electrical work are quoted in writing before the job starts.' },
      { q: 'Do I need permission to install an AC in my apartment?', a: 'Often, yes. Tenants usually need landlord consent for new wall penetrations, and many buildings restrict where outdoor units can go or ask for a work permit. Check with building management before booking.' },
      { q: 'Can you relocate my existing AC unit?', a: 'Yes. The refrigerant is pumped down, the unit is removed and refitted at the new position, then the system is vacuumed and tested. The price depends on the distance and whether new pipework is needed.' },
    ],
    areas: ['jvc', 'silicon-oasis', 'mirdif'],
  },

  // ───────────────────── Handyman & plumber ─────────────────────
  {
    parent: 'handyman-plumber',
    slug: 'leak-repair',
    name: 'Plumbing Leak Repair',
    title: 'Water Leak Repair in Dubai | From AED 200 | UAE Quick',
    metaDescription:
      'Water leak repair in Dubai from AED 200 including diagnosis. Under-sink, toilet, water-heater and ceiling leaks: what to do first and how the repair is priced.',
    h1: 'Water Leak Repair in Dubai',
    answer:
      'Water leak repair in Dubai from UAE Quick starts from AED 200, which covers finding the source and fixing it, with parts quoted separately before fitting. The plumber traces the leak, isolates the water, repairs or replaces the failed joint, hose or valve, and tests it under pressure before leaving.',
    priceItems: ['Leak Repair', 'Tap / Sink Repair', 'Handyman Hour'],
    body: [
      { type: 'h2', text: 'What to do in the first five minutes' },
      { type: 'ol', items: [
        'Turn off the water. Use the angle valve under the sink or behind the toilet if the leak is local, or the main valve for the apartment, usually in the kitchen, a utility cupboard or the corridor riser.',
        'Switch off the water heater at the isolator if the leak is anywhere near it.',
        'Move anything electrical and mop up standing water, especially on wooden or laminate floors.',
        'Take photos. They help the plumber bring the right parts and they matter if building management or a neighbour becomes involved.',
        'Tell building management if water is coming through a ceiling or wall. The source may be a common pipe or the unit above.',
      ] },
      { type: 'h2', text: 'Where leaks usually come from' },
      { type: 'ul', items: [
        'Flexible hoses under sinks and behind toilets, which harden and split with age.',
        'Angle valves and compression joints that have loosened or corroded.',
        'Sink waste traps and overflow fittings.',
        'Water heater connections and the pressure relief valve.',
        'Failed silicone around baths and shower trays, which lets water run behind the tiles.',
        'Washing machine and dishwasher inlet hoses.',
      ] },
      { type: 'p', text: 'A leak at the tap itself, such as a dripping spout or a loose mixer, is usually a smaller job. See [tap and sink repair](/services/handyman-plumber/tap-sink-repair).' },
      { type: 'h2', text: 'How the repair is priced' },
      { type: 'p', text: 'The starting price covers diagnosis and the labour to fix a typical accessible leak. Parts are the variable: a braided hose or angle valve costs little, a mixer cartridge or heater valve costs more. You are told which part has failed and what it costs before it is replaced. There is no call-out fee if you choose not to proceed.' },
      { type: 'p', text: 'Hidden leaks behind tiles or above a ceiling take longer to trace. The plumber will explain what has to be opened to reach the pipe and quote that before starting, so you can involve the landlord or building management first if you need to.' },
      { type: 'h2', text: 'Who is responsible' },
      { type: 'p', text: 'It depends on where the pipe is. Fittings inside your unit are normally the owner or tenant side, while risers and pipes in common areas belong to the building. If the source is unclear, the plumber can tell you which it is, and a short written note of the finding is useful when you speak to the landlord or management office.' },
    ],
    faqs: [
      { q: 'How much does leak repair cost in Dubai?', a: 'UAE Quick charges from AED 200 for leak diagnosis and repair, with parts extra and quoted before fitting. There is no call-out fee, and the price is fixed in writing before work begins.' },
      { q: 'Can you find a hidden leak?', a: 'Yes. The plumber traces damp patches, pressure-tests sections and checks fittings to narrow down the source. If a pipe behind tiles or above a ceiling has to be exposed, that work is quoted first.' },
      { q: 'Should I call building management or a plumber first?', a: 'Stop the water first. If the leak is clearly from a fitting inside your unit, call a plumber. If water is coming through a ceiling or from a common area, tell building management at the same time, since the source may be theirs.' },
    ],
    areas: ['dubai-marina', 'business-bay', 'jlt'],
  },
  {
    parent: 'handyman-plumber',
    slug: 'tap-sink-repair',
    name: 'Tap & Sink Repair',
    title: 'Tap & Sink Repair in Dubai | From AED 150 | UAE Quick',
    metaDescription:
      'Tap and sink repair in Dubai from AED 150. Dripping taps, loose mixers, slow sinks and worn silicone fixed in one visit. See when to repair and when to replace.',
    h1: 'Tap and Sink Repair in Dubai',
    answer:
      'Tap and sink repair in Dubai from UAE Quick starts from AED 150 to fix or replace a tap, mixer or sink fitting. Most dripping taps need a new cartridge or washer, and most slow sinks need the trap cleared. Both are normally finished in one visit, with any parts quoted before they are fitted.',
    priceItems: ['Tap / Sink Repair', 'Leak Repair', 'Handyman Hour'],
    body: [
      { type: 'h2', text: 'Faults we fix at the sink' },
      { type: 'ul', items: [
        'A tap that drips from the spout after it is turned off.',
        'A mixer that is stiff, loose at the base or leaking around the handle.',
        'Low pressure from one tap while others are fine.',
        'A sink that drains slowly or smells.',
        'Water under the sink from the waste, trap or overflow.',
        'A loose sink, or black and peeling silicone around the edge.',
      ] },
      { type: 'h2', text: 'Repair or replace?' },
      { type: 'p', text: 'Most modern mixers use a ceramic cartridge. When it wears, the tap drips or becomes stiff, and replacing the cartridge restores it. That is worth doing when the tap body is sound and the cartridge is a common size. Older taps with rubber washers are similar: a new washer and seat usually stop the drip.' },
      { type: 'p', text: 'Replacement makes more sense when the body is corroded, the finish has failed, or the cartridge is an unusual type that costs nearly as much as a new tap. The technician will show you the worn part and give both prices where both options are realistic. If you have already bought a tap, we fit it.' },
      { type: 'h2', text: 'Why taps and sinks fail faster here' },
      { type: 'p', text: 'Dubai water leaves limescale. It builds up on aerators, which cuts the flow, and inside cartridges, which makes handles stiff and stops them sealing. Unscrewing and soaking the aerator in vinegar every few months keeps pressure up. Humid bathrooms also break down silicone, and once the seal around a sink fails, water gets under the counter and into the cabinet.' },
      { type: 'h2', text: 'What happens on the visit' },
      { type: 'ol', items: [
        'The water is isolated at the angle valves.',
        'The tap or waste is opened and the failed part identified.',
        'You get a fixed price for the repair, including the part, before it is fitted.',
        'The part is replaced, joints are remade and the sink is re-sealed if needed.',
        'Everything is tested for leaks under pressure and the cupboard below is checked dry.',
      ] },
      { type: 'p', text: 'If the technician finds a bigger leak behind the sink or from the supply pipework, that is handled as [plumbing leak repair](/services/handyman-plumber/leak-repair), and priced before any extra work starts.' },
      { type: 'h2', text: 'Add other small jobs to the same visit' },
      { type: 'p', text: 'A tap repair rarely fills a visit. If you also have a wobbly toilet seat, a shower hose to change or a cupboard door to rehang, list them when you book. A one-hour handyman slot covering several small jobs costs less than booking each one separately.' },
    ],
    faqs: [
      { q: 'How much does it cost to fix a dripping tap in Dubai?', a: 'Tap and sink repair with UAE Quick starts from AED 150, covering the labour to fix or replace the fitting. Any cartridge or new tap is quoted before it is installed, and there is no call-out fee.' },
      { q: 'Can you install a tap I bought myself?', a: 'Yes. Tell us the type when you book, such as basin mixer, kitchen mixer or wall-mounted, so the technician brings the right connectors and hoses.' },
      { q: 'Why is my tap pressure low?', a: 'If only one tap is affected, the aerator at the tip is usually clogged with limescale, or the cartridge is blocked. If every tap is weak, the issue is with the supply or the building, which the technician can confirm.' },
    ],
    areas: ['jvc', 'downtown-dubai', 'sports-city'],
  },
  {
    parent: 'handyman-plumber',
    slug: 'door-lock-change',
    name: 'Door Lock Change',
    title: 'Door Lock Change in Dubai | From AED 120 | UAE Quick',
    metaDescription:
      'Door lock change in Dubai from AED 120 with the lock supplied and installed. Cylinder swaps after a move-in, stiff or broken locks and what your landlord needs.',
    h1: 'Door Lock Change in Dubai',
    answer:
      'A door lock change in Dubai from UAE Quick starts from AED 120 with the lock supplied and installed. In most cases only the cylinder needs changing, which keeps the existing handle and takes little time. The technician checks the door type first and confirms a fixed price before replacing anything.',
    priceItems: ['Door Lock Change', 'Handyman Hour', 'Furniture Fixing'],
    body: [
      { type: 'h2', text: 'When to change a lock' },
      { type: 'ul', items: [
        'You have just moved in and do not know how many keys the previous occupant, agent or contractors still hold.',
        'A key has been lost or stolen.',
        'The key sticks, has to be jiggled, or the lock only works from one side.',
        'The latch does not catch, so the door will not stay shut.',
        'A key has snapped in the cylinder.',
        'A tenant has moved out and you want the unit secured before the next viewing.',
      ] },
      { type: 'h2', text: 'Cylinder, full lock or handle set' },
      { type: 'p', text: 'Most apartment and villa doors use a euro cylinder: the barrel the key goes into. Changing the cylinder gives you a new set of keys while leaving the handle and lock case in place, and it is the quickest and cheapest option after a move-in.' },
      { type: 'p', text: 'If the handle sags, the latch is worn or the mechanism inside the door has failed, the lock case or the whole handle set is replaced instead. Bedroom and bathroom doors usually have simpler privacy locks that are swapped as a set. The technician will tell you which applies once the door is open, with the price for each.' },
      { type: 'h3', text: 'Stiff locks are not always the lock' },
      { type: 'p', text: 'In humid months wooden doors swell and frames shift, so the bolt no longer lines up with the strike plate. That feels like a failing lock but is fixed by adjusting the hinges or plate. It is checked first, because it costs less than a replacement.' },
      { type: 'h2', text: 'If you rent' },
      { type: 'p', text: 'Check your tenancy contract or ask the landlord before changing the lock on the main door. Many landlords are fine with a cylinder change at move-in as long as they are told, and some ask for a spare key. Keep the old cylinder and keys so they can be handed back at the end of the tenancy.' },
      { type: 'p', text: 'Electronic and smart locks fitted by the building are a separate case. Those are usually managed by the developer or building management and should be raised with them.' },
      { type: 'h2', text: 'What happens on the visit' },
      { type: 'ol', items: [
        'The door, frame and existing lock are checked, including alignment.',
        'You are shown the options and given a fixed price including the lock.',
        'The cylinder or lock is replaced and the door is tested from both sides.',
        'You receive the full set of new keys.',
      ] },
      { type: 'p', text: 'New home, long list? A lock change pairs well with [furniture assembly](/services/handyman-plumber/furniture-assembly), curtain rails and TV mounting in one visit.' },
    ],
    faqs: [
      { q: 'How much does a lock change cost in Dubai?', a: 'UAE Quick changes door locks from AED 120 with the lock supplied and installed. Higher-security cylinders or a full handle set cost more, and the price is confirmed before the old lock is removed.' },
      { q: 'Do I need to replace the whole lock?', a: 'Usually not. If the handle and mechanism work, changing only the cylinder gives you new keys at the lowest cost. A full replacement is only needed when the mechanism or handle is worn or broken.' },
      { q: 'Can a tenant change the door lock in Dubai?', a: 'Check the tenancy contract and inform the landlord first. Many allow a cylinder change at move-in. Keep the original cylinder and keys to return when you leave.' },
    ],
    areas: ['business-bay', 'jvc', 'motor-city'],
  },
  {
    parent: 'handyman-plumber',
    slug: 'furniture-assembly',
    name: 'Furniture Assembly',
    title: 'Furniture Assembly in Dubai | From AED 80 | UAE Quick',
    metaDescription:
      'Furniture assembly in Dubai from AED 80 per item. IKEA, Home Centre and flat-pack beds, wardrobes and desks built, fixed to the wall and repaired in one visit.',
    h1: 'Furniture Assembly in Dubai',
    answer:
      'Furniture assembly in Dubai from UAE Quick starts at AED 80 for one item, covering assembly or repair. Larger pieces such as sliding wardrobes take longer and are quoted from the product name or a photo. For several items, a one-hour handyman slot at AED 120 is usually the better value.',
    priceItems: ['Furniture Fixing', 'Handyman Hour', 'Door Lock Change'],
    body: [
      { type: 'h2', text: 'What we assemble' },
      { type: 'ul', items: [
        'Beds, including storage and ottoman frames, and cots.',
        'Wardrobes, including hinged and sliding-door systems.',
        'Desks, office chairs, bookcases and shelving units.',
        'TV units, sideboards, chests of drawers and bedside tables.',
        'Dining tables and chairs.',
        'Outdoor furniture for balconies and gardens.',
      ] },
      { type: 'p', text: 'It does not matter where the furniture came from. IKEA, Home Centre, Pan Home, online marketplaces and items delivered without instructions are all fine. Send the product name or a photo of the box when you book and the technician will know what the job involves.' },
      { type: 'h2', text: 'How it is priced' },
      { type: 'p', text: 'A single straightforward item is AED 80. If you have several pieces, booking by time works out cheaper: a one-hour handyman slot is AED 120 and covers as many small items as fit in the hour. Large or complex pieces, such as a full wardrobe system or a storage bed, are quoted individually so you know the cost before the visit.' },
      { type: 'h2', text: 'Fixing furniture to the wall' },
      { type: 'p', text: 'Tall units should be anchored. Wardrobes, bookcases and chests of drawers can tip if a child climbs them or a heavy drawer is pulled out. The anchor depends on the wall: many Dubai apartments have plasterboard partitions or hollow block, which need different fixings from solid concrete. The technician checks the wall and uses fixings rated for the load.' },
      { type: 'h2', text: 'Repairs and re-assembly' },
      { type: 'p', text: 'The same price covers repairing one item. Common fixes include wardrobe doors that have dropped or will not close, drawer runners that have come loose, wobbling bed frames and chairs, and cam-lock fittings that have pulled out of chipboard. Where a panel is damaged beyond repair, you are told before any time is spent on it.' },
      { type: 'p', text: 'Moving home? Furniture that was built in the room often has to come apart to fit through the door. We dismantle before the move and rebuild afterwards. For a full move, our [movers and packers](/services/movers-packers) include dismantling and reassembly as part of the job.' },
      { type: 'h2', text: 'How to prepare' },
      { type: 'ol', items: [
        'Put the boxes in the room where the furniture will stand.',
        'Clear enough floor space to lay out the largest panel.',
        'Check the delivery is complete. Missing boxes are the usual reason a build cannot be finished.',
        'Decide exactly where tall units go, so they can be anchored once.',
        'List any other small jobs, such as curtain rails, shelves or a [lock change](/services/handyman-plumber/door-lock-change), to use the visit fully.',
      ] },
    ],
    faqs: [
      { q: 'How much does furniture assembly cost in Dubai?', a: 'UAE Quick charges AED 80 to assemble or repair one item. For several pieces, a one-hour handyman slot at AED 120 is usually cheaper. Large wardrobes and storage beds are quoted individually.' },
      { q: 'Do you assemble IKEA furniture?', a: 'Yes, along with Home Centre, Pan Home and any other flat-pack furniture, including items bought online or second-hand without instructions.' },
      { q: 'Can you dismantle and rebuild furniture for a move?', a: 'Yes. We take apart beds, wardrobes and desks before the move and rebuild them at the new home, and can fix tall units to the wall at the same time.' },
    ],
    areas: ['jvc', 'silicon-oasis', 'dubai-marina'],
  },

  // ───────────────────────── Cleaning ─────────────────────────
  {
    parent: 'cleaning',
    slug: 'move-out-cleaning',
    name: 'Move-In / Move-Out Cleaning',
    title: 'Move-Out Cleaning Service in Dubai | From AED 600 | UAE Quick',
    metaDescription:
      'Move-out cleaning service in Dubai from AED 600 for a one-bed. A full handover clean with supplies, a room-by-room checklist and a final walk-through with you.',
    h1: 'Move-Out Cleaning Service in Dubai',
    answer:
      'A move-out cleaning service in Dubai from UAE Quick starts from AED 600 for a one-bed apartment, with supplies and equipment included. A team cleans the empty unit to handover standard, inside cupboards and appliances included, and walks it with you at the end so anything missed is redone before the inspection.',
    priceItems: ['Move-In / Move-Out', 'Deep Clean 2BR', 'Villa Deep Clean', 'Sofa Shampoo'],
    body: [
      { type: 'h2', text: 'What is included' },
      { type: 'ul', items: [
        'Kitchen: oven, hob and extractor degreased, cupboards and drawers cleaned inside, fridge wiped out, sink and taps descaled.',
        'Bathrooms: grout and sealant scrubbed, shower screens descaled, toilets, basins, mirrors and extractor grilles cleaned.',
        'All rooms: built-in wardrobes cleaned inside, skirting, doors, handles and switches wiped, windows cleaned from the inside.',
        'Floors vacuumed and mopped to the edges, including behind and under appliances.',
        'AC grilles dusted and wiped.',
        'Balcony floor, railings and glass washed.',
      ] },
      { type: 'p', text: 'The team works to a room-by-room checklist. Larger apartments and villas are priced by size, and the quote is fixed before the day.' },
      { type: 'h2', text: 'Move-out and move-in are different jobs' },
      { type: 'p', text: 'A move-out clean is about passing an inspection. The landlord or agent compares the unit with the move-in report, and cleaning that falls short is deducted from the security deposit. The priorities are the places inspectors check: oven interiors, bathroom sealant, AC grilles and the insides of cupboards.' },
      { type: 'p', text: 'A move-in clean is about hygiene and dust. Even a newly handed-over unit has construction dust in cupboards and on ledges, and a previously occupied one needs kitchens and bathrooms sanitised before your belongings go in. It is easiest done while the unit is still empty, the day before your furniture arrives.' },
      { type: 'h2', text: 'When to book it' },
      { type: 'ol', items: [
        'After the movers have gone. The unit needs to be empty for a handover clean.',
        'After any repairs. Filling holes and touching up paint creates dust, so do those first.',
        'Before the inspection, with a day in hand if you can, in case the landlord asks for anything extra.',
      ] },
      { type: 'p', text: 'For a room-by-room list of what agents look at, and how the handover fits around cancelling the tenancy contract, read our [move-out cleaning checklist for Ejari handover](/blog/move-out-cleaning-checklist-ejari-handover-dubai).' },
      { type: 'h2', text: 'What a clean cannot fix' },
      { type: 'p', text: 'Cleaning removes dirt, not damage. Nail holes, scuffed paint, a dripping tap or a blown bulb are noted separately on an inspection. A short visit from our [handyman and plumber team](/services/handyman-plumber) before the clean deals with those. If furniture stays with the unit, [sofa and mattress cleaning](/services/cleaning/sofa-mattress-cleaning) can be added to the same booking.' },
      { type: 'h2', text: 'The walk-through' },
      { type: 'p', text: 'When the team finishes, they walk the unit with you. Open the oven, check the cupboards, look at the bathroom sealant. Anything you are not happy with is redone then, and the work is covered by our 30-day guarantee if the inspection raises a cleaning point afterwards.' },
    ],
    faqs: [
      { q: 'How much does move-out cleaning cost in Dubai?', a: 'UAE Quick charges from AED 600 for a one-bed apartment, including supplies and equipment. Larger apartments and villas are quoted by size, with a fixed price agreed before the clean.' },
      { q: 'Does the unit need to be empty?', a: 'For a move-out clean, yes. The team needs access to floors, cupboards and the areas behind furniture and appliances. Book the clean for after the movers have finished.' },
      { q: 'What if the landlord is not satisfied after the clean?', a: 'Tell us. The work carries a 30-day guarantee, so if the inspection raises a cleaning issue we return and put it right at no charge.' },
    ],
    areas: ['jlt', 'dubai-marina', 'business-bay'],
  },
  {
    parent: 'cleaning',
    slug: 'sofa-mattress-cleaning',
    name: 'Sofa & Mattress Cleaning',
    title: 'Sofa & Mattress Cleaning in Dubai | From AED 50 | UAE Quick',
    metaDescription:
      'Sofa cleaning in Dubai from AED 50 per seat and mattress cleaning from AED 80. Shampoo and extraction at your home for dust, stains and odours. Dry in hours.',
    h1: 'Sofa and Mattress Cleaning in Dubai',
    answer:
      'Sofa cleaning in Dubai from UAE Quick starts from AED 50 per seat, and mattress cleaning from AED 80 per mattress. The upholstery is vacuumed, shampooed and extracted at your home to lift dust, stains and odours. Fabric is left damp rather than soaked and is usually dry within a few hours.',
    priceItems: ['Sofa Shampoo', 'Mattress Cleaning', 'Hourly Cleaning'],
    body: [
      { type: 'h2', text: 'What the clean involves' },
      { type: 'ol', items: [
        'The fabric and any care label are checked, and a hidden patch is tested for colour-fastness.',
        'Thorough vacuuming of cushions, seams and the frame underneath to remove loose dust and grit.',
        'Stains are pre-treated according to what caused them.',
        'The fabric is shampooed, then rinsed and extracted by machine, which pulls the dirty water back out.',
        'Cushions are stood up and the piece is left to air dry.',
      ] },
      { type: 'p', text: 'Cleaners bring the vacuum and extraction equipment and all products. If anyone at home is sensitive to fragrance, tell us when you book and a fragrance-free product is used.' },
      { type: 'h2', text: 'How sofas are priced' },
      { type: 'p', text: 'Sofas are priced per seat, so a three-seater is three seats and an L-shaped sofa is counted by the number of seat positions. Armchairs count as one. Send a photo and you get the exact figure before the visit. Mattresses are priced per mattress.' },
      { type: 'h2', text: 'Why upholstery needs it in Dubai' },
      { type: 'p', text: 'Fine dust comes in every time a balcony door opens and settles into fabric, where a household vacuum only reaches the surface. Air conditioning dries the air, but humid months and spills leave moisture in the padding, which is where odours start. Mattresses collect skin cells and dust that feed dust mites, a common trigger for allergies and night-time congestion.' },
      { type: 'ul', items: [
        'Sofas in daily use: every six to twelve months.',
        'Homes with children, pets or allergy sufferers: every four to six months.',
        'Mattresses: once or twice a year.',
        'After a spill: as soon as possible, before the stain sets.',
      ] },
      { type: 'h2', text: 'What it can and cannot remove' },
      { type: 'p', text: 'General soiling, body oils, food and drink marks and most pet odours come out well. Old stains that have been scrubbed with household products, ink, dye transfer and sun fade may only improve. The cleaner will tell you what to expect before starting, not after.' },
      { type: 'p', text: 'Fabric and microfibre respond best to shampoo and extraction. Leather is cleaned and conditioned by hand instead, and delicate fabrics such as silk or velvet are assessed first.' },
      { type: 'h2', text: 'Drying and aftercare' },
      { type: 'p', text: 'Keep the AC or a fan running and leave cushions upright. Most sofas are dry within a few hours. Avoid sitting on damp fabric, and wait until a mattress is fully dry before putting bedding back on.' },
      { type: 'p', text: 'Moving out of a furnished apartment? Add upholstery cleaning to a [move-out cleaning](/services/cleaning/move-out-cleaning) so the unit and its furniture are done in one visit.' },
    ],
    faqs: [
      { q: 'How much does sofa cleaning cost in Dubai?', a: 'UAE Quick charges from AED 50 per seat for sofa shampoo and from AED 80 per mattress. Send a photo of the sofa and we confirm the exact price before the visit.' },
      { q: 'How long does a sofa take to dry after shampooing?', a: 'Usually a few hours. Extraction removes most of the water, and running the AC or a fan with cushions stood upright speeds it up.' },
      { q: 'Can you remove pet odours and stains?', a: 'Most pet odours and fresh stains come out well with pre-treatment and extraction. Older stains that have set or been treated with household products may only lighten, and the cleaner will say so before starting.' },
    ],
    areas: ['downtown-dubai', 'jumeirah', 'jvc'],
  },
];

export const getSubService = (parent: string, slug: string): SubService | undefined =>
  subServices.find((s) => s.parent === parent && s.slug === slug);

export const subServicesFor = (parent: string): SubService[] =>
  subServices.filter((s) => s.parent === parent);
