import Image from "next/image";
import { publicFileExists } from "./Photo";

// Logolar tek renk, eşit optik boyutta. SVG yoksa isim metin olarak yazılır.
export function LogoStrip({
  title,
  companies,
}: {
  title: string;
  companies: { name: string; logo: string }[];
}) {
  return (
    <div className="border-y border-rule py-10">
      <p className="mb-7 text-center text-sm text-ink-3">{title}</p>
      <ul className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
        {companies.map((c) => (
          <li key={c.name} className="flex h-10 items-center justify-center">
            {publicFileExists(c.logo) ? (
              <Image
                src={c.logo}
                alt={c.name}
                width={120}
                height={40}
                className="h-7 w-auto max-w-[120px] object-contain opacity-80 [filter:brightness(0)_saturate(100%)_invert(10%)_sepia(12%)_saturate(700%)_hue-rotate(350deg)]"
              />
            ) : (
              <span className="display text-[1.35rem] font-semibold tracking-[-0.02em] text-ink/70">
                {c.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
