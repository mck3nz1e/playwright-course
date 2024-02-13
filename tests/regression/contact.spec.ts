import { test, expect } from '@playwright/test';
import { ContactPage } from '../pageObjects/contact.page';
import { faker } from '@faker-js/faker'

test.describe('Contact Page', () => {
    let contactPage: ContactPage

    test('Should show success message after submitting form', async ({ page }) => {
        contactPage = new ContactPage(page);

        await page.goto('/contact/');

        // Fill in inputs fields
        await contactPage.nameInputField.fill(faker.person.fullName());
        await contactPage.emailInputField.fill(faker.internet.email());
        await contactPage.phoneInputField.fill(faker.phone.number());
        await contactPage.textAreaInputField.fill(faker.lorem.paragraph());

        // Soft assertion
        await expect.soft(contactPage.textAreaInputField).toHaveText('Mince');
        // expect(test.info().errors.length).toBeLessThan(1)

        //Click Submit
        await contactPage.submitButton.click();

        //Verify Success Message
        const successAlert = contactPage.successAlert
        await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly')

    })
})
