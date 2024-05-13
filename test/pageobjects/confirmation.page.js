const { $ } = require('@wdio/globals');
const Page = require('./page');

/**
 * ConfirmationPage class represents the page object for the confirmation page.
 * It contains methods and elements related to the confirmation message.
 */
class ConfirmationPage extends Page {
    /**
     * Elements representing the confirmation message.
     * It includes header and text elements.
     */
    get confirmationMessage() {
        return {
            header: $('[data-test="complete-header"]'),
            text: $('[data-test="complete-text"]')
        };
    }

    /**
     * Method to retrieve the confirmation message.
     * @returns {Promise<{header: string, text: string}>} The header and text of the confirmation message.
     */
    async getConfirmationMessage() {
        const headerText = await this.confirmationMessage.header.getText();
        const textMessage = await this.confirmationMessage.text.getText();
        console.log("Confirmation Header:", headerText);
        console.log("Confirmation Text:", textMessage);
        return { header: headerText, text: textMessage };
    }
}

module.exports = new ConfirmationPage();
