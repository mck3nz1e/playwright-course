import { Locator, Page } from "@playwright/test"

export class BlogPage {
    private page: Page
    recentPostList: Locator

    constructor(page: Page) {
        this.page = page
        this.recentPostList = page.locator('#recent-posts-3 ul li')
    }
}