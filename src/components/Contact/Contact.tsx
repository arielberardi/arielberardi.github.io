import { SectionWrapper } from "@/components/SectionWrapper";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

function getIconComponent(iconName: string) {
  switch (iconName.toLowerCase()) {
    case "github":
      return <GithubOutlined />;
    case "linkedin":
      return <LinkedinOutlined />;
    default:
      return null;
  }
}

export function Contact() {
  return (
    <SectionWrapper
      id="contact"
      minHeight="min-h-1/2"
      className="bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          I'm always open to new opportunities and collaborations. Feel free to reach out if you'd
          like to work together or just want to say hi!
        </p>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <MailOutlined />
          <span>Send Email</span>
        </a>
        <div className="mt-8 flex items-center justify-center gap-6">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-2xl text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              {getIconComponent(link.icon)}
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
