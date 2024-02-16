import { test, expect, } from '@playwright/test';

test.describe('Account Page - Signed In Role', () => {

    test('Access Orders', async ({ page }) => {

        await page.goto('/my-account');
        await page.getByRole('link', { name: 'Orders', exact: true }).click();
        await expect(page).toHaveURL(/.*orders/)
    })

    test('Access Downloads', async ({ page }) => {

        await page.goto('/my-account');
        await page.getByRole('link', { name: 'Downloads' }).click();
        await expect(page).toHaveURL(/.*downloads/)
    })
})

test.describe('Account Page', () => {
    test.use({ storageState: './tests/utils/notLoggedInState.json' })

    test('Verify login and register is visible', async ({ page }) => {
        await page.goto('/my-account');
        await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();
    })
})
