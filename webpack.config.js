//Es un script de node.
//Donde se comienza la aplicación /app.js de src. y donde se pone el resultado.

//Debido a las operaciones con path, se usan modulos de node.
const path = require('path');
//Imprime por consola la ruta absoluta del proyecto.
console.log(__dirname);

console.log(path.join(__dirname, 'public'));

//permite exponer un objeto en otro archivo.
module.exports = {
    entry: './src/app.js',
    output: {
        //Ruta absoluta donde se debe poner el bundle
        path: path.join(__dirname, 'public'),
        //Puede ser cualquiera (no se para que sirve)
        filename: 'bundle.js'
    }
};