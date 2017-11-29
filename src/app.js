//Se observa la inutitlidad del this en algunos componentes y una posibles solución.
//Como por ejemplo desde handleRemoveAll hacer this.props.options.
//Lo último está prohibido.

//Se nota que hay un error al ver que getName no puede
//invocar el método al que referencia debido a que no 
//al this tiene acceso
/*const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
};

//Se usa la función bind que recibe como parámetro el ambiente
//o referencia sobre el cual actúa y permite enlazar correctamente
//la transferencia de referencias con respecto a atributos de clases 
//que antes eran inaccesibles
const getName = obj.getName.bind(obj);

console.log(getName());
*/
class IndecisionApp extends React.Component {
    render () {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer.';
        const options = ['Thing one', 'Thing two', 'Thing four'];

        return (<div>            
            <Header title={title} subtitle={subtitle} />
            <Action />
            <Options options={options} />
            <AddOption />     
        </div>);
    }
}

//Se crea un component prop que se renderiza en el html.
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        //Se asegura que cada vez que se invoque handleRemoveAll
        //Se esté en el ambiente correcto de enlace para invocar this.
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options);
        alert('handleRemoveAll');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    //Se usan dos propiedades por key no es accesible, ya que es reservada.
                    //Para acceder al texto, se usa optionText
                    this.props.options.map( (option) => <Option key={option} optionText={option} />)
                }                
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

const test = (a) => console.log("HOLAA");

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value;
        if(option){
            alert(option);            
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header title="Test value" />
        <Action />
        <Options />
        <AddOption />        
    </div>
);

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));