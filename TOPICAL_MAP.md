# Topical map - uaequick.com (Phase 1)

Source: `docs/topical-map.csv` (231 rows, supplied 2026-11-22). Every row was matched to the real route structure, checked against the live site, the published price tables and existing posts, and given a decision. The full row-by-row result, with the real URL, corrected parent links and a note for each row, is in `docs/topical-map-reconciled.csv`.

This replaces the earlier draft of this file. Nothing is built in this phase.

## Result

| Decision | Rows | Meaning |
|---|---|---|
| Build | 102 | No clash, real URL confirmed, and a published price exists where one is needed |
| Needs your input | 45 | No published price, or the service is not listed on the site today |
| Clash risk - fold in or re-angle | 26 | Overlaps an existing page; only worth building with a clearly different angle |
| Clash - do not build | 20 | Would compete with a page that already owns the keyword |
| Already live | 24 | The page exists, sometimes at a different URL than the sheet suggests |
| Skip - existing | 14 | Marked "Existing - don't touch" in the sheet |
| **Total** | **231** | |

## How the sheet's URLs map to the real routes

| Sheet pattern | Real route | Result |
|---|---|---|
| `/services/{service}/{sub}` | Same. Rendered by the existing `[service]/[area]` route from `lib/data/subServices.ts` | Fits as written |
| `/blog/{slug}` | Same. A new entry in `lib/data/blog.ts` | Fits as written |
| `/areas/{area}/{service}` | **Already exists as `/services/{service}/{area}`** | All 15 rows are live pages; no new URLs |
| `/same-day/{service}` | No such route, and none should be added | All 9 clash with the service pages |
| `/guarantee`, `/pricing`, `/reviews`, `/our-technicians` | New top-level pages | Fit as written |
| `/how-it-works` | `/same-day` already does this job | Clash |

No suggested sub-service slug collides with an area slug, and no row marked Build, Needs input or Clash risk would overwrite a live URL. Where a row's parent page does not exist, its "links up to" was pointed at the real page (for example `/same-day/ac-repair` becomes `/services/ac-repair`).

## Clash - do not build (20)

The nine same-day rows are the important ones: those keywords already rank on the service pages.

| Sheet URL | Target keyword | Clashes with | Why |
|---|---|---|---|
| `/same-day/ac-repair` | same day ac repair dubai | `/services/ac-repair` | /services/ac-repair already has "Same Day ... in Dubai" as its title and H1 and already ranks. A second page for the same keyword would compete with it. |
| `/same-day/plumber` | same day plumber dubai | `/services/handyman-plumber` | /services/handyman-plumber already has "Same Day ... in Dubai" as its title and H1 and already ranks. A second page for the same keyword would compete with it. |
| `/same-day/cleaning` | same day cleaning dubai | `/services/cleaning` | /services/cleaning already has "Same Day ... in Dubai" as its title and H1 and already ranks. A second page for the same keyword would compete with it. |
| `/same-day/electrician` | same day electrician dubai | `/services/electrician` | /services/electrician already has "Same Day ... in Dubai" as its title and H1 and already ranks. A second page for the same keyword would compete with it. |
| `/same-day/handyman` | same day handyman dubai | `/services/handyman-plumber` | /services/handyman-plumber already has "Same Day ... in Dubai" as its title and H1 and already ranks. A second page for the same keyword would compete with it. |
| `/same-day/deep-cleaning` | same day deep cleaning dubai | `/services/cleaning` | Same-day cleaning is owned by /services/cleaning; deep cleaning belongs on a sub-service page, not a same-day page. |
| `/same-day/movers` | same day movers dubai | `/services/movers-packers` | /services/movers-packers already has "Same Day ... in Dubai" as its title and H1 and already ranks. A second page for the same keyword would compete with it. |
| `/same-day/painting` | same day painting dubai | `/services/painting` | /services/painting already has "Same Day ... in Dubai" as its title and H1 and already ranks. A second page for the same keyword would compete with it. |
| `/same-day/pool-cleaning` | same day pool cleaning dubai | `/services/pool-maintenance` | /services/pool-maintenance already has "Same Day ... in Dubai" as its title and H1 and already ranks. A second page for the same keyword would compete with it. |
| `/blog/how-same-day-home-service-works-dubai` | how same day service works | `/same-day` | /same-day is already this guide (4 PM cut-off, fixed quote, steps). A post would duplicate it. |
| `/services/ac-repair/coil-cleaning` | ac coil cleaning dubai | `/services/ac-repair/ac-cleaning` | Live AC cleaning page already covers coil, filter and drain at AED 150. |
| `/services/ac-repair/deep-cleaning` | ac cleaning dubai | `/services/ac-repair/ac-cleaning` | Target keyword "ac cleaning dubai" is owned by the live AC cleaning page. |
| `/blog/ac-not-cooling` | ac not cooling | `/blog/ac-not-cooling-dubai-summer` | An "AC not cooling" post already exists. |
| `/services/handyman-plumber/tap-mixer` | tap replacement dubai | `/services/handyman-plumber/tap-sink-repair` | Live tap and sink repair page covers tap and mixer replacement. |
| `/blog/plumber-cost-dubai` | plumber cost dubai | `/blog/handyman-cost-dubai` | Existing handyman cost post already targets "plumber cost Dubai" in its keywords and prices leak and tap repairs. |
| `/services/electrician/power-trip` | power trip electrician dubai | `/services/electrician/breaker-repair` | Same job as breaker repair (power tripping). One page should own both phrasings. |
| `/services/cleaning/mattress-cleaning` | mattress cleaning dubai | `/services/cleaning/sofa-mattress-cleaning` | Mattress cleaning is half of the live sofa and mattress page. |
| `/blog/move-out-cleaning-checklist` | move out cleaning checklist | `/blog/move-out-cleaning-checklist-ejari-handover-dubai` | This post was published on 19 November. |
| `/services/pool-maintenance/contract` | pool maintenance contract dubai | `/services/pool-maintenance/weekly-cleaning` | A maintenance contract is the weekly cleaning plan. One page should own both. |
| `/how-it-works` | book home service dubai | `/same-day` | /same-day is already the "how booking works" page. |

