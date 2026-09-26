"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { EASE } from "@/lib/motion";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-3xl w-full text-center">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.p
            variants={fadeUp}
            className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-8"
          >
            Marka ve Büyüme Stratejisti · Dublin
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-light text-ink leading-[1.02] mb-8"
          >
            Markalaşmanın sanatı.
            <br />
            <span className="italic text-accent">Büyümenin mimarisi.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-ink-muted max-w-xl mx-auto leading-relaxed mb-4"
          >
            10 yıl boyunca Coca-Cola, Unilever ve L'Oréal'da büyüme stratejisi
            kurdum; bugün Google'da çalışıyorum. Bu deneyimi Türkiye'deki markalar
            ve kariyerini inşa eden profesyoneller için kullanıyorum.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-sm text-ink-faint max-w-md mx-auto leading-relaxed mb-12"
          >
            ODTÜ İşletme · Lund Üniversitesi, Uluslararası Pazarlama ve Marka
            Yönetimi Yüksek Lisansı (İsveç)
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/#iletisim"
              className="inline-flex items-center gap-2 bg-accent text-bg px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-accent-light transition-colors duration-300 rounded-sm"
            >
              Tanışalım
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/#markalar"
              className="inline-flex items-center gap-2 border border-border text-ink-muted px-7 py-3.5 text-sm font-medium tracking-wide hover:border-accent hover:text-accent transition-colors duration-300 rounded-sm"
            >
              Hizmetleri İncele
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
