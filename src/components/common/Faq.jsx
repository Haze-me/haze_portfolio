import { Plus } from 'lucide-react';

/** Native <details>: keyboard accessible and searchable without extra code. */
export default function Faq({ items }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
      {items.map((item) => (
        <details key={item.question} className="group px-5 sm:px-7">
          <summary className="flex min-h-16 list-none items-center justify-between gap-4 py-4 font-display text-lg font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
            {item.question}
            <Plus className="size-5 shrink-0 text-accent-700 transition group-open:rotate-45" aria-hidden="true" />
          </summary>
          <p className="pb-5 leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
