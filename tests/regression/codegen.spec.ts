import { test, expect } from '@playwright/test';

test.describe('Codegen Tests', () => {

    test('Fill in somee form data', async ({ page }) => {

        // Open URL
        await page.goto('/');
        await expect(page).not.toHaveURL(/.*#get-started/);

        await page.locator('#menu-item-493').getByRole('link', { name: 'Contact' }).click();
        await page.getByLabel('Name *').click();
        await page.getByLabel('Name *').fill('Test Name');
        await page.getByLabel('Email *').click();
        await page.getByLabel('Email *').fill('test@email.com');
        await page.getByLabel('Email *').press('Tab');

        // Breakpoint to spin up inspector
        // await page.pause();

    })

})

