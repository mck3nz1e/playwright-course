import { test, expect } from '@playwright/test';

test.describe('Debugging Tests', () => {

    test('Click Get Started Button Using CSS Selector', async ({ page }) => {

        // Open URL
        await page.goto('/');
        await expect(page).not.toHaveURL(/.*#get-started/);

        // Click button
        await page.locator('#get-started').click();

        // Breakpoint to spin up inspector
        // await page.pause();

        // Verify URL
        await expect(page).toHaveURL(/.*#get-started-pureMince/);
    })

})

// Debug
// DEBUG=pw:api npx playwright test debug.spec.ts -g "Click\s+Get\s+Started\s+Button\s+Using\s+CSS\s+Selector$"

// Inspector
// PWDEBUG=1 npx playwright test debug.spec.ts -g "Click\s+Get\s+Started\s+Button\s+Using\s+CSS\s+Selector$"
