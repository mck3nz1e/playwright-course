import { Locator, Page } from "@playwright/test"

export class UploadComponent {
    private page: Page
    uploadInput: string;
    submitButton: Locator;
    successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uploadInput = 'input#upfile_1';
        this.submitButton = page.getByRole('button', { name: 'Upload File' });
        this.successMessage = page.locator('#wfu_messageblock_header_1_label_1');
    }

    async uploadFile(filePath: string) {
        await this.page.setInputFiles(this.uploadInput, filePath);
        await this.submitButton.click();
    }
}