import type { Feature } from '@/lib/data/types';
import { Icon } from '@/components/ui/Icon';

export function Features({ items }: { items: Feature[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f) => (
        <div key={f.title} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
          <Icon name={f.icon} size={28} className="mt-0.5 shrink-0 text-brand" />
          <div>
            <h3 className="font-bold text-ink">{f.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{f.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const whyItems: Feature[] = [
  { icon: 'Zap', title: 'Same-Day Across Dubai', text: 'Book before 4 PM and a technician reaches most areas the same day.' },
  { icon: 'Coins', title: 'Fixed, Upfront Pricing', text: 'A written quote before any work begins. No call-out fee, no surprises.' },
  { icon: 'ShieldCheck', title: '30-Day Guarantee', text: 'If a repair fails again within 30 days, we come back and fix it free.' },
  { icon: 'Wrench', title: 'Own Tools & Transport', text: 'Every technician arrives fully equipped - no supply runs, no delays.' },
  { icon: 'ClipboardCheck', title: 'Licensed & Insured', text: 'Work done to DEWA and building-management standards across Dubai.' },
  { icon: 'Star', title: 'Rated 4.8/5', text: 'Trusted by 10,000+ Dubai homes and offices, 412+ reviews.' },
];

export function WhyChooseUs() {
  return <Features items={whyItems} />;
}
