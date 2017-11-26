'use strict';

//Se busca aprovechar nuevas características de javascript
//Const y Let.
//Se elimina por completo cualquier uso de var.
//Como no se reasigna ninguna, se cambian a const.
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
            'Item in'
        ),
        React.createElement(
            'li',
            null,
            'Item out'
        )
    )
);

var user = {
    name: 'Humberto',
    age: 18,
    location: 'Suiza'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
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
