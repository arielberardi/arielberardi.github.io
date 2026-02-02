import { clsx } from "clsx";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  minHeight?: string;
  className?: string;
}

export function SectionWrapper({
  id,
  children,
  minHeight = "min-h-1/2",
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={clsx("w-full px-4 py-16 transition-colors md:px-8 md:py-20", minHeight, className)}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
