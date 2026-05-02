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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm(initialState);
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
              İletişim
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-ink leading-tight mb-6">
              Konuşalım
              <br />
              <span className="italic text-accent">birlikte</span>
            </h2>
            <p className="text-ink-muted leading-relaxed mb-8">
              Proje fikri, işbirliği önerisi, konuşmacı daveti ya da sadece
              merhaba demek için yazın. Mümkün olan her mesaja yanıt veriyorum.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  label: "E-posta",
                  value: "merhaba@orkunaydin.com",
                  href: "mailto:merhaba@orkunaydin.com",
                },
                {
                  label: "Bülten",
                  value: "Dijital Pusulam'a abone ol",
                  href: "/#iletisim",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-xs text-ink-faint w-16 tracking-wider uppercase">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    className="text-sm text-ink-muted hover:text-accent transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            <div className="p-6 border border-accent/20 rounded-sm bg-accent/5">
              <h3 className="font-display text-lg font-medium text-ink mb-2">
                Dijital Pusulam Bülteni
              </h3>
              <p className="text-ink-muted text-xs leading-relaxed mb-4">
                Her Salı sabahı: girişimcilik, ürün geliştirme ve üretkenlik
                üzerine kısa, değerli yazılar. 3.200+ okuyucu.
              </p>
              <a
                href="https://dijitalpusulam.com"
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
                  Mesajınız İletildi
                </h3>
                <p className="text-ink-muted text-sm">
                  En kısa sürede yanıt vereceğim.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: "name", label: "Adınız", type: "text", placeholder: "Adınız Soyadınız" },
                  { name: "email", label: "E-posta", type: "email", placeholder: "adres@email.com" },
                  { name: "subject", label: "Konu", type: "text", placeholder: "Ne hakkında konuşalım?" },
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
                    htmlFor="message"
                    className="block text-xs text-ink-muted mb-2 tracking-wider uppercase"
                  >
                    Mesaj
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
                  {status === "sending" ? "Gönderiliyor..." : "Mesajı Gönder"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
