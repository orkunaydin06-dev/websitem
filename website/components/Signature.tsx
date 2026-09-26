// Sitenin imzası: "sanat" için elle çekilmiş fırça izi, "mimari" için ölçü çizgisi.
// İkisi yan yana, markalaşmanın sanatı ile büyümenin mimarisi arasındaki zıtlığı taşır.

export function BrushUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 300 24"
        preserveAspectRatio="none"
        className="brush absolute -bottom-[0.14em] left-[-3%] h-[0.32em] w-[106%] text-moss"
      >
        <path
          d="M4 15 C 60 7, 130 5, 190 9 S 272 15, 296 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
        />
        <path
          d="M28 19 C 100 13, 170 14, 250 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.55"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
        />
      </svg>
    </span>
  );
}

export function RulerUnderline({ children }: { children: React.ReactNode }) {
  const ticks = Array.from({ length: 11 }, (_, i) => i * 10);
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        className="ruler absolute -bottom-[0.16em] left-0 h-[0.22em] w-full text-moss"
      >
        <line x1="0" y1="5" x2="100" y2="5" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        {ticks.map((x) => (
          <line
            key={x}
            x1={x}
            x2={x}
            y1={x === 0 || x === 100 ? 0 : x === 50 ? 1.5 : 3}
            y2={x === 0 || x === 100 ? 10 : x === 50 ? 8.5 : 7}
            stroke="currentColor"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
    </span>
  );
}
