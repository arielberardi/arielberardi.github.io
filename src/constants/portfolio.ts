import type { Certificate, Project, SkillCategory, SocialLink, WorkExperience } from "@/types";

export const PERSONAL_INFO = {
  name: "Ariel Berardi",
  role: "Software Engineer",
  intro:
    "Software Engineer with several years of experience solving complex problems and building high-quality applications. Strong focus on Front-End development, with solid Back-End experience and a good understanding of cloud-based and automated delivery environments. Adaptable, proactive, and quick to learn new domains independently in fast-paced environments.",
  email: "ariel.berardi95@gmail.com",
  location: {
    city: "Marlow",
    country: "United Kingdom",
  },
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    role: "Front-end Developer",
    company: "Infosys Limited",
    dateRange: "2023 - Present",
    achievements: [
      "Developed and maintained front-end web applications for embedded Linux Set-Top Boxes (STBs) with strict CPU and memory constraints, using vanilla JavaScript, TypeScript, and React.js while integrating with vendor's REST API",
      "Designed and built internal web platforms for application delivery and operational workflows using TypeScript, React.js, and AWS",
      "Built internal tooling systems using Next.js, Prisma, Tailwind CSS, ShadCN, and Node.js for back-end services, with CI/CD pipelines implemented in Jenkins",
      "Investigated and resolved production issues through log analysis, network analysis, and cross-team collaboration with internal stakeholders and external vendors to identify root causes and deliver fixes",
      "Developed automated testing frameworks in Python using Robot Framework, integrating AI-driven enhancements with PyTorch to improve test effectiveness and reduce manual QA effort",
    ],
  },
  {
    role: "Partner Integration Engineer",
    company: "Disney Streaming",
    dateRange: "2021 - 2022",
    achievements: [
      "Delivered and supported vendor integration of the Disney+ application on embedded Linux Set-Top Boxes (STBs), collaborating closely with clients and cross-functional teams to ensure successful deployment.",
      "Troubleshot and performed root cause analysis for production issues using log analysis, network inspection, and pair programming to identify and resolve performance, stability, and integration problems.",
      "Developed internal tooling to automate deployment and delivery processes using Python scripts, improving efficiency and reducing manual effort.",
      "Built web-based dashboards and visualization tools in TypeScript and React.js to monitor configuration and system status.",
    ],
  },
  {
    role: "Back-end Developer",
    company: "Qubika",
    dateRange: "2020 - 2021",
    achievements: [
      "Developed and maintained back-end systems for a banking application using Ruby on Rails and PostgreSQL, supporting transaction processing, account management, and customer portals. Design and implement REST API for mobile app usage.",
      "Implemented new features and fixed QA reported bugs in close collaboration with designers and product stakeholders, ensuring user facing improvements.",
      "Deployed applications using Docker containers and managed CI/CD pipelines with CircleCI for reliable and repeatable builds.",
      "Ensured security and compliance by following OWASP best practices for banking applications, maintaining system integrity and protecting sensitive customer data.",
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
