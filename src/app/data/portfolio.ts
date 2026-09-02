export const PROFILE = {
  name: "Bárbara Marcella",
  role: "Estudante de Engenharia de Software",
  logoName: "barbara-marcella",
  username: "@barbarainnacio",
  githubUrl: "https://github.com/Barbarainnacio",
};

export type SocialKey = "linkedin" | "github" | "whatsapp";

export const SOCIALS: {
  key: SocialKey;
  label: string;
  href: string;
}[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/barbara-marcella-36785520a/",
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/Barbarainnacio",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/5531995714113",
  },
];


// =========================
// SOBRE MIM
// =========================

export const ABOUT_ME_PT =
  "Sou estudante de Engenharia de Software na PUC Minas e atuo profissionalmente na Split Fast desde os 18 anos. Ao longo desse período, acompanhei de perto o crescimento da empresa e passei a assumir responsabilidades na coordenação das operações, envolvendo processos administrativos e financeiros, relacionamento com clientes e representantes comerciais, além do contato direto com parceiros e equipe de tecnologia. Essa experiência despertou ainda mais meu interesse por tecnologia e pela forma como sistemas podem otimizar processos e solucionar problemas reais. Na graduação, venho ampliando meus conhecimentos em desenvolvimento de software, banco de dados, arquitetura, testes e desenvolvimento web. Busco unir minha experiência profissional à formação em Engenharia de Software, evoluindo cada vez mais na área de tecnologia.";

export const ABOUT_ME_EN =
  "I am a Software Engineering student at PUC Minas and have been working at Split Fast since I was 18. Throughout this journey, I have closely followed the company's growth and gradually taken on responsibilities in operations coordination, including administrative and financial processes, relationships with clients and sales representatives, as well as direct communication with business partners and the technology team. This experience has strengthened my interest in technology and in how software solutions can optimize processes and solve real-world problems. During my degree, I have been expanding my knowledge in software development, databases, software architecture, testing, and web development. My goal is to combine my professional experience with my Software Engineering education while continuing to grow and develop my career in technology.";


// =========================
// EXPERIÊNCIAS
// =========================

export type Experience = {
  company: string;
  role: string;
  period: string;
  body: string;
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Split Fast",
    role: "Coordenadora de Operações",
    period: "2021 - Atual",
    body:
      "Atuação na coordenação das operações da empresa, acompanhando processos administrativos e financeiros, atendimento e suporte a clientes, relacionamento com representantes comerciais e alinhamento com parceiros e equipe de tecnologia. Ao longo dos anos, acompanhei o crescimento da operação e a expansão da equipe, assumindo responsabilidades relacionadas à organização de processos, resolução de demandas e integração entre as diferentes áreas do negócio.",
  },
  {
    company: "PUC Minas — Engenharia de Software",
    role: "Membro do Time de Mídias e Comunicação",
    period: "2026 - Atual",
    body:
      "Atuação no time de Mídias e Comunicação do curso de Engenharia de Software da PUC Minas, contribuindo para o planejamento e produção de conteúdos para as redes sociais do curso. Desenvolvimento de roteiros, conteúdos audiovisuais e materiais de divulgação, além da participação na cobertura de eventos acadêmicos e em ações de comunicação voltadas aos estudantes e à comunidade acadêmica.",
  },
];


// =========================
// FORMAÇÃO
// =========================

export type Education = {
  institution: string;
  degree: string;
  period: string;
  body: string;
};

export const EDUCATION_PT: Education[] = [
  {
    institution: "PUC Minas",
    degree: "Bacharelado em Engenharia de Software",
    period: "Em andamento",
    body:
      "Graduação com foco em desenvolvimento de software, programação, banco de dados, arquitetura de software, engenharia de requisitos, testes e processos de software.",
  },
];

export const EDUCATION_EN: Education[] = [
  {
    institution: "PUC Minas",
    degree: "Bachelor's Degree in Software Engineering",
    period: "In progress",
    body:
      "Undergraduate degree focused on software development, programming, databases, software architecture, requirements engineering, testing, and software processes.",
  },
];


// =========================
// PROJETOS
// =========================

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

export const PROJECTS: Project[] = [
  {
    id: "oficina-mecanica",
    title: "Sistema para Oficina Mecânica",
    category: "Projeto Acadêmico",

    description:
      "Sistema desenvolvido para auxiliar no gerenciamento de processos de uma oficina mecânica.",

    about:
      "Projeto acadêmico desenvolvido com foco em funcionalidades como cadastro de clientes e veículos, controle de peças, orçamentos e organização dos processos da oficina.",

    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",

    tags: ["Java", "Spring Boot", "HTML", "CSS"],

    website: "#",

    // TROCAR depois pelo link do repositório deste projeto
    github: "#",

    link: "#",
  },

  {
    id: "folha-pagamento",
    title: "Sistema de Folha de Pagamento",
    category: "Projeto Acadêmico",

    description:
      "Aplicação desenvolvida para realizar cálculos relacionados à folha de pagamento.",

    about:
      "Projeto desenvolvido utilizando programação orientada a objetos, com regras para cálculo de descontos e benefícios como INSS, IRRF, FGTS, vale-transporte e salário líquido.",

    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",

    tags: ["Java", "POO", "JUnit"],

    website: "#",

    // TROCAR depois pelo link do repositório deste projeto
    github: "#",

    link: "#",
  },
];