import type { Project } from "@/types/portfolio";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CARD_TRANSITION,
  CARD_VARIANTS,
  STAGGER_DELAY,
  TECH_STACK_CONTAINER_VARIANTS,
  TECH_STACK_ITEM_VARIANTS,
  VIEWPORT_MARGIN,
} from "./animations";

interface ProjectCardProps extends Project {
  index: number;
  prefersReducedMotion: boolean | null;
}

export function ProjectCard({
  name,
  description,
  techStack,
  githubUrl,
  liveUrl,
  image,
  index,
  prefersReducedMotion,
}: ProjectCardProps) {
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
        "group relative flex flex-col overflow-hidden rounded-xl border transition-all duration-300",
        "shadow-md hover:scale-[1.02] hover:shadow-xl",
        "border-gray-200 bg-white hover:border-blue-200",
        "dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-700",
      )}
    >
      {image && (
        <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
          <img
            src={image}
            alt={`${name} project screenshot`}
            className={clsx(
              "h-full w-full object-cover transition-transform duration-300",
              "group-hover:scale-105",
            )}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 dark:opacity-100" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {name}
        </h3>
        <p className="mb-4 flex-1 leading-relaxed text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <motion.div
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          variants={prefersReducedMotion ? undefined : TECH_STACK_CONTAINER_VARIANTS}
          className="mb-4 flex flex-wrap gap-2"
        >
          {techStack.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              variants={prefersReducedMotion ? undefined : TECH_STACK_ITEM_VARIANTS}
              className="rounded-full bg-linear-to-r from-gray-100 to-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 dark:from-gray-700 dark:to-gray-600 dark:text-gray-300"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        <div className="flex gap-4">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 font-medium text-blue-600 transition-all hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50"
            >
              <GithubOutlined />
              <span className="text-sm">Code</span>
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 font-medium text-blue-600 transition-all hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50"
            >
              <LinkOutlined />
              <span className="text-sm">Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
