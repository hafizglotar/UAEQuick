import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/seo/schema';
import { Icon } from '@/components/ui/Icon';

export interface Crumb {
  name: string;
  path: string;
}

/** Visible breadcrumb trail + matching BreadcrumbList schema. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: 'Home', path: '/' }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-slate-50">
      <ol className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-1.5 px-5 py-3 text-sm text-slate-600">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="font-semibold text-brand" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.path} className="hover:text-accent">
                    {c.name}
                  </Link>
                  <Icon name="ChevronRight" size={14} className="text-slate-500" />
                </>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd data={breadcrumbSchema(all)} />
    </nav>
  );
}
