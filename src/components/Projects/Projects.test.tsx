import { PROJECTS } from "@/constants";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Projects } from "./Projects";

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");
  return {
    ...actual,
    motion: {
      div: "div",
      span: "span",
      a: "a",
    },
    useReducedMotion: () => false,
    useInView: () => true,
  };
});

describe("Projects", () => {
  it("renders section heading", () => {
    render(<Projects />);

    expect(screen.getByRole("heading", { name: "Projects" })).toBeInTheDocument();
  });

  it("renders all project names", () => {
    render(<Projects />);

    PROJECTS.forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    });
  });

  it("renders project descriptions", () => {
    render(<Projects />);

    PROJECTS.forEach((project) => {
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  it("renders tech stack items", () => {
    render(<Projects />);

    const allTechStacks = PROJECTS.flatMap((project) => project.techStack);
    const uniqueTechs = [...new Set(allTechStacks)];

    uniqueTechs.forEach((tech) => {
      const elements = screen.getAllByText(tech);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it("renders GitHub links when provided", () => {
    render(<Projects />);

    const projectsWithGithub = PROJECTS.filter((p) => p.githubUrl);
    const githubLinks = screen.getAllByRole("link", { name: /Code/i });
    expect(githubLinks).toHaveLength(projectsWithGithub.length);
  });

  it("renders live demo links when provided", () => {
    render(<Projects />);

    const projectsWithLive = PROJECTS.filter((p) => p.liveUrl);
    const liveDemoLinks = screen.getAllByRole("link", { name: /Live Demo/i });
    expect(liveDemoLinks).toHaveLength(projectsWithLive.length);
  });

  it("links have correct attributes", () => {
    render(<Projects />);

    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("renders with correct section id", () => {
    const { container } = render(<Projects />);

    const section = container.querySelector("#projects");
    expect(section).toBeInTheDocument();
  });

  it("renders with 3-column grid on xl screens", () => {
    const { container } = render(<Projects />);
    expect(container.querySelector(".xl\\:grid-cols-3")).toBeInTheDocument();
  });

  it("renders project cards with animation wrappers", () => {
    const { container } = render(<Projects />);
    expect(container.querySelector(".grid.gap-6")).toBeInTheDocument();
  });

  it("renders project images when provided", () => {
    const { container } = render(<Projects />);
    const projectsWithImages = PROJECTS.filter((p) => p.image);
    const images = container.querySelectorAll('img[alt*="project screenshot"]');
    expect(images).toHaveLength(projectsWithImages.length);
  });

  it("project images have correct alt text", () => {
    render(<Projects />);
    PROJECTS.forEach((project) => {
      if (project.image) {
        const altText = `${project.name} project screenshot`;
        expect(screen.getByAltText(altText)).toBeInTheDocument();
      }
    });
  });

  it("project images have lazy loading", () => {
    const { container } = render(<Projects />);
    const images = container.querySelectorAll("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("loading", "lazy");
    });
  });
});
