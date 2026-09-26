import type { Metadata } from "next";
import { ideas } from "@/content/site";
import { getPosts, visibleCategories } from "@/lib/posts";
import { Container, Section, SectionTitle } from "@/components/Section";
import { PostCard } from "@/components/PostCard";
import { IdeasList, SubstackCard } from "@/components/IdeasList";
import { NewsletterBlock } from "@/components/NewsletterBlock";

export const metadata: Metadata = {
  title: "Fikirler",
  description: ideas.intro,
  alternates: { canonical: "/fikirler" },
};

export default function IdeasPage() {
  const posts = getPosts();
  return (
    <>
      <Section>
        <SectionTitle as="h1">{ideas.title}</SectionTitle>
        <p className="mt-6 max-w-2xl text-[1.2rem] leading-relaxed text-ink-2">{ideas.intro}</p>
        <div className="mt-12 border-t border-ink pt-8">
          <IdeasList
            categories={visibleCategories()}
            items={posts.map((p) => ({ slug: p.slug, category: p.category, card: <PostCard post={p} /> }))}
          />
        </div>
        <div className="mt-16 max-w-md">
          <SubstackCard />
        </div>
      </Section>
      <Container className="pb-section-sm md:pb-section">
        <NewsletterBlock />
      </Container>
    </>
  );
}
