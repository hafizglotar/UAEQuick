import type { Service } from '@/lib/data/types';

/**
 * Answer-Engine-Optimized content block: explicit What / Why / Problems /
 * Local / Cost structure with clear H2/H3 headings, written so featured
 * snippets and AI overviews can extract clean, self-contained answers.
 * (The "In short" direct answer sits in the hero, directly under the H1.)
 */
export function AeoBlock({ service }: { service: Service }) {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
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
