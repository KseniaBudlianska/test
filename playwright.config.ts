import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://app.lokalise.com',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'API E2E Tests',
      testDir: './tests/e2e-backend',
      use: {
        headless: true,
        browserName: 'webkit',
      },
    },
    {
      name: 'UI E2E Tests',
      testDir: './tests/e2e-web',
      use: {
        headless: false,
        browserName: 'chromium',
      },
    },

  ],
});
