'use strict';

//Se buscan hacer templates dinamicas.
console.log('App.js is running');

//La siguiente linea da error. Solo pueden haber etiquetas encerradas en una raíz.
//De forma que solo haya una etiqueta de cierre de una sola jerarquia.
//var template = <h1> Indecision App. </h1><p>This is some info</p>;
//Se soluciona envolviendo lo anterior en un div. De la siguiente forma:
//Se le conoce como wrapper div.
//Se le agregan paréntesis como buena práctica, para poder identificar las etiquetas
//Que hacen parte del la variable template.
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Humberto Leal'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item in'
        ),
        React.createElement(
            'li',
            null,
            'Item out'
        )
    )
);

//Challenge
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Humberto Leal'
    ),
    React.createElement(
        'p',
        null,
        'Edad: 18'
    ),
    React.createElement(
        'p',
        null,
        'Ciudad: Cartagena'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
