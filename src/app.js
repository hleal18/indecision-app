//Se busca usar data binding manualmente.
//ya que jsx no lo posee intrínsecamente.
//Se busca aprovechar componentes React para re-renderizar
//el jsx cada vez que los datos cambian.
console.log('App.js is running');

const app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {(app.subtitle) && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options.' : 'No options.'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);


let count = 0;
const addOne = () => {
    count++;    
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();    
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

//Se puede pensar que es ineficiente el re-renderizado de todo el div
//Si solo una cosa está cambiando, sin embargo, los algoritmos DOM
// de React, son bastante eficientes, por lo cual, no hay porque preocuparse
// por renderizar y re-renderizar el mismo root muchas veces.
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} > + 1</button>
            <button onClick={minusOne} > - 1</button>
            <button onClick={reset} >Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();