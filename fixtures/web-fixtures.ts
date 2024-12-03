import { test as base, expect, Page } from '@playwright/test';
import {LoginPage} from "../pages/login.page";
import {ProjectsPage} from "../pages/projects.page";

// Define custom fixture types
type WebFixtures = {
    loginPage: LoginPage;
    projectsPage: ProjectsPage;
};

// Extend Playwright's base test with our custom fixtures
export const test = base.extend<WebFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    projectsPage: async ({ page }, use) => {
        const projectsPage = new ProjectsPage(page);
        await use(projectsPage);
    }
});

export { expect };