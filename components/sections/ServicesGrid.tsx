import Link from 'next/link';
import { services } from '@/lib/data/services';
import type { Service } from '@/lib/data/types';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover"
    >
      <div className="text-3xl" aria-hidden>
        {service.icon}
      </div>
      <h3 className="mt-3 text-lg font-bold text-brand group-hover:text-accent">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {service.shortDescription}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink">From {service.startingPrice}</span>
        <span className="text-sm font-semibold text-accent">Learn more →</span>
      </div>
    </Link>
  );
}

export function ServicesGrid({ items = services }: { items?: Service[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <ServiceCard key={s.slug} service={s} />
      ))}
    </div>
  );
}
