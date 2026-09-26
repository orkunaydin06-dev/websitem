"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { cta } from "@/content/site";
import { Button } from "./Button";

export function Header({ links }: { links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:h-[76px] sm:px-8">
        <Link href="/" className="display text-[1.35rem] font-semibold tracking-[-0.02em] sm:text-[1.5rem]">
          Orkun Aydın
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={clsx(
                    "text-[0.95rem] underline-offset-[6px] transition-colors hover:text-moss hover:underline",
                    isActive(l.href) ? "text-moss underline decoration-moss" : "text-ink"
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href={cta.href} size="sm">
            {cta.label}
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button href={cta.href} size="sm">
            {cta.label}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            className="flex h-10 w-10 items-center justify-center rounded-md"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-rule bg-paper md:hidden"
      >
        <nav aria-label="Mobil menü" className="h-[calc(100dvh-68px)] px-4 pt-6">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="display block border-b border-rule py-4 text-[1.9rem] font-medium"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
