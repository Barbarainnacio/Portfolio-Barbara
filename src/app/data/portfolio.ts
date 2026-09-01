export const PROFILE = {
  name: "Seu Nome",
  role: "Seu Cargo",
  logoName: "seu-nome",
  username: "@seunome",
  githubUrl: "https://github.com/seunome",
};

export type SocialKey = "linkedin" | "github" | "whatsapp";

export const SOCIALS: { key: SocialKey; label: string; href: string }[] = [
  { key: "linkedin", label: "LinkedIn", href: "#" },
  { key: "github", label: "GitHub", href: "#" },
  { key: "whatsapp", label: "WhatsApp", href: "#" },
];

export const ABOUT_ME_PT = "Este é um texto genérico de exemplo para a seção Sobre Mim. Aqui você deve escrever um pouco sobre a sua trajetória, quem você é fora do código, suas paixões na tecnologia e seus objetivos de carreira. Substitua este conteúdo por um texto com a sua própria identidade, destacando o que te torna único como profissional e suas áreas de maior interesse. Utilize este espaço para criar conexão com quem está visitando o seu portfólio.";

export const ABOUT_ME_EN = "This is a generic example text for the About Me section. Here you should write a bit about your journey, who you are outside of coding, your passions in technology, and your career goals. Replace this content with a text that reflects your own identity, highlighting what makes you unique as a professional and your main areas of interest. Use this space to connect with whoever is visiting your portfolio.";

const LOREM_LONG_PT = "Breve descrição sobre as atividades desempenhadas nesta experiência ou formação. Foco em tecnologias utilizadas, impacto das ações e aprendizados ao longo do período.";
const LOREM_LONG_EN = "Brief description of the activities performed in this experience or education. Focus on technologies used, impact of actions, and learnings over the period.";

export type Experience = {
  company: string;
  role: string;
  period: string;
  body: string;
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Nome da Empresa",
    role: "Desenvolvedor Fullstack",
    period: "2023 - Presente",
    body: LOREM_LONG_PT,
  },
  {
    company: "Nome da Startup",
    role: "Estagiário de Engenharia de Software",
    period: "2021 - 2022",
    body: LOREM_LONG_PT,
  },
];

export type Education = {
  institution: string;
  degree: string;
  period: string;
  body: string;
};

// Formação em Português
export const EDUCATION_PT: Education[] = [
  {
    institution: "Nome da Universidade",
    degree: "Bacharelado em Ciência da Computação",
    period: "2019 - 2023",
    body: LOREM_LONG_PT,
  },
  {
    institution: "Nome da Instituição Técnica",
    degree: "Técnico em Desenvolvimento de Sistemas",
    period: "2017 - 2019",
    body: LOREM_LONG_PT,
  },
];

// Formação em Inglês
export const EDUCATION_EN: Education[] = [
  {
    institution: "University Name",
    degree: "Bachelor of Computer Science",
    period: "2019 - 2023",
    body: LOREM_LONG_EN,
  },
  {
    institution: "Technical Institution Name",
    degree: "Systems Development Technician",
    period: "2017 - 2019",
    body: LOREM_LONG_EN,
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  about: string;
  image: string;
  tags: string[];
  website: string;
  github: string;
  link: string;
};

const LOREM_PT = "Breve descrição do projeto e das tecnologias aplicadas.";
const ABOUT_LOREM_PT = "Descrição mais aprofundada sobre o desenvolvimento do projeto, os desafios superados e as motivações por trás dele.";

export const PROJECTS: Project[] = [
  {
    id: "project-dashboard",
    title: "Nome do Projeto",
    category: "Projetos",
    description: LOREM_PT,
    about: ABOUT_LOREM_PT,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "TypeScript", "Node"],
    website: "https://example.com",
    github: "https://github.com/username/project",
    link: "#",
  },
  {
    id: "project-open-source",
    title: "Projeto Open Source",
    category: "Open Source",
    description: LOREM_PT,
    about: ABOUT_LOREM_PT,
    image: "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "React Query", "TS"],
    website: "https://example.com",
    github: "https://github.com/username/project",
    link: "#",
  }
];