const { $ } = require('@wdio/globals');
const Page = require('./page');

/**
 * InventoryPage class represents the page object for the inventory page.
 * It contains methods and elements related to the inventory functionality.
 */
class InventoryPage extends Page {
    /**
     * Element representing the "Add to Cart" button.
     */
    get btnAddToCart() {
        return $('[data-test^="add-to-cart"]');
    }

    /**
     * Locator for the inventory item.
     * @param {string} itemName - The name of the item.
     * @returns {Element} - Web element representing the inventory item.
     */
    get inventoryItem() {
        return (itemName) => $(`[data-test="inventory-item-name"][text()="${itemName}"]`);
    }

    /**
     * Method to add an inventory item to the cart.
     * @param {string} itemName - The name of the item to add.
     */
    async addItemToCart(itemName) {
        const item = this.inventoryItem(itemName);
        await this.btnAddToCart.click();
    }
}

module.exports = new InventoryPage();
