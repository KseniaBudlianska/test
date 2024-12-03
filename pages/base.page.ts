import {Page} from "@playwright/test";

export abstract class BasePage {
    constructor(readonly page: Page) {}

    async open(path: string) {
        await this.page.goto(path);
        await this.page.waitForLoadState("domcontentloaded");
    }

    async acceptCookiesBanner() {
        await this.page.locator('#onetrust-accept-btn-handler').click();
    }
}