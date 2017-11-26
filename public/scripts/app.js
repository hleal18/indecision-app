'use strict';

//Se busca usar data binding manualmente.
//ya que jsx no lo posee intrínsecamente.
//Se busca aprovechar componentes React para re-renderizar
//el jsx cada vez que los datos cambian.
console.log('App.js is running');

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
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

//Se puede pensar que es ineficiente el re-renderizado de todo el div
//Si solo una cosa está cambiando, sin embargo, los algoritmos DOM
// de React, son bastante eficientes, por lo cual, no hay porque preocuparse
// por renderizar y re-renderizar el mismo root muchas veces.
var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            ' + 1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            ' - 1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
