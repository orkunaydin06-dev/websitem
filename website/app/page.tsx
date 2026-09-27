import { companies, home, photos, stats } from "@/content/site";
import { getPosts } from "@/lib/posts";
import { Button, TextLink } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container, Section, SectionTitle } from "@/components/Section";
import { BrushUnderline, RulerUnderline } from "@/components/Signature";
import { Photo } from "@/components/Photo";
import { LogoStrip } from "@/components/LogoStrip";
import { StatRow } from "@/components/StatRow";
import { PostCard } from "@/components/PostCard";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { CtaBlock } from "@/components/CtaBlock";
import { LegacyAnchorRedirect } from "@/components/LegacyAnchorRedirect";

// Başlığın son kelimesini imza çizgisiyle ayırır: "Markalaşmanın sanatı." → "Markalaşmanın" + "sanatı."
function splitLast(text: string) {
  const i = text.lastIndexOf(" ");
  return [text.slice(0, i), text.slice(i + 1)] as const;
}

export default function Home() {
  const posts = getPosts().slice(0, 3);
  const [artHead, artWord] = splitLast(home.titleArt);
  const [archHead, archWord] = splitLast(home.titleArchitecture);
  const [whyHead, whyWord] = splitLast(home.why.title);

  return (
    <>
      <LegacyAnchorRedirect />
      {/* Hero */}
      <section className="pb-14 pt-10 sm:pt-16 md:pb-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-14">
          <div>
            <p className="eyebrow">{home.eyebrow}</p>
            <h1 className="display mt-6 text-[2.75rem] font-medium leading-[1.05] sm:text-[3.9rem] lg:text-[clamp(3.4rem,4.7vw,4.5rem)]">
              <span className="display-art block sm:whitespace-nowrap">
                {artHead} <BrushUnderline>{artWord}</BrushUnderline>
              </span>
              <span className="display-architecture mt-3 block sm:whitespace-nowrap">
                {archHead} <RulerUnderline>{archWord}</RulerUnderline>
              </span>
            </h1>
            <p className="mt-8 max-w-[36rem] text-[1.1rem] leading-relaxed text-ink-2 sm:text-[1.2rem]">
              {home.lead}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={home.primary.href} arrow>
                {home.primary.label}
              </Button>
              <Button href={home.secondary.href} variant="secondary">
                {home.secondary.label}
              </Button>
            </div>
            <p className="mt-9 max-w-[36rem] border-t border-rule pt-5 text-sm leading-relaxed text-ink-3">
              {home.trust}
            </p>
          </div>
          <Photo
            src={photos.portrait.src}
            alt={photos.portrait.alt}
            position={photos.portrait.position}
            priority
            corner
            className="mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none"
          />
        </Container>
      </section>

      <LogoStrip title={home.logosTitle} companies={companies} />

      {/* Problem */}
      <Section>
        <SectionTitle className="max-w-3xl">{home.problem.title}</SectionTitle>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {home.problem.gaps.map((gap) => (
            <Card key={gap.title} corner>
              <p className="eyebrow">{gap.label}</p>
              <h3 className="display mt-3 text-[2.25rem] font-medium leading-none">{gap.title}</h3>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-2">{gap.text}</p>
            </Card>
          ))}
        </div>
        <p className="display display-art mx-auto mt-14 max-w-3xl text-center text-[1.6rem] leading-snug text-moss sm:text-[2rem]">
          {home.problem.closing}
        </p>
      </Section>

      {/* İki kapı */}
      <Section tone="linen">
        <SectionTitle>{home.doors.title}</SectionTitle>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {home.doors.cards.map((card) => (
            <Card key={card.title} corner className="flex flex-col">
              <h3 className="display text-[2rem] font-medium leading-tight sm:text-[2.4rem]">{card.title}</h3>
              <p className="mt-4 flex-1 text-[1.05rem] leading-relaxed text-ink-2">{card.text}</p>
              <TextLink href={card.link.href} className="mt-8 self-start">
                {card.link.label}
              </TextLink>
            </Card>
          ))}
        </div>
      </Section>

      {/* Neden farklı bakıyorum */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionTitle className="lg:sticky lg:top-32 lg:self-start">
            {whyHead} <BrushUnderline>{whyWord}</BrushUnderline>
          </SectionTitle>
          <div>
            <p className="text-[1.15rem] leading-relaxed text-ink-2">{home.why.paragraphs[0]}</p>
            <blockquote className="display display-art my-10 border-l-[3px] border-moss pl-6 text-[1.6rem] leading-snug text-ink sm:text-[1.9rem]">
              {home.why.paragraphs[1]}
            </blockquote>
            <TextLink href={home.why.link.href}>{home.why.link.label}</TextLink>
          </div>
        </div>
        <div className="mt-section-sm">
          <StatRow stats={stats} />
        </div>
      </Section>

      {/* Son fikirler */}
      {posts.length > 0 && (
        <Section bordered>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle>{home.latest.title}</SectionTitle>
            <TextLink href={home.latest.link.href}>{home.latest.link.label}</TextLink>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Section>
      )}

      <Container className="pb-section-sm md:pb-section">
        <NewsletterBlock />
      </Container>

      <CtaBlock title={home.finalCta.title} text={home.finalCta.text} />
    </>
  );
}
