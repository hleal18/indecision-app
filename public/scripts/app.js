'use strict';

//Se busca el aprovechamiento de condicionales.
//if y ternarios.
console.log('App.js is running');

/**
 * Reto
 * Renderizar solo el subtitulo y la etiqueta p si el subtitulo existe
 * Usar el operador and.
 * Renderizar un parrafo si hay elementos en el arreglo.
 */
var app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options.' : 'No options.'
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

//Se usan objetos para representar datos de un usuario.
var user = {
    name: 'Humberto',
    age: 18,
    location: 'Suiza'
};

//Se combinan las etiquetas con expresiones javascript. No se permiten declaraciones, como las if.
//Para usar if, se plantean las funciones.
//Como al mostrar el Unknown aun se usa la etiqueta parrafo, se busca que se reemplace de acuerdo
//Al valor de retorno.
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    } //No se le pone nada despues, se asume un 'undefined'
}
//Si la expresion JSX es undefined, nada se muestra.
//Se usan operadores ternarios con username.
//Los valores booleanos y null son ignorados por jsx.
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),

    //Se observa la técnica, cuando es true, se evalúa el segundo condicional,
    //Por tanto, se muestra la etiqueta de párrafo.            
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
