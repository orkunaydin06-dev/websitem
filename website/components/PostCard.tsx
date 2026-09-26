import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/posts";
import { ideas } from "@/content/site";
import { publicFileExists } from "./Photo";

export function postCover(slug: string) {
  const src = `/images/fikirler/${slug}.jpg`;
  return publicFileExists(src) ? src : undefined;
}

export function PostMeta({ post }: { post: Pick<Post, "categoryLabel" | "dateLabel" | "date" | "readTime"> }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.8rem] text-ink-2">
      <span className="rounded-[2px] border border-ink/70 px-2 py-0.5 font-medium text-ink">
        {post.categoryLabel}
      </span>
      <time dateTime={post.date}>{post.dateLabel}</time>
      <span aria-hidden="true" className="text-ink-3">·</span>
      <span>{ideas.readTime(post.readTime)}</span>
    </div>
  );
}

export function PostCard({ post }: { post: Post }) {
  const cover = postCover(post.slug);
  return (
    <article className="group flex flex-col">
      <Link href={`/fikirler/${post.slug}`} className="flex flex-1 flex-col">
        <div className="relative mb-5 aspect-[3/2] overflow-hidden rounded-[3px] border border-ink/85 bg-linen">
          {cover && (
            <Image
              src={cover}
              alt=""
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
        </div>
        <PostMeta post={post} />
        <h3 className="display mt-3 text-[1.45rem] font-medium leading-[1.2] decoration-moss decoration-1 underline-offset-4 group-hover:underline">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-[0.95rem] leading-relaxed text-ink-2">{post.excerpt}</p>
      </Link>
    </article>
  );
}
