//Se explican los component props, que permiten especificar los datos a mostrar
//por un componente. Se usa por ejemplo el prop title con un valor.
//y este es accesible en el fuente del componente por medio del this.props.
//Así se crean componentes más flexibles.
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
    handleRemoveAll() {
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