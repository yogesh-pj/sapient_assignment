const { $ } = require("@wdio/globals");
const Page = require("./page");

/**
 * CheckoutPage class represents the page object for the checkout page.
 * It contains methods and elements related to the checkout process.
 */
class CheckoutPage extends Page {
  /**
   * Elements representing input fields for shipping information.
   */
  get firstName() {
    return $('[data-test="firstName"]');
  }

  get lastName() {
    return $('[data-test="lastName"]');
  }

  get inputZip() {
    return $('[data-test="postalCode"]');
  }

  /**
   * Button to continue to the payment section.
   */
  get btnContinueToPayment() {
    return $('[data-test="continue"]');
  }

  /**
   * Elements representing input fields for payment information.
   */
  get inputCardNumber() {
    return $('[data-test="card-number-input"]');
  }

  get inputCardName() {
    return $('[data-test="card-name-input"]');
  }

  get inputCardExpiry() {
    return $('[data-test="card-expiry-input"]');
  }

  get inputCardCVV() {
    return $('[data-test="card-cvv-input"]');
  }

  /**
   * Button to finish the checkout process.
   */
  get btnFinish() {
    return $('[data-test="finish"]');
  }

  /**
   * List of cart items.
   */
  get cartItemList() {
    return $$(".cart_item");
  }

  /**
   * Element representing the payment information.
   */
  get paymentInfo() {
    return $('[data-test="payment-info-value"]');
  }

  /**
   * Element representing the shipping information.
   */
  get shippingInfo() {
    return $('[data-test="shipping-info-value"]');
  }

  /**
   * Element representing the total price.
   */
  get totalPrice() {
    return $('[data-test="total-label"]');
  }

  /**
   * Method to fill shipping information.
   * @param {string} name - The name for shipping.
   * @param {string} zip - The postal code for shipping.
   */
  async fillShippingInformation({firstName, lastName, zipCode}) {
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.inputZip.setValue(zipCode);
  }

  /**
   * Method to click on the button to continue to payment.
   */
  async clickContinueToPayment() {
    await this.btnContinueToPayment.click();
  }

  /**
   * Method to fill payment information.
   * @param {string} cardNumber - The card number.
   * @param {string} cardName - The name on the card.
   * @param {string} cardExpiry - The expiry date of the card.
   * @param {string} cardCVV - The CVV number of the card.
   */
  async fillPaymentInformation(cardNumber, cardName, cardExpiry, cardCVV) {
    await this.inputCardNumber.setValue(cardNumber);
    await this.inputCardName.setValue(cardName);
    await this.inputCardExpiry.setValue(cardExpiry);
    await this.inputCardCVV.setValue(cardCVV);
  }

  /**
   * Method to click on the button to finish the checkout process.
   */
  async clickFinish() {
    await this.btnFinish.click();
  }

  /**
   * Method to verify the checkout summary.
   * @param {string} itemName - The name of the item.
   * @param {string} itemDescription - The description of the item.
   * @param {string} itemPrice - The price of the item.
   */
  async verifyCheckoutSummary({itemName, itemDescription, itemPrice}) {
    // Verify item details
    const cartItems = await this.cartItemList;
    const item = cartItems.find(async (cartItem) => {
      const name = await cartItem
        .$('[data-test="inventory-item-name"]')
        .getText();
      const description = await cartItem
        .$('[data-test="inventory-item-desc"]')
        .getText();
      const price = await cartItem
        .$('[data-test="inventory-item-price"]')
        .getText();
      console.log("Name:", name);
      console.log("Description:", description);
      console.log("Price:", price);

      return (
        name === itemName &&
        description === itemDescription &&
        price === itemPrice
      );
    });
  }

  /**
   * Method to verify the checkout overview.
   * @param {string} itemName - The name of the item.
   * @param {string} itemDescription - The description of the item.
   * @param {string} itemPrice - The price of the item.
   * @param {string} paymentInfo - The payment information.
   * @param {string} shippingInfo - The shipping information.
   * @param {string} totalPrice - The total price.
   */
  async verifyCheckoutOverview({
    itemName,
    itemDescription,
    itemPrice,
    paymentInfo,
    shippingInfo,
    totalPrice
  }) {
    const cartItems = await this.cartItemList;
    const item = cartItems.find(async (cartItem) => {
      const name = await cartItem
        .$('[data-test="inventory-item-name"]')
        .getText();
      const description = await cartItem
        .$('[data-test="inventory-item-desc"]')
        .getText();
      const price = await cartItem
        .$('[data-test="inventory-item-price"]')
        .getText();
      return (
        name === itemName &&
        description === itemDescription &&
        price === itemPrice
      );
    });
    expect(item).toBeDefined();
    const actualPaymentInfo = await this.paymentInfo.getText();
    expect(actualPaymentInfo).toEqual(paymentInfo);
    const actualShippingInfo = await this.shippingInfo.getText();
    expect(actualShippingInfo).toEqual(shippingInfo);
    const actualTotalPrice = await this.totalPrice.getText();
    expect(actualTotalPrice).toContain(totalPrice);
  }
}

module.exports = new CheckoutPage();