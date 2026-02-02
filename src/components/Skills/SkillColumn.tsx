import type { Skill } from "@/types/portfolio";
import { motion } from "framer-motion";
import { COLUMN_VARIANTS, SKILL_LIST_VARIANTS } from "./animations";
import { SkillBar } from "./SkillBar";

interface SkillColumnProps {
  category: string;
  skills: Skill[];
  index: number;
  prefersReducedMotion: boolean | null;
}

export function SkillColumn({ category, skills, index, prefersReducedMotion }: SkillColumnProps) {
  return (
    <motion.div
      custom={index}
      variants={prefersReducedMotion ? undefined : COLUMN_VARIANTS}
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">{category}</h3>
      <motion.div
        variants={prefersReducedMotion ? undefined : SKILL_LIST_VARIANTS}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} prefersReducedMotion={prefersReducedMotion} />
        ))}
      </motion.div>
    </motion.div>
  );
}
