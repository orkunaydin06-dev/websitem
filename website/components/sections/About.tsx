"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EASE } from "@/lib/motion";

const timeline = [
  { year: "2025–", company: "Google", role: "Account Manager, Dublin İrlanda" },
  { year: "2023–25", company: "Coca-Cola İçecek", role: "Grup Gelir Büyüme Yöneticisi · 9 ülke" },
  { year: "2022–23", company: "Unilever / Lipton", role: "Ticari Kategori & Müşteri Pazarlama Yöneticisi" },
  { year: "2021", company: "Hepsiburada", role: "Kategori Geliştirme Yöneticisi" },
  { year: "2019–21", company: "Karaca", role: "Satış Yöneticisi & CEO Strateji Danışmanı" },
  { year: "2015–18", company: "L'Oréal", role: "Kilit Hesap Yöneticisi" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function About() {
  return (
    <section id="hakkimda" className="py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-sm rounded-sm overflow-hidden">
              <Image
                src="/images/about-portrait.jpg"
                alt="Orkun Aydın"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/30 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 border border-accent/25 rounded-sm -z-10" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={fadeUp}
              className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4"
            >
              Hakkımda
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl font-light text-ink leading-tight mb-8"
            >
              Küresel
              <br />
              <span className="italic text-accent">markalarda</span>
              <br />
              büyütülmüş
              <br />
              bir bakış açısı.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-ink-muted leading-relaxed mb-4">
              Merhaba. Ben Orkun — pazarlama stratejisti ve büyüme danışmanı.
              ODTÜ'de işletme, İsveç'te Lund Üniversitesi'nde uluslararası pazarlama
              üzerine yüksek lisans yaptım.
            </motion.p>

            <motion.p variants={fadeUp} className="text-ink-muted leading-relaxed mb-4">
              L'Oréal ile başlayan kariyerim Unilever, Hepsiburada, Karaca ve
              Coca-Cola İçecek üzerinden bugün Google İrlanda'ya uzandı. 10 yıl
              boyunca FMCG, perakende ve teknoloji sektörlerinde fiyatlandırma,
              kategori yönetimi ve büyüme stratejisi alanlarında çalıştım.
            </motion.p>

            <motion.p variants={fadeUp} className="text-ink-muted leading-relaxed mb-10">
              İş dışında sanat, felsefe ve kişisel gelişim üzerine düşünüyor,
              yazıyorum. Büyüme zihniyetini hem kurumsal hem bireysel boyutta
              nasıl inşa ederiz sorusu benim için hâlâ en ilgi çekici soru.
            </motion.p>

            <motion.div variants={stagger} className="space-y-2">
              {timeline.map((item) => (
                <motion.div
                  key={item.year}
                  variants={fadeUp}
                  className="flex items-start gap-4 py-3 border-b border-border last:border-b-0"
                >
                  <span className="text-xs text-ink-faint w-14 shrink-0 pt-0.5 tabular-nums">
                    {item.year}
                  </span>
                  <div>
                    <span className="text-sm font-medium text-ink">{item.company}</span>
                    <span className="text-sm text-ink-muted"> · {item.role}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
