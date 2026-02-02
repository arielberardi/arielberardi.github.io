import type { Variants } from "framer-motion";

// Column entrance with stagger
export const COLUMN_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Container for column stagger
export const COLUMN_CONTAINER_VARIANTS: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Certificate card entrance with stagger
export const CERTIFICATE_CARD_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

// Container for certificate grid stagger
export const CERTIFICATE_GRID_VARIANTS: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Skill row entrance
export const SKILL_ROW_VARIANTS: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Progress bar fill
export const BAR_FILL_VARIANTS: Variants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level * 20}%`,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.2,
    },
  }),
};

// Skill list container with stagger
export const SKILL_LIST_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const VIEWPORT_MARGIN = "-100px";
