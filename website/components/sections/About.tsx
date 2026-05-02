"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  {
    title: "Şeffaflık",
    description:
      "Bildiklerimi paylaşırım, bilmediklerimi de. Gerçek öğrenme açıklık gerektirir.",
  },
  {
    title: "Ustalık",
    description:
      "Ortalama yetersizdir. Her işte gerçekten iyi olmaya çalışmak, yöntemin kendisidir.",
  },
  {
    title: "Sürekli Öğrenme",
    description:
      "En büyük rekabet avantajı öğrenme hızıdır. Kitap, deney, hata — hepsi sınıftır.",
  },
  {
    title: "Küçük ve Güçlü",
    description:
      "Büyük ekip = büyük güç değil. Odaklı, küçük ve otomatize edilmiş bir iş, birçok şirketi yener.",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <section id="hakkimda" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 rounded-sm -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-border rounded-sm -z-10" />
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
              className="font-display text-5xl md:text-6xl font-light text-ink leading-tight mb-6"
            >
              İstanbul'dan
              <br />
              <span className="italic text-accent">dünyaya</span> uzanan
              <br />
              bir merak.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-ink-muted leading-relaxed mb-4"
            >
              Merhaba. Ben Orkun — yazan, kodlayan ve şirket kuran biri.
              Özellikle uzaktan çalışma ve küçük takımların büyük iş çıkarması
              üzerine takıntılıyım.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-ink-muted leading-relaxed mb-4"
            >
              2022'den beri bootstrapped ürünler üzerine çalışıyorum. Şu an{" "}
              <span className="text-ink font-medium">Akış</span>'ı kuruyorum —
              dağıtık ekipler için asenkron iş birliği aracı. Aynı zamanda{" "}
              <span className="text-ink font-medium">Dijital Pusulam</span>{" "}
              bültenini her Salı gönderiyorum.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-ink-muted leading-relaxed mb-10"
            >
              Girişimcilik, ürün geliştirme ve üretkenlik üzerine yazmak benim
              için hem düşünme biçimi hem de toplulukla değer paylaşmanın yolu.
              Bu site o paylaşımın evi.
            </motion.p>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {values.map((v) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  className="p-4 border border-border rounded-sm bg-surface hover:border-accent/40 transition-colors duration-300"
                >
                  <h3 className="text-accent font-medium text-sm mb-1">
                    {v.title}
                  </h3>
                  <p className="text-ink-muted text-xs leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
