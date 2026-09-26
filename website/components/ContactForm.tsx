"use client";

import { useEffect, useRef, useState } from "react";
import { contact, contactTopics, EMAIL } from "@/content/site";
import { Arrow } from "./Button";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-[3px] border border-ink/70 bg-card px-4 py-3 text-[1rem] text-ink placeholder:text-ink-3 transition-colors focus:border-moss focus:outline-none focus:ring-2 focus:ring-moss/20";
const label = "mb-2 block text-sm font-semibold text-ink";

export function ContactForm() {
  const { fields } = contact;
  const [status, setStatus] = useState<Status>("idle");
  const topicRef = useRef<HTMLSelectElement>(null);

  // ?konu=... parametresi seçimi önceden doldurur
  useEffect(() => {
    const konu = new URLSearchParams(window.location.search).get("konu");
    if (konu && topicRef.current && (contactTopics as readonly string[]).includes(konu)) {
      topicRef.current.value = konu;
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return;
    if (!WEB3FORMS_KEY) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `orkunaydin.com — ${data.get("konu")}`,
          from_name: data.get("name"),
          name: data.get("name"),
          email: data.get("email"),
          konu: data.get("konu"),
          message: data.get("message"),
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-[3px] border border-ink/85 bg-card p-8 sm:p-10">
        <p className="display display-art text-[1.75rem] leading-snug text-moss">{contact.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>{fields.name}</label>
          <input id="name" name="name" type="text" autoComplete="name" required className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>{fields.email}</label>
          <input id="email" name="email" type="email" autoComplete="email" required className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="konu" className={label}>{fields.topic}</label>
        <select
          id="konu"
          name="konu"
          required
          ref={topicRef}
          defaultValue=""
          className={`${field} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%231f1b16' stroke-width='1.5'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E")] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`}
        >
          <option value="" disabled>{fields.topicPlaceholder}</option>
          {contactTopics.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>{fields.message}</label>
        <textarea id="message" name="message" rows={6} required className={`${field} resize-y`} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-md border-[1.5px] border-moss bg-moss px-6 py-3.5 font-semibold text-paper transition-colors hover:border-moss-deep hover:bg-moss-deep disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? fields.sending : fields.submit}
        {status !== "sending" && <Arrow className="group-hover:translate-x-0.5" />}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-ink-2">
          {contact.error}{" "}
          <a href={`mailto:${EMAIL}`} className="font-semibold text-moss underline underline-offset-4">
            {EMAIL}
          </a>
        </p>
      )}
    </form>
  );
}
