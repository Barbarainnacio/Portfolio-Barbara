export type Language = "en" | "pt";

export const LANGUAGE_STORAGE_KEY = "portfolio-language";

export const translations = {
  en: {
    header: {
      homeAriaLabel: "Home",
      languageToggleAriaLabel: "Switch language to Portuguese",
    },
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      greeting: "Hi all. I am",
      imPrefix: "I'm",
      anywaysYouCan: "Anyways, you can",
      contactMe: "CONTACT ME",
      seeMoreAboutMe: "See More About Me",
    },
    about: {
      title: "About Me.",
      experiences: "Experiences.",
      education: "Education.",
      continueToProjects: "Lets Continue To Projects",
      items: {
        exp1: {
          role: "Fullstack Developer",
          company: "Company Name",
          period: "2023 - Present",
          body: "Worked on fullstack applications..."
        },
        exp2: {
          role: "Software Engineering Intern",
          company: "Startup Name",
          period: "2021 - 2022",
          body: "Internship focused on backend services..."
        },
         },
      educationItems: {
        edu1: {
          degree: "B.Sc. in Computer Science",
          institution: "University Name",
          period: "2019 - 2023",
          body: "Studied algorithms, data structures..."
        },
        edu2: {
          degree: "Technical Diploma in Systems Development",
          institution: "College Name",
          period: "2017 - 2019",
          body: "Focused on systems development..."
        },
      }
    },
    projects: {
      title: "Projects.",
    },
    projectDrawer: {
      closeAriaLabel: "Close",
      about: "About",
      technologies: "Technologies",
      website: "Website",
      github: "Github",
      openProject: "Open Project",
    },
    contact: {
      title: "Contact.",
      cardLabels: {
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      messageSent: "// message sent",
      thanksPrefix: "Thanks,",
      thanksSuffix: "! I'll be in touch soon.",
      friendFallback: "friend",
      yourNameAriaLabel: "Your name",
      yourNamePlaceholder: "Your name",
      yourEmailAriaLabel: "Your email",
      yourEmailPlaceholder: "Your email",
      yourMessageAriaLabel: "Your message",
      yourMessagePlaceholder: "Your message",
      sendMessage: "Send Message",
    },
    footer: {
      findMeIn: "find me in:",
    },
    shared: {
      imageErrorAlt: "Error loading image",
    },
  },
  pt: {
    header: {
      homeAriaLabel: "Início",
      languageToggleAriaLabel: "Mudar idioma para inglês",
    },
    nav: {
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
    },
    home: {
      greeting: "Olá a todos. Eu sou",
      imPrefix: "Eu sou",
      anywaysYouCan: "De qualquer forma, você pode",
      contactMe: "FALE COMIGO",
      seeMoreAboutMe: "Ver Mais Sobre Mim",
    },
    about: {
      title: "Sobre Mim.",
      experiences: "Experiências.",
      education: "Formação.",
      continueToProjects: "Vamos Continuar Para Projetos",
      items: {
        exp1: {
          role: "Desenvolvedor Fullstack",
          company: "Nome da Empresa",
          period: "2023 - Atual",
          body: "Atuei em aplicações fullstack..."
        },
        exp2: {
          role: "Estagiário em Engenharia de Software",
          company: "Nome da Startup",
          period: "2021 - 2022",
          body: "Estágio focado em serviços backend..."
        },
      },
      educationItems: {
        edu1: {
          degree: "Bacharelado em Ciência da Computação",
          institution: "Nome da Universidade",
          period: "2019 - 2023",
          body: "Estudei algoritmos, estruturas de dados..."
        },
        edu2: {
          degree: "Diploma Técnico em Desenvolvimento de Sistemas",
          institution: "Nome da Faculdade",
          period: "2017 - 2019",
          body: "Focado em desenvolvimento de sistemas..."
        },
      }
    },
    projects: {
      title: "Projetos.",
    },
    projectDrawer: {
      closeAriaLabel: "Fechar",
      about: "Sobre",
      technologies: "Tecnologias",
      website: "Site",
      github: "Github",
      openProject: "Abrir Projeto",
    },
    contact: {
      title: "Contato.",
      cardLabels: {
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      messageSent: "// mensagem enviada",
      thanksPrefix: "Obrigado,",
      thanksSuffix: "! Entrarei em contato em breve.",
      friendFallback: "amigo(a)",
      yourNameAriaLabel: "Seu nome",
      yourNamePlaceholder: "Seu nome",
      yourEmailAriaLabel: "Seu email",
      yourEmailPlaceholder: "Seu email",
      yourMessageAriaLabel: "Sua mensagem",
      yourMessagePlaceholder: "Sua mensagem",
      sendMessage: "Enviar Mensagem",
    },
    footer: {
      findMeIn: "me encontre em:",
    },
    shared: {
      imageErrorAlt: "Erro ao carregar imagem",
    },
  },
} as const;

type Widen<T> = T extends string
  ? string
  : T extends object
    ? { [K in keyof T]: Widen<T[K]> }
    : T;

export type TranslationSchema = Widen<typeof translations.en>;