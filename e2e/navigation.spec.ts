import { expect, test } from "@playwright/test";

test.describe("Navigation and Scrolling", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should navigate to hero when clicking logo", async ({ page }) => {
    await page.goto("/#projects");
    await page.waitForTimeout(800);

    await page.getByRole("link", { name: "AB", exact: true }).click();
    await page.waitForTimeout(800);

    // Verify we're at/near the top by checking hero section is in viewport
    const heroSection = page.locator("#about");
    await expect(heroSection).toBeInViewport();
  });

  test("should navigate between sections", async ({ page, isMobile }) => {
    if (isMobile) {
      const mobileMenuButton = page.getByRole("button", { name: "Toggle mobile menu" });
      await expect(mobileMenuButton).toBeVisible();
      await mobileMenuButton.click();
    }

    const skillsLink = page.getByRole("link", { name: "Skills" });
    await skillsLink.click();
    await page.waitForTimeout(500);

    const skillsSection = page.getByRole("heading", { name: "Skills" });

    // Verify section scrolled into viewport
    await expect(skillsSection).toBeInViewport();
  });

  test("should maintain navbar visibility when scrolling", async ({ page }) => {
    const navbar = page.getByRole("navigation");
    await expect(navbar).toBeVisible();

    await page.evaluate(() => {
      window.scrollTo(0, 1000);
    });

    await expect(navbar).toBeVisible();
  });

  test("should show mobile menu on small screens", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const mobileMenuButton = page.getByRole("button", { name: "Toggle mobile menu" });
    await expect(mobileMenuButton).toBeVisible();

    await mobileMenuButton.click();

    await expect(page.getByRole("link", { name: "About Me" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Experience" })).toBeVisible();
  });
});
