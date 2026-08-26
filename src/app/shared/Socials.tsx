import { Linkedin, Github } from "lucide-react";
import { SOCIALS, type SocialKey } from "../data/portfolio";

const ICONS: Record<SocialKey, typeof Linkedin> = {
  linkedin: Linkedin,
  github: Github,
};

export function Socials({ className = "", only }: { className?: string; only?: SocialKey[] }) {
  const items = only ? SOCIALS.filter((s) => only.includes(s.key)) : SOCIALS;
  return (
    <div className={`flex items-center gap-7 ${className}`}>
      {items.map((s) => {
        const Icon = ICONS[s.key];
        return (
          <a
            key={s.key}
            href={s.href}
            aria-label={s.label}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        );
      })}
    </div>
  );
}
