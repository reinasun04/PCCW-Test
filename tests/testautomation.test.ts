import { test, expect } from '@playwright/test';

test.describe('Valid credentials', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.waitForSelector('#username'); // Wait up to 5 seconds for the text to be visible
    await page.locator('#username').fill('student');
    //await page.fill('#username', "student");
    //await page.fill('#password', "Password123");
    await page.locator('#password').fill('Password123');
    await page.click('button[id="submit"]');
  });

  test('1_loginViaLocal_validLogin', async ({ page }) => {
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    const textElement = page.locator('text=Logged In Successfully');
    await expect(textElement).toBeVisible({ timeout: 5000 }); // Wait up to 5 seconds for the text to be visible
    });
});