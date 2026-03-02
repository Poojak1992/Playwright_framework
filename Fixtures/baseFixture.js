const { test: base, expect } = require('@playwright/test');

const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto('https://naveenautomationlabs.com/opencart/');
    await use(page);
  }
});

module.exports = { test, expect };
