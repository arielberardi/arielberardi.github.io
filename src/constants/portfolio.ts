import type { Certificate, Project, SkillCategory, SocialLink, WorkExperience } from "@/types";

export const PERSONAL_INFO = {
  name: "Ariel Berardi",
  role: "Software Engineer",
  intro:
    "Full-stack developer specializing in TypeScript-based web applications with React, Next.js, and AWS serverless architectures. Known for systematic problem-solving and delivering reliable solutions through thorough troubleshooting and debugging. Collaborates effectively with clients, stakeholders, and cross-functional teams to translate business needs into technical solutions. Actively integrates AI tools to accelerate development workflows while staying current with emerging technologies to enhance user experiences.",
  email: "ariel.berardi95@gmail.com",
  location: {
    city: "Marlow",
    country: "United Kingdom",
  },
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    role: "Software Engineer",
    company: "Infosys Limited",
    dateRange: "2023 - Present",
    achievements: [
      "Developed and maintained frontend web applications using JavaScript, TypeScript, and React for set-top boxes and smart TV.",
      "Built internal web platforms and tooling using React, Next.js, Tailwind CSS, and AWS.",
      "Integrated frontend applications with REST APIs and collaborated with backend engineers on implementation details.",
      "Investigated and resolved production issues through log analysis, debugging, and cross-team collaboration.",
      "Worked with designers and stakeholders to deliver user-facing features and improvements.",
    ],
  },
  {
    role: "Partner Integration Engineer",
    company: "Disney Streaming",
    dateRange: "2021 - 2022",
    achievements: [
      "Supported integration and delivery of the Disney+ application on embedded Linux platforms.",
      "Built internal dashboards and visualization tools using React and TypeScript to monitor system configuration and status.",
      "Troubleshot production issues through log analysis, network inspection, and collaboration with cross-functional teams.",
      "Developed automation scripts and internal tooling to improve operational efficiency.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Qubika",
    dateRange: "2020 - 2021",
    achievements: [
      "Worked on backend systems for a banking application using Ruby on Rails and PostgreSQL.",
      "Designed and implemented REST APIs consumed by frontend and mobile applications.",
      "Collaborated with designers and product stakeholders to implement user-facing features.",
      "Deployed applications using Docker and managed CI/CD pipelines with CircleCI, following security best practices.",
    ],
  },
  {
    role: "Embedded Developer",
    company: "R-Link S.A",
    dateRange: "2018 - 2020",
    achievements: [
      "Development of Embedded Devices using C for IoT and Smart City platforms",
      "Support Embedded Devices by developing dashboard applications in Ruby on Rails",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Javascript", level: 4 },
      { name: "React", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "Tailwind CSS", level: 4 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Python", level: 4 },
      { name: "SQL", level: 3 },
      { name: "NoSQL", level: 2 },
      { name: "REST APIs", level: 4 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 4 },
      { name: "Docker", level: 3 },
      { name: "Amazon Web Services", level: 3 },
      { name: "CI/CD Jenkins", level: 3 },
      { name: "Unit Testing", level: 4 },
      { name: "Integration Testing", level: 4 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Task Management App",
    description:
      "Personal task management/tracking application for daily activities with kanban board and calendar. Coded with AI assistant tools",
    techStack: ["React.js", "TypeScript", "TailwindCSS", "Playwright"],
    githubUrl: "https://github.com/arielberardi/task-management-app",
    image: "/task-management-app.png",
  },
  {
    name: "CV Generator",
    description:
      "Lightweight Python tool that transforms your professional data into clean, printable HTML resumes",
    techStack: ["Python"],
    githubUrl: "https://github.com/arielberardi/cv-generator",
    image: "/cv-generator.webp",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/arielberardi",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/aberardi95",
    icon: "linkedin",
  },
];

export const NAV_LINKS = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "Google Cybersecurity",
    academy: "Coursera",
    year: 2025,
    certificateUrl: "https://coursera.org/share/f320f7fa5290994f992ee589fc5d9689",
    image: "cyber.png",
  },
  {
    title: "AWS Cloud Solution Architect",
    academy: "Coursera",
    year: "2025",
    certificateUrl: "https://coursera.org/share/e22e35cd7d55e49e6fe3cccbc3293b54",
    image: "aws.png",
  },
  {
    title: "Introduction to Containers w/Docker and Kubernetes",
    academy: "Coursera",
    year: "2025",
    certificateUrl: "https://coursera.org/share/a79cb002f75a20ea7aff2594b89bc6da",
    image: "docker.png",
  },
];
