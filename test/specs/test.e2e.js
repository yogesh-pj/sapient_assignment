const { expect } = require("@wdio/globals");
const assert = require("assert");
const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const CartPage = require("../pageobjects/cart.page");
const CheckoutPage = require("../pageobjects/checkout.page");
const ConfirmationPage = require("../pageobjects/confirmation.page");
const testData = require("../../fixture/checkout.data");

describe("End-to-End Checkout Process", () => {
  before(async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
  });
  
  it("should successfully checkout and purchase a product", async () => {
    await InventoryPage.addItemToCart(testData.product.itemName);
    const cartCount = await CartPage.cartIcon.getText();
    assert.strictEqual(
      cartCount,
      "1",
      "Cart count should be 1 after adding an item"
    );
    await CartPage.cartIcon.click();
    await CheckoutPage.verifyCheckoutSummary({ ...testData.product });

    await CartPage.clickCheckout();
    await CheckoutPage.fillShippingInformation({ ...testData.shippingInfo });

    await CheckoutPage.clickContinueToPayment();
    await CheckoutPage.verifyCheckoutOverview({
      ...testData.product,
      ...testData.paymentInfo,
    });

    await CheckoutPage.clickFinish();
    const confirmationMessage = await ConfirmationPage.getConfirmationMessage();

    expect(confirmationMessage.header).toContain(
      testData.confirmationMessage.header
    );
    expect(confirmationMessage.text).toContain(
      testData.confirmationMessage.text
    );
  });
});