## Clash risk - fold in or re-angle (26)

Most of these are single-figure cost guides. With one published price, the sub-service page already answers the cost question, and a separate post would split the same search between two pages.

| Sheet URL | Target keyword | Overlaps | Why |
|---|---|---|---|
| `/blog/ac-stopped-working-what-to-do` | ac stopped working dubai | `/blog/ac-not-cooling-dubai-summer` | Existing post covers what to check when cooling fails. Only build if the angle is "unit completely dead, what to do while waiting". |
| `/blog/water-leak-what-to-do` | water leak what to do | `/services/handyman-plumber/leak-repair` | The live leak-repair page opens with "what to do in the first five minutes". Build only as a longer emergency guide that links to it. |
| `/services/ac-repair/split-ac-repair` | split ac repair dubai | `/services/ac-repair` | The parent page is the AC repair page and mostly describes split units. Build only if written strictly about split-unit faults, never "AC repair Dubai". |
| `/services/ac-repair/fcu-cleaning` | fcu cleaning dubai | `/services/ac-repair/duct-cleaning` | Live duct-cleaning page already covers the fan coil unit. No separate FCU price is published. |
| `/blog/ac-gas-refill-cost-dubai` | ac gas refill price dubai | `/services/ac-repair/gas-refill` | Only one price figure exists (from AED 250) and the live page already answers the cost question. Fold into that page. |
| `/blog/ac-duct-cleaning-cost-dubai` | ac duct cleaning price dubai | `/services/ac-repair/duct-cleaning` | Same: one figure (from AED 400), already answered on the live page. |
| `/blog/ac-maintenance-contract-price-dubai` | ac amc price dubai | `/services/ac-repair/maintenance-contract` | One figure (from AED 600). Put the price detail on the sub-service page. |
| `/blog/ac-installation-cost-dubai` | ac installation cost dubai | `/services/ac-repair/installation` | One figure (from AED 450), already answered on the live page. |
| `/blog/signs-ac-needs-gas` | signs ac needs gas | `/services/ac-repair/gas-refill` | Live page has a "signs that point to low refrigerant" section. Build only as a longer diagnostic guide. |
| `/services/handyman-plumber/leak-detection` | water leak detection dubai | `/services/handyman-plumber/leak-repair` | Live page targets "water leak repair Dubai" and covers tracing hidden leaks. No separate detection price. |
| `/services/handyman-plumber/pipe-repair` | pipe repair dubai | `/services/handyman-plumber/leak-repair` | Pipe repair is what the live leak-repair page sells. No separate price. |
| `/services/handyman-plumber/sink-installation` | sink installation dubai | `/services/handyman-plumber/tap-sink-repair` | Overlaps the live tap and sink page. No sink installation price. |
| `/blog/leak-detection-cost-dubai` | leak detection cost dubai | `/services/handyman-plumber/leak-repair` | One figure (from AED 200), already on the live page. |
| `/services/electrician/chandelier` | chandelier installation dubai | `/services/electrician/light-installation` | Overlaps light installation. No chandelier price. |
| `/blog/light-installation-cost-dubai` | light installation cost dubai | `/services/electrician/light-installation` | One figure (AED 100). Put it on the sub-service page. |
| `/blog/breakers-trip-summer` | breaker tripping summer | `/blog/power-keeps-tripping` | Same question as "power keeps tripping". Write one post, with a summer section. |
| `/services/cleaning/deep-cleaning` | deep cleaning dubai | `/blog/home-deep-cleaning-dubai` | Existing post "Best Home Deep Cleaning Services in Dubai" targets this keyword. A service page is the better owner, but check Search Console first: if that post ranks, keep it and link to the new page. |
| `/blog/what-is-included-in-deep-cleaning` | what is deep cleaning | `/blog/deep-cleaning-checklist-dubai` | Existing deep cleaning checklist answers what is included. Links up to /services/cleaning until /services/cleaning/deep-cleaning exists. |
| `/blog/maid-hourly-rate-dubai` | maid hourly rate dubai | `/services/cleaning/hourly-maid` | One figure (AED 35/hr). Put it on the hourly maid page. |
| `/blog/sofa-cleaning-price-dubai` | sofa cleaning price dubai | `/services/cleaning/sofa-mattress-cleaning` | One figure, already on the live page. |
| `/blog/move-out-cleaning-cost-dubai` | move out cleaning cost dubai | `/services/cleaning/move-out-cleaning` | One figure, already on the live page. |
| `/services/movers-packers/dismantling` | furniture dismantling dubai | `/services/handyman-plumber/furniture-assembly` | Live furniture assembly page already covers dismantling and rebuilding for a move. |
| `/blog/gypsum-partition-cost-dubai` | gypsum partition cost dubai | `/services/painting/gypsum-partition` | One figure. Put it on the sub-service page. |
| `/blog/false-ceiling-cost-dubai` | false ceiling cost dubai | `/services/painting/false-ceiling` | One figure. Put it on the sub-service page. |
| `/blog/landscaping-cost-dubai` | landscaping cost dubai | `/services/garden-maintenance/landscaping` | One figure. Put it on the sub-service page. |
| `/services/pool-maintenance/chemical-balancing` | pool chemicals dubai | `/services/pool-maintenance/weekly-cleaning` | Chemical balancing is part of weekly maintenance. No separate price. |

