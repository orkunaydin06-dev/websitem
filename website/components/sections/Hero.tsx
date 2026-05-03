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
            Dublin, İrlanda
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-6xl sm:text-7xl md:text-8xl font-light text-ink leading-[0.92] mb-8"
          >
            Pazarlama
            <br />
            <span className="italic text-accent">stratejisti</span>
            <br />
            ve danışman.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-ink-muted max-w-xl mx-auto leading-relaxed mb-4"
          >
            Google'da hesap yöneticisi. Daha önce Coca-Cola İçecek'te 9 ülke için
            Gelir Büyüme Yönetimi, Unilever ve L'Oréal'da ticari pazarlama.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-sm text-ink-faint max-w-md mx-auto leading-relaxed mb-12"
          >
            İşletmelere büyüme stratejisi danışmanlığı, profesyonellere kariyer
            koçluğu yapıyorum. Sanat, felsefe ve kişisel gelişim üzerine yazıyorum.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/#danismanlik"
              className="inline-flex items-center gap-2 bg-accent text-bg px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-accent-light transition-colors duration-300 rounded-sm"
            >
              Danışmanlık
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
              href="/blog"
              className="inline-flex items-center gap-2 border border-border text-ink-muted px-7 py-3.5 text-sm font-medium tracking-wide hover:border-accent hover:text-accent transition-colors duration-300 rounded-sm"
            >
              Yazıları Oku
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
