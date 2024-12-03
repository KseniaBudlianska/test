import { test as base, expect, Page } from '@playwright/test';
import {LokaliseApi} from "../service/lokalise.api";

// Define custom fixture types
type BeFixtures = {
    lokaliseApi: LokaliseApi;
};

// Extend Playwright's base test with our custom fixtures
export const test = base.extend<BeFixtures>({
    lokaliseApi: async ({ request }, use) => {
        await use(new LokaliseApi(request));
    },
});

export { expect };