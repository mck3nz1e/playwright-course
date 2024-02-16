import { test, expect, Page } from '@playwright/test';

test.describe.serial('Account Page - Serial', () => {
    let page: Page

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();

        await page.goto('/my-account');
        await page.locator('#username').fill('pureMince1')
        await page.locator('#password').fill('PracticePass1!')
        await page.getByRole('button', { name: 'Log in' }).click()
        await expect(page.locator('li').filter({ hasText: 'Log out' }).getByRole('link')).toBeVisible()
    })

    test('Access Orders', async () => {

        await page.getByRole('link', { name: 'Orders', exact: true }).click();
        await expect(page).toHaveURL(/.*orders/)
    })

    test('Access Downloads', async () => {

        await page.getByRole('link', { name: 'Downloads' }).click();
        await expect(page).toHaveURL(/.*downloads/)
    })
})
