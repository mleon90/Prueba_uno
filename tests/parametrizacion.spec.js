// @ts-check
const { test, expect } = require('@playwright/test');
const { FJ } = require('./funciones_curso');   
const dotenv = require('dotenv');

dotenv.config();

const tp = 500;
const datos = ['Marcela', 'Villanueva', 'rod@gmail.com', '34545', 'Dirección uno','Spor'];

test('Parametros Uno', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);   // Instanciar la clase correcta

  await f.openURL('https://demoqa.com/automation-practice-form');
  await f.scroll(0, 500);

  await f.texto_val('#firstName', datos[0], tp);
  await f.texto_val('#lastName', datos[1], tp);
  await f.texto_val('#userEmail', datos[2], tp);
  await f.texto_val('#userNumber', datos[3], tp);
  await f.texto_val('#currentAddress', datos[4], tp);
});

test('Parametros Dos', async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);

  await f.openURL('https://demoqa.com/automation-practice-form');
  await f.scroll(0, 500);

  // Campos de texto
  await f.texto_val('#firstName', datos[0], tp);
  await f.texto_val('#lastName', datos[1], tp);
  await f.texto_val('#userEmail', datos[2], tp);
  await f.texto_val('#userNumber', datos[3], tp);
  await f.texto_val('#currentAddress', datos[4], tp);

  // Selección de hobby/lenguaje según datos[5]
  console.log(`${datos[5]}`);
  if (`${datos[5]}`.toUpperCase() === "SPORTS") {
    await page.check('#hobbies-checkbox-1');
  } else if (`${datos[5]}`.toUpperCase() === "READING") {
    await page.check('#hobbies-checkbox-2');
  } else if (`${datos[5]}`.toUpperCase() === "MUSIC") {
    await page.check('#hobbies-checkbox-3');
  } else {
    console.log("Ninguna opción es válida");
  }
});

//Variables de Ambiente .env
test('Variables de Ambiente', async ({ page }) => {
  page.setDefaultTimeout(30000); // más tiempo para evitar timeout
  const f = new FJ(page);

 // console.log(process.env);

  await f.openURL("https://demoqa.com/automation-practice-form");
  await f.scroll(0, 500);

  // Campos de texto usando variables de ambiente
  await f.texto_val("#firstName", process.env.NOMBRE, tp);
  await f.texto_val("#lastName", process.env.APELLIDO, tp);
  await f.texto_val("#userEmail", process.env.EMAIL, tp);
  await f.texto_val("#userNumber", process.env.TELEFONO, tp);
  await f.texto_val("#currentAddress", process.env.DIRECCION, tp);

  // Selección de hobby según variable de ambiente HOBBY
  if (process.env.HOBBY?.toUpperCase() === "SPORTS") {
    await page.check("#hobbies-checkbox-1");
  } else if (process.env.HOBBY?.toUpperCase() === "READING") {
    await page.check("#hobbies-checkbox-2");
  } else if (process.env.HOBBY?.toUpperCase() === "MUSIC") {
    await page.check("#hobbies-checkbox-3");
  } else {
    console.log("Ninguna opción de hobby es válida");
  }
});

// Leer de Excel
var XLSX = require('xlsx');

// Abrir el archivo Excel
var libroXL = XLSX.readFile('Data.xlsx');

// Obtener las hojas disponibles
let datos_xl = libroXL.SheetNames;
console.log(datos_xl);

// Seleccionar la primera hoja
let hoja = datos_xl[0];

// Convertir la hoja a JSON
const excel = XLSX.utils.sheet_to_json(libroXL.Sheets[hoja]);

// Recorrer las filas y mostrar campos específicos
//for (const fila of excel) {
    //console.log(fila['nombre']);
    //console.log(fila['apellido']);
//};

test.only('Data Excel', async ({ page }) => {
  page.setDefaultTimeout(80000); // más tiempo para evitar timeout
  const f = new FJ(page);

 for (const fila of excel) {
  await f.openURL("https://demoqa.com/automation-practice-form");

  await f.texto_val("#firstName", fila["nombre"] || "", tp);
  await f.texto_val("#lastName", fila["apellido"] || "", tp);
  await f.texto_val("#userEmail", fila["email"] || "", tp);
  await f.texto_val("#userNumber", fila["tel"]?.toString() || "", tp);
  await f.texto_val("#currentAddress", fila["direccion"] || "", tp);

  await page.click("#submit");
  }
});

