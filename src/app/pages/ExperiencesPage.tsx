import { Briefcase, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { EXPERIENCES } from "../data/portfolio";

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

export function ExperiencesPage() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1400px] flex-1 px-6 py-10 md:px-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-foreground"
        style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(3rem,7vw,5rem)" }}
      >
        Experiências.
      </motion.h1>

      <div className="mb-8">
        {EXPERIENCES.map((experience, index) => (
          <TimelineItem key={`${experience.company}-${experience.period}`} last={index === EXPERIENCES.length - 1}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="flex items-center gap-2 text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.35rem" }}>
                <Briefcase className="h-5 w-5 text-muted-foreground" />
                {experience.role} <span className="text-muted-foreground" style={{ fontSize: "0.95rem" }}>@ {experience.company}</span>
              </h3>
              <span className="flex items-center gap-2 text-foreground underline decoration-primary underline-offset-4">
                <Calendar className="h-4 w-4" /> {experience.period}
              </span>
            </div>
            <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {experience.body}
            </p>
          </TimelineItem>
        ))}
      </div>
    </section>
  );
}