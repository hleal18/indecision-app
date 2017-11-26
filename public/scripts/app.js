'use strict';

//El objeto arguments no esta disponible en las arrow functions.
var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

//No se puede.
// add = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }
// console.log(add(a+b));

//la keyword this, no estan delimitadas en las arrow functions.
var user = {
    name: 'Humberto',
    cities: ['Cartagena', 'Medellin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        var that = this;

        //No se puede, this no está disponible.
        // this.cities.forEach( function (city) {
        //     console.log(this.name + ' has lived in: ' + city);
        // })

        //Solucion con funciones ES5
        // this.cities.forEach( function (city) {
        //     console.log(that.name + ' has lives in: ' + city);
        // })

        //Con las Arrow no es necesario that = this
        //Automáticamente conoce el this del ambiente padre.
        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in: ' + city);
        });
    }
    //Con arrow desde aquí, no reconoce el this, se va al objeto
    // //Del ambiente padre, el cual es global.
    // printPlacesLivedArrow: () => {
    //     this.cities.forEach( (city) => {
    //         console.log(this.name + ' has lived in: ' + city);
    //     })
    // };
};

user.printPlacesLived();
