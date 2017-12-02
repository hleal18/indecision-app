//install - import - use
import React from 'react';
import ReactDOM from 'react-dom';

//Si no se está usando babel, esto da error.
//const template = <p>testing 123</p>;
//Esto se renderiza correctamente pero no es lo que se busca.
// const template = React.createElement(
//     'p',
//     {},
//     'testing 123'
// );
ReactDOM.render(template, document.getElementById('app'));
