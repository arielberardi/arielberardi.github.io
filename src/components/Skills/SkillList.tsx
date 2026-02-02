import type { Skill } from "@/types/portfolio";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SKILL_LIST_VARIANTS, VIEWPORT_MARGIN } from "./animations";
import { SkillBar } from "./SkillBar";

interface SkillListProps {
  skills: Skill[];
  prefersReducedMotion: boolean | null;
}

export function SkillList({ skills, prefersReducedMotion }: SkillListProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: VIEWPORT_MARGIN });

  const shouldAnimate = !prefersReducedMotion && isInView;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={prefersReducedMotion ? undefined : SKILL_LIST_VARIANTS}
      className="space-y-6"
    >
      {skills.map((skill, index) => (
        <SkillBar key={index} {...skill} prefersReducedMotion={prefersReducedMotion} />
      ))}
    </motion.div>
  );
}
