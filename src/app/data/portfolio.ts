export const PROFILE = {
  name: "Your Name",
  role: "Your Role",
  logoName: "your-name",
  username: "@username",
  githubUrl: "https://github.com/example/url",
};

export type SocialKey = "linkedin" | "github";

export const SOCIALS: { key: SocialKey; label: string; href: string }[] = [
  { key: "linkedin", label: "LinkedIn", href: "#" },
  { key: "github", label: "GitHub", href: "#" },
];

const LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export type Experience = {
  company: string;
  role: string;
  period: string;
  body: string;
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Company Name",
    role: "Fullstack Developer",
    period: "2023 - Present",
    body: LOREM_LONG,
  },
  {
    company: "Startup Name",
    role: "Software Engineering Intern",
    period: "2021 - 2022",
    body: LOREM_LONG,
  },
];

export type Education = {
  institution: string;
  degree: string;
  period: string;
  body: string;
};

export const EDUCATION: Education[] = [
  {
    institution: "University Name",
    degree: "B.Sc. in Computer Science",
    period: "2019 - 2023",
    body: LOREM_LONG,
  },
  {
    institution: "College Name",
    degree: "Technical Diploma in Systems Development",
    period: "2017 - 2019",
    body: LOREM_LONG,
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

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

const ABOUT_LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const PROJECTS: Project[] = [
  {
    id: "project-dashboard",
    title: "Project Name",
    category: "Projects",
    description: LOREM,
    about: ABOUT_LOREM,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "TypeScript", "Node"],
    website: "https://example.com",
    github: "https://github.com/username/project",
    link: "#",
  },
  {
    id: "project-open-source",
    title: "Project Name",
    category: "Open Source",
    description: LOREM,
    about: ABOUT_LOREM,
    image: "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "React Query", "TS"],
    website: "https://example.com",
    github: "https://github.com/username/project",
    link: "#",
  },
  {
    id: "project-dev-tools",
    title: "Project Name",
    category: "Dev Tools",
    description: LOREM,
    about: ABOUT_LOREM,
    image: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "a11y", "npm"],
    website: "https://example.com",
    github: "https://github.com/username/project",
    link: "#",
  },
  {
    id: "project-commerce",
    title: "Project Name",
    category: "Projects",
    description: LOREM,
    about: ABOUT_LOREM,
    image: "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Next.js", "Stripe", "Postgres"],
    website: "https://example.com",
    github: "https://github.com/username/project",
    link: "#",
  },
  {
    id: "project-design-system",
    title: "Project Name",
    category: "Designs",
    description: LOREM,
    about: ABOUT_LOREM,
    image: "https://images.unsplash.com/photo-1625838144804-300f3907c110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Design Tools", "Design System"],
    website: "https://example.com",
    github: "https://github.com/username/project",
    link: "#",
  },
  {
    id: "project-ai",
    title: "Project Name",
    category: "Projects",
    description: LOREM,
    about: ABOUT_LOREM,
    image: "https://images.unsplash.com/photo-1733412505442-36cfa59a4240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["AI", "React", "Python"],
    website: "https://example.com",
    github: "https://github.com/username/project",
    link: "#",
  },
];
