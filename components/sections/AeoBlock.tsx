import type { Service } from '@/lib/data/types';

/**
 * Answer-Engine-Optimized content block: explicit What / Why / Problems /
 * Local / Cost structure with clear H2/H3 headings, written so featured
 * snippets and AI overviews can extract clean, self-contained answers.
 */
export function AeoBlock({ service }: { service: Service }) {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
      {/* Quick answer — the snippet/AI-overview target */}
      <div className="rounded-2xl border-l-4 border-accent bg-slate-50 p-6">
        <p className="text-[15px] font-semibold uppercase tracking-wide text-accent">In short</p>
        <p className="mt-2 text-lg leading-relaxed text-ink">{service.quickAnswer}</p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-brand">What is {service.name.toLowerCase()} in Dubai?</h2>
        <p className="mt-3 leading-relaxed text-slate-700">{service.whatIsIt}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-brand">Why is it needed?</h2>
        <p className="mt-3 leading-relaxed text-slate-700">{service.whyNeeded}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-brand">Common problems we fix</h2>
        <ul className="mt-3 space-y-2">
          {service.commonProblems.map((p) => (
            <li key={p} className="flex gap-3 leading-relaxed text-slate-700">
              <span className="mt-1 text-accent" aria-hidden>✓</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-brand">Local Dubai considerations</h2>
        <p className="mt-3 leading-relaxed text-slate-700">{service.localConsiderations}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-brand">How much does it cost?</h2>
        <p className="mt-3 leading-relaxed text-slate-700">{service.costGuidance}</p>
      </section>
    </div>
  );
}
