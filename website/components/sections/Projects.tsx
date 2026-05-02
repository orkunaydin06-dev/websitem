"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { clsx } from "clsx";

const statusLabels: Record<string, string> = {
  aktif: "Aktif",
  tamamlandı: "Tamamlandı",
  arşiv: "Arşiv",
};

const statusColors: Record<string, string> = {
  aktif: "bg-accent/15 text-accent border-accent/30",
  tamamlandı: "bg-ink-muted/10 text-ink-muted border-ink-muted/20",
  arşiv: "bg-ink-faint/10 text-ink-faint border-ink-faint/20",
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Projects() {
  return (
    <section id="projeler" className="py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Projeler
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-0 sm:justify-between">
            <h2 className="font-display text-5xl md:text-6xl font-light text-ink leading-tight">
              Üzerinde
              <br />
              <span className="italic text-accent">çalıştıklarım</span>
            </h2>
            <p className="text-ink-muted max-w-xs text-sm leading-relaxed">
              Bazıları erken aşamada, bazıları tamamlandı — hepsi gerçek bir
              problemden doğdu.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 border border-border rounded-sm bg-bg hover:border-accent/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={clsx(
                      "text-xs px-2.5 py-1 rounded-full border font-medium",
                      statusColors[project.status]
                    )}
                  >
                    {statusLabels[project.status]}
                  </span>
                  <span className="text-xs text-ink-faint font-mono">
                    {project.year}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-medium text-ink mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="text-ink-muted text-sm mb-4 leading-relaxed">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-ink-faint bg-surface px-2 py-0.5 rounded-sm border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-light transition-colors duration-300 font-medium tracking-wide"
                  >
                    Projeye Git
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