## Already live (24)

| Sheet URL | Real URL | Note |
|---|---|---|
| `/same-day` | `/same-day` | Live, but deliberately NOT targeting "same day home services dubai": the home page ranks for it. The page is framed as the booking process. |
| `/services/ac-repair/gas-refill` | `/services/ac-repair/gas-refill` | Built and live. |
| `/services/ac-repair/duct-cleaning` | `/services/ac-repair/duct-cleaning` | Built and live. |
| `/services/ac-repair/installation` | `/services/ac-repair/installation` | Built and live. |
| `/services/handyman-plumber/furniture-assembly` | `/services/handyman-plumber/furniture-assembly` | Built and live. |
| `/services/handyman-plumber/door-lock` | `/services/handyman-plumber/door-lock-change` | Live at a different slug. Do not create a second lock page. |
| `/services/cleaning/move-in-move-out` | `/services/cleaning/move-out-cleaning` | Live at a different slug. |
| `/services/cleaning/sofa-cleaning` | `/services/cleaning/sofa-mattress-cleaning` | Live as the combined sofa and mattress page. |
| `/areas/dubai-marina/ac-repair` | `/services/ac-repair/dubai-marina` | This page already exists at the real URL and already ranks for the area keyword. Do not create a second URL. |
| `/areas/business-bay/ac-repair` | `/services/ac-repair/business-bay` | This page already exists at the real URL and already ranks for the area keyword. Do not create a second URL. |
| `/areas/jlt/ac-repair` | `/services/ac-repair/jlt` | This page already exists at the real URL and already ranks for the area keyword. Do not create a second URL. |
| `/areas/jvc/ac-repair` | `/services/ac-repair/jvc` | This page already exists at the real URL and already ranks for the area keyword. Do not create a second URL. |
| `/areas/downtown-dubai/ac-repair` | `/services/ac-repair/downtown-dubai` | This page already exists at the real URL and already ranks for the area keyword. Do not create a second URL. |
| `/areas/dubai-marina/plumber` | `/services/handyman-plumber/dubai-marina` | This page already exists at the real URL and already ranks for the area keyword. Do not create a second URL. |
| `/areas/business-bay/plumber` | `/services/handyman-plumber/business-bay` | This page already exists at the real URL and already ranks for the area keyword. Do not create a second URL. |
| `/areas/jlt/plumber` | `/services/handyman-plumber/jlt` | This page already exists at the real URL and already ranks for the area keyword. Do not create a second URL. |
| `/areas/jvc/plumber` | `/services/handyman-plumber/jvc` | This page already exists at the real URL and already ranks for the area keyword. Do not create a second URL. |
| `/areas/downtown-dubai/plumber` | `/services/handyman-plumber/downtown-dubai` | This page already exists at the real URL and already ranks for the area keyword. Do not create a second URL. |
| `/areas/dubai-marina/cleaning` | `/services/cleaning/dubai-marina` | This page already exists at the real URL and already ranks for the area keyword. Do not create a second URL. |
| `/areas/business-bay/cleaning` | `/services/cleaning/business-bay` | This page already exists at the real URL and already ranks for the area keyword. Do not create a second URL. |
| `/areas/jlt/cleaning` | `/services/cleaning/jlt` | This page already exists at the real URL and already ranks for the area keyword. Do not create a second URL. |
| `/areas/jvc/cleaning` | `/services/cleaning/jvc` | This page already exists at the real URL and already ranks for the area keyword. Do not create a second URL. |
| `/areas/downtown-dubai/cleaning` | `/services/cleaning/downtown-dubai` | This page already exists at the real URL and already ranks for the area keyword. Do not create a second URL. |
| `/about` | `/about` | Page exists. It needs real content (licence, team, story), which means editing existing copy and needs your facts. |

## Needs your input (45)

I will not invent prices or advertise a service you may not offer. Send a from-price, or confirm the service, and these move to Build.

