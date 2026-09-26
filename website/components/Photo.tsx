import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import clsx from "clsx";

export function publicFileExists(src: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src));
}

// Fotoğraf dosyası public/ altında yoksa build kırılmaz; sakin bir yer tutucu çıkar.
export function Photo({
  src,
  alt,
  className,
  priority,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  corner,
  position,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  corner?: boolean;
  position?: string;
}) {
  const exists = publicFileExists(src);
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-[3px] border border-ink/85 bg-linen",
        corner && "corner",
        className
      )}
    >
      {exists ? (
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" style={{ objectPosition: position }} />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,var(--color-moss-mist),transparent_60%)]"
        >
          <span className="display display-art select-none text-[5rem] text-moss/30">OA</span>
        </div>
      )}
    </div>
  );
}
