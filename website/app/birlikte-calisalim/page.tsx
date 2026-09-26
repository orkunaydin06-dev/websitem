import type { Metadata } from "next";
import { photos, work } from "@/content/site";
import { Container, Section, SectionTitle } from "@/components/Section";
import { Photo } from "@/components/Photo";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBlock } from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Birlikte Çalışalım",
  description: work.intro,
  alternates: { canonical: "/birlikte-calisalim" },
};

export default function WorkPage() {
  return (
    <>
      <section className="pb-14 pt-10 sm:pt-16 md:pb-20">
        <Container className="grid items-end gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <SectionTitle as="h1">{work.title}</SectionTitle>
            <p className="mt-8 max-w-xl text-[1.2rem] leading-relaxed text-ink-2">{work.intro}</p>
            <nav aria-label="Hizmet grupları" className="mt-8 flex flex-wrap gap-3">
              {work.groups.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="rounded-[2px] border border-ink/70 px-3 py-1.5 text-sm font-medium transition-colors hover:border-moss hover:text-moss"
                >
                  {g.title}
                </a>
              ))}
            </nav>
          </div>
          <Photo
            src={photos.working.src}
            alt={photos.working.alt}
            priority
            className="aspect-[4/3] w-full"
          />
        </Container>
      </section>

      {work.groups.map((group, i) => (
        <Section key={group.id} id={group.id} tone={i % 2 === 0 ? "linen" : "paper"}>
          <SectionTitle>{group.title}</SectionTitle>
          <div className="mt-10 space-y-6">
            {group.services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </Section>
      ))}

      <CtaBlock title={work.closing} />
    </>
  );
}
