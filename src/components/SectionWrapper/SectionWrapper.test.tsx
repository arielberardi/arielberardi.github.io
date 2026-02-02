import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SectionWrapper } from "./SectionWrapper";

describe("SectionWrapper", () => {
  it("renders children correctly", () => {
    render(
      <SectionWrapper id="test-section">
        <div>Test Content</div>
      </SectionWrapper>,
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies correct id attribute", () => {
    const { container } = render(
      <SectionWrapper id="test-section">
        <div>Content</div>
      </SectionWrapper>,
    );

    const section = container.querySelector("#test-section");
    expect(section).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <SectionWrapper id="test-section" className="custom-class">
        <div>Content</div>
      </SectionWrapper>,
    );

    const section = container.querySelector("section");
    expect(section).toHaveClass("custom-class");
  });

  it("renders as a semantic section element", () => {
    const { container } = render(
      <SectionWrapper id="test-section">
        <div>Content</div>
      </SectionWrapper>,
    );

    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("applies default styling classes", () => {
    const { container } = render(
      <SectionWrapper id="test-section">
        <div>Content</div>
      </SectionWrapper>,
    );

    const section = container.querySelector("section");
    expect(section).toHaveClass("min-h-1/2");
    expect(section).toHaveClass("w-full");
    expect(section).toHaveClass("transition-colors");
  });
});
