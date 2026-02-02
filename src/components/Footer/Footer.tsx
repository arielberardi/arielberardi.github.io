import { PERSONAL_INFO } from "@/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white py-8 transition-colors dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex items-center justify-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} - {PERSONAL_INFO.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
