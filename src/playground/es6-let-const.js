var nameVar = 'Humberto';
var nameVar = 'Leal';
console.log('nameVar', nameVar);

let nameLet = 'Jenny';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frankenstein';
console.log('nameConst', nameConst);

function getPetName(){
    const petName = 'Chorizo';
    return petName;
}

const petName = getPetName();
console.log(petName);


const fullName = 'Humberto Leal';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);