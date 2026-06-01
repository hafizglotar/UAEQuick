import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { services } from '@/lib/data/services';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[55vh] max-w-2xl flex-col items-center justify-center px-5 py-16 text-center">
      <div className="text-6xl font-extrabold text-brand">404</div>
      <h1 className="mt-3 text-2xl font-bold text-ink">Page not found</h1>
      <p className="mt-2 text-slate-600">
        The page you&apos;re looking for has moved or doesn&apos;t exist. Try one of our services:
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {services.slice(0, 6).map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
          >
            {s.name}
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Button href="/" variant="primary">Back to home</Button>
      </div>
    </div>
  );
}