| Pillar | Page | Real URL | What is missing |
|---|---|---|---|
| AC | AC compressor repair | `/services/ac-repair/compressor-repair` | No published compressor price. Need a from-price or "quoted after diagnosis" wording you are happy with. |
| AC | AC thermostat repair & replacement | `/services/ac-repair/thermostat` | No published thermostat price. |
| Plumbing & Handyman | Blocked drain cleaning | `/services/handyman-plumber/blocked-drain` | No published price for drain clearing. |
| Plumbing & Handyman | Water heater repair & installation | `/services/handyman-plumber/water-heater` | No published price for water heater repair or replacement. |
| Plumbing & Handyman | Toilet repair | `/services/handyman-plumber/toilet-repair` | No published price for toilet repair. |
| Plumbing & Handyman | Water tank cleaning | `/services/handyman-plumber/water-tank-cleaning` | No published price for water tank cleaning. |
| Plumbing & Handyman | Water pump repair | `/services/handyman-plumber/water-pump` | Not listed as a service today. Confirm you offer it, and a price. |
| Plumbing & Handyman | Shower installation & repair | `/services/handyman-plumber/shower` | No published price for shower repair. |
| Plumbing & Handyman | TV wall mounting | `/services/handyman-plumber/tv-mounting` | No published price for TV mounting. |
| Plumbing & Handyman | Water heater replacement cost | `/blog/water-heater-replacement-cost-dubai` | No water heater prices to write from. Links up to /services/handyman-plumber until /services/handyman-plumber/water-heater exists. |
| Plumbing & Handyman | TV mounting cost | `/blog/tv-mounting-cost-dubai` | No TV mounting price. Links up to /services/handyman-plumber until /services/handyman-plumber/tv-mounting exists. |
| Electrician | EV charger installation | `/services/electrician/ev-charger` | Not listed as a service today. Confirm you offer EV charger installation, and a price. |
| Electrician | Outdoor & garden lighting | `/services/electrician/outdoor-lighting` | No published price. |
| Electrician | Smart switch installation | `/services/electrician/smart-switch` | No published price. |
| Electrician | Doorbell & intercom installation | `/services/electrician/intercom` | Not listed as a service today. Confirm you offer doorbell and intercom work, and a price. |
| Electrician | Home electrical inspection | `/services/electrician/inspection` | Not listed as a service today. Confirm you offer electrical inspections, and a price. |
| Electrician | EV charger installation cost | `/blog/ev-charger-installation-cost-dubai` | Depends on the EV charger service being confirmed. Links up to /services/electrician until /services/electrician/ev-charger exists. |
| Cleaning | Carpet cleaning | `/services/cleaning/carpet-cleaning` | No published price for carpet cleaning. |
| Cleaning | Kitchen deep cleaning | `/services/cleaning/kitchen-cleaning` | No published price for kitchen-only deep cleaning. Links up to /services/cleaning until /services/cleaning/deep-cleaning exists. |
| Cleaning | Post-renovation cleaning | `/services/cleaning/post-renovation` | No published price for post-renovation cleaning. |
| Cleaning | Bathroom deep cleaning | `/services/cleaning/bathroom-cleaning` | No published price for bathroom-only cleaning. Links up to /services/cleaning until /services/cleaning/deep-cleaning exists. |
| Cleaning | Window cleaning | `/services/cleaning/window-cleaning` | No published price for window cleaning. |
| Cleaning | Curtain cleaning | `/services/cleaning/curtain-cleaning` | No published price for curtain cleaning. |
| Cleaning | Disinfection & sanitisation | `/services/cleaning/disinfection` | Not listed as a service today. Confirm you offer it, and a price. |
| Movers | Single item / furniture moving | `/services/movers-packers/furniture` | No single-item moving price. |
| Movers | Packing services | `/services/movers-packers/packing` | No packing-only price. |
| Movers | Dubai to Abu Dhabi / Sharjah moving | `/services/movers-packers/intercity` | Your sheet says "only if offered". Confirm, with a price. |
| Movers | Packing service cost | `/blog/packing-cost-dubai` | No packing price. Links up to /services/movers-packers until /services/movers-packers/packing exists. |
| Painting & Partitions | Exterior painting | `/services/painting/exterior` | No published price for exterior painting. |
| Painting & Partitions | Wallpaper installation | `/services/painting/wallpaper` | Not listed as a service today. Confirm you offer it, and a price. |
| Painting & Partitions | Feature wall & texture painting | `/services/painting/feature-wall` | No published price for feature walls. |
| Painting & Partitions | Door & wood painting | `/services/painting/wood-door` | No published price for door and wood painting. |
| Painting & Partitions | Damp & waterproof painting | `/services/painting/damp-proof` | No published price for damp-proof painting. |
| Interior Design | Kitchen renovation | `/services/interior-design/kitchen-renovation` | Not listed as a service today. Confirm you take on renovation work. |
| Interior Design | Bathroom renovation | `/services/interior-design/bathroom-renovation` | Not listed as a service today. Confirm you take on renovation work. |
| Interior Design | Interior design cost in Dubai | `/blog/interior-design-cost-dubai` | Every interior price is "quoted per project". A cost guide needs real ranges from past jobs. |
| Interior Design | Kitchen renovation cost | `/blog/kitchen-renovation-cost-dubai` | Every interior price is "quoted per project". A cost guide needs real ranges from past jobs. Links up to /services/interior-design until /services/interior-design/kitchen-renovation exists. |
| Garden | Artificial grass installation | `/services/garden-maintenance/artificial-grass` | Not listed as a service today. Confirm you offer it, and a price. |
| Garden | Planting | `/services/garden-maintenance/planting` | No planting price. |
| Garden | Natural vs artificial grass in Dubai | `/blog/natural-vs-artificial-grass-dubai` | Depends on artificial grass being confirmed. Links up to /services/garden-maintenance until /services/garden-maintenance/artificial-grass exists. |
| Garden | Artificial grass price per sqm | `/blog/artificial-grass-price-dubai` | Depends on artificial grass being confirmed. Links up to /services/garden-maintenance until /services/garden-maintenance/artificial-grass exists. |
| Pool & Jacuzzi | Pool leak detection | `/services/pool-maintenance/leak-detection` | Not listed as a service today. Confirm you offer pool leak detection, and a price. |
| Pool & Jacuzzi | Pool tile repair | `/services/pool-maintenance/tile-repair` | Not listed as a service today. Confirm you offer pool tile repair, and a price. |
| Trust & Brand | Customer reviews | `/reviews` | Needs genuine customer reviews and the confirmed Google rating. |
| Trust & Brand | Our technicians | `/our-technicians` | Needs real names, trades and photos. |

