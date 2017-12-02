//install - import - use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor(){
        this.name = "Mike";
    }
    getGreeting() {
        return `Hi. My name is ${this.name}.`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
//console.log(getGreeting());

// nueva sintaxis
//Se definen propiedades y métodos que no rompen el acceso a this..
class NewSyntax {
    name = 'Jen';
    //Están en el alcance de la clase. Tienen acceso a this y no rompen el enlace.
    getGreeting = () => {
        return `Hi. My name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());