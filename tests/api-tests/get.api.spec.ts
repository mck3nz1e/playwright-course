import { test, expect, APIResponse } from '@playwright/test';
import { ContactPage } from '../pageObjects/contact.page';
import APIController from '../utils/api.controller';

test.describe('Contact Page - API', () => {
    let contactPage: ContactPage;
    let user1: APIResponse;

    test.beforeAll(async () => {
        await APIController.init();
        user1 = await APIController.getUsers();
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
