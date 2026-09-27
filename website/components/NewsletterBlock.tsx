import { newsletter } from "@/content/site";
import { Button } from "./Button";
import { Asterism, Marquee } from "./Marquee";

export function NewsletterBlock() {
  const words = Array.from({ length: 4 }, () => newsletter.marquee).flat();
  return (
    <div className="overflow-hidden rounded-[3px] bg-moss text-paper">
      <div className="grid gap-8 px-6 pb-10 pt-12 sm:px-12 sm:pb-14 sm:pt-16 md:grid-cols-[1.1fr_1fr] md:items-end">
        <div>
          <h2 className="display display-art text-[3rem] leading-none sm:text-[4.25rem]">
            {newsletter.title}
          </h2>
          <p className="display mt-4 text-xl text-paper/85">{newsletter.slogan}</p>
        </div>
        <div>
          <p className="max-w-sm text-[1.05rem] leading-relaxed text-paper/85">{newsletter.text}</p>
          <Button href={newsletter.href} external variant="light" arrow className="mt-6">
            {newsletter.button}
          </Button>
        </div>
      </div>
      <Marquee
        label={newsletter.slogan}
        className="border-t border-paper/15 bg-moss-deep py-3"
        items={words.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="display display-art px-5 text-[1.5rem] text-paper/90 sm:text-[1.75rem]">{w}</span>
            <Asterism className="text-paper/55" />
          </span>
        ))}
      />
    </div>
  );
}
