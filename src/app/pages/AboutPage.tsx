import { useState } from "react";
import { ArrowRight, GraduationCap, Calendar, Languages } from "lucide-react";
import { motion } from "motion/react";
import { EDUCATION_PT, EDUCATION_EN, ABOUT_ME_PT, ABOUT_ME_EN } from "../data/portfolio";

function SectionHeading({ children }: { children: string }) {
  return (
    <h2
      className="mb-10 text-foreground"
      style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem,3vw,2rem)" }}
    >
      {children}
    </h2>
  );
}

function TimelineItem({
  children,
  last = false,
}: {
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-muted-foreground bg-background" />
      {!last && (
        <span className="absolute left-[7px] top-5 h-[calc(100%-4px)] w-px bg-border" />
      )}
      <div className="pb-14">{children}</div>
    </div>
  );
}

export function AboutPage({ onNavigate }: { onNavigate: (p: "projects") => void }) {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  // Define qual lista de educação renderizar
  const educationData = lang === "pt" ? EDUCATION_PT : EDUCATION_EN;

  return (
    <section className="relative z-10 mx-auto w-full max-w-[1400px] flex-1 px-6 py-10 md:px-24">
      <div className="flex flex-wrap items-center justify-between gap-6 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-foreground"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(3rem,7vw,5rem)" }}
        >
          {lang === "pt" ? "Sobre Mim." : "About Me."}
        </motion.h1>
        
        <button
          onClick={() => setLang(lang === "pt" ? "en" : "pt")}
          className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:bg-muted/50"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <Languages className="h-5 w-5" />
          {lang === "pt" ? "Read in English" : "Ler em Português"}
        </button>
      </div>

      <motion.p
        key={lang}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-16 max-w-4xl text-lg leading-relaxed text-muted-foreground"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {lang === "pt" ? ABOUT_ME_PT : ABOUT_ME_EN}
      </motion.p>

      {/* Education */}
      <SectionHeading>{lang === "pt" ? "Formação Acadêmica." : "Education."}</SectionHeading>
      <div className="mb-12">
        {educationData.map((education, index) => (
          <TimelineItem key={`${education.institution}-${education.period}`} last={index === educationData.length - 1}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="flex items-center gap-2 text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.35rem" }}>
                <GraduationCap className="h-5 w-5 text-muted-foreground" />
                {education.degree} <span className="text-muted-foreground" style={{ fontSize: "0.95rem" }}>@ {education.institution}</span>
              </h3>
              <span className="flex items-center gap-2 text-foreground underline decoration-primary underline-offset-4">
                <Calendar className="h-4 w-4" /> {education.period}
              </span>
            </div>
            <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {education.body}
            </p>
          </TimelineItem>
        ))}
      </div>

      <button
        onClick={() => onNavigate("projects")}
        className="group mb-12 flex items-center gap-4 text-foreground hover:text-primary transition-colors"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {lang === "pt" ? "Vamos conhecer meus Projetos" : "Let's Continue To Projects"}
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
      </button>
    </section>
  );
}