// @ts-check
const { test, expect } = require('@playwright/test');
const { FJ } = require('./funciones_curso');

const archivo= "C:/Users/Usuario/Downloads/curso-playwright/tests/Documento.txt"
const tp = 1500;

test('test', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);

  await f.openURL("https://demoqa.com/automation-practice-form");

  await f.texto_val("#firstName", "rodrigo", tp);
  await f.texto_val("#lastName", "villanueva", tp);
  await f.scroll(0, 700);
  await f.texto_val("#userEmail", "rod@gmail.com", tp);

  await page.locator("#gender-radio-1").check();
  await f.texto_val("#userNumber", "3229288271", tp);
  await page.locator("#hobbies-checkbox-1").check();

  await f.texto("#currentAddress", "Cr 88#6A-99", tp);

  await f.combo_label('#state', 'Haryana', tp);
  await f.combo_label('#city', 'Karnal', tp);

  await f.click("#submit", tp);
});





test('Combobox Multiples', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);

  await f.openURL("https://demoqa.com/select-menu", tp);

  // Abre el combo react-select y selecciona varias opciones
  await f.click("//div[@class=' css-1hwfws3'][contains(.,'Select...')]", tp);
  await page.locator("#react-select-4-option-0").click(); // Green
  await f.tiempo(tp);
  await page.locator("#react-select-4-option-1").click(); // Blue
  await f.tiempo(tp);
  await page.locator("#react-select-4-option-2").click(); // Black
});

test('Combobox Multiples Dos', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);

  await f.openURL("https://demoqa.com/select-menu", tp);

  // Selecciona directamente una opción del <select> clásico
  await f.click("//option[@value='saab'][contains(.,'Saab')]", tp);

  // Usa tu método combo_multiples para seleccionar varias opciones
  await f.combo_value("#cars", [
  { value: "volvo" },
  { value: "audi" },
  { value: "saab" },
  { value: "opel" }
], tp);

});




test('Opciones Over', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);

  await f.openURL("https://playwright.dev/docs/codegen-intro");

  // Hace un mouse over sobre el enlace de Node.js
  await f.mouse_over("//a[@href='#'][contains(., 'Node.js')]", tp);

  // Espera 3 segundos
  await f.tiempo(3000);

  // Luego hace click en el enlace de Python
  await f.click("//a[@href='/python/docs/codegen-intro'][contains(., 'Python')]", tp);
});


test('Opciones Click', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);

  await f.openURL("https://demoqa.com/buttons");

  // Click simple
  await f.click_dinamico("Click Me", tp);

  // Click derecho
  await f.click_derecho_dinamico("Right Click Me", tp);

  // Doble click
  await f.dobleClick_dinamico("Double Click Me", tp);
});


test('Drag and Drop', async ({ page }) => {
page.setDefaultTimeout(8000);
const f = new FJ(page );
await f. openURL("https://demoqa.com/droppable")
await f.drag_drop('#draggable', '#simpleDropContainer #droppable', tp);

});

test('Copiar y Pegar Input', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);

  await f.openURL("https://demoqa.com/automation-practice-form");

  // Escribe en el primer input
  await f.texto("//*[@id='firstName']", "rodrigo", tp);

  // Copia el valor del primer input
  await f.copiar_input("//*[@id='firstName']", tp);

  // Pega el valor en el segundo input
  await f.pegar_input("//*[@id='lastName']");

  // Espera 2 segundos
  await f.tiempo(2000);
});


test('Copiar Texto', async ({ page }) => {
    page.setDefaultTimeout(8000);
    const f = new FJ(page);

    await f.openURL("https://demoqa.com/automation-practice-form");

    await f.copiar_texto("text=Practice Form", "#lastName", tp);

    await f.tiempo(2000);
});

test('Upload Files', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/upload-download?utm_source=copilot.com")
  await f.tiempo(tp)
  await f.Upload_file("//*[@id='uploadFile']",archivo,tp)
  await f.Mover_Upload_File("//*[@id='uploadFile']",tp)
  await f.Upload_file("//*[@id='uploadFile']",archivo,tp)

});
test('Calendario', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/automation-practice-form")

  const tp = 2000; // tiempo de espera

  await f.scroll(0, 1000);
  await f.tiempo(tp);
  await f.texto("#dateOfBirthInput", "08 Jul 2026", tp);
  await page.keyboard.press('Tab');
});