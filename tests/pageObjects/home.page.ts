import { Page, Locator } from '@playwright/test';

class HomePage {
    page: Page;
    getStartedButton: Locator;
    headingText: Locator;
    homeText: Locator;
    navLinks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedButton = page.locator('#get-started');
        this.headingText = page.locator('text=Think different');
        this.homeText = page.locator('#zak-primary-menu >> text=Home');
        this.navLinks = page.locator('#zak-primary-menu li[id*=menu]');
    }

    async navigate() {
        await this.page.goto('/')
    }

    getNavLinksText() {
        return this.navLinks.allTextContents();
    }
}
export default HomePage;