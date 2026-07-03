import { expect, test } from "@playwright/test";

test.describe("Playwright feature demos", () => {
  test("supports locators, page evaluation, mouse actions, and screenshots", async ({
    page,
  }) => {
    await page.goto("/pretext-cosmic", { waitUntil: "domcontentloaded" });

    await expect(
      page.getByRole("heading", { name: "Pretext Cosmic Drift" }),
    ).toBeVisible();
    await expect(page.getByText("Move your mouse through the nebula")).toBeVisible();
    await expect(page.getByText("Powered by Pretext line routing")).toBeVisible();

    const slider = page.getByRole("slider");
    await expect(slider).toBeVisible();

    const viewport = page.viewportSize();

    expect(viewport).not.toBeNull();

    if (viewport === null) {
      return;
    }

    await page.mouse.move(viewport.width * 0.5, viewport.height * 0.6);

    await expect(page.getByText("Powered by Pretext line routing")).toContainText(
      "Powered by Pretext line routing",
    );

    const headingCount = await page.evaluate(() => {
      return document.querySelectorAll("h1, h2, h3, h4, h5, h6").length;
    });

    expect(headingCount).toBeGreaterThan(0);

    await page.mouse.move(viewport.width * 0.25, viewport.height * 0.35);
    await page.mouse.move(viewport.width * 0.75, viewport.height * 0.55);

    const screenshot = await page.screenshot({ animations: "disabled" });

    expect(screenshot.byteLength).toBeGreaterThan(0);
  });
});