import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Section, SectionHead } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/JsonLd';
import { itemListSchema, webPageSchema } from '@/lib/seo/schema';
import { buildMetadata } from '@/lib/seo/metadata';
import { posts } from '@/lib/data/blog';

const PER_PAGE = 6;

/** Newest-first so the latest guides lead each page. */
const sortedPosts = [...posts].sort(
  (a, b) => +new Date(b.datePublished) - +new Date(a.datePublished)
);
const totalPages = Math.max(1, Math.ceil(sortedPosts.length / PER_PAGE));

function currentPage(value?: string): number {
  const n = Number(value);
  if (!Number.isInteger(n) || n < 1) return 1;
  return Math.min(n, totalPages);
}

/** Page 1 keeps the clean /blog URL; later pages use ?page=N. */
function pageHref(page: number): string {
  return page <= 1 ? '/blog' : `/blog?page=${page}`;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const page = currentPage((await searchParams).page);
  const suffix = page > 1 ? ` (Page ${page})` : '';
  return buildMetadata({
    title: `Dubai Home Maintenance Blog | Costs, Tips & Guides${suffix} | UAE Quick`,
    description:
      'Practical guides for Dubai homes - AC repair costs, handyman prices, plumbing problems, deep cleaning checklists and seasonal maintenance advice from local experts.',
    path: pageHref(page),
    keywords: ['Dubai home maintenance blog', 'AC repair cost Dubai', 'handyman cost Dubai'],
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const page = currentPage((await searchParams).page);
  const start = (page - 1) * PER_PAGE;
  const pagePosts = sortedPosts.slice(start, start + PER_PAGE);

  return (
    <>
      <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }]} />
      <Section>
        <Container>
          <SectionHead
            as="h1"
            eyebrow="Guides"
            title="Dubai Home Maintenance Guides"
            intro="Straight-talking advice on costs, common problems and seasonal care - written from real experience maintaining Dubai homes."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pagePosts.map((p) => (
              <article
                key={p.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover"
              >
                <Link href={`/blog/${p.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-semibold uppercase tracking-wide text-accent">{p.category}</span>
                    <span className="text-slate-400">{p.readingMinutes} min read</span>
                  </div>
                  <h2 className="mt-2 text-lg font-bold text-brand">
                    <Link href={`/blog/${p.slug}`} className="hover:text-accent">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-slate-600">{p.excerpt}</p>
                  <Link href={`/blog/${p.slug}`} className="mt-4 text-sm font-semibold text-accent">
                    Read guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <nav aria-label="Blog pagination" className="mt-12 flex items-center justify-center gap-2">
              {page > 1 ? (
                <Link
                  href={pageHref(page - 1)}
                  rel="prev"
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
                >
                  ← Prev
                </Link>
              ) : (
                <span className="cursor-not-allowed rounded-lg border border-slate-100 px-4 py-2 text-sm font-semibold text-slate-300">
                  ← Prev
                </span>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <Link
                  key={n}
                  href={pageHref(n)}
                  aria-current={n === page ? 'page' : undefined}
                  className={
                    n === page
                      ? 'rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white'
                      : 'rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-ink hover:border-brand hover:text-brand'
                  }
                >
                  {n}
                </Link>
              ))}

              {page < totalPages ? (
                <Link
                  href={pageHref(page + 1)}
                  rel="next"
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
                >
                  Next →
                </Link>
              ) : (
                <span className="cursor-not-allowed rounded-lg border border-slate-100 px-4 py-2 text-sm font-semibold text-slate-300">
                  Next →
                </span>
              )}
            </nav>
          )}
        </Container>
      </Section>
      <JsonLd
        data={[
          webPageSchema({
            path: pageHref(page),
            name: 'Dubai Home Maintenance Guides',
            description: 'Practical guides on home maintenance costs, problems and seasonal care in Dubai.',
            type: 'CollectionPage',
          }),
          itemListSchema(
            'Dubai Home Maintenance Guides',
            pagePosts.map((p) => ({ name: p.title, path: `/blog/${p.slug}` }))
          ),
        ]}
      />
      <CtaBand />
    </>
  );
}
