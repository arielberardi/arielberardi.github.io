import { NAV_LINKS } from "@/constants";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Navbar } from "./Navbar";

vi.mock("@/hooks", () => ({
  useTheme: () => ({
    theme: "light",
    toggleTheme: vi.fn(),
  }),
}));

describe("Navbar", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="about"></div>
      <div id="experience"></div>
      <div id="skills"></div>
      <div id="projects"></div>
      <div id="contact"></div>
    `;
  });

  it("renders all navigation links", () => {
    render(<Navbar activeSection="about" />);

    NAV_LINKS.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it("renders logo/brand text", () => {
    render(<Navbar activeSection="about" />);

    expect(screen.getByText("AB")).toBeInTheDocument();
  });

  it("renders theme toggle button", () => {
    render(<Navbar activeSection="about" />);

    const themeButtons = screen.getAllByRole("button", { name: "Toggle theme" });
    expect(themeButtons.length).toBeGreaterThan(0);
  });

  it("highlights active section link", () => {
    render(<Navbar activeSection="projects" />);

    const projectsLink = screen.getByRole("link", { name: "Projects" });
    expect(projectsLink).toHaveAttribute("aria-current", "page");
  });

  it("scrolls to section when nav link is clicked", () => {
    const mockScrollIntoView = vi.fn();
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView = mockScrollIntoView;
    }

    render(<Navbar activeSection="about" />);

    const projectsLink = screen.getByRole("link", { name: "Projects" });
    fireEvent.click(projectsLink);

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("renders mobile menu button on small screens", () => {
    render(<Navbar activeSection="about" />);

    const mobileMenuButton = screen.getByRole("button", { name: "Toggle mobile menu" });
    expect(mobileMenuButton).toBeInTheDocument();
  });

  it("toggles mobile menu when button is clicked", () => {
    render(<Navbar activeSection="about" />);

    const mobileMenuButton = screen.getByRole("button", { name: "Toggle mobile menu" });

    const firstLinkText = NAV_LINKS[0].label;
    const homeLinks = screen.getAllByRole("link", { name: firstLinkText });
    expect(homeLinks).toHaveLength(1);

    fireEvent.click(mobileMenuButton);

    const homeLinksAfter = screen.getAllByRole("link", { name: firstLinkText });
    expect(homeLinksAfter.length).toBeGreaterThan(1);
  });

  it("renders resume download button on desktop", () => {
    render(<Navbar activeSection="about" />);
    const resumeLinks = screen.getAllByLabelText("Download resume");
    expect(resumeLinks).toHaveLength(2);
  });

  it("resume button has correct download attributes", () => {
    render(<Navbar activeSection="about" />);
    const resumeLinks = screen.getAllByLabelText("Download resume");
    resumeLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "/resume-ariel-berardi.pdf");
      expect(link).toHaveAttribute("download", "Ariel-Berardi-Resume.pdf");
    });
  });

  it("resume button is accessible via keyboard", () => {
    render(<Navbar activeSection="about" />);
    const resumeLink = screen.getAllByLabelText("Download resume")[0];
    resumeLink.focus();
    expect(resumeLink).toHaveFocus();
  });
});
