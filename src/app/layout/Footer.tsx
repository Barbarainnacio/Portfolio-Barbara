import { Github, Linkedin } from "lucide-react";
import { PROFILE } from "../data/portfolio";
import { useLanguage } from "../translations/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 mt-auto w-full border-t border-border">
      <div
        className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        <span className="border-r border-border px-6 py-4 text-muted-foreground">
          {t.footer.findMeIn}
        </span>
        <a
          href={PROFILE.githubUrl}
          className="flex items-center gap-2 border-r border-border px-6 py-4 text-muted-foreground transition-colors hover:text-foreground"
        >
          {PROFILE.username}
          <Github className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="flex items-center gap-2 border-r border-border px-6 py-4 text-muted-foreground transition-colors hover:text-foreground"
        >
          {PROFILE.username}
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
