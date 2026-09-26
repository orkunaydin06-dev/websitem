import type { Metadata } from "next";
import { contact, EMAIL, social } from "@/content/site";
import { Container, SectionTitle } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Tanışalım",
  description: contact.text,
  alternates: { canonical: "/tanisalim" },
};

export default function ContactPage() {
  const profiles = social.filter((s) => s.label === "LinkedIn" || s.label === "Instagram");
  return (
    <section className="pb-section-sm pt-10 sm:pt-16 md:pb-section">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <SectionTitle as="h1">{contact.title}</SectionTitle>
          <p className="mt-8 text-[1.15rem] leading-relaxed text-ink-2">{contact.text}</p>
          <div className="mt-10 space-y-4 border-t border-rule pt-6">
            <p>
              <span className="text-ink-2">{contact.direct}</span>{" "}
              <a href={`mailto:${EMAIL}`} className="font-semibold text-moss underline decoration-moss/30 underline-offset-4 hover:decoration-moss">
                {EMAIL}
              </a>
            </p>
            <ul className="flex gap-5">
              {profiles.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-[3px] border border-ink/85 bg-card p-6 sm:p-10">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
