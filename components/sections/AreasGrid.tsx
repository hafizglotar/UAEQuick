import Link from 'next/link';
import { areas } from '@/lib/data/areas';
import type { Area } from '@/lib/data/types';

/**
 * Linked area pills - internal-linking hub for local SEO. Pass `hrefFor` to
 * point the pills somewhere other than /areas/[slug] (e.g. a service's
 * service x area pages).
 */
export function AreasGrid({
  dark,
  hrefFor = (a) => `/areas/${a.slug}`,
}: {
  dark?: boolean;
  hrefFor?: (area: Area) => string;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {areas.map((a) => (
        <Link
          key={a.slug}
          href={hrefFor(a)}
          className={
            dark
              ? 'rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white transition-colors hover:border-accent hover:bg-accent'
              : 'rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white'
          }
        >
          {a.name.split(' (')[0]}
        </Link>
      ))}
    </div>
  );
}
