/**
 * Aquí se depositaran todas las características de React
 * y React DOM.
 */
console.log('App.js is running');
/**
 * Lo que se imprime en consola, se muestra en la consola de Google Chrome
 * De herramientas para el desarrollador.
 * Recordar comando: ctr + mayus + i
 */

 //Primer vistazo a JSX - Javascript XML.
 /**
  * Es una extensión de javascript. Esta sintaxis la provee React.
  * Permite integrar diferentes lenguajes en éste mismo fichero,
  * facilitando la manipulación de los 'templates' (plantillas, creo).
  * Como ejemplo están Scss y LESS, que son extensiones de CSS.
  */

/*Ejemplo de código JSX con el código HTML.
 *Si se prueba tal y como está, el navegador no podrá renderizarlo.
 *Se usa babbel, para compilar el template como un código javascript
 *normal para que así, el navegador lo reconozca.
 *Tambien es capaz de compilar ES6 a ES5.
 */
//var template = <p>This is JSX from app.js</p>;
/**
 * Se observa la version compilada de la expresion JSX anterior a javascript.
 */
var template_compiled = React.createElement(
    "p",
    null,
    " This is app.js "
);
//Se establece la ruta html donde se renderizará el template anterior.
var appRoot = document.getElementById('app');

/*Se renderiza en el HTML, primer argumento el JSX, segundo, el lugar en
el DOM donde se hará.
Si se usa la version compilada, el navegador lo reconocerá.
*/
ReactDOM.render(template_compiled, appRoot);