## Build list

Grouped by priority. Each row has a confirmed real URL and parent page.

### P1 (23)

| Pillar | Type | Page | Target keyword | Real URL | Links up to | Price basis |
|---|---|---|---|---|---|---|
| AC | Sub-service | AC water leakage repair | ac water leaking repair dubai | `/services/ac-repair/water-leak-repair` | `/services/ac-repair` | Price: AC Repair from AED 200. |
| AC | Sub-service | AC annual maintenance contract (AMC) | ac maintenance contract dubai | `/services/ac-repair/maintenance-contract` | `/services/ac-repair` | Price: Annual Maintenance from AED 600. |
| AC | Problem | AC leaking water inside: why and how to fix | ac leaking water | `/blog/ac-leaking-water` | `/services/ac-repair/water-leak-repair` | - |
| Plumbing & Handyman | Problem | No hot water: causes & fixes | no hot water | `/blog/no-hot-water` | `/services/handyman-plumber` | Links up to /services/handyman-plumber until /services/handyman-plumber/water-heater exists. |
| Plumbing & Handyman | Problem | Ceiling leak from the apartment upstairs: what to do | ceiling leak from upstairs | `/blog/ceiling-leak-from-upstairs` | `/services/handyman-plumber/leak-repair` | - |
| Electrician | Sub-service | DB & breaker repair | breaker repair dubai | `/services/electrician/breaker-repair` | `/services/electrician` | Price: Breaker Repair from AED 200. |
| Electrician | Problem | Power keeps tripping at home | power keeps tripping | `/blog/power-keeps-tripping` | `/services/electrician/breaker-repair` | - |
| Electrician | Cost guide | Electrician cost in Dubai | electrician cost dubai | `/blog/electrician-cost-dubai` | `/services/electrician` | - |
| Cleaning | Sub-service | Hourly maid service | maid service dubai | `/services/cleaning/hourly-maid` | `/services/cleaning` | Price: Hourly Cleaning AED 35/hr. |
| Cleaning | Cost guide | Deep cleaning cost in Dubai | deep cleaning cost dubai | `/blog/deep-cleaning-cost-dubai` | `/services/cleaning` | Links up to /services/cleaning until /services/cleaning/deep-cleaning exists. |
| Movers | Sub-service | Apartment moving | apartment movers dubai | `/services/movers-packers/apartment` | `/services/movers-packers` | Prices: Studio from AED 450 to 3-bed from AED 1,400. |
| Movers | Sub-service | Villa moving | villa movers dubai | `/services/movers-packers/villa` | `/services/movers-packers` | Price: Villa Move from AED 2,500. |
| Movers | Guide | Moving checklist for Dubai | moving checklist dubai | `/blog/moving-checklist-dubai` | `/services/movers-packers` | - |
| Movers | Guide | Building move-in / move-out permit & NOC | move in permit dubai | `/blog/move-in-permit-noc-dubai` | `/services/movers-packers` | - |
| Movers | Cost guide | Movers cost in Dubai (studio to villa) | movers cost dubai | `/blog/movers-cost-dubai` | `/services/movers-packers` | - |
| Painting & Partitions | Sub-service | Apartment painting | apartment painting dubai | `/services/painting/apartment` | `/services/painting` | Prices: single room from AED 350 to 2-bed from AED 2,500. |
| Painting & Partitions | Sub-service | Villa painting | villa painting dubai | `/services/painting/villa` | `/services/painting` | Price: Villa Painting from AED 5,000. |
| Painting & Partitions | Sub-service | Move-out repainting | move out painting dubai | `/services/painting/move-out` | `/services/painting` | Uses the apartment painting prices. |
| Painting & Partitions | Guide | Do you have to repaint when moving out in Dubai? | repaint when moving out dubai | `/blog/repaint-when-moving-out-dubai` | `/services/painting/move-out` | - |
| Painting & Partitions | Cost guide | Painting cost in Dubai (per room, apartment, villa) | painting cost dubai | `/blog/painting-cost-dubai` | `/services/painting` | - |
| Pool & Jacuzzi | Sub-service | Weekly pool cleaning | pool cleaning dubai | `/services/pool-maintenance/weekly-cleaning` | `/services/pool-maintenance` | Prices: weekly from AED 800/mo, bi-weekly from AED 500/mo. |
| Trust & Brand | Trust page | 30-day service guarantee | home maintenance guarantee dubai | `/guarantee` | `/` | 30-day guarantee, 90 days on AC repairs. |
| Trust & Brand | Trust page | Pricing (all services, from-prices) | home maintenance prices dubai | `/pricing` | `/services` | One page listing every from-price, read from the service data. |

### P2 (53)

