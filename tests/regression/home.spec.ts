/* eslint-disable @typescript-eslint/no-unused-vars */
import { test, expect } from '@playwright/test';
import HomePage from '../pageObjects/home.page';

test.describe('Home', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    })

    test('Open Home Page And Verify Title', async ({ page }) => {
        // Verify Title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })

    test.skip('Open About Page And Verify Title', async ({ page }) => {

        // Open URL
        await page.goto('/about');

        // Verify Title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })

    test('Click Get Started Button Using CSS Selector', async ({ page }) => {
        await expect(page).not.toHaveURL(/.*#get-started/);

        // Click button
        await homePage.getStartedButton.click();

        // Verify URL
        await expect(page).toHaveURL(/.*#get-started/);
    })

    test('Verify Heading Text Is Visible Using Text Selector', async ({ page }) => {

        // Find text locator
        const headingText = await homePage.headingText;

        // Verify text is visible
        await expect(headingText).toBeVisible();
    })

    test('Verify Home Link Is Enabled Using Text & CSS Selector', async ({ page }) => {

        // Find text locator
        const homeText = homePage.homeText;
        const homeText2 = page.locator('#zak-primary-menu:has-text("Home")');

        // Verify text is visible
        await expect(homeText).toBeEnabled();
        await expect(homeText2).toBeEnabled();
    })

    test('Verify The Text For All Nav Links', async ({ page }) => {

        const expectedLinks = [
            'Home',
            'About',
            'Shop',
            'Blog',
            'Contact',
            'My account',
        ];

        // Find the nav links
        const navLinks = homePage.navLinks;

        for (const element of await navLinks.elementHandles()) {
            console.log(await element.textContent());
        }
        // Verify nav links
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
    })
})