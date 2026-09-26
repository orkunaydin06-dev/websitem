import { work, type Service } from "@/content/site";
import { Card } from "./Card";
import { Button } from "./Button";

export function ServiceCard({ service }: { service: Service }) {
  const { labels } = work;
  return (
    <Card as="article" corner className="flex flex-col">
      <h3 className="display pr-10 text-[1.75rem] font-medium leading-tight sm:text-[2rem]">
        {service.title}
      </h3>

      <dl className="mt-6 grid gap-6 md:grid-cols-2 md:gap-10">
        <div className="space-y-5">
          <div>
            <dt className="eyebrow">{labels.audience}</dt>
            <dd className="mt-1.5 text-ink-2">{service.audience}</dd>
          </div>
          <div>
            <dt className="eyebrow">{labels.outcome}</dt>
            <dd className="display display-art mt-1.5 text-[1.2rem] leading-snug text-ink">
              {service.outcome}
            </dd>
          </div>
        </div>
        <div>
          <dt className="eyebrow">{labels.includes}</dt>
          <dd className="mt-2">
            <ul className="space-y-2">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem] leading-snug text-ink-2">
                  <span aria-hidden="true" className="mt-[0.55em] h-px w-3 shrink-0 bg-moss" />
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      <div className="mt-8 flex flex-col gap-4 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-2">
          <span className="font-semibold text-ink">{labels.format}:</span> {service.format}
        </p>
        <Button
          href={`/tanisalim?konu=${encodeURIComponent(service.topic)}`}
          size="sm"
          arrow
        >
          {labels.cta}
        </Button>
      </div>
    </Card>
  );
}
