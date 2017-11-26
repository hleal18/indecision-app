//Se busca el aprovechamiento de condicionales.
//if y ternarios.
console.log('App.js is running');

var app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
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
    location: 'Cartagena'
};

//Se combinan las etiquetas con expresiones javascript. No se permiten declaraciones, como las if.
//Para usar if, se plantean las funcions.
function getLocation(location){
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Edad: {user.age}</p>
        <p>Ciudad: {getLocation(user.location)}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);