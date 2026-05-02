"use client";

import { motion } from "framer-motion";
import { speakingEvents } from "@/lib/data";
import { EASE } from "@/lib/motion";
import Link from "next/link";

const typeLabels: Record<string, string> = {
  konferans: "Konferans",
  podcast: "Podcast",
  panel: "Panel",
  webinar: "Webinar",
};

const typeColors: Record<string, string> = {
  konferans: "text-accent",
  podcast: "text-ink-muted",
  panel: "text-accent-light",
  webinar: "text-ink-muted",
};

export default function Speaking() {
  return (
    <section id="konusmalar" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Konuşmalar
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-0 sm:justify-between">
            <h2 className="font-display text-5xl md:text-6xl font-light text-ink leading-tight">
              Sahneye
              <br />
              <span className="italic text-accent">çıktıklarım</span>
            </h2>
            <p className="text-ink-muted max-w-xs text-sm leading-relaxed">
              Konferanslar, podcastler, paneller. Girişimcilik ve ürün
              geliştirme üzerine konuşmak için her davet açığım.
            </p>
          </div>
        </motion.div>

        <div className="space-y-px border border-border rounded-sm overflow-hidden">
          {speakingEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: EASE,
              }}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 bg-surface hover:bg-surface-2 transition-colors duration-300 border-b border-border last:border-b-0"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className={`text-xs font-medium tracking-wider uppercase ${typeColors[event.type]}`}
                  >
                    {typeLabels[event.type]}
                  </span>
                  <span className="text-ink-faint text-xs">{event.date}</span>
                </div>
                <h3 className="text-ink font-medium text-sm sm:text-base leading-snug group-hover:text-accent transition-colors duration-300 mb-1 truncate">
                  {event.title}
                </h3>
                <p className="text-ink-muted text-xs">{event.event}</p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <span className="flex items-center gap-1.5 text-xs text-ink-faint">
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
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {event.location}
                </span>
                {event.url && (
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:text-accent-light transition-colors duration-300"
                  >
                    İzle →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 p-8 border border-accent/30 rounded-sm bg-accent/5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-0 sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-medium text-ink mb-2">
                Konuşmacı Daveti
              </h3>
              <p className="text-ink-muted text-sm max-w-md">
                Etkinliğinizde girişimcilik, SaaS, uzaktan çalışma ya da
                verimlilik üzerine konuşmamı ister misiniz?
              </p>
            </div>
            <Link
              href="/#iletisim"
              className="inline-flex items-center gap-2 bg-accent text-bg px-6 py-3 text-sm font-medium hover:bg-accent-light transition-colors duration-300 rounded-sm whitespace-nowrap shrink-0"
            >
              Davet Gönder
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
