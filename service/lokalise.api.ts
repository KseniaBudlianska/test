import { APIRequestContext, APIResponse } from "playwright";
import {expect} from "../fixtures/be-fixtures";

export class LokaliseApi {

    private readonly request: APIRequestContext;
    private readonly baseUrl: string = 'https://api.lokalise.com';
    private readonly keysEndpoint: string = '/api2/projects/project_id/keys';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async getKeys(token: string, projectId: string) {
        const url = this.baseUrl + this.keysEndpoint.replace('project_id', projectId);
        const headers = {
            'X-Api-Token': token,
            'accept': `application/json`
        };
        const response = await this.request.get(url, { headers: headers });

        console.log(`Sending GET request to: ${url}`);
        console.log(`Response Status: ${response.status()}`);
        console.log(`Response Body: ${JSON.stringify(await response.json(), null, 2)}`);

        return response;
    }
}