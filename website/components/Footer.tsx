import Link from "next/link";
import { footer, social } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="display text-[1.75rem] font-semibold tracking-[-0.02em]">{footer.name}</p>
            <p className="mt-3 max-w-xs text-paper/70">{footer.tagline}</p>
          </div>
          <nav aria-label="Alt menü">
            <ul className="space-y-2.5">
              {footer.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-paper/85 underline-offset-4 hover:text-paper hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="space-y-2.5">
            {social.map((s) => {
              const external = s.href.startsWith("http");
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-paper/85 underline-offset-4 hover:text-paper hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="mt-14 border-t border-paper/15 pt-6 text-sm text-paper/55">{footer.copyright}</p>
      </div>
    </footer>
  );
}
