import { PERSONAL_INFO } from "@/constants";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Contact } from "./Contact";

describe("Contact", () => {
  it("renders section heading", () => {
    render(<Contact />);

    expect(screen.getByRole("heading", { name: "Get In Touch" })).toBeInTheDocument();
  });

  it("renders description text", () => {
    render(<Contact />);

    expect(
      screen.getByText(/I'm always open to new opportunities and collaborations/i),
    ).toBeInTheDocument();
  });

  it("renders email link", () => {
    render(<Contact />);

    const emailLink = screen.getByRole("link", { name: /Send Email/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", `mailto:${PERSONAL_INFO.email}`);
  });

  it("renders with correct section id", () => {
    const { container } = render(<Contact />);

    const section = container.querySelector("#contact");
    expect(section).toBeInTheDocument();
  });

  it("displays mail icon", () => {
    const { container } = render(<Contact />);

    const mailIcon = container.querySelector('[aria-label*="mail"]');
    expect(mailIcon || container.querySelector("span[role='img']")).toBeTruthy();
  });
});
