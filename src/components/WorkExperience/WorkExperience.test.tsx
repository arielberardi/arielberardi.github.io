import { WORK_EXPERIENCES } from "@/constants";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { WorkExperience } from "./WorkExperience";

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");
  return {
    ...actual,
    motion: {
      div: "div",
      ul: "ul",
      li: "li",
    },
    useReducedMotion: () => false,
    useInView: () => true,
  };
});

describe("WorkExperience", () => {
  it("renders section heading", () => {
    render(<WorkExperience />);

    expect(screen.getByRole("heading", { name: "Work Experience" })).toBeInTheDocument();
  });

  it("renders all work experiences", () => {
    render(<WorkExperience />);

    WORK_EXPERIENCES.forEach((exp) => {
      expect(screen.getByText(exp.role)).toBeInTheDocument();
    });
  });

  it("renders company names", () => {
    render(<WorkExperience />);

    WORK_EXPERIENCES.forEach((exp) => {
      expect(screen.getByText(exp.company)).toBeInTheDocument();
    });
  });

  it("renders date ranges", () => {
    render(<WorkExperience />);

    WORK_EXPERIENCES.forEach((exp) => {
      expect(screen.getByText(exp.dateRange)).toBeInTheDocument();
    });
  });

  it("renders achievements as list items", () => {
    render(<WorkExperience />);

    WORK_EXPERIENCES.forEach((exp) => {
      exp.achievements.forEach((achievement) => {
        expect(screen.getByText(achievement)).toBeInTheDocument();
      });
    });
  });

  it("renders with correct section id", () => {
    const { container } = render(<WorkExperience />);

    const section = container.querySelector("#experience");
    expect(section).toBeInTheDocument();
  });

  it("displays experiences in correct order", () => {
    const { container } = render(<WorkExperience />);

    const experiences = container.querySelectorAll("h3");
    expect(experiences[0]).toHaveTextContent(WORK_EXPERIENCES[0].role);
    expect(experiences[1]).toHaveTextContent(WORK_EXPERIENCES[1].role);
  });

  it("renders experience cards with animation wrappers", () => {
    const { container } = render(<WorkExperience />);
    expect(container.querySelector(".space-y-8")).toBeInTheDocument();
  });
});
