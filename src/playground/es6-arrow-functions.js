// const square = function (x) {
//     return x * x;
// };

// //Nueva forma de definir funciones.
// //Son siempre anónimas.
// /* const squareArrow = (x) => {
//     return x * x;
// }; */

// //Funcion de flechitas con una sola expresion de retorno.
// const squareArrow = (x) => x*x;

// console.log(squareArrow(8));

// Reto - solo usar flechitas functions



let getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName("Humberto Leal"));

getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName("Humberto Leal"));