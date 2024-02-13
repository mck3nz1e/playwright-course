import { Locator, Page } from "@playwright/test"

export class ContactPage {
    private page: Page
    nameInputField: Locator
    emailInputField: Locator
    phoneInputField: Locator
    textAreaInputField: Locator
    submitButton: Locator
    successAlert: Locator

    constructor(page: Page) {
        this.page = page
        this.nameInputField = page.locator('.contact-name input');
        this.emailInputField = page.locator('.contact-email input');
        this.phoneInputField = page.locator('.contact-phone input');
        this.textAreaInputField = page.locator('.contact-message textarea');
        this.submitButton = page.locator('button[type=submit]');
        this.successAlert = page.locator('div[role="alert"]');
    }
}