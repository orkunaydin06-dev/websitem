import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { ideas, seo } from "@/content/site";
import { getPost, getPosts } from "@/lib/posts";
import { Container } from "@/components/Section";
import { PostMeta, postCover } from "@/components/PostCard";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { CtaBlock } from "@/components/CtaBlock";
import { TextLink } from "@/components/Button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const cover = postCover(post.slug);
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/fikirler/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: cover ? [cover] : undefined,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const { default: Content } = await evaluate(post.body, { ...runtime });
  const cover = postCover(post.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    inLanguage: "tr",
    author: { "@type": "Person", name: "Orkun Aydın", url: seo.siteUrl },
    mainEntityOfPage: `${seo.siteUrl}/fikirler/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="pb-section-sm pt-10 sm:pt-16">
        <Container narrow>
          <PostMeta post={post} />
          <h1 className="display mt-5 text-[2.4rem] font-medium leading-[1.08] sm:text-[3.4rem]">{post.title}</h1>
          <p className="mt-6 text-[1.2rem] leading-relaxed text-ink-2">{post.excerpt}</p>
        </Container>
        {cover && (
          <Container className="mt-10 max-w-[1000px]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[3px] border border-ink/85">
              <Image src={cover} alt="" fill priority sizes="(min-width: 1000px) 1000px, 100vw" className="object-cover" />
            </div>
          </Container>
        )}
        <Container narrow className="mt-12">
          <div className="prose-article">
            <Content />
          </div>

          <aside className="mt-16 flex gap-5 border-y border-rule py-8">
            <span aria-hidden="true" className="display display-art flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-moss text-xl text-paper">
              OA
            </span>
            <div>
              <p className="text-[0.95rem] leading-relaxed text-ink-2">{ideas.authorBox}</p>
              <TextLink href="/hakkimda" className="mt-3 text-sm">Hakkımda</TextLink>
            </div>
          </aside>
        </Container>
      </article>
      <Container className="max-w-[1000px]">
        <NewsletterBlock />
      </Container>
      <CtaBlock />
    </>
  );
}
