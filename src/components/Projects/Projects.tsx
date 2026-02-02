import { SectionWrapper } from "@/components/SectionWrapper";
import { PROJECTS } from "@/constants";
import { useReducedMotion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper minHeight="min-h-screen" id="projects" className="bg-white dark:bg-gray-900">
      <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            index={index}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
