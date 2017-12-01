//Se crea de nuevo ahora con el uso de componentes
//Los metodos setState son asincronos.
//setState puede recibir una función que regresa un
//un objeto que actualiza los cmapos del estado.
//react es más eficiente sobre todo si se llama dos
//veces ese método. Si se llama uno, y llega a al etapa asíncrona
/**
 * //Se crea de nuevo ahora con el uso de componentes
Los metodos setState son asincronos.
//setState puede recibir una función que regresa un
//un objeto que actualiza los cmapos del estado.
//react es más eficiente sobre todo si se llama dos
//veces ese método. Si se llama uno, y llega a al etapa asíncrona
de recrear el DOM virtual y luego detecta la segunda llamada,
evita re-renderizar dos veces y establece el orden de los cambios
de forma que la renderización definitiva se muestre correctamente.

Contrario sucede si se usa setState cuando recibe un objeto ya
actualizado, se tiene el riesgo de caer en errores de renderización
bastante raros, por lo cual se recomienda usar el primer método.
 */

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