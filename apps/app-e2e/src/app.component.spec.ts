import { expect, test } from '@playwright/test';

test('should navigate', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('router-outlet')).toHaveCount(1);
});
