
import { ArrowRight, Briefcase, GraduationCap, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../translations/LanguageContext";

function SectionHeading({ children }: { children: string }) {
  return (
    <h2
      className="mb-10 text-foreground"
      style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: "clamp(1.5rem,3vw,2rem)",
      }}
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
  const { t } = useLanguage();

  const experiences = Object.values(t.about.items);
  const education = Object.values(t.about.educationItems);

  return (
    <section className="relative z-10 mx-auto w-full max-w-[1400px] flex-1 px-6 py-10 md:px-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-foreground"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(3rem,7vw,5rem)",
        }}
      >
        {t.about.title}
      </motion.h1>

      {/* Experiences */}
      <SectionHeading>{t.about.experiences}</SectionHeading>
      <div className="mb-8">
        {experiences.map((exp, index) => (
          <TimelineItem key={`${exp.company}-${exp.period}`} last={index === experiences.length - 1}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3
                className="flex items-center gap-2 text-foreground"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.35rem" }}
              >
                <Briefcase className="h-5 w-5 text-muted-foreground" />
                {exp.role}{" "}
                <span className="text-muted-foreground" style={{ fontSize: "0.95rem" }}>
                  @ {exp.company}
                </span>
              </h3>
              <span className="flex items-center gap-2 text-foreground underline decoration-primary underline-offset-4">
                <Calendar className="h-4 w-4" /> {exp.period}
              </span>
            </div>
            <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {exp.body}
            </p>
          </TimelineItem>
        ))}
      </div>

      {/* Education */}
      <SectionHeading>{t.about.education}</SectionHeading>
      <div className="mb-8">
        {education.map((edu, index) => (
          <TimelineItem key={`${edu.institution}-${edu.period}`} last={index === education.length - 1}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3
                className="flex items-center gap-2 text-foreground"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.35rem" }}
              >
                <GraduationCap className="h-5 w-5 text-muted-foreground" />
                {edu.degree}{" "}
                <span className="text-muted-foreground" style={{ fontSize: "0.95rem" }}>
                  @ {edu.institution}
                </span>
              </h3>
              <span className="flex items-center gap-2 text-foreground underline decoration-primary underline-offset-4">
                <Calendar className="h-4 w-4" /> {edu.period}
              </span>
            </div>
            <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {edu.body}
            </p>
          </TimelineItem>
        ))}
      </div>

      <button
        onClick={() => onNavigate("projects")}
        className="group mb-12 flex items-center gap-4 text-foreground"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {t.about.continueToProjects}
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
      </button>
    </section>
  );
}
