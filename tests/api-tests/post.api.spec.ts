import { test, expect, APIRequestContext, APIResponse } from '@playwright/test';
import { ContactPage } from '../pageObjects/contact.page';

test.describe('Contact Page - API', () => {
    let contactPage: ContactPage;
    let fakerAPI: APIRequestContext;
    let user1: APIResponse;

    test.beforeAll(async ({ playwright }) => {
        fakerAPI = await playwright.request.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com/'
        });

        const response = await fakerAPI.get('users');
        const responseBody = await response.json();
        user1 = responseBody[0];

        const postResponse = await fakerAPI
            .post('/users/1/todos', {
                data: {
                    'title': 'Learn Playwright',
                    'completed': 'false'
                }
            });
        const postResponseBody = await postResponse.json();
        console.log(postResponseBody)
    })


    test('Should show success message after submitting form', async ({ page }) => {
        contactPage = new ContactPage(page);

        await page.goto('/contact/');

        // Fill in inputs fields
        await contactPage.nameInputField.fill(user1['name']);
        await contactPage.emailInputField.fill(user1['email']);
        await contactPage.phoneInputField.fill(user1['phone']);
        await contactPage.textAreaInputField.fill(user1['website']);

        //Click Submit
        await contactPage.submitButton.click();

        //Verify Success Message
        const successAlert = contactPage.successAlert
        await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    })
})
