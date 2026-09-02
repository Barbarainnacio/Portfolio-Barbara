import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";

const CARDS = [
  {
    icon: Mail,
    label: "Email",
    value: "barbarainnacio03@gmail.com",
    href: "mailto:barbarainnacio03@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Barbarainnacio",
    href: "https://github.com/Barbarainnacio",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/barbara-marcella-36785520a",
    href: "https://www.linkedin.com/in/barbara-marcella-36785520a/",
  },
];

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append(
      "subject",
      `Novo contato do portfólio: ${form.name}`
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Não foi possível enviar sua mensagem no momento."
        );
      }

      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível enviar sua mensagem no momento."
      );
    } finally {
      setLoading(false);
    }
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
        Contato.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 max-w-xl text-muted-foreground"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "1.05rem",
        }}
      >
        Entre em contato comigo para oportunidades, projetos,
        parcerias ou para conversar sobre tecnologia e
        desenvolvimento de software.
      </motion.p>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">

        {/* Cards de contato */}
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
                    style={{
                      fontFamily: "'Fira Code', monospace",
                    }}
                  >
                    {c.label}
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

            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.label !== "Email" ? "_blank" : undefined}
                rel={
                  c.label !== "Email"
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + i * 0.07,
                }}
                className={`${className} hover:border-primary/50`}
              >
                {inner}
              </motion.a>
            );
          })}
        </div>

        {/* Formulário */}
        {sent ? (
          <div className="grid min-h-[300px] place-items-center rounded-xl border border-primary/40 bg-card/40 p-12 text-center backdrop-blur">
            <div>
              <p
                className="text-foreground"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.2rem",
                }}
              >
                Obrigada, {form.name || "visitante"}! Recebi sua
                mensagem e entrarei em contato em breve.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">

            <input
              id="contact-name"
              name="name"
              required
              aria-label="Seu nome"
              className={field}
              placeholder="Seu nome"
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
              name="email"
              required
              aria-label="Seu email"
              type="email"
              className={field}
              placeholder="Seu email"
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
              name="message"
              required
              aria-label="Sua mensagem"
              rows={6}
              className={`${field} resize-none`}
              placeholder="Sua mensagem"
              value={form.message}
              onChange={(e) =>
                setForm((previous) => ({
                  ...previous,
                  message: e.target.value,
                }))
              }
            />

            {error && (
              <p
                className="text-sm text-red-400"
                style={{
                  fontFamily: "'Fira Code', monospace",
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {loading ? "Enviando..." : "Mandar Mensagem"}

              <Send className="h-4 w-4" />
            </button>

          </form>
        )}
      </div>
    </section>
  );
}