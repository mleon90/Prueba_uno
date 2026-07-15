import { test, expect } from '@playwright/test';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const tiempo = 2000;

test.describe('Radio Buttons DemoQA', () => {

  test('test', async ({ page }) => {
    await page.goto('https://demoqa.com/radio-button');
    await page.getByLabel('Yes').click();
    await sleep(tiempo);
    await expect(page.getByText('You have selected Yes')).toBeVisible();
  });

  test('test2', async ({ page }) => {
    await page.goto('https://demoqa.com/radio-button');
    
    await page.getByLabel('Yesss').click();           // ← Corregido
    await sleep(tiempo);
    
    await page.getByText('Impressive').click();
    await sleep(tiempo);
    
    await expect(page.getByText('You have selected Impressive')).toBeVisible();
  });

});