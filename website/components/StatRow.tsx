// Sakin, küçük rakam satırı. Ön planda değil.
export function StatRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 border-y border-rule lg:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.value}
          className={[
            "px-2 py-6 sm:px-6",
            i % 2 === 1 ? "border-l border-rule" : "",
            i >= 2 ? "border-t border-rule lg:border-t-0" : "",
            i === 2 ? "lg:border-l" : "",
          ].join(" ")}
        >
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className="block text-[1.5rem] font-medium tabular-nums tracking-[-0.02em] text-ink">{s.value}</span>
            <span aria-hidden="true" className="mt-1 block text-sm leading-snug text-ink-2">
              {s.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
