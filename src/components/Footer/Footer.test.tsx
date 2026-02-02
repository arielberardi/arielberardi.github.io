import { PERSONAL_INFO } from "@/constants";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders copyright text with current year", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`© ${currentYear} - ${PERSONAL_INFO.name}`)),
    ).toBeInTheDocument();
  });

  it("renders as a semantic footer element", () => {
    const { container } = render(<Footer />);

    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});
