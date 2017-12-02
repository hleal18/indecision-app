//Al importarlo se ejecuta la llamada a la consola.
//import './utils.js'
//Para importar funcionalidades especificas
//El archivo a requerir debe especificar los valores
//exportables.
//Se obtiene específicamente la funcionalidad requerida.
//Los nombres de las funcionalidades a obtener tienen que coincidir.
//substract se importa como default, debido a que lo es.
//el default puede referenciarse con cualquier nombre.
// import restica, { square, add } from './utils.js';

// // console.log("app.js is running!");

// // //Cada archivo mantiene su propio ambiente y alcance.
// // //No se tiene acceso a lo siguiente:
// console.log(square(4));
// console.log(add(100,23));
// console.log(restica(100, 81));

import isSenior, {isAdult, canDrink } from './person.js';

console.log(isAdult(25));
console.log(canDrink(21));
console.log(isSenior(35));
