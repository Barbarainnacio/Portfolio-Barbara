import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Globe, Github, ExternalLink } from "lucide-react";
import type { Project } from "../../data/portfolio";
import { Image } from "../../shared/Image";

export function ProjectDrawer({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby="project-drawer-title">
          {/* overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
          />

          {/* panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 flex h-full w-full max-w-[640px] flex-col border-l border-border bg-card shadow-2xl"
          >
            {/* scroll content */}
            <div className="flex-1 overflow-y-auto px-8 py-8">
              <div className="flex items-start justify-between gap-4">
                <h2
                  id="project-drawer-title"
                  className="text-foreground"
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2rem" }}
                >
                  {project.title}
                </h2>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 text-muted-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.05rem" }}>
                {project.description}
              </p>

              <div className="mt-6 overflow-hidden rounded-xl border border-border">
                <Image src={project.image} alt={project.title} className="h-64 w-full object-cover" />
              </div>

              <Section title="About">
                <p className="leading-relaxed text-muted-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.about}
                </p>
              </Section>

              <Section title="Technologies">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={`${project.id}-tag-${index}`} className="rounded-lg bg-secondary px-3.5 py-1.5 text-sm text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Section>

              <Section title="Website" icon={<Globe className="h-5 w-5 text-primary" />}>
                <a href={project.website} target="_blank" rel="noreferrer" className="break-all text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.website}
                </a>
              </Section>

              <Section title="Github" icon={<Github className="h-5 w-5 text-primary" />}>
                <a href={project.github} target="_blank" rel="noreferrer" className="break-all text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.github}
                </a>
              </Section>
            </div>

            {/* sticky footer */}
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 border-t border-border bg-secondary py-5 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.1rem" }}
            >
              Open Project <ExternalLink className="h-5 w-5" />
            </a>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <h3 className="mb-3 flex items-center gap-2 text-foreground" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.3rem" }}>
        {icon}
        {title}
      </h3>
      {children}
    </div>
  );
}
