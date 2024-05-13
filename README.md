# Sapient Assignment

This project is set up for WebdriverIO test automation using Mocha and Allure reporting.

## Installation

To install and set up the project, follow these steps:

1. Install WebdriverIO and necessary globals using npm:
   ```bash
   npm install @wdio/cli @wdio/local-runner @wdio/spec-reporter @wdio/mocha-framework @wdio/selenium-standalone-service @wdio/allure-reporter @wdio/allure-command-hook
   ```

2. Make sure you have Node.js and npm installed on your system. If not, you can install them from [Node.js official website](https://nodejs.org/en/).

3. Install project dependencies:
   ```bash
   npm install
   ```

## Running Tests

To run the tests, execute the following command:
```bash
npm run test
```

## Generating and Opening Allure Reports

1. To generate Allure reports after running the tests, execute:
   ```bash
   allure generate allure-results --clean -o allure-report
   ```

2. To open the Allure reports, execute:
   ```bash
   allure open allure-report
   ```

### Usage of Test Data

Test data for product details, shipping information, and confirmation message are imported from fixture files and utilized within the test scenario for validation purposes. Here's how the data is called and used:

1. **Product Data**: Product data is imported from `../../fixture/checkout.data` and used to add an item to the cart and verify the checkout summary.

2. **Shipping Information**: Shipping information is imported from `../../fixture/checkout.data` and used to fill the shipping information during the checkout process.

3. **Confirmation Message**: Confirmation message data is imported from `../../fixture/checkout.data` and used to verify the confirmation message after completing the checkout process.