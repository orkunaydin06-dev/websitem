// Kayan şerit: Sorgula ⁂ Yansıt ⁂ Sahnele ⁂

// ⁂ işareti fontlarda yok; üç küçük yıldız olarak çizilir.
function Asterism() {
  const star = "M0-5V5M-4.3-2.5 4.3 2.5M-4.3 2.5 4.3-2.5";
  return (
    <svg viewBox="-14 -14 28 26" width="22" height="20" aria-hidden="true" className="shrink-0 text-paper/70">
      {[
        [0, -7],
        [-7, 5],
        [7, 5],
      ].map(([x, y]) => (
        <path key={`${x}${y}`} d={star} transform={`translate(${x} ${y})`} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      ))}
    </svg>
  );
}
export function Marquee({ words }: { words: string[] }) {
  const run = Array.from({ length: 4 }, () => words).flat();
  const line = (hidden?: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {run.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className="display display-art px-6 text-[2rem] sm:text-[2.6rem]">{w}</span>
          <Asterism />
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden bg-moss py-5 text-paper">
      <p className="sr-only">{words.join(". ")}.</p>
      <div className="flex w-max animate-marquee motion-reduce:animate-none" aria-hidden="true">
        {line()}
        {line(true)}
      </div>
    </div>
  );
}
