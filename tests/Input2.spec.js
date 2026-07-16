import { test, expect } from '@playwright/test';
const sleep = (ms) => {
    return new Promise ((resolve) => setTimeout(resolve, ms))
    //esto es un cambio en el codigo 
};
test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('mariana');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('mariana.leon');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Alt+ControlOrMeta+@');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('cr 98#6');
  await page.getByRole('textbox', { name: 'Current Address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('cr 98#6A');
  await page.getByRole('textbox', { name: 'Current Address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('cr 98#6A 999');
  await page.getByRole('textbox', { name: 'Current Address' }).press('Tab');
  await page.locator('#permanentAddress').fill('direcci');
  await page.locator('#permanentAddress').fill('dirección 2 cr45');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Alt+ControlOrMeta+@');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('mariana.leon');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Alt+ControlOrMeta+@');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Alt+ControlOrMeta+@');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('mariana.leon@gmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('mariana leon');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('mariana.leon@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('direccion1');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('direccion2');
  //await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).press("Enter");
  await sleep(4000)

});

test.only('test2', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('mariana');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('marianaa.leon');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Alt+ControlOrMeta+@');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('cr 98#6');
  await page.getByRole('textbox', { name: 'Current Address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('cr 98#6A');
  await page.getByRole('textbox', { name: 'Current Address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('cr 98#6A 999');
  await page.getByRole('textbox', { name: 'Current Address' }).press('Tab');
  await page.locator('#permanentAddress').fill('direcci');
  await page.locator('#permanentAddress').fill('dirección 2 cr45');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Alt+ControlOrMeta+@');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('mariana.leon');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Alt+ControlOrMeta+@');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Alt+ControlOrMeta+@');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('mariana.leon@gmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('mariana leon');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('mariana.leon@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('direccion1');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('direccion2');
  //await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).press("Enter");
  await sleep(4000)

});