| Pillar | Type | Page | Target keyword | Real URL | Links up to | Price basis |
|---|---|---|---|---|---|---|
| AC | Sub-service | Central / ducted AC repair | central ac repair dubai | `/services/ac-repair/central-ac-repair` | `/services/ac-repair` | Price: AC Repair from AED 200 (diagnosis + labour). Keep it about ducted and chiller-fed systems. |
| AC | Problem | AC making noise: what each sound means | ac making noise | `/blog/ac-making-noise` | `/services/ac-repair` | - |
| AC | Problem | AC smells bad: causes and cleaning | ac bad smell | `/blog/ac-bad-smell` | `/services/ac-repair/ac-cleaning` | - |
| AC | Problem | AC tripping the breaker | ac tripping breaker | `/blog/ac-tripping-breaker` | `/services/ac-repair`, `/services/electrician` | - |
| AC | Problem | High chiller / cooling bill: causes | high chiller bill dubai | `/blog/high-chiller-bill-dubai` | `/services/ac-repair/maintenance-contract` | - |
| AC | Guide | Pre-summer AC checklist | ac maintenance checklist | `/blog/pre-summer-ac-checklist` | `/services/ac-repair/maintenance-contract` | - |
| AC | Guide | How to lower your AC / chiller bill | reduce ac bill dubai | `/blog/lower-ac-bill-dubai` | `/services/ac-repair` | - |
| AC | Comparison | Chiller vs split AC in Dubai homes | chiller vs split ac | `/blog/chiller-vs-split-ac` | `/services/ac-repair` | - |
| AC | Comparison | Duct cleaning vs AC servicing: what's the difference | duct cleaning vs ac service | `/blog/duct-cleaning-vs-ac-service` | `/services/ac-repair/duct-cleaning` | - |
| Plumbing & Handyman | Sub-service | Curtain & blind installation | curtain installation dubai | `/services/handyman-plumber/curtain-installation` | `/services/handyman-plumber` | Price: from AED 80 (stated in the service FAQ). |
| Plumbing & Handyman | Problem | Low water pressure at home | low water pressure | `/blog/low-water-pressure` | `/services/handyman-plumber` | Links up to /services/handyman-plumber until /services/handyman-plumber/water-pump exists. |
| Plumbing & Handyman | Problem | Toilet keeps running | toilet keeps running | `/blog/toilet-keeps-running` | `/services/handyman-plumber` | Links up to /services/handyman-plumber until /services/handyman-plumber/toilet-repair exists. |
| Plumbing & Handyman | Problem | Bad smell from drains | drain smell | `/blog/drain-bad-smell` | `/services/handyman-plumber` | Links up to /services/handyman-plumber until /services/handyman-plumber/blocked-drain exists. |
| Plumbing & Handyman | Problem | Water heater keeps tripping | water heater tripping | `/blog/water-heater-tripping` | `/services/handyman-plumber`, `/services/electrician` | Links up to /services/handyman-plumber until /services/handyman-plumber/water-heater exists. |
| Plumbing & Handyman | Guide | Tenant vs landlord: who pays for repairs in Dubai | who pays for repairs tenant landlord dubai | `/blog/tenant-vs-landlord-repairs-dubai` | `/services/handyman-plumber` | - |
| Plumbing & Handyman | Guide | Move-in handyman checklist | move in checklist dubai | `/blog/move-in-handyman-checklist` | `/services/handyman-plumber` | - |
| Electrician | Sub-service | Light installation | light installation dubai | `/services/electrician/light-installation` | `/services/electrician` | Price: Light Fitting AED 100. |
| Electrician | Sub-service | Socket & switch replacement | socket repair dubai | `/services/electrician/socket-switch` | `/services/electrician` | Price: Socket / Switch AED 100. |
| Electrician | Sub-service | Wiring & rewiring | electrical wiring dubai | `/services/electrician/wiring` | `/services/electrician` | Prices: Appliance Wiring from AED 150, Full Rewiring from AED 2,500. |
| Electrician | Problem | Half the house has no power | half house no power | `/blog/half-house-no-power` | `/services/electrician/breaker-repair` | - |
| Electrician | Problem | Sockets not working | socket not working | `/blog/sockets-not-working` | `/services/electrician/socket-switch` | - |
| Electrician | Problem | Flickering lights | lights flickering | `/blog/flickering-lights` | `/services/electrician` | - |
| Electrician | Problem | Burning smell from a socket or switch | burning smell socket | `/blog/burning-smell-socket` | `/services/electrician` | - |
| Electrician | Guide | Power cut: call DEWA or an electrician? | power cut dewa or electrician | `/blog/power-cut-dewa-or-electrician` | `/services/electrician` | - |
| Cleaning | Sub-service | Villa deep cleaning | villa cleaning dubai | `/services/cleaning/villa-cleaning` | `/services/cleaning` | Price: Villa Deep Clean from AED 1,200. Links up to /services/cleaning until /services/cleaning/deep-cleaning exists. |
| Cleaning | Guide | How often to deep clean a home in Dubai | how often deep clean | `/blog/how-often-deep-clean-dubai` | `/services/cleaning` | Links up to /services/cleaning until /services/cleaning/deep-cleaning exists. |
| Cleaning | Guide | Keeping dust & sand out of your home | dust in house dubai | `/blog/keep-dust-out-dubai` | `/services/cleaning` | - |
| Cleaning | Problem | Bathroom mould in humid weather | bathroom mould dubai | `/blog/bathroom-mould-dubai` | `/services/cleaning` | Links up to /services/cleaning until /services/cleaning/bathroom-cleaning exists. |
| Cleaning | Comparison | Hourly cleaning vs deep cleaning | hourly vs deep cleaning | `/blog/hourly-vs-deep-cleaning` | `/services/cleaning` | - |
| Movers | Sub-service | Office relocation | office movers dubai | `/services/movers-packers/office` | `/services/movers-packers` | Price: Office Move from AED 1,500. |
| Movers | Guide | DEWA move-in / move-out steps | dewa move out | `/blog/dewa-move-in-move-out` | `/services/movers-packers` | - |
| Movers | Guide | Updating Ejari after you move | ejari after moving | `/blog/ejari-after-moving` | `/services/movers-packers` | - |
| Painting & Partitions | Sub-service | Gypsum partition | gypsum partition dubai | `/services/painting/gypsum-partition` | `/services/painting` | Price: from AED 350 per square metre. |
| Painting & Partitions | Sub-service | Gypsum false ceiling | false ceiling dubai | `/services/painting/false-ceiling` | `/services/painting` | Price: False Ceiling from AED 120. |
| Painting & Partitions | Guide | How long apartment painting takes | how long to paint apartment | `/blog/how-long-to-paint-apartment` | `/services/painting/apartment` | - |
| Interior Design | Sub-service | Apartment interior design | apartment interior design dubai | `/services/interior-design/apartment` | `/services/interior-design` | No fixed price needed: free consultation, quoted per project. |
| Interior Design | Sub-service | Villa interior design | villa interior design dubai | `/services/interior-design/villa` | `/services/interior-design` | No fixed price needed: free consultation, quoted per project. |
| Interior Design | Sub-service | Fit-out works | fit out company dubai | `/services/interior-design/fit-out` | `/services/interior-design` | No fixed price needed: free consultation, quoted per project. |
| Interior Design | Guide | Renovation approvals & community NOC in Dubai | renovation noc dubai | `/blog/renovation-noc-dubai` | `/services/interior-design` | - |
| Garden | Sub-service | Lawn mowing & care | lawn care dubai | `/services/garden-maintenance/lawn-care` | `/services/garden-maintenance` | Prices: weekly from AED 600/mo, bi-weekly from AED 400/mo. |
| Garden | Sub-service | Irrigation installation & repair | irrigation system dubai | `/services/garden-maintenance/irrigation` | `/services/garden-maintenance` | Price: Irrigation Install from AED 500. |
| Garden | Sub-service | Landscaping | landscaping dubai | `/services/garden-maintenance/landscaping` | `/services/garden-maintenance` | Price: Landscape Design from AED 3,000. |
| Garden | Sub-service | Tree & palm trimming | palm tree trimming dubai | `/services/garden-maintenance/tree-trimming` | `/services/garden-maintenance` | Price: Palm Tree Trim from AED 150. |
| Garden | Guide | Best plants for Dubai heat | best plants dubai | `/blog/best-plants-dubai-heat` | `/services/garden-maintenance` | Links up to /services/garden-maintenance until /services/garden-maintenance/planting exists. |
| Pool & Jacuzzi | Sub-service | Green pool treatment | green pool cleaning dubai | `/services/pool-maintenance/green-pool` | `/services/pool-maintenance` | Price: Acid Wash from AED 1,500. |
| Pool & Jacuzzi | Sub-service | Pool pump & filter repair | pool pump repair dubai | `/services/pool-maintenance/pump-filter` | `/services/pool-maintenance` | Price: Pump Repair from AED 500. |
| Pool & Jacuzzi | Sub-service | Jacuzzi cleaning & repair | jacuzzi repair dubai | `/services/pool-maintenance/jacuzzi` | `/services/pool-maintenance` | Price: Jacuzzi Service from AED 300. |
| Pool & Jacuzzi | Guide | How often to clean a pool in Dubai | how often clean pool | `/blog/how-often-clean-pool-dubai` | `/services/pool-maintenance/weekly-cleaning` | - |
| Pool & Jacuzzi | Problem | Why your pool turns green | pool turning green | `/blog/why-pool-turns-green` | `/services/pool-maintenance/green-pool` | - |
| Pool & Jacuzzi | Cost guide | Pool maintenance cost in Dubai | pool maintenance cost dubai | `/blog/pool-maintenance-cost-dubai` | `/services/pool-maintenance/weekly-cleaning` | - |
| Seasonal | Guide | Pre-Ramadan / Eid deep cleaning checklist | ramadan cleaning checklist | `/blog/pre-ramadan-cleaning-checklist` | `/services/cleaning` | Links up to /services/cleaning until /services/cleaning/deep-cleaning exists. |
| Seasonal | Guide | Home checklist before summer travel | home checklist before travel dubai | `/blog/home-checklist-before-summer-travel` | `/services/ac-repair`, `/services/handyman-plumber` | - |
| Seasonal | Guide | After heavy rain: leak & damp check | water leak after rain dubai | `/blog/after-rain-leak-check-dubai` | `/services/handyman-plumber/leak-repair` | - |

