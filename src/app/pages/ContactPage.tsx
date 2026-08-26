// ContactPage.tsx
import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, ArrowUpRight, Send, type LucideIcon } from "lucide-react";
import { useLanguage } from "../translations/LanguageContext";

type ContactCard = {
  key: "email" | "github" | "linkedin";
  icon: LucideIcon;
  value: string;
  href?: string;
};

const CARDS: ContactCard[] = [
  {
    key: "email",
    icon: Mail,
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  { key: "github", icon: Github, value: "github.com/username", href: "#" },
  { key: "linkedin", icon: Linkedin, value: "linkedin.com/in/username", href: "#" },
] as const;

export function ContactPage() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "w-full rounded-lg border border-border bg-background/40 px-4 py-3 text-foreground outline-none backdrop-blur transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <section className="relative z-10 mx-auto w-full max-w-[1100px] flex-1 px-6 py-10 md:px-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-foreground"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(3rem,7vw,5rem)",
        }}
      >
        {t.contact.title}
      </motion.h1>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        {/* contact cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            const inner = (
              <>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-background/40 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                  >
                    {t.contact.cardLabels[c.key]}
                  </p>
                  <p
                    className="truncate text-foreground"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.05rem",
                    }}
                  >
                    {c.value}
                  </p>
                </div>
                {c.href && (
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                )}
              </>
            );

            const className =
              "group flex items-center gap-4 rounded-xl border border-border bg-card/40 p-5 backdrop-blur transition-colors";

            return c.href ? (
              <motion.a
                key={c.key}
                href={c.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                className={`${className} hover:border-primary/50`}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div
                key={c.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                className={className}
              >
                {inner}
              </motion.div>
            );
          })}
        </div>

        {/* form */}
        {sent ? (
          <div className="grid min-h-[300px] place-items-center rounded-xl border border-primary/40 bg-card/40 p-12 text-center backdrop-blur">
            <div>
              <p
                className="text-primary"
                style={{ fontFamily: "'Fira Code', monospace" }}
              >
                {t.contact.messageSent}
              </p>
              <p
                className="mt-3 text-foreground"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.2rem",
                }}
              >
                {t.contact.thanksPrefix}{" "}
                {form.name || t.contact.friendFallback}
                {t.contact.thanksSuffix}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <input
              id="contact-name"
              required
              aria-label={t.contact.yourNameAriaLabel}
              className={field}
              placeholder={t.contact.yourNamePlaceholder}
              value={form.name}
              onChange={(e) =>
                setForm((previous) => ({
                  ...previous,
                  name: e.target.value,
                }))
              }
            />
            <input
              id="contact-email"
              required
              aria-label={t.contact.yourEmailAriaLabel}
              type="email"
              className={field}
              placeholder={t.contact.yourEmailPlaceholder}
              value={form.email}
              onChange={(e) =>
                setForm((previous) => ({
                  ...previous,
                  email: e.target.value,
                }))
              }
            />
            <textarea
              id="contact-message"
              required
              aria-label={t.contact.yourMessageAriaLabel}
              rows={6}
              className={`${field} resize-none`}
              placeholder={t.contact.yourMessagePlaceholder}
              value={form.message}
              onChange={(e) =>
                setForm((previous) => ({
                  ...previous,
                  message: e.target.value,
                }))
              }
            />
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-opacity hover:opacity-90"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {t.contact.sendMessage} <Send className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
