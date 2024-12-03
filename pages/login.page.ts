import {BasePage} from "./base.page";
import {Page} from "@playwright/test";
import {locators} from "./locators/login.locators";

export class LoginPage extends BasePage {
    constructor(readonly page: Page) {
        super(page);
    }

    async open() {
        super.open('/login');
    }

    async login(email: string, password: string) {
        await this.page.locator(locators.emailField).fill(email);
        await this.page.locator(locators.passwordField).fill(password);
        await this.page.locator(locators.signInButton).click();
    }
}