const items = [
  { strong: 'Fixed', label: 'pricing, quoted first' },
  { strong: 'Same-day', label: 'across Dubai' },
  { strong: '30-day', label: 'workmanship guarantee' },
  { strong: '4.8★', label: '412+ reviews' },
];

export function TrustRow() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map((it) => (
        <div
          key={it.strong}
          className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-center backdrop-blur"
        >
          <div className="text-lg font-bold text-gold">{it.strong}</div>
          <div className="text-xs text-white/85">{it.label}</div>
        </div>
      ))}
    </div>
  );
}
