'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { company, mainNav, PHONE_E164, PHONE_DISPLAY } from '@/lib/data/site';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/icons/Icon';

// The header quote form (react-hook-form + zod) only loads when a visitor opens
// it, keeping it out of the JavaScript shipped with every page.
const HeaderQuoteForm = dynamic(
  () => import('@/components/forms/HeaderQuoteForm').then((m) => m.HeaderQuoteForm),
  { ssr: false, loading: () => <div className="h-72 animate-pulse bg-slate-50" aria-hidden /> }
);

export function Header() {
  const [open, setOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close the quote dropdown on outside click or Escape.
  useEffect(() => {
    if (!quoteOpen) return;
    const onClick = (e: MouseEvent) => {
      if (quoteRef.current && !quoteRef.current.contains(e.target as Node)) setQuoteOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setQuoteOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [quoteOpen]);

  // Close the quote dropdown whenever the route changes.
  useEffect(() => {
    setQuoteOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Topbar */}
      <div className="bg-brand-dark text-white">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-2 px-5 py-2 text-[13px]">
          <span className="font-semibold">Open 7 Days - 8 AM to 10 PM</span>
          <div className="flex flex-wrap items-center gap-4">
            <a href={`tel:${PHONE_E164}`} aria-label={`Call UAE Quick on ${PHONE_DISPLAY}`} className="inline-flex items-center gap-1.5 hover:text-gold">
              <Icon name="Phone" size={14} /> {PHONE_DISPLAY}
            </a>
            <span className="hidden items-center gap-1.5 sm:inline-flex">
              <Icon name="MapPin" size={14} /> Al Quoz, Dubai
            </span>
            <a href={`mailto:${company.email}`} className="hidden items-center gap-1.5 hover:text-gold md:inline-flex">
              <Icon name="Mail" size={14} /> {company.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3">
          <Link href="/" className="flex items-center" aria-label="UAEQuick - home">
            <span className="text-xl font-extrabold tracking-tight text-brand">
              UAE<span className="text-accent">Quick</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {mainNav.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'text-[15px] font-semibold text-ink transition-colors hover:text-accent',
                        active && 'text-brand'
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {/* Quick quote - opens a compact lead form on every page */}
            <div className="relative hidden sm:block" ref={quoteRef}>
              <button
                type="button"
                aria-haspopup="dialog"
                aria-expanded={quoteOpen}
                onClick={() => setQuoteOpen((v) => !v)}
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Get a Free Quote
              </button>
              {quoteOpen && (
                <div
                  role="dialog"
                  aria-label="Get a free quote"
                  className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-[min(92vw,22rem)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"
                >
                  <HeaderQuoteForm onSuccess={() => setQuoteOpen(false)} />
                </div>
              )}
            </div>
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noopener"
              aria-label="Chat on WhatsApp"
              className="hidden rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark md:inline-flex"
            >
              WhatsApp
            </a>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 lg:hidden"
            >
              <Icon name={open ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav aria-label="Mobile" className="border-t border-slate-100 bg-white lg:hidden">
            <ul className="mx-auto max-w-[1200px] px-5 py-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-slate-50 py-3 font-semibold text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="py-3">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <HeaderQuoteForm onSuccess={() => setOpen(false)} />
                </div>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
