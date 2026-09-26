import { cta } from "@/content/site";
import { Button } from "./Button";
import { Section } from "./Section";

export function CtaBlock({ title, text }: { title?: string; text?: string }) {
  return (
    <Section bordered>
      <div className="mx-auto max-w-3xl text-center">
        {title && (
          <h2 className="display text-[2.1rem] font-medium leading-[1.1] sm:text-5xl">{title}</h2>
        )}
        {text && <p className="mt-5 text-lg text-ink-2">{text}</p>}
        <Button href={cta.href} arrow className={title || text ? "mt-9" : undefined}>
          {cta.label}
        </Button>
      </div>
    </Section>
  );
}
