import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, SectionHead } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaBand } from '@/components/sections/CtaBand';
import { buildMetadata } from '@/lib/seo/metadata';
import { posts } from '@/lib/data/blog';

export const metadata: Metadata = buildMetadata({
  title: 'Dubai Home Maintenance Blog | Costs, Tips & Guides | UAE Quick',
  description:
    'Practical guides for Dubai homes — AC repair costs, handyman prices, plumbing problems, deep cleaning checklists and seasonal maintenance advice from local experts.',
  path: '/blog',
  keywords: ['Dubai home maintenance blog', 'AC repair cost Dubai', 'handyman cost Dubai'],
});

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }]} />
      <Section>
        <Container>
          <SectionHead
            as="h1"
            eyebrow="Guides"
            title="Dubai Home Maintenance Guides"
            intro="Straight-talking advice on costs, common problems and seasonal care — written from real experience maintaining Dubai homes."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article
                key={p.slug}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover"
              >
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
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
