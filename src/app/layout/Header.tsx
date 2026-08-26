import { Terminal } from "lucide-react";
import { useLanguage } from "../translations/LanguageContext";

type Page = "home" | "about" | "projects" | "contact";

export function Header({
  current,
  onNavigate,
}: {
  current: Page;
  onNavigate: (p: Page) => void;
}) {
  const { t, toggleLanguage } = useLanguage();

  const NAV: { key: Page; label: string }[] = [
    { key: "about", label: t.nav.about },
    { key: "projects", label: t.nav.projects },
    { key: "contact", label: t.nav.contact },
  ];

  return (
    <header className="relative z-20 mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6 md:px-12 md:py-8">
      <button
        onClick={() => onNavigate("home")}
        aria-label={t.header.homeAriaLabel}
        className="text-foreground transition-transform duration-500 hover:rotate-[360deg]"
      >
        <Terminal className="h-9 w-9" strokeWidth={2} />
      </button>

      <nav className="flex items-center gap-6 md:gap-10">
  {NAV.map((item) => {
    const active = current === item.key;
    return (
      <button
        key={item.key}
        onClick={() => onNavigate(item.key)}
        className={`text-[17px] transition-colors ${
          active
            ? "text-foreground underline decoration-primary decoration-2 underline-offset-8"
            : "text-muted-foreground hover:text-foreground"
        }`}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {item.label}
      </button>
    );
  })}

  {/* Botão para alternar idioma */}
  <button
    onClick={toggleLanguage}
    aria-label={t.header.languageToggleAriaLabel}
    className="ml-4 text-sm text-muted-foreground hover:text-foreground"
  >
    🌐
  </button>
</nav>
    </header>
  );
}
