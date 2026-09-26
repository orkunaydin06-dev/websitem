"use client";

import { useState } from "react";
import clsx from "clsx";
import { ideas, type CategoryId } from "@/content/site";
import { TextLink } from "./Button";

type Item = { slug: string; category: CategoryId; card: React.ReactNode };

// Kategori filtresi. Kartlar sunucuda çizilir, burada yalnızca süzülür.
export function IdeasList({
  items,
  categories,
}: {
  items: Item[];
  categories: { id: CategoryId; label: string }[];
}) {
  const [active, setActive] = useState<CategoryId | "all">("all");
  const visible = active === "all" ? items : items.filter((i) => i.category === active);
  const tabs = [{ id: "all" as const, label: ideas.all }, ...categories];

  return (
    <>
      <div role="group" aria-label="Kategoriye göre süz" className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={active === t.id}
            onClick={() => setActive(t.id)}
            className={clsx(
              "rounded-[2px] border px-3.5 py-1.5 text-sm font-medium transition-colors",
              active === t.id
                ? "border-moss bg-moss text-paper"
                : "border-ink/70 text-ink hover:border-moss hover:text-moss"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((i) => (
          <div key={i.slug}>{i.card}</div>
        ))}
        {active === "sanat" && <SubstackCard />}
      </div>
    </>
  );
}

export function SubstackCard() {
  return (
    <div className="flex flex-col justify-between rounded-[3px] border border-dashed border-ink/60 p-7">
      <p className="display display-art text-[1.5rem] leading-snug">{ideas.substack.text}</p>
      <TextLink href={ideas.substack.link.href} external className="mt-8 self-start">
        {ideas.substack.link.label}
      </TextLink>
    </div>
  );
}
