//Se buscan hacer templates dinamicas.
console.log('App.js is running');

//La siguiente linea da error. Solo pueden haber etiquetas encerradas en una raíz.
//De forma que solo haya una etiqueta de cierre de una sola jerarquia.
//var template = <h1> Indecision App. </h1><p>This is some info</p>;
//Se soluciona envolviendo lo anterior en un div. De la siguiente forma:
//Se le conoce como wrapper div.
//Se le agregan paréntesis como buena práctica, para poder identificar las etiquetas
//Que hacen parte del la variable template.
var template = (
    <div>
        <h1>Humberto Leal</h1>
        <p>This is some info</p>
        <ol>
            <li>Item in</li>
            <li>Item out</li>
        </ol>
    </div>
);

//Challenge
var templateTwo = (
    <div>
        <h1>Humberto Leal</h1>
        <p>Edad: 18</p>
        <p>Ciudad: Cartagena</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);