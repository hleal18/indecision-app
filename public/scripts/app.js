'use strict';

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

var user = {
    name: 'Humberto',
    cities: ['Cartagena', 'Medellin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        //Nueva forma de recorrer arreglos.
        //Permite transformar cada item.
        return this.cities.map(function (city) {
            return _this.name + ' has lived in: ' + city;
        });
    }
};

console.log(user.printPlacesLived());;

//Challenge area

var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
