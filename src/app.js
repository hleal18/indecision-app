//Al importarlo se ejecuta la llamada a la consola.
//import './utils.js'
//Para importar funcionalidades especificas
//El archivo a requerir debe especificar los valores
//exportables.
//Se obtiene específicamente la funcionalidad requerida.
//Los nombres de las funcionalidades a obtener tienen que coincidir.
// import { square, add } from './utils.js';

// console.log("app.js is running!");

// //Cada archivo mantiene su propio ambiente y alcance.
// //No se tiene acceso a lo siguiente:
// console.log(square(4));
// console.log(add(100,23));

import {isAdult, canDrink } from './person.js';

console.log(isAdult(10));
console.log(canDrink(10));