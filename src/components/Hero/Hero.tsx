import { SectionWrapper } from "@/components/SectionWrapper";
import { PERSONAL_INFO } from "@/constants";
import { MailOutlined } from "@ant-design/icons";

const COUNTRY_FLAGS: Record<string, string> = {
  "United Kingdom": "🇬🇧",
  "United States": "🇺🇸",
};

export function Hero() {
  const countryFlag = COUNTRY_FLAGS[PERSONAL_INFO.location.country] || "🌍";
  function handleScrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <SectionWrapper
      id="about"
      minHeight="min-h-screen"
      className="flex flex-col items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="flex flex-1 flex-col items-center gap-12 md:flex-row md:gap-16">
        <div className="shrink-0">
          <img
            src="/avatar.jpeg"
            alt={PERSONAL_INFO.name}
            className="h-64 w-64 rounded-full border-4 border-white object-cover shadow-xl dark:border-gray-800"
          />

          <div className="mt-4 flex flex-col items-center gap-2 text-sm">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              aria-label={`Send email to ${PERSONAL_INFO.email}`}
            >
              <MailOutlined />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <div
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
              aria-label={`Located in ${PERSONAL_INFO.location.city}, ${PERSONAL_INFO.location.country}`}
            >
              <span>{countryFlag}</span>
              <span>
                {PERSONAL_INFO.location.city}, {PERSONAL_INFO.location.country}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {PERSONAL_INFO.name}
          </h1>
          <p className="mb-6 text-xl font-medium text-gray-700 md:text-2xl dark:text-gray-300">
            {PERSONAL_INFO.role}
          </p>
          <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {PERSONAL_INFO.intro}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row md:justify-start">
            <button
              onClick={() => handleScrollTo("projects")}
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              View Projects
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="rounded-lg border-2 border-blue-600 px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 w-full pt-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-center text-sm font-medium tracking-wide text-gray-600 uppercase dark:text-gray-400">
            Technologies & Tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <img
              src="https://skillicons.dev/icons?i=react,typescript,nextjs,tailwind,jest"
              alt="Frontend technologies: React, TypeScript, Next.js, Tailwind CSS, Docker"
              className="h-auto w-full max-w-md"
              loading="lazy"
            />
            <img
              src="https://skillicons.dev/icons?i=nodejs,python,postgres,aws,docker"
              alt="Backend technologies: Node.js, Python, PostgreSQL, Aws, Docker"
              className="h-auto w-full max-w-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
