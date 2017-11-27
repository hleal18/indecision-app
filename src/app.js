//Arrays en JSX.
console.log('App.js is running');

const app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    
    render();
};

const onRemoveAll = () => {
    app.options = [];
    render();
}

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options.' : 'No options.'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            {
                //No se usan objetos para arrays, solo arrays.
                //JSX dentro de otro JSX para hacer arrays, requieren una
                //key unica.
                numbers.map((number) => <p key={number}> Number: {number} </p>)
            }
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();