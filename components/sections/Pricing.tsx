import type { PriceRow } from '@/lib/data/types';

export function Pricing({ rows, note }: { rows: PriceRow[]; note?: string }) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-brand text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">Job</th>
              <th className="px-4 py-3 font-semibold">What's included</th>
              <th className="px-4 py-3 text-right font-semibold">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r) => (
              <tr key={r.item} className="bg-white">
                <td className="px-4 py-3 font-semibold text-ink">{r.item}</td>
                <td className="px-4 py-3 text-slate-600">{r.includes}</td>
                <td className="whitespace-nowrap px-4 py-3 text-right font-bold text-accent">
                  {r.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-4 text-center text-sm text-slate-500">{note}</p>}
    </div>
  );
}
