import type { Skill } from "@/types/portfolio";
import clsx from "clsx";
import { motion } from "framer-motion";
import { BAR_FILL_VARIANTS, SKILL_ROW_VARIANTS } from "./animations";

interface SkillBarProps extends Skill {
  prefersReducedMotion: boolean | null;
}

// Color mapping based on proficiency level
const LEVEL_COLORS = {
  1: "from-orange-400 to-orange-500", // Beginner
  2: "from-yellow-400 to-yellow-500", // Novice
  3: "from-blue-400 to-blue-500", // Intermediate
  4: "from-indigo-400 to-indigo-500", // Advanced
  5: "from-green-400 to-green-500", // Expert
} as const;

const LEVEL_LABELS = {
  1: "Beginner",
  2: "Novice",
  3: "Intermediate",
  4: "Advanced",
  5: "Expert",
} as const;

export function SkillBar({ name, level, prefersReducedMotion }: SkillBarProps) {
  const percentage = level * 20;
  const colorClasses = LEVEL_COLORS[level];
  const levelLabel = LEVEL_LABELS[level];

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : SKILL_ROW_VARIANTS}
      className="flex flex-col gap-2"
    >
      <div className="flex items-center justify-between">
        <span className="text-base font-medium text-gray-900 dark:text-white">{name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{levelLabel}</span>
      </div>

      <div className="relative h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <motion.div
          custom={level}
          variants={prefersReducedMotion ? undefined : BAR_FILL_VARIANTS}
          initial="hidden"
          animate="visible"
          className={clsx("h-full rounded-full bg-linear-to-r", colorClasses)}
          aria-label={`${percentage}% proficiency`}
        />
      </div>
    </motion.div>
  );
}
