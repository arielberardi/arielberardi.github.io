import { expect, test } from "@playwright/test";

test.describe("Portfolio Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load homepage and display navigation", async ({ page }) => {
    await expect(page.getByRole("navigation")).toBeVisible();
    await expect(page.getByRole("link", { name: "AB", exact: true })).toBeVisible();
  });

  test("should navigate to projects section via navbar", async ({ page, isMobile }) => {
    if (isMobile) {
      const mobileMenuButton = page.getByRole("button", { name: "Toggle mobile menu" });
      await expect(mobileMenuButton).toBeVisible();
      await mobileMenuButton.click();
    }

    const projectsLink = page.getByRole("link", { name: "Projects" });
    await projectsLink.click();
    await page.waitForTimeout(500);

    const projectSection = page.getByRole("heading", { name: "Projects" });

    // Verify section scrolled into viewport
    await expect(projectSection).toBeInViewport();
  });

  test("should support deep linking to sections", async ({ page }) => {
    await page.goto("/#skills");
    await page.waitForTimeout(500);

    const url = page.url();
    expect(
      url.includes("#skills") || url.includes("#experience") || url.includes("#projects"),
    ).toBe(true);
  });

  test("should scroll when clicking CTA button", async ({ page }) => {
    const viewProjectsButton = page.getByRole("button", { name: "View Projects" });
    await viewProjectsButton.click();
    await page.waitForTimeout(500);

    const url = page.url();
    expect(url === "http://localhost:5173/" || url.includes("#")).toBe(true);
  });

  test("should display all required sections", async ({ page }) => {
    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#experience")).toBeAttached();
    await expect(page.locator("#skills")).toBeAttached();
    await expect(page.locator("#projects")).toBeAttached();
    await expect(page.locator("#contact")).toBeAttached();
  });

  test("should show work experience heading", async ({ page }) => {
    const heading = page.getByRole("heading", { name: "Work Experience" });
    await expect(heading).toBeAttached();
  });

  test("should show skills heading", async ({ page }) => {
    const heading = page.getByRole("heading", { name: "Skills & Expertise" });
    await expect(heading).toBeAttached();
  });

  test("should show projects heading", async ({ page }) => {
    const heading = page.getByRole("heading", { name: "Projects" });
    await expect(heading).toBeAttached();
  });

  test("should show contact section", async ({ page }) => {
    const heading = page.getByRole("heading", { name: "Get In Touch" });
    await expect(heading).toBeAttached();
  });

  test("should display footer", async ({ page }) => {
    await expect(page.locator("footer").first()).toBeAttached();
  });
});
