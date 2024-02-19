import { APIRequestContext, request } from "@playwright/test";

export default new class APIController {
    private fakerAPI: APIRequestContext;

    async init() {
        this.fakerAPI = await request.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com/'
        });
    }

    async getUsers() {
        const response = await this.fakerAPI.get('users');
        const responseBody = await response.json();
        return responseBody[0];
    }

    async createUserToDo() {
        const response = await this.fakerAPI
            .post('/users/1/todos', {
                data: {
                    'title': 'Learn Playwright',
                    'completed': 'false'
                }
            });
        return await response.json();
    }
}

