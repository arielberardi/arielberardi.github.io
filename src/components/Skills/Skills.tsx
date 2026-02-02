import { SectionWrapper } from "@/components/SectionWrapper";
import { CERTIFICATES, SKILL_CATEGORIES } from "@/constants";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  CERTIFICATE_GRID_VARIANTS,
  COLUMN_CONTAINER_VARIANTS,
  VIEWPORT_MARGIN,
} from "./animations";
import { CertificateCard } from "./CertificateCard";
import { SkillColumn } from "./SkillColumn";

export function Skills() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: VIEWPORT_MARGIN });

  return (
    <SectionWrapper
      id="skills"
      minHeight="min-h-screen"
      className="bg-linear-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
        Skills & Expertise
      </h2>

      <motion.div
        ref={ref}
        className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={prefersReducedMotion ? undefined : COLUMN_CONTAINER_VARIANTS}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {SKILL_CATEGORIES.map((category, index) => (
          <SkillColumn
            key={category.category}
            category={category.category}
            skills={category.skills}
            index={index}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </motion.div>

      {CERTIFICATES.length > 0 && (
        <>
          <h3 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Certifications
          </h3>
          <motion.div
            className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={prefersReducedMotion ? undefined : CERTIFICATE_GRID_VARIANTS}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {CERTIFICATES.map((cert, index) => (
              <CertificateCard
                key={index}
                {...cert}
                index={index}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </motion.div>
        </>
      )}
    </SectionWrapper>
  );
}
