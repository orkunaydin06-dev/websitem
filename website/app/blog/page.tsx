import { blogPosts } from "@/lib/blog-data";
import BlogCard from "@/components/blog/BlogCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Fikirler",
  description:
    "Strateji, marka, sanat ve yaratıcılık üzerine uzun soluklu yazılar.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Yazılar
            </p>
            <h1 className="font-display text-6xl md:text-7xl font-light text-ink leading-tight mb-6">
              Fikirler
            </h1>
            <p className="text-ink-muted max-w-xl leading-relaxed">
              Strateji, marka, sanat ve yaratıcılık üzerine uzun soluklu yazılar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
