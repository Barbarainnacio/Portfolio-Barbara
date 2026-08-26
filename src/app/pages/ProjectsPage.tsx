// ProjectsPage.tsx
import { useCallback, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "../data/portfolio";
import { Image } from "../shared/Image";
import { ProjectDrawer } from "../features/projects/ProjectDrawer";
import { useLanguage } from "../translations/LanguageContext";

export function ProjectsPage({
  onDrawerChange,
}: {
  onDrawerChange?: (open: boolean) => void;
}) {
  const { t } = useLanguage();
  const [active, setActive] = useState<Project | null>(null);

  const open = useCallback(
    (p: Project) => {
      setActive(p);
      onDrawerChange?.(true);
    },
    [onDrawerChange]
  );
  const close = useCallback(() => {
    setActive(null);
    onDrawerChange?.(false);
  }, [onDrawerChange]);

  return (
    <section className="relative z-10 mx-auto w-full max-w-[1400px] flex-1 px-6 py-10 md:px-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-foreground"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(3rem,7vw,5rem)",
        }}
      >
        {t.projects.title}
      </motion.h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.button
            key={project.id}
            onClick={() => open(project)}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group overflow-hidden rounded-xl border border-border bg-card/60 text-left backdrop-blur transition-colors hover:border-primary/50"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3
                  className="text-foreground"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.25rem",
                  }}
                >
                  {project.title}
                </h3>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <p
                className="mt-3 leading-relaxed text-muted-foreground"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.95rem",
                }}
              >
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <ProjectDrawer project={active} onClose={close} />
    </section>
  );
}
