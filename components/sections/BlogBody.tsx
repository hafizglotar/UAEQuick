import type { BlogBlock } from '@/lib/data/types';

/** Renders blog content blocks as semantic, accessible HTML. */
export function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose-local">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return <h2 key={i}>{b.text}</h2>;
          case 'h3':
            return <h3 key={i}>{b.text}</h3>;
          case 'p':
            return <p key={i}>{b.text}</p>;
          case 'ul':
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ol>
            );
          case 'quote':
            return (
              <blockquote key={i} className="my-6 border-l-4 border-accent bg-slate-50 px-5 py-4 italic text-slate-700">
                {b.text}
              </blockquote>
            );
          case 'table':
            return (
              <div key={i} className="my-6 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-brand text-white">
                      {b.headers.map((h, j) => (
                        <th key={j} className="px-4 py-2.5 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-slate-100">
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-2.5 text-slate-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
