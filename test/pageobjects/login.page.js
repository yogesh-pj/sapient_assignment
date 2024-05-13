const { $ } = require('@wdio/globals');
const Page = require('./page');

/**
 * LoginPage class represents the page object for the login page.
 * It contains methods and elements related to the login functionality.
 */
class LoginPage extends Page {
    /**
     * Element representing the username input field.
     */
    get inputUsername() {
        return $('[data-test="username"]');
    }

    /**
     * Element representing the password input field.
     */
    get inputPassword() {
        return $('[data-test="password"]');
    }

    /**
     * Element representing the login button.
     */
    get btnLogin() {
        return $('[data-test="login-button"]');
    }

    /**
     * Method to encapsulate automation code to interact with the page,
     * such as logging in using username and password.
     * @param {string} username - The username to login with.
     * @param {string} password - The password to login with.
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * Overwrite specific options to adapt it to page object.
     * Opens the login page.
     */
    open() {
        return super.open('');
    }
}

module.exports = new LoginPage();