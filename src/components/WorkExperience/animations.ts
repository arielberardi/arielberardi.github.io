import type { Variants } from "framer-motion";

export const CARD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const CARD_TRANSITION = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
  mass: 0.8,
};

export const ACHIEVEMENT_CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const ACHIEVEMENT_ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const STAGGER_DELAY = 0.15;
export const VIEWPORT_MARGIN = "-100px";
