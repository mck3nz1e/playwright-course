import { FullConfig, chromium } from "@playwright/test";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function globalSetup(config: FullConfig) {

    const browser = await chromium.launch();
    const page = await browser.newPage();

    // not logged in - store state
    await page.goto('https://practice.sdetunicorns.com/my-account');
    await page.context().storageState({ path: './tests/utils/notLoggedInState.json' });

    // login
    await page.locator('#username').fill('pureMince1');
    await page.locator('#password').fill('PracticePass1!');
    await page.getByRole('button', { name: 'Log in' }).click();

    // save signed in state
    await page.context().storageState({ path: './tests/utils/loggedInState.json' });
    await browser.close();
}