import { test, expect } from '@playwright/test';

test.describe('Waits', () => {

    test('Hardcoded Wait - BAD', async ({ page }) => {

        //open url
        await page.goto('https://practice.sdetunicorns.com/cart/');

        // Hardcoded sleep - WRONG WAY
        await page.waitForTimeout(10000);
    })

    test('Wait for State - GOOD', async ({ page }) => {

        //open url
        await page.goto('https://practice.sdetunicorns.com/cart/');

        // Wait for state - GOOD
        await page.getByRole('heading', { name: 'Cart' }).waitFor({ state: 'visible', timeout: 10000 })
    })

    test('Assertion Wait', async ({ page }) => {

        // Open URL
        await page.goto('https://practice.sdetunicorns.com/');

        // Verify Title - override global assertion timeout
        await expect(page).toHaveTitle('Mince', { timeout: 10000 });
    })



})
