const { test, expect } = require('@playwright/test');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const tiemp = 1000;

exports.FJ = class FJ {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://demoqa.com/automation-practice-form');
  }

  async openURL(url, tiempo = tiemp) {
    await this.page.goto(url);
    await sleep(tiempo);
  }

  async tiempo(t) {
    await sleep(t);
  }

  async scroll(x, y, tiempo = tiemp) {
    await this.page.mouse.wheel(x, y);
    await sleep(tiempo);
  }

  async texto(selector, val, tiempo = 1000) {
    await this.page.fill(selector, String(val));
    if (tiempo) await this.page.waitForTimeout(tiempo);
  }

  async click(selector, tiempo = tiemp) {
    await this.page.locator(selector).click();
    await sleep(tiempo);
  }

  async validar_texto(selector, val, tiempo = tiemp) {
    const locator = this.page.locator(selector);
    await expect(locator).toContainText(val);
    await sleep(tiempo);
  }

  async validar_URL(url, tiempo = tiemp) {
    await expect(this.page).toHaveURL(url);
    await sleep(tiempo);
  }

  async validar_url_lig(url,tiempo=tiemp){
    await expect.soft(this.page).toHaveURL(url);
    await sleep(this.tiempo)

  }
  async validar_titulo(titulo, tiempo = tiemp) {
    await expect(this.page).toHaveTitle(titulo);
    await sleep(tiempo);
  }

  async texto_val(selector, val, tiempo = tiemp) {
    const locator = this.page.locator(selector);
    await expect(locator).toBeVisible();
    await expect(locator).toBeEnabled();
    await expect(locator).toBeEmpty();
    await locator.fill(val);
    await sleep(tiempo);
  }

  async texto_try(selector, val, tiempo = tiemp) {
    try {
      const locator = this.page.locator(selector);
      await expect(locator).toBeVisible();
      await expect(locator).toBeEnabled();
      await expect(locator).toBeEmpty();
      await locator.fill(val);
      await sleep(tiempo);
    } catch (error) {
      console.log("Campo con algún error");
    }
  }

  async valor_campo(selector, tiempo = tiemp) {
    const value = await this.page.locator(selector).inputValue();
    await sleep(tiempo);
    return value;
  }

  async terminar(tiempo = tiemp) {
    await this.page.close();
    await sleep(tiempo);
  }

  async combo_value(selector, val, tiempo = 1000) {
    const cam = this.page.locator(selector);
    if (typeof val === 'number') {
      await cam.selectOption({ index: val });
    } else if (typeof val === 'string') {
      await cam.selectOption(val);
    } else {
      await cam.selectOption(val);
    }
    await this.page.waitForTimeout(tiempo);
  }

  async combo_label(selector, val, tiempo = tiemp) {
    await this.page.locator(selector).click();
    await this.page.locator(`//div[text()='${val}']`).click();
    await sleep(tiempo);
  }

  async combo_multiple(selector,arg=defaultValue,tiempo=tiemp){
    const cam = await this.page.locator(selector)
    console.log(arg)
    await cam.selectOption(arg);
    await sleep(tiempo)
  }


  async mouse_over(selector,tiempo=tiemp){
    const sel= await this.page.locator(selector)
    await sel.hover()
    await sleep(tiempo)
  }


  //Actions click especial 
  async click_dinamico(texto,tiempo=tiemp){
    const sel = await this.page.getByRole('button', {name: texto, exact: true})
    await  sel.click()
    await sleep(tiempo)
  }

 async dobleClick_dinamico(texto, tiempo = tiemp) {
  const sel = this.page.getByRole('button', { name: texto, exact: true });
  await sel.dblclick();   
  await sleep(tiempo);

  }

  async click_derecho_dinamico(texto,tiempo=tiemp){
    const sel = await this.page.getByRole('button', {name: texto, exact: true})
    await sel.click({ button: 'right'});
    await sleep(tiempo)
  }

// Doble click sobre un elemento
async dobleClick(selector, tiempo = tiemp) {
  const locator = this.page.locator(selector);
  await locator.dblclick();
  await sleep(tiempo);
}

// Click derecho sobre un elemento
async click_derecho(selector, tiempo = tiemp) {
  const locator = this.page.locator(selector);
  await locator.click({ button: 'right' });
  await sleep(tiempo);
}

// Mouse over (hover) sobre un elemento
async mouse_over(selector, tiempo = tiemp) {
  const locator = this.page.locator(selector);
  await locator.hover();
  await sleep(tiempo);
}

async drag_drop(ori, des, tiempo = tiemp) {
  const origin = this.page.locator(ori);
  const target = this.page.locator(des).first(); 
  await origin.dragTo(target);
  await sleep(tiempo);
}
async copiar_input(selector,tiempo=tiemp){
    const sel = await this.page.locator(selector)
    await sel.press("Control+A")
    await sel.press("Control+C")
    await sleep(tiempo);
}

async pegar_input(selector,tiempo=tiemp){
    const sel = await this.page.locator(selector)
    await sel.press("Control+V")
    await sleep(tiempo);
}
async copiar_texto(selector, pegar, tiempo = tiemp) {
  // Obtiene todos los textos del elemento
  const value = await this.page.locator(selector).allInnerTexts();
  console.log(value);

  // Espera un tiempo fijo (ejemplo: 8 segundos)
  await sleep(8000);

  // Localiza el campo destino y pega el primer valor obtenido
  const val2 = this.page.locator(pegar);
  await val2.fill(value[0]);

  // Espera el tiempo indicado
  await sleep(tiempo);
}

async Upload_file(selector,archivo,tiempo=tiemp){
  const sel  = await this.page.locator(selector)
  await  sel.setInputFiles(archivo);
  await sleep(tiempo)
}

async Mover_Upload_File(selector,tiempo=tiemp){
  const sel = await  this.page.locator(selector)
  await sel.setInputFiles([]);
  await sleep(tiempo)
}

async Tab(selector,tiempo=tiemp){
  const sel = await this.page.locator(selector)
  await sel.press("Tab")
  await sleep(tiempo)
}
};
