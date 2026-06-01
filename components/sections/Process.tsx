import type { ProcessStep } from '@/lib/data/types';

export function Process({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title} className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-base font-bold text-white">
            {i + 1}
          </div>
          <h3 className="text-lg font-bold text-ink">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
