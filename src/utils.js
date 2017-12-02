console.log('utils.js is running');


//Se puede exportar individualmente
export const square = (x) => x*x;

export const add = (a, b) => {
    return a + b;
};

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