import { Page } from "@playwright/test"
import { UploadComponent } from "./components/upload.com"

export class CartPage {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    uploadComponent() {
        return new UploadComponent(this.page);
    }
}