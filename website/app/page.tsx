import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />

        <section id="blog" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-0 sm:justify-between mb-16">
              <div>
                <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
                  Blog
                </p>
                <h2 className="font-display text-5xl md:text-6xl font-light text-ink leading-tight">
                  Son
                  <br />
                  <span className="italic text-accent">yazılar</span>
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent transition-colors duration-300 font-medium shrink-0"
              >
                Tüm Yazılar
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
