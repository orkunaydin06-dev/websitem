"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stuffILike, type StuffItem } from "@/lib/data";
import { clsx } from "clsx";
import { EASE } from "@/lib/motion";

type Category = StuffItem["category"] | "tümü";

const categories: { label: string; value: Category }[] = [
  { label: "Tümü", value: "tümü" },
  { label: "Kitaplar", value: "kitap" },
  { label: "Araçlar", value: "araç" },
  { label: "Podcastler", value: "podcast" },
  { label: "Kaynaklar", value: "kaynak" },
];

const categoryIcons: Record<string, React.ReactNode> = {
  kitap: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20" />
    </svg>
  ),
  araç: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  podcast: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 18v-6a9 9 0 0118 0v6" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
    </svg>
  ),
  kaynak: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
};

export default function StuffILike() {
  const [active, setActive] = useState<Category>("tümü");

  const filtered =
    active === "tümü"
      ? stuffILike
      : stuffILike.filter((item) => item.category === active);

  return (
    <section id="sevdiklerim" className="py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12"
        >
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Sevdiklerim
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-ink leading-tight">
            Tavsiye
            <br />
            <span className="italic text-accent">etmekten</span> keyif
            aldıklarım
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={clsx(
                "px-4 py-2 text-xs font-medium rounded-full border transition-all duration-300",
                active === cat.value
                  ? "bg-accent text-bg border-accent"
                  : "bg-transparent text-ink-muted border-border hover:border-accent/50 hover:text-ink"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                className="group p-6 border border-border rounded-sm bg-bg hover:border-accent/30 transition-all duration-400 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-accent">{categoryIcons[item.category]}</span>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink-faint hover:text-accent transition-colors duration-300"
                        aria-label="Bağlantıya git"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <h3 className="text-ink font-medium text-sm mb-1 group-hover:text-accent transition-colors duration-300">
                    {item.name}
                  </h3>
                  {item.author && (
                    <p className="text-xs text-ink-faint mb-2">{item.author}</p>
                  )}
                  <p className="text-ink-muted text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
