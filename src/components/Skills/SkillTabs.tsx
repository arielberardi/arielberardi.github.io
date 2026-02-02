import clsx from "clsx";
import { motion } from "framer-motion";

interface SkillTabsProps {
  categories: string[];
  activeCategory: string;
  onTabChange: (category: string) => void;
}

export function SkillTabs({ categories, activeCategory, onTabChange }: SkillTabsProps) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2 md:gap-4">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            onClick={() => onTabChange(category)}
            className={clsx(
              "relative px-6 py-3 text-base font-semibold transition-colors duration-200",
              "rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none",
              "dark:focus:ring-offset-gray-900",
              isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200",
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {category}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-x-0 -bottom-1 h-1 rounded-full bg-blue-600 dark:bg-blue-400"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
