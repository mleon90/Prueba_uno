// @ts-check
const { test, expect } = require('@playwright/test');
const { FJ } = require('./funciones_curso')

test('Demo POM', async ({ page }) => {
    
    const f = new FJ(page);
    
    await f.openURL("https://demoqa.com/automation-practice-form", 3000)
    await f.validar_titulo("Prueba de campos Checkbox | TestingQaRvn")
    await f.scroll(0, 500)

    // Campo que no se encuentra
    await f.texto_try("//*[@id='firstName']", "mariana")
    
    // Campo que no se encuentra
    await f.texto_val("//*[@id='lastName']", "Leon Niño")
    
    await f.texto_try("//*[@id='userEmail']", "mariana.leon1025@gmail.com")
    await f.click("//*[@id='gender-radio-1']")
    await f.texto("//*[@id='userNumber']",3229288271);
    await f.click("//*[@id='hobbies-checkbox-3']");
    await f.texto("//*[@id='currentAddress']","Cr 88#6A");
    await f.click("//*[@id='submit']")
    await f.validar_URL("https://demoqa.com/automation-practice-form")
    
    await f.tiempo(1000)
});