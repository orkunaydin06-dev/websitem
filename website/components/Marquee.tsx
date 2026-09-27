import clsx from "clsx";

// Sonsuz kayan şerit. İçerik iki kez çizilir; ikinci kopya ekran okuyuculardan gizlenir.
export function Marquee({
  items,
  label,
  className,
  speed = "normal",
}: {
  items: React.ReactNode[];
  label: string; // ekran okuyucular için düz metin
  className?: string;
  speed?: "normal" | "slow";
}) {
  const run = (hidden?: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <div key={i} className="flex shrink-0 items-center">
          {item}
        </div>
      ))}
    </div>
  );
  return (
    <div className={clsx("overflow-hidden", className)}>
      <p className="sr-only">{label}</p>
      <div
        aria-hidden="true"
        className={clsx(
          "flex w-max motion-reduce:animate-none",
          speed === "slow" ? "animate-[marquee_60s_linear_infinite]" : "animate-marquee"
        )}
      >
        {run()}
        {run(true)}
      </div>
    </div>
  );
}

// ⁂ işareti fontlarda yok; üç küçük yıldız olarak çizilir.
export function Asterism({ className }: { className?: string }) {
  const star = "M0-4V4M-3.5-2 3.5 2M-3.5 2 3.5-2";
  return (
    <svg viewBox="-12 -12 24 22" width="20" height="18" aria-hidden="true" className={clsx("shrink-0", className)}>
      {[
        [0, -6],
        [-6, 4],
        [6, 4],
      ].map(([x, y]) => (
        <path key={`${x}${y}`} d={star} transform={`translate(${x} ${y})`} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      ))}
    </svg>
  );
}
