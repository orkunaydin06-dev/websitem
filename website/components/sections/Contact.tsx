"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EMAIL = "orkunaydin06@gmail.com";
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const topics = [
  "Markam için strateji",
  "Kariyerim / kişisel markam için",
  "AI eğitimi",
  "Diğer",
];

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const botcheck = new FormData(e.currentTarget as HTMLFormElement).get(
      "botcheck"
    );
    if (botcheck) return;
    if (!WEB3FORMS_KEY) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `orkunaydin.com — ${form.subject}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          konu: form.subject,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setStatus("sent");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="iletisim" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Tanışalım
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-ink leading-tight mb-6">
              Tanışalım
            </h2>
            <p className="text-ink-muted leading-relaxed mb-8">
              Markanız, kariyeriniz ya da aklınızdaki bir fikir üzerine konuşmak
              için yazın. Her mesajı okuyor ve en geç iki iş günü içinde
              dönüyorum.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  label: "E-posta",
                  value: EMAIL,
                  href: `mailto:${EMAIL}`,
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/orkunaydin",
                  href: "https://www.linkedin.com/in/orkunaydin/",
                },
                {
                  label: "Instagram",
                  value: "@orkunaydinx",
                  href: "https://www.instagram.com/orkunaydinx/",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-xs text-ink-faint w-20 tracking-wider uppercase">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-ink-muted hover:text-accent transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            <div className="p-6 border border-accent/20 rounded-sm bg-accent/5">
              <h3 className="font-display text-lg font-medium text-ink mb-2">
                Kompozisyon
              </h3>
              <p className="text-accent text-xs italic mb-2">
                Sorgula. Yansıt. Sahnele.
              </p>
              <p className="text-ink-muted text-xs leading-relaxed mb-4">
                Strateji, marka ve yaratıcılık üzerine düşünceler. Gelen
                kutunuza, gürültüsüz.
              </p>
              <a
                href="https://substack.com/@orkunnnn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-accent hover:text-accent-light transition-colors font-medium"
              >
                Abone Ol
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
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-16 h-16 rounded-full border border-accent/40 flex items-center justify-center mb-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-ink mb-2">
                  Mesajınız ulaştı.
                </h3>
                <p className="text-ink-muted text-sm">
                  En kısa sürede dönüyorum.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                {[
                  { name: "name", label: "Adınız", type: "text", placeholder: "Adınız Soyadınız" },
                  { name: "email", label: "E-posta", type: "email", placeholder: "adres@email.com" },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-xs text-ink-muted mb-2 tracking-wider uppercase"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof FormState]}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-sm text-ink placeholder-ink-faint focus:outline-none focus:border-accent transition-colors duration-300"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs text-ink-muted mb-2 tracking-wider uppercase"
                  >
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-colors duration-300"
                  >
                    <option value="" disabled>
                      Seçin
                    </option>
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs text-ink-muted mb-2 tracking-wider uppercase"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Mesajınızı buraya yazın..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-sm text-ink placeholder-ink-faint focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-accent text-bg py-3.5 text-sm font-medium tracking-wide hover:bg-accent-light transition-colors duration-300 rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Gönderiliyor..." : "Gönder"}
                </button>

                {status === "error" && (
                  <p className="text-sm text-ink-muted" role="alert">
                    Mesajınız gönderilemedi. Lütfen doğrudan{" "}
                    <a href={`mailto:${EMAIL}`} className="text-accent underline">
                      {EMAIL}
                    </a>{" "}
                    adresine yazın.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
