import { SectionWrapper } from "@/components/SectionWrapper";
import { WORK_EXPERIENCES } from "@/constants";
import clsx from "clsx";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  ACHIEVEMENT_CONTAINER_VARIANTS,
  ACHIEVEMENT_ITEM_VARIANTS,
  CARD_TRANSITION,
  CARD_VARIANTS,
  STAGGER_DELAY,
  VIEWPORT_MARGIN,
} from "./animations";

interface ExperienceCardProps {
  role: string;
  company: string;
  dateRange: string;
  achievements: string[];
  index: number;
  prefersReducedMotion: boolean | null;
}

function ExperienceCard({
  role,
  company,
  dateRange,
  achievements,
  index,
  prefersReducedMotion,
}: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: VIEWPORT_MARGIN });

  const shouldAnimate = !prefersReducedMotion && isInView;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={prefersReducedMotion ? undefined : CARD_VARIANTS}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              ...CARD_TRANSITION,
              delay: index * STAGGER_DELAY,
            }
      }
      className={clsx(
        "group relative rounded-xl border p-6 transition-colors",
        "border-gray-200 bg-white hover:border-blue-200",
        "dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-700",
      )}
    >
      <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {role}
          </h3>
          <p className="text-lg font-semibold text-blue-600 transition-colors group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300">
            {company}
          </p>
        </div>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
          {dateRange}
        </span>
      </div>
      <motion.ul
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        variants={prefersReducedMotion ? undefined : ACHIEVEMENT_CONTAINER_VARIANTS}
        className="space-y-2 text-gray-700 dark:text-gray-300"
      >
        {achievements.map((achievement, achIndex) => (
          <motion.li
            key={achIndex}
            variants={prefersReducedMotion ? undefined : ACHIEVEMENT_ITEM_VARIANTS}
            className="relative pl-6 before:absolute before:top-2 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-blue-500 dark:before:bg-blue-400"
          >
            {achievement}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export function WorkExperience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="experience" className="bg-white dark:bg-gray-900">
      <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
        Work Experience
      </h2>
      <div className="space-y-8">
        {WORK_EXPERIENCES.map((experience, index) => (
          <ExperienceCard
            key={index}
            role={experience.role}
            company={experience.company}
            dateRange={experience.dateRange}
            achievements={experience.achievements}
            index={index}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
