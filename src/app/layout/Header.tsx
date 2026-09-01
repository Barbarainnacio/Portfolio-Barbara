import { Terminal } from "lucide-react";

type Page = "home" | "about" | "experiences" | "projects" | "contact";

const NAV: { key: Page; label: string }[] = [
  { key: "about", label: "Sobre" },
  { key: "experiences", label: "Experiências" },
  { key: "projects", label: "Projetos" },
  { key: "contact", label: "Contato" },
];

export function Header({
  current,
  onNavigate,
}: {
  current: Page;
  onNavigate: (p: Page) => void;
}) {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6 md:px-12 md:py-8">
      <button
        onClick={() => onNavigate("home")}
        aria-label="Home"
        className="text-foreground transition-transform duration-500 hover:rotate-[360deg]"
      >
        <Terminal className="h-9 w-9" strokeWidth={2} />
      </button>

      <nav className="flex items-center gap-4 md:gap-8">
        {NAV.map((item) => {
          const active = current === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`text-[15px] md:text-[17px] transition-colors ${
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
      </nav>
    </header>
  );
}