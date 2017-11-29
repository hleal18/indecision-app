//Se crea de nuevo ahora con el uso de componentes
//Se busca explicar el uso del estado.

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //Se establecen los datos que se quieren rastrear.
        this.state = {
            count: 0
        };
    }
    handleAddOne() {
        //Para manipular el estado de la variable
        //correctamente, se llama al método setState
        //este, automáticamente llama a la renderización.
        //Recibe una función que retorna un objeto.
        //Se tiene acceso al estado actual del objeto
        //se puede llamar prevState
        this.setState((prevState) => {
            return {
                //Solo se ponen los que se quieren cambiar.
                //si se tienen más campos, no son necesarios.
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}



ReactDOM.render(<Counter />, document.getElementById('app'));
/*let count = 0;
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

renderCounterApp();*/

