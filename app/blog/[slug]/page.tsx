import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BlogBody } from '@/components/sections/BlogBody';
import { Faq } from '@/components/sections/Faq';
import { CtaBand } from '@/components/sections/CtaBand';
import { JsonLd } from '@/components/seo/JsonLd';
import { articleSchema, faqSchema } from '@/lib/seo/schema';
import { buildMetadata } from '@/lib/seo/metadata';
import { getPostBySlug, postSlugs, posts } from '@/lib/data/blog';
import { services } from '@/lib/data/services';

export const dynamicParams = false;

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    image: post.image,
    type: 'article',
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = post.relatedServices
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <Section>
        <Container>
          <article className="mx-auto max-w-3xl">
            <header>
              <div className="flex items-center gap-3 text-sm">
                <span className="font-semibold uppercase tracking-wide text-accent">{post.category}</span>
                <span className="text-slate-400">{post.readingMinutes} min read</span>
                <span className="text-slate-400">
                  Updated{' '}
                  {new Date(post.dateModified).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <h1 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-ink md:text-4xl">
                {post.title}
              </h1>
            </header>

            {/* TL;DR — AEO answer target */}
            <div className="my-7 rounded-2xl border-l-4 border-accent bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">Quick answer</p>
              <p className="mt-2 text-lg leading-relaxed text-ink">{post.tldr}</p>
            </div>

            <BlogBody blocks={post.body} />

            {related.length > 0 && (
              <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <p className="font-bold text-brand">Related service</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/services/${r.slug}`}
                      className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand shadow-card hover:text-accent"
                    >
                      {r.icon} {r.name} in Dubai →
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </Container>
      </Section>

      <Faq faqs={post.faqs} title="FAQs" />

      {more.length > 0 && (
        <Section muted>
          <Container>
            <h2 className="mb-6 text-center text-2xl font-bold text-brand">More Guides</h2>
            <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">{p.category}</span>
                  <h3 className="mt-2 font-bold text-brand">{p.title}</h3>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CtaBand />

      <JsonLd data={[articleSchema(post), faqSchema(post.faqs)]} />
    </>
  );
}
