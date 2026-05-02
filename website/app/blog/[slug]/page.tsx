import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { getBlogPost, getRelatedPosts, blogPosts } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Orkun Aydın`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 2);

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <article>
          <div className="relative h-[50vh] min-h-80 overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/20" />
          </div>

          <div className="max-w-2xl mx-auto px-6 -mt-20 relative z-10 pb-24">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-surface border border-border text-ink-muted px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-ink leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-ink-faint mb-10 pb-10 border-b border-border">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-ink-faint" />
              <span>{post.readTime} dakika okuma</span>
            </div>

            <div
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent transition-colors"
              >
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
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Tüm Yazılar
              </Link>
              <Link
                href="/#iletisim"
                className="text-sm text-accent hover:text-accent-light transition-colors"
              >
                Yorumla →
              </Link>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="bg-surface py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-light text-ink mb-10">
                Diğer Yazılar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {related.map((p, i) => (
                  <BlogCard key={p.slug} post={p} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
