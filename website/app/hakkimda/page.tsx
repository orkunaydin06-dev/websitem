import type { Metadata } from "next";
import { about, photos } from "@/content/site";
import { Container, Section, SectionTitle } from "@/components/Section";
import { Photo } from "@/components/Photo";
import { CtaBlock } from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Hakkımda",
  description: about.intro,
  alternates: { canonical: "/hakkimda" },
};

export default function AboutPage() {
  return (
    <>
      <section className="pb-14 pt-10 sm:pt-16 md:pb-20">
        <Container className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div className="lg:pt-6">
            <SectionTitle as="h1">{about.title}</SectionTitle>
            <p className="mt-8 text-[1.2rem] leading-relaxed text-ink-2 sm:text-[1.3rem]">{about.intro}</p>
          </div>
          <Photo
            src={photos.about.src}
            alt={photos.about.alt}
            position={photos.about.position}
            priority
            corner
            className="mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none"
          />
        </Container>
      </section>

      <Section bordered>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="space-y-12">
            {about.sections.map((s) => (
              <div key={s.title}>
                <h2 className="display text-[1.9rem] font-medium">{s.title}</h2>
                <div className="mt-4 space-y-4 text-[1.05rem] leading-relaxed text-ink-2">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-14">
            <div>
              <h2 className="display text-[1.9rem] font-medium">{about.timelineTitle}</h2>
              <ol className="mt-5 border-t border-ink">
                {about.timeline.map((t) => (
                  <li
                    key={t.company}
                    className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-rule py-4 sm:grid-cols-[6.5rem_1fr]"
                  >
                    <span className="pt-0.5 text-sm tabular-nums text-ink-3">{t.year}</span>
                    <span>
                      <span className="display block text-[1.25rem] font-medium">{t.company}</span>
                      <span className="mt-0.5 block text-[0.95rem] text-ink-2">{t.role}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="display text-[1.9rem] font-medium">{about.highlightsTitle}</h2>
              <ul className="mt-5 space-y-3">
                {about.highlights.map((h) => (
                  <li key={h} className="flex gap-3 leading-snug text-ink-2">
                    <span aria-hidden="true" className="mt-[0.6em] h-px w-4 shrink-0 bg-moss" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <CtaBlock />
    </>
  );
}
