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

var template = (
    <div>
        <h1>{app.title}</h1>
        {(app.subtitle) && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options.' : 'No options.'}</p>
        <ol>
            <li>Item in</li>
            <li>Item out</li>
        </ol>
    </div>
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
function getLocation(location){
    if (location) {
        return <p>Location: {location}</p>;
    }//No se le pone nada despues, se asume un 'undefined'
}
//Si la expresion JSX es undefined, nada se muestra.
//Se usan operadores ternarios con username.
//Los valores booleanos y null son ignorados por jsx.
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {
            //Se observa la técnica, cuando es true, se evalúa el segundo condicional,
            //Por tanto, se muestra la etiqueta de párrafo.            
            (user.age && user.age >= 18) && <p>Age: {user.age}</p>
        }        
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);