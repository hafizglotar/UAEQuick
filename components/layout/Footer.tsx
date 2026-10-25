import Link from 'next/link';
import { company, PHONE_E164, PHONE_DISPLAY } from '@/lib/data/site';
import { services } from '@/lib/data/services';
import { areas } from '@/lib/data/areas';
import { Icon } from '@/components/icons/Icon';

export function Footer() {
  const half = Math.ceil(services.length / 2);
  return (
    <footer className="bg-brand-dark text-slate-300">
      <div className="mx-auto max-w-[1200px] px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-xl font-extrabold text-white">
              UAE<span className="text-accent-light">Quick</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed">{company.description}</p>
            <p className="mt-4 flex items-center gap-2 text-sm">
              <Icon name="Star" size={16} className="shrink-0 fill-current text-gold" />
              {company.rating.value}/5 from {company.rating.count}+ Dubai customers
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, half).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-accent">
                    {s.name} Dubai
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">More Services</h3>
            <ul className="space-y-2 text-sm">
              {services.slice(half).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-accent">
                    {s.name} Dubai
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="hover:text-accent">
                  All Areas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-0.5 shrink-0" />
                <span>{company.address.street}, {company.address.locality}, Dubai</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="shrink-0" />
                <a href={`tel:${PHONE_E164}`} className="hover:text-accent">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-accent">{company.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="shrink-0" />
                <span>8 AM-10 PM, 7 days</span>
              </li>
            </ul>
            <h3 className="mb-3 mt-6 font-semibold text-white">Popular Areas</h3>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
              {areas.slice(0, 6).map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="hover:text-accent">
                    {a.name.split(' (')[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm md:flex-row">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span className="flex gap-4">
            <Link href="/privacy" className="hover:text-accent">Privacy</Link>
            <Link href="/terms" className="hover:text-accent">Terms</Link>
            <Link href="/contact" className="hover:text-accent">Contact</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
