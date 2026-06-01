import { reviews } from '@/lib/data/reviews';

export function Reviews() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((r) => (
        <figure key={r.author} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
          <div className="text-gold" aria-label={`${r.rating} out of 5 stars`}>
            {'★'.repeat(r.rating)}
          </div>
          <blockquote className="mt-3 text-sm leading-relaxed text-slate-700">
            “{r.text}”
          </blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-ink">
            {r.author}
            <span className="font-normal text-slate-500"> · {r.service}, {r.area}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
