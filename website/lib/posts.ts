import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { categories, type CategoryId } from "@/content/site";
import { isEnabled } from "@/content/flags";

const DIR = path.join(process.cwd(), "content/fikirler");
const WORDS_PER_MINUTE = 200;

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO, e.g. 2026-04-10
  dateLabel: string; // 10 Nisan 2026
  category: CategoryId;
  categoryLabel: string;
  excerpt: string;
  readTime: number;
  body: string;
};

const dateFormat = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function readPost(file: string): Post {
  const { data, content } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
  const category = categories.find((c) => c.id === data.category) ?? categories[0];
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    slug: file.replace(/\.mdx$/, ""),
    title: data.title,
    date: data.date,
    dateLabel: dateFormat.format(new Date(data.date)),
    category: category.id,
    categoryLabel: category.label,
    excerpt: data.excerpt,
    readTime: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    body: content,
  };
}

export function getPosts(): Post[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(readPost)
    .filter((p) => isEnabled(categories.find((c) => c.id === p.category)?.flag))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function visibleCategories() {
  return categories.filter((c) => isEnabled(c.flag));
}
