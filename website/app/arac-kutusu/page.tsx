import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { toolbox } from "@/content/site";
import { flags } from "@/content/flags";
import { Section, SectionTitle } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Araç Kutusu",
  description: toolbox.text,
  robots: flags.aracKutusu ? undefined : { index: false },
};

export default function ToolboxPage() {
  if (!flags.aracKutusu) notFound();
  return (
    <Section>
      <SectionTitle as="h1">{toolbox.title}</SectionTitle>
      <p className="mt-8 max-w-2xl text-[1.2rem] leading-relaxed text-ink-2">{toolbox.text}</p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {toolbox.products.map((p) => (
          <ProductCard key={p.title} product={p} />
        ))}
      </div>
    </Section>
  );
}
