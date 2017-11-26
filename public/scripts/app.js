'use strict';

//Se busca el aprovechamiento de condicionales.
//if y ternarios.
console.log('App.js is running');

var app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
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
    location: 'Cartagena'
};

//Se combinan las etiquetas con expresiones javascript. No se permiten declaraciones, como las if.
//Para usar if, se plantean las funcions.
function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Edad: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Ciudad: ',
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
