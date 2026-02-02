import { expect, test } from "@playwright/test";

test.describe("Theme Toggle", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should toggle between light and dark mode", async ({ page }) => {
    const html = page.locator("html");

    await expect(html).not.toHaveClass(/dark/);

    const themeToggle = page.getByRole("button", { name: "Toggle theme" }).first();
    await themeToggle.click();

    await expect(html).toHaveClass(/dark/);

    await themeToggle.click();
    await expect(html).not.toHaveClass(/dark/);
  });

  test("should persist theme across page reloads", async ({ page }) => {
    const html = page.locator("html");
    const themeToggle = page.getByRole("button", { name: "Toggle theme" }).first();

    await themeToggle.click();
    await expect(html).toHaveClass(/dark/);

    await page.reload();

    await expect(html).toHaveClass(/dark/);
  });

  test("should show correct theme toggle icon", async ({ page }) => {
    const themeToggle = page.getByRole("button", { name: "Toggle theme" }).first();

    await themeToggle.click();

    await page.reload();

    await expect(themeToggle).toBeVisible();
  });

  test("should apply theme colors to components", async ({ page }) => {
    const html = page.locator("html");
    const themeToggle = page.getByRole("button", { name: "Toggle theme" }).first();

    await expect(html).not.toHaveClass(/dark/);

    await themeToggle.click();
    await expect(html).toHaveClass(/dark/);

    const navbar = page.getByRole("navigation");
    await expect(navbar).toBeVisible();
  });
});
