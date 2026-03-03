import { test as base } from '@playwright/test';

export const test = base.extend({
  loggedInPage: [
    async ({ page }, use) => {
      // Fixed credentials
      const USERNAME = 'rahulshettyacademy';
      const PASSWORD = 'Learning@830$3mK2';

      await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

      // Username & password
      await page.fill('#username', USERNAME);
      await page.fill('#password', PASSWORD);

      // Select "Student" from dropdown
      await page.selectOption('select.form-control', 'stud');

      // Accept terms
      await page.check('#terms');

      // Click Sign In
      await page.click('#signInBtn');

      // Wait for navigation after login
      await page.waitForURL('**/shop');

      await use(page);
    },
    { auto: true },
  ],
});

export const expect = test.expect;
