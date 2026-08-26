import { useState } from "react";
import { Background } from "./layout/Background";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { LanguageProvider } from "./translations/LanguageContext";

type Page = "home" | "about" | "projects" | "contact";

const WATERMARKS: Record<Page, string> = {
  home: "YN.",
  about: "About Me.",
  projects: "Projects.",
  contact: "Contact.",
};

function AppContent() {
  const [page, setPage] = useState<Page>("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background text-foreground">
      <Background watermark={WATERMARKS[page]} />
      {!drawerOpen && <Header current={page} onNavigate={navigate} />}

      {page === "home" && <HomePage onNavigate={navigate} />}
      {page === "about" && <AboutPage onNavigate={navigate} />}
      {page === "projects" && <ProjectsPage onDrawerChange={setDrawerOpen} />}
      {page === "contact" && <ContactPage />}

      {page !== "contact" && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