### P3 (26)

| Pillar | Type | Page | Target keyword | Real URL | Links up to | Price basis |
|---|---|---|---|---|---|---|
| Same-Day | Comparison | Same-day vs scheduled maintenance: which do you need? | same day vs scheduled maintenance | `/blog/same-day-vs-scheduled-maintenance` | `/same-day` | - |
| AC | Problem | Ice on AC pipe or coil | ac freezing up | `/blog/ac-freezing-up` | `/services/ac-repair/gas-refill` | - |
| AC | Guide | Best AC temperature for Dubai summer | best ac temperature | `/blog/best-ac-temperature-dubai` | `/services/ac-repair` | - |
| AC | Guide | How to clean AC filters yourself | clean ac filter | `/blog/clean-ac-filter` | `/services/ac-repair/ac-cleaning` | - |
| AC | Comparison | Repair or replace your AC? | repair or replace ac | `/blog/repair-or-replace-ac` | `/services/ac-repair/installation` | - |
| Plumbing & Handyman | Sub-service | Shelves & picture hanging | picture hanging dubai | `/services/handyman-plumber/wall-hanging` | `/services/handyman-plumber` | Price: Handyman Hour AED 120. |
| Plumbing & Handyman | Sub-service | Door repair & alignment | door repair dubai | `/services/handyman-plumber/door-repair` | `/services/handyman-plumber` | Price: Handyman Hour AED 120. |
| Plumbing & Handyman | Sub-service | Tile grout & silicone resealing | silicone resealing dubai | `/services/handyman-plumber/grout-silicone` | `/services/handyman-plumber` | Price: Handyman Hour AED 120. |
| Plumbing & Handyman | Guide | How often to clean your water tank | how often clean water tank | `/blog/how-often-clean-water-tank` | `/services/handyman-plumber` | Links up to /services/handyman-plumber until /services/handyman-plumber/water-tank-cleaning exists. |
| Electrician | Sub-service | Ceiling fan installation | ceiling fan installation dubai | `/services/electrician/ceiling-fan` | `/services/electrician` | Price: Ceiling Fan from AED 200. |
| Electrician | Guide | Electrical safety checklist for villas | electrical safety checklist | `/blog/villa-electrical-safety-checklist` | `/services/electrician` | Links up to /services/electrician until /services/electrician/inspection exists. |
| Movers | Guide | Best time of year to move in Dubai | best time to move dubai | `/blog/best-time-to-move-dubai` | `/services/movers-packers` | - |
| Movers | Guide | How to pack fragile items | how to pack fragile items | `/blog/pack-fragile-items` | `/services/movers-packers` | Links up to /services/movers-packers until /services/movers-packers/packing exists. |
| Painting & Partitions | Guide | Best paint for Dubai heat & humidity | best paint dubai | `/blog/best-paint-dubai-climate` | `/services/painting` | - |
| Painting & Partitions | Guide | Popular wall colours for Dubai homes | wall colour ideas | `/blog/wall-colour-ideas-dubai` | `/services/painting` | - |
| Interior Design | Sub-service | Living room design | living room design dubai | `/services/interior-design/living-room` | `/services/interior-design` | No fixed price needed: free consultation, quoted per project. |
| Interior Design | Sub-service | Bedroom design | bedroom design dubai | `/services/interior-design/bedroom` | `/services/interior-design` | No fixed price needed: free consultation, quoted per project. |
| Interior Design | Sub-service | Office interior design | office interior design dubai | `/services/interior-design/office` | `/services/interior-design` | No fixed price needed: free consultation, quoted per project. |
| Interior Design | Guide | Small apartment design ideas | small apartment ideas dubai | `/blog/small-apartment-design-ideas` | `/services/interior-design/apartment` | - |
| Interior Design | Guide | Popular interior styles in Dubai | interior design styles | `/blog/interior-styles-dubai` | `/services/interior-design` | - |
| Garden | Sub-service | Garden clean-up | garden cleaning dubai | `/services/garden-maintenance/clean-up` | `/services/garden-maintenance` | Price: One-Off Clean from AED 200. |
| Garden | Guide | Summer watering schedule | garden watering summer dubai | `/blog/summer-watering-schedule-dubai` | `/services/garden-maintenance/irrigation` | - |
| Garden | Guide | Year-round garden maintenance calendar | garden maintenance calendar | `/blog/garden-maintenance-calendar-dubai` | `/services/garden-maintenance` | - |
| Pool & Jacuzzi | Guide | Pool water chemistry in extreme heat | pool chemistry hot weather | `/blog/pool-chemistry-dubai-heat` | `/services/pool-maintenance/weekly-cleaning` | - |
| Pool & Jacuzzi | Guide | Keeping your pool cool in summer | pool too hot summer dubai | `/blog/pool-cooling-summer-dubai` | `/services/pool-maintenance` | - |
| Seasonal | Guide | Getting your garden ready for winter planting | winter garden dubai | `/blog/winter-garden-prep-dubai` | `/services/garden-maintenance` | - |

## Proposed order for the build phases

The Build list is 102 pages: 37 sub-service pages, 2 trust pages and 63 posts. Built in batches so each can be checked against `seo-baseline.json` before the next:

1. **P1 sub-service and trust pages** - the pages that can take bookings.
2. **P1 posts** - problem and cost guides that feed those pages.
3. **P2**, then **P3**, in the same order.

Standing rules still apply: no new title or H1 starts with "same day", prices come only from the published tables, and every existing route must show zero differences against the baseline before anything is pushed.
