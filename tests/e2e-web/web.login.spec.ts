import { test, expect } from '../../fixtures/web-fixtures';
import * as dotenv from "dotenv"
dotenv.config();

test.describe("Web E2E - login tests", () => {

    test('user should log in to Lokalise with email and password', async ({ loginPage, projectsPage }) => {
        // given email and password
        const email = process.env.EMAIL;
        const password = process.env.PASSWORD;

        // when user logs in
        await test.step("open login page", async () => {
            await loginPage.open();
            await loginPage.acceptCookiesBanner();
        })
        await test.step(`login with email and password`, async () => {
            await loginPage.login(email, password);
        })

        // then user sees translation languages
        await projectsPage.verifyProjectsLanguages(8)
    });
});
