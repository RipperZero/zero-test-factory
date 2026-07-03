import { defineConfig, devices } from "@playwright/test";

const PORT = 1234;

export default defineConfig({
  testDir: "./tests/playwright",
  fullyParallel: true,
  reporter: [["list"], ["html", { open: "never" }]],
  timeout: 30_000,
  use: {
    baseURL: `https://127.0.0.1:${PORT}`,
    ignoreHTTPSErrors: true,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    video: "off",
  },
  webServer: {
    command: `pnpm dev --host 127.0.0.1 --port ${PORT}`,
    port: PORT,
    reuseExistingServer: true,
  },
  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
      },
    },
  ],
});