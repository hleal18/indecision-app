console.log('utils.js is running');


//Se puede exportar individualmente
// export const square = (x) => x * x;

// export const add = (a, b) => {
//     return a + b;
// };

// const square = (x) => x*x;

// const add = (a, b) => {
//     return a + b;
// };

//Todas tienen que tener una variable
//export 'test';
//Lo anterior da error.

//named exports
//no es una definición de objeto.
//Se ponen referencias a sentencias que se quieren pasar.
//se exportan por nombre y se exportan por nombres.
//export { square, add };

//exports - default export - named exports

//default exports
//const substract = (a, b) => a - b;

//Solo puede haber un export default.
//export { square, add as default, substract as default }
//Rambien puede haber un solo default.
//export { square, add, substract as default}

//Para definir todo lo anterior como export en una sola linea
//incluyendo el substract como default.
//no puede haber una sentencia despues de el inline default export
export const square = (x) => x * x;
export const add = (a, b) => a + b;

//Se puede hacer de la siguiente forma.
// const substract = (a, b) => a - b;
// export default substract;
//o así
export default (a, b) => a - b;
