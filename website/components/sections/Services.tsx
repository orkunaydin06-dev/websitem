"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { consultingServices, coachingServices } from "@/lib/data";
import { EASE } from "@/lib/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent shrink-0 mt-0.5"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function Services() {
  return (
    <>
      {/* Danışmanlık */}
      <section id="danismanlik" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-16"
          >
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Danışmanlık
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:justify-between">
              <h2 className="font-display text-5xl md:text-6xl font-light text-ink leading-tight">
                İşletmenizi
                <br />
                <span className="italic text-accent">büyütelim</span>
              </h2>
              <p className="text-ink-muted max-w-xs text-sm leading-relaxed">
                Küresel FMCG ve teknoloji şirketlerindeki 10 yıllık deneyimi
                işletmenize uyarlayan strateji danışmanlığı.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {consultingServices.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group p-8 border border-border rounded-sm bg-surface hover:border-accent/40 transition-all duration-400 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-medium text-ink mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-xs text-ink-muted">
                        <CheckIcon />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/#iletisim"
              className="inline-flex items-center gap-2 bg-accent text-bg px-8 py-4 text-sm font-medium tracking-wide hover:bg-accent-light transition-colors duration-300 rounded-sm"
            >
              Proje Görüşmesi Ayarla
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
          </motion.div>
        </div>
      </section>

      {/* Koçluk */}
      <section id="kocluk" className="py-32 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-16"
          >
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Koçluk
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:justify-between">
              <h2 className="font-display text-5xl md:text-6xl font-light text-ink leading-tight">
                Kariyerinizi
                <br />
                <span className="italic text-accent">hızlandıralım</span>
              </h2>
              <p className="text-ink-muted max-w-xs text-sm leading-relaxed">
                FMCG ve teknoloji sektörlerinde üst düzey kariyer hedefleriniz
                için birebir koçluk. Kendi yolumdan öğrendiklerimi paylaşıyorum.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {coachingServices.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group p-8 border border-border rounded-sm bg-bg hover:border-accent/40 transition-all duration-400 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-medium text-ink mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-xs text-ink-muted">
                        <CheckIcon />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/#iletisim"
              className="inline-flex items-center gap-2 border border-accent text-accent px-8 py-4 text-sm font-medium tracking-wide hover:bg-accent hover:text-bg transition-colors duration-300 rounded-sm"
            >
              Keşif Seansı Ayarla
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
