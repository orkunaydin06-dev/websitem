"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { type BlogPost } from "@/lib/blog-data";
import { EASE } from "@/lib/motion";

export default function BlogCard({
  post,
  index = 0,
}: {
  post: BlogPost;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
        ease: EASE,
      }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="relative aspect-video overflow-hidden rounded-sm mb-5">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-bg/70 backdrop-blur-sm text-ink-muted border border-border/50 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 mb-3 text-xs text-ink-faint">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-ink-faint" />
          <span>{post.readTime} dakika okuma</span>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-medium text-ink leading-snug mb-2 group-hover:text-accent transition-colors duration-300">
          {post.title}
        </h3>

        <p className="text-ink-muted text-sm leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-1.5 text-accent text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Devamını Oku
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
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </motion.article>
  );
}
