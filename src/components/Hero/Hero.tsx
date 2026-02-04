import { SectionWrapper } from "@/components/SectionWrapper";
import { PERSONAL_INFO } from "@/constants";
import { MailOutlined } from "@ant-design/icons";

export function Hero() {
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
              <span>
                <svg
                  width="25px"
                  height="20px"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fill="#00247D"
                    d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"
                  ></path>
                  <path
                    fill="#CF1B2B"
                    d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"
                  ></path>
                  <path
                    fill="#EEE"
                    d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"
                  ></path>
                  <path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"></path>
                </svg>
              </span>
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
