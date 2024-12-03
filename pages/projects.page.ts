import {BasePage} from "./base.page";
import {expect, Page} from "@playwright/test";
import {locators} from "./locators/projects.locators";

export class ProjectsPage extends BasePage {
    constructor(readonly page: Page) {
        super(page);
    }

    async open() {
        super.open('/projects');
    }

    async verifyProjectsLanguages(expectedCountOfLanguages: number) {
        await expect(this.page.locator(locators.languages)).toHaveCount(expectedCountOfLanguages);
    }
}