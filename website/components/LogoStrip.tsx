import fs from "node:fs";
import path from "node:path";
import { Marquee } from "./Marquee";

type Company = { name: string; logo: string };

// SVG'nin en-boy oranı; logoları eşit optik ağırlıkta göstermek için kullanılır.
function aspectRatio(src: string): number | undefined {
  const file = path.join(process.cwd(), "public", src);
  if (!fs.existsSync(file)) return undefined;
  const box = fs.readFileSync(file, "utf8").match(/viewBox="([^"]+)"/)?.[1];
  const [, , w, h] = box?.split(/[\s,]+/).map(Number) ?? [];
  return w && h ? w / h : undefined;
}

// Eşit alan kuralı: geniş logolar alçak, kare logolar yüksek olur.
const AREA = 2600; // px²
const MAX_HEIGHT = 46;

function Logo({ company }: { company: Company }) {
  const ratio = aspectRatio(company.logo);
  if (!ratio) {
    return <span className="display text-[1.6rem] font-semibold tracking-[-0.02em]">{company.name}</span>;
  }
  const height = Math.min(MAX_HEIGHT, Math.sqrt(AREA / ratio));
  // Logo tek renk: SVG maske olarak kullanılır, rengi metin renginden gelir.
  return (
    <span
      role="img"
      aria-label={company.name}
      className="block bg-current"
      style={{
        height,
        width: height * ratio,
        maskImage: `url(${company.logo})`,
        WebkitMaskImage: `url(${company.logo})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

// Hareketli logo şeridi: "Bugüne kadar çalıştığım şirketler"
export function LogoStrip({ title, companies }: { title: string; companies: Company[] }) {
  // Şerit ekranı doldursun diye liste iki kez tekrarlanır.
  const items = [...companies, ...companies].map((c, i) => (
    <div key={i} className="flex h-16 items-center px-8 sm:px-12">
      <Logo company={c} />
    </div>
  ));
  return (
    <div>
      <p className="mb-5 text-center text-sm text-ink-3">{title}</p>
      <Marquee
        items={items}
        label={companies.map((c) => c.name).join(", ")}
        speed="slow"
        className="bg-moss py-4 text-paper"
      />
    </div>
  );
}
