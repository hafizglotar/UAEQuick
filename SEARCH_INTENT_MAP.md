# Search intent map - uaequick.com

Which page answers which kind of search, and whether its content, structured data and depth match that intent. Written 2026-11-22.

**Limit of this document:** intent here is judged from the wording of each query pattern. No keyword tool or Search Console data was available, so there are no search volumes or current positions. The Search Console "Queries" export is the right source to confirm and reprioritise this.

## Rule zero: protect what already ranks

The same-day keywords already rank and belong to these pages. Nothing new may target them.

| Query pattern | Owner page | Protected by |
|---|---|---|
| same day home services / home maintenance Dubai | `/` | Home title and H1 unchanged. `/same-day` retitled to "Booking Cut-Off and How a Visit Works" and links back to `/` with that anchor. |
| same day {service} Dubai | `/services/{service}` (9 pages) | Titles and H1s unchanged. Sub-service pages target the job name, never "same day". |
| same day {service} in {area} | `/services/{service}/{area}` (126 pages) | Titles and H1s unchanged. No new area pages. |

Standing rules for future work:

- No new page may put "same day" at the start of its title or H1.
- No sitewide link (header, footer) may use the bare anchor "Same-Day Service" for any page except the home page.
- `/same-day` is a process page. Its anchors are "how booking works" or "4 PM cut-off".
- Before any release, diff every route against `seo-baseline.json`.

## The four intents and who owns them

| Intent | What the searcher wants | Example queries | Owner pages | Count |
|---|---|---|---|---|
| Transactional, city | Book a trade today | same day AC repair Dubai, plumber Dubai today | `/services/{service}` | 9 |
| Transactional, local | Book a trade near me | AC repair JVC, cleaning Dubai Marina | `/services/{service}/{area}` | 126 |
| Transactional, specific job | Book one named job | AC gas refill Dubai, door lock change Dubai | `/services/{service}/{sub-service}` | 10 |
| Local, navigational | Who serves my community | home services Business Bay, maintenance company JLT | `/areas/{area}` | 14 |
| Commercial investigation | Compare cost and options before booking | AC repair cost Dubai, best deep cleaning Dubai | `/blog/*` cost and "best" guides | 18 posts across both |
| Informational | Understand a problem or do it myself | AC not cooling, how often service AC, move-out checklist | `/blog/*` how-to guides | |
| Process, trust | How does booking work, can I rely on it | cut-off time, call-out fee, guarantee | `/same-day`, `/about`, `/quote` | 3 |

## Does each page type satisfy its intent?

Checked against the three tests from the brief: the content answers the intent, the page carries structured data for it, and the content has depth.

| Page type | Answers the intent in the first screen | Structured data | Depth (avg words) | Verdict |
|---|---|---|---|---|
| Service pages | Yes: price, cut-off and guarantee in the first paragraph, call and WhatsApp buttons, quote form | Service + Offer, FAQPage, Breadcrumb, WebPage | 1,009 | Strong |
| Service x area pages | Yes: same answer localised, area price note, access rules | Service + Offer, FAQPage, Breadcrumb, WebPage | 733 | Good |
| Sub-service pages | Yes: price and what is included in the first paragraph | Service + Offer, FAQPage, Breadcrumb, WebPage | 781 | Good |
| Area pages | Yes: services offered and response time | Service, FAQPage, Breadcrumb, WebPage | 465, was 353 | Improved this round; still the lightest ranked group |
| Blog, cost and "best" guides | Yes: "Quick answer" box with the figure | Article, FAQPage, Breadcrumb | 519 | Adequate; several older posts are short |
| Blog, how-to guides | Yes: "Quick answer" box | Article, FAQPage, Breadcrumb | 519 | Adequate |
| `/same-day` process page | Yes: cut-off rule in the first paragraph | WebPage, ItemList, FAQPage, Breadcrumb | 1,275 | Strong |
| `/about` | Partly: no named people, licence or photos | AboutPage, Breadcrumb | 276 | Weak for a trust page |

## What was done this round for each of the four points

1. **Identify intent.** This map assigns one intent and one owner page to each query pattern, so no two pages chase the same search.
2. **Content carries the intent, with structured data.** Every ranked page type states its answer in the first paragraph and carries schema matching its intent. The four pages that lacked a page-level node now have one.
3. **Depth.** Area pages gained three sections built from existing area facts: how technicians get access, what we are called out for most (each linked to the matching local service page), and prices and arrival times. No existing sentence was changed.
4. **Best practice, low update risk.** Nothing here relies on a trick. One owner per intent, real prices, visible FAQs matching the schema, honest dates, and no doorway or duplicate pages.

## Gaps still open, in priority order

| Gap | Intent affected | What it needs |
|---|---|---|
| No evidence for rating and volume claims | Trust, commercial | Confirm the rating on the Google profile; then it can go in schema |
| About page is thin and anonymous | Trust | Named people, trade licence number, real photos |
| Blog posts by "UAE Quick Team" | Informational, commercial | A named author with a short bio |
| 7 older posts are under 450 words | Informational | Expand with real job examples and prices; needs approval because it edits existing copy |
| Comparison intent is uncovered | Commercial | Posts such as "repair or replace an old AC" and "deep clean vs regular clean" (listed in TOPICAL_MAP.md) |
| Sub-services without published prices | Transactional, specific job | Prices for blocked drain, water heater, toilet repair, carpet cleaning |
| No Search Console query data | All | Queries export, to confirm intent and find queries with impressions but no matching page |
