// @ts-check
const { test, expect } = require('@playwright/test');
const { FJ } = require('./funciones_curso')
const tp=300;

var myArray =['mariana.com', 'mariana.leon@gmail.com','mal.com', 'mari.com'];
var rand = myArray[(Math.random() * myArray.length) | 0]
console.log(rand)

test('Demo POM', async ({page}) =>{
    const f=new FJ(page);
    await f.openURL("https://demoqa.com/automation-practice-form",3000)
    await f.validar_titulo("demosite");
    await f.validar_url_lig("https://demoqa.com/automation-practice-form")
    await f.scroll(0,500)
    //campo no se encuentra
    //await f.texto_try("//*[@id='firstName']","Mariana");
    //campo no se encuentra
    await f.texto_val("//*[@id='firstName']","Mariana");
    const valor=await f.valor_campo("//*[@id='lastName']")
    console.log(valor)
    if(valor=="mariana")
    {
        await  f.texto_try("//*[@id='lastName']","pel",tp)
    }else if (valor =="Erika"){
        await f.texto_try("//*[@id='lastName']","castro",tp)
    }else if (valor =="juan"){
        await f.texto_try("//*[@id='lastName']","perez",tp)
    }else{
        await f.texto_try("//*[@id='lastName']","chavez",tp)
    } 



    await f.texto("//*[@id='userEmail']", rand, tp);
    await f.click("//*[@id='gender-radio-1']");
    await f.texto("//*[@id='userNumber']",'3229288271',);
    await f.click("//*[@id='hobbies-checkbox-1']");
    await f.texto("//*[@id='currentAddress']","Cr 88#6A-99");
    await f.click("//*[@id='submit']");
   // await f.validar_URL("https://demoqa.com/automation-practice-form")
   


    await f.tiempo(1000)

});