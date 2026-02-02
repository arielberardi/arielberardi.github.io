import { SKILL_CATEGORIES } from "@/constants";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Skills } from "./Skills";

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");
  return {
    ...actual,
    motion: {
      div: "div",
      a: "a",
    },
    useReducedMotion: () => false,
    useInView: () => true,
  };
});

vi.mock("@/constants", async () => {
  const actual = await vi.importActual("@/constants");
  return {
    ...actual,
    CERTIFICATES: [],
  };
});

describe("Skills", () => {
  it("renders section heading", () => {
    render(<Skills />);
    expect(screen.getByRole("heading", { name: "Skills & Expertise" })).toBeInTheDocument();
  });

  it("renders all category headings", () => {
    render(<Skills />);
    SKILL_CATEGORIES.forEach((category) => {
      expect(screen.getByRole("heading", { name: category.category })).toBeInTheDocument();
    });
  });

  it("renders all skills from all categories simultaneously", () => {
    render(<Skills />);
    SKILL_CATEGORIES.forEach((category) => {
      category.skills.forEach((skill) => {
        expect(screen.getByText(skill.name)).toBeInTheDocument();
      });
    });
  });

  it("renders progress bars for all skills", () => {
    const { container } = render(<Skills />);
    const progressBars = container.querySelectorAll('[aria-label*="proficiency"]');
    const totalSkills = SKILL_CATEGORIES.reduce((sum, cat) => sum + cat.skills.length, 0);
    expect(progressBars).toHaveLength(totalSkills);
  });

  it("displays skill level labels", () => {
    render(<Skills />);
    const levelLabels = ["Beginner", "Novice", "Intermediate", "Advanced", "Expert"];

    SKILL_CATEGORIES.forEach((category) => {
      category.skills.forEach((skill) => {
        const expectedLabel = levelLabels[skill.level - 1];
        expect(screen.getAllByText(expectedLabel).length).toBeGreaterThan(0);
      });
    });
  });

  it("renders with correct section id", () => {
    const { container } = render(<Skills />);
    expect(container.querySelector("#skills")).toBeInTheDocument();
  });

  it("applies grid layout classes", () => {
    const { container } = render(<Skills />);
    const gridContainer = container.querySelector(".grid");
    expect(gridContainer).toBeInTheDocument();
    expect(gridContainer).toHaveClass("grid-cols-1");
    expect(gridContainer).toHaveClass("md:grid-cols-2");
    expect(gridContainer).toHaveClass("lg:grid-cols-3");
  });

  it("does not render certificates section when empty", () => {
    render(<Skills />);
    expect(screen.queryByRole("heading", { name: "Certifications" })).not.toBeInTheDocument();
  });
});
