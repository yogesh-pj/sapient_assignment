const { browser } = require('@wdio/globals')

/**
 * Page class represents the base page object for the application.
 * It contains common methods and properties that other page objects can inherit.
 */
module.exports = class Page {
    /**
     * Opens a sub page of the page.
     * @param {string} path - Path of the sub page (e.g., /path/to/page.html).
     */
    open(path) {
        return browser.url(`https://www.saucedemo.com/`)
    }
}
