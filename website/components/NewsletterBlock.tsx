import { newsletter } from "@/content/site";
import { Button } from "./Button";

export function NewsletterBlock() {
  return (
    <div className="relative overflow-hidden rounded-[3px] bg-moss px-6 py-12 text-paper sm:px-12 sm:py-16">
      <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-end">
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
    </div>
  );
}
