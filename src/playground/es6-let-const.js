//Es completamente permitido, lo que puede generar situaciones
//Donde rastrear bugs sea bastante dificil.
var nameVar = 'Humberto';
var nameVar = 'Leal';
console.log('nameVar', nameVar);

//no se pueden redefinir variables, pero si reasignarlas.
let nameLet = 'Jenny';
nameLet = 'Julie';
console.log('nameLet', nameLet);

//no permite la reasignacion y redefinición.
const nameConst = 'Frankenstein';
console.log('nameConst', nameConst);

//Se observa que petName es del alcance de la función.
//let y const también son de alcance de función.
function getPetName(){
    const petName = 'Chorizo';
    return petName;
}

const petName = getPetName();
console.log(petName);

/**
 * Block level scope.
 * Alcance de bloque. Solo está disponible en bloques de código.
 * Var son exclusivamente function scope.
 * let y const son block scope.
 */

const fullName = 'Humberto Leal';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);