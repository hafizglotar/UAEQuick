import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/data/services';
import type { Service } from '@/lib/data/types';
import { Icon } from '@/components/ui/Icon';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover"
    >
      {service.image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={service.image}
            alt={`${service.name} in Dubai - UAE Quick`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand shadow-sm backdrop-blur">
            <Icon name={service.icon} size={18} />
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-brand group-hover:text-accent">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {service.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink">From {service.startingPrice}</span>
          <span className="text-sm font-semibold text-accent">Learn more →</span>
        </div>
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
