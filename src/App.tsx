import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { WorkExperience } from "@/components/WorkExperience";
import { NAV_LINKS } from "@/constants";
import { useActiveSection } from "@/hooks";

export function App() {
  const sectionIds = NAV_LINKS.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <WorkExperience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
