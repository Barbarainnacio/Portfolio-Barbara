import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { PROFILE } from "../data/portfolio";
import { useLanguage } from "../translations/LanguageContext";

export function HomePage({
  onNavigate,
}: {
  onNavigate: (p: "about" | "projects" | "contact") => void;
}) {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 py-16 md:px-24">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-muted-foreground"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        {t.home.greeting}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="max-w-4xl uppercase tracking-[0.08em] text-foreground"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
          lineHeight: 1.05,
        }}
      >
        {t.home.imPrefix} {PROFILE.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-3 text-[#615fff]"
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: "clamp(1.1rem,2vw,1.6rem)",
        }}
      >
        {"> "}
        {PROFILE.role}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-8 max-w-2xl space-y-5 leading-relaxed text-muted-foreground"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "1.05rem",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim. {t.home.anywaysYouCan}{" "}
          <button
            onClick={() => onNavigate("contact")}
            className="text-foreground underline decoration-primary underline-offset-4"
          >
            {t.home.contactMe}
          </button>
          .
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        onClick={() => onNavigate("about")}
        className="group mt-10 flex items-center gap-4 text-foreground"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {t.home.seeMoreAboutMe}
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
      </motion.button>
    </section>
  );
}
