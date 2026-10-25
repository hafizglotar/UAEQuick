import { company, PHONE_E164 } from '@/lib/data/site';
import { Icon } from '@/components/icons/Icon';

/**
 * Mobile sticky call + WhatsApp bar (conversion). Hidden on lg where the
 * header CTA is always visible. Plus a floating WhatsApp button on desktop.
 */
export function StickyCTAs() {
  return (
    <>
      {/* Mobile bottom action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 lg:hidden">
        <a
          href={`tel:${PHONE_E164}`}
          aria-label="Call UAE Quick"
          className="flex items-center justify-center gap-2 bg-brand py-3.5 font-semibold text-white"
        >
          <Icon name="Phone" size={18} /> Call Now
        </a>
        <a
          href={company.whatsappUrl}
          target="_blank"
          rel="noopener"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center gap-2 bg-whatsapp py-3.5 font-semibold text-white"
        >
          <Icon name="MessageCircle" size={18} /> WhatsApp
        </a>
      </div>

      {/* Desktop floating WhatsApp */}
      <a
        href={company.whatsappUrl}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-110 lg:flex"
      >
        <Icon name="MessageCircle" size={26} />
      </a>
    </>
  );
}
