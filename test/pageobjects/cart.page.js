// This is a JavaScript file containing a CartPage class that extends a Page class. It defines elements and methods related to the cart page, such as getting the cart item name, clicking on the checkout button, and accessing the cart icon.
const { $ } = require('@wdio/globals');
const Page = require('./page');

/**
 * CartPage class represents the page object for the cart page
 * It extends the Page class
 */
class CartPage extends Page {
    /**
     * @returns {Element} - Element representing the cart item name
     * Getter for retrieving the cart item name element
     */
    get cartItemName() {
        return $('[data-test="inventory-item-name"]');
    }

    /**
     * @returns {Element} - Element representing the checkout button
     * Getter for retrieving the checkout button element
     */
    get btnCheckout() {
        return $('[data-test="checkout"]');
    }

    /**
     * @returns {string} - The text of the cart item name
     * Method to get the text of the cart item name
     */
    async getCartItemName() {
        const itemName = await this.cartItemName.getText();
        console.log(itemName);
        return itemName;
    }

    /**
     * Clicks on the checkout button
     * Logs a message indicating the action
     */
    async clickCheckout() {
        await this.btnCheckout.click();
        console.log("Clicked on Checkout button");
    }

    /**
     * @returns {Element} - Element representing the cart icon
     * Getter for retrieving the cart icon element
     */
    get cartIcon() {
        return $('[data-test="shopping-cart-badge"]');
    }
}

module.exports = new CartPage();
