import { PERSONAL_INFO } from "@/constants";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="about"></div>
      <div id="projects"></div>
      <div id="contact"></div>
    `;
  });

  it("renders personal name", () => {
    render(<Hero />);

    expect(screen.getByText(PERSONAL_INFO.name)).toBeInTheDocument();
  });

  it("renders role/title", () => {
    render(<Hero />);

    expect(screen.getByText(PERSONAL_INFO.role)).toBeInTheDocument();
  });

  it("renders introduction text", () => {
    render(<Hero />);

    expect(screen.getByText(PERSONAL_INFO.intro)).toBeInTheDocument();
  });

  it("renders primary CTA button", () => {
    render(<Hero />);

    expect(screen.getByRole("button", { name: "View Projects" })).toBeInTheDocument();
  });

  it("renders secondary CTA button", () => {
    render(<Hero />);

    expect(screen.getByRole("button", { name: "Contact Me" })).toBeInTheDocument();
  });

  it("scrolls to projects section when primary CTA is clicked", () => {
    const mockScrollIntoView = vi.fn();
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView = mockScrollIntoView;
    }

    render(<Hero />);

    const viewProjectsButton = screen.getByRole("button", { name: "View Projects" });
    fireEvent.click(viewProjectsButton);

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("scrolls to contact section when secondary CTA is clicked", () => {
    const mockScrollIntoView = vi.fn();
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView = mockScrollIntoView;
    }

    render(<Hero />);

    const contactButton = screen.getByRole("button", { name: "Contact Me" });
    fireEvent.click(contactButton);

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("renders with correct section id", () => {
    render(<Hero />);

    const aboutSection = document.querySelector("#about");
    expect(aboutSection).toBeInTheDocument();
  });

  it("renders avatar image", () => {
    render(<Hero />);

    const avatar = document.querySelector("img[alt='Ariel Berardi']");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", "/avatar.jpeg");
  });

  it("renders technologies section heading", () => {
    render(<Hero />);

    expect(screen.getByText("Technologies & Tools")).toBeInTheDocument();
  });

  it("renders tech stack images", () => {
    const { container } = render(<Hero />);

    const techImages = container.querySelectorAll('img[alt*="technologies"]');
    expect(techImages.length).toBeGreaterThan(0);
  });

  it("tech stack images have descriptive alt text", () => {
    render(<Hero />);

    expect(screen.getByAltText(/Frontend technologies: React, TypeScript/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Backend technologies: Node.js, Python/i)).toBeInTheDocument();
  });

  it("tech stack images have lazy loading", () => {
    const { container } = render(<Hero />);

    const techImages = container.querySelectorAll('img[alt*="technologies"]');
    techImages.forEach((img) => {
      expect(img).toHaveAttribute("loading", "lazy");
    });
  });

  it("renders email with correct mailto link", () => {
    render(<Hero />);

    const emailLink = screen.getByRole("link", { name: /Send email to/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", `mailto:${PERSONAL_INFO.email}`);
    expect(screen.getByText(PERSONAL_INFO.email)).toBeInTheDocument();
  });

  it("renders location with city and country", () => {
    render(<Hero />);

    expect(
      screen.getByText(`${PERSONAL_INFO.location.city}, ${PERSONAL_INFO.location.country}`),
    ).toBeInTheDocument();
  });

  it("email link has proper aria-label", () => {
    render(<Hero />);

    const emailLink = screen.getByRole("link", { name: /Send email to/i });
    expect(emailLink).toHaveAttribute("aria-label", `Send email to ${PERSONAL_INFO.email}`);
  });

  it("location has proper aria-label", () => {
    const { container } = render(<Hero />);

    const locationDiv = container.querySelector('[aria-label*="Located in"]');
    expect(locationDiv).toBeInTheDocument();
    expect(locationDiv).toHaveAttribute(
      "aria-label",
      `Located in ${PERSONAL_INFO.location.city}, ${PERSONAL_INFO.location.country}`,
    );
  });

  it("displays country flag emoji for United Kingdom", () => {
    render(<Hero />);

    const locationDiv = screen.getByText(
      `${PERSONAL_INFO.location.city}, ${PERSONAL_INFO.location.country}`,
    ).parentElement;
    expect(locationDiv?.textContent).toContain("🇬🇧");
  });
});
