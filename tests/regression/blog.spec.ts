import { test, expect } from '@playwright/test';
import { BlogPage } from '../pageObjects/blog.page';

test.describe('Blog Page', () => {
    let blogPage: BlogPage

    test('verify recent post count and length of each list item', async ({ page }) => {
        blogPage = new BlogPage(page)

        await page.goto('/blog/');

        // get the recent post list elements

        // assert the total length = 5
        expect(await blogPage.recentPostList.count()).toEqual(5);
    })
})
