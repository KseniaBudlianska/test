import { test, expect } from '../../fixtures/be-fixtures';
import * as dotenv from "dotenv"
dotenv.config();

test.describe('API E2E - login tests', () => {
    test('should return a token on successful login', async ({ lokaliseApi }) => {
        // given token and project_id
        const token = process.env.TOKEN;
        const projectId = process.env.PROJECT_ID;

        // get keys
        const response = await lokaliseApi.getKeys(token, projectId)

        // assert
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('keys');
        expect(responseBody.keys[0].platforms).toEqual(['ios']);
    });
});
