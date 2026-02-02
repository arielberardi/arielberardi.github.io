import type { Certificate } from "@/types/portfolio";
import { LinkOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { CERTIFICATE_CARD_VARIANTS } from "./animations";

interface CertificateCardProps extends Certificate {
  index: number;
  prefersReducedMotion: boolean | null;
}

export function CertificateCard({
  title,
  academy,
  year,
  certificateUrl,
  image,
  index,
  prefersReducedMotion,
}: CertificateCardProps) {
  return (
    <motion.a
      href={certificateUrl}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      variants={prefersReducedMotion ? undefined : CERTIFICATE_CARD_VARIANTS}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={`${title} certificate from ${academy}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{title}</h4>
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">{academy}</p>
        <span className="mb-4 text-sm text-gray-500 dark:text-gray-500">{year}</span>
        <span className="mt-auto flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
          View Certificate <LinkOutlined />
        </span>
      </div>
    </motion.a>
  );
}
