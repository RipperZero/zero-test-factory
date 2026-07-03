import { expect, test, type Locator } from "@playwright/test";

test.use({
  viewport: {
    height: 1400,
    width: 1440,
  },
});

const readFirstNumber = async (locator: Locator) => {
  const text = await locator.innerText();
  const match = text.match(/-?\d+(?:\.\d+)?/);

  expect(match).not.toBeNull();

  return Number(match?.[0]);
};

const statLocator = (page: Parameters<typeof test>[0]["page"], label: string) => {
  return page.locator(".ant-statistic").filter({
    has: page.getByText(new RegExp(`^${label}$`)),
  });
};

test.describe("PretextCosmicPage", () => {
  test("matches the visual baseline in static mode", async ({ page }) => {
    await page.goto("/pretext-cosmic?e2e-static=1", {
      waitUntil: "domcontentloaded",
    });

    await expect(
      page.getByRole("heading", { name: "Pretext Cosmic Drift" }),
    ).toBeVisible();

    await expect(page.getByTestId("pretext-cosmic-page")).toHaveScreenshot(
      "pretext-cosmic-page.png",
      {
        animations: "disabled",
        scale: "css",
      },
    );
  });

  test("renders the main showcase areas with computed stats", async ({ page }) => {
    await page.goto("/pretext-cosmic", { waitUntil: "domcontentloaded" });

    await expect(
      page.getByRole("heading", { name: "Pretext Cosmic Drift" }),
    ).toBeVisible();
    await expect(page.getByText("Control Deck")).toBeVisible();
    await expect(page.getByRole("slider")).toBeVisible();
    await expect(page.getByRole("switch")).toBeVisible();
    await expect(page.getByText("Move your mouse through the nebula")).toBeVisible();

    expect(await readFirstNumber(statLocator(page, "Fragments"))).toBeGreaterThan(0);
    expect(await readFirstNumber(statLocator(page, "Rows"))).toBeGreaterThan(0);
    expect(await readFirstNumber(statLocator(page, "Line width"))).toBeGreaterThan(0);
    expect(await readFirstNumber(statLocator(page, "Canvas"))).toBeGreaterThan(0);
  });

  test("updates controls and keeps the stage interactive", async ({ page }) => {
    await page.goto("/pretext-cosmic", { waitUntil: "domcontentloaded" });

    const gravityValue = page.locator("text=/^\\d+px$/").first();
    const slider = page.getByRole("slider");
    const dualCoreSwitch = page.getByRole("switch");

    const initialRadius = await gravityValue.innerText();
    const initialChecked = await dualCoreSwitch.getAttribute("aria-checked");

    await slider.focus();
    await slider.press("ArrowRight");
    await slider.press("ArrowRight");

    await expect(gravityValue).not.toHaveText(initialRadius);

    await dualCoreSwitch.click();
    await expect(dualCoreSwitch).toHaveAttribute(
      "aria-checked",
      initialChecked === "true" ? "false" : "true",
    );

    await expect(page.getByText("Powered by Pretext line routing")).toBeVisible();
  });
});