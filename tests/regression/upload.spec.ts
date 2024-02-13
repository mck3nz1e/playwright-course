/* eslint-disable @typescript-eslint/no-unused-vars */
import { test, expect } from '@playwright/test';
import { CartPage } from '../pageObjects/cart.page';
import path from 'path';

test.describe('Cart Page', () => {
    let cartPage: CartPage;
    const fileName = ['logotitle.png', '3mb-file.pdf']

    test.beforeEach(async ({ page }) => {
        cartPage = new CartPage(page);
        await page.goto('/cart/');
    })

    for (const name of fileName) {

        test(`should upload a test file - ${name}`, async ({ page }) => {

            // store test file path
            const filePath = path.join(__dirname, `../data/${name}`);

            // Upload file using upload component
            cartPage.uploadComponent().uploadFile(filePath);

            // assertion
            await expect(cartPage.uploadComponent().successMessage).toContainText('uploaded successfully')
        })
    }

    test.skip('verify file upload succesfully - DOM manipulation', async ({ page }) => {

        //open url
        await page.goto('/cart/');

        // store test file path
        const filePath = path.join(__dirname, '../data/logotitle.png');

        // DOM manipulation
        await page.evaluate(() => {
            const selector = document.querySelector('input#upfile_1');
            if (selector) {
                selector.className = ''
            }
        })

        // upload file
        await page.setInputFiles('input#upfile_1', filePath);

        // click submit
        await page.getByRole('button', { name: 'Upload File' }).click();

        // assertion
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully')
    })
})
