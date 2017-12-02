//Se guardan en el localStorage datos por medio de JSON.
//Se agrega logica para evitar guardar datos redundantes. (remover cuando ya no hay nada).
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }    
    componentDidMount() {
        //Se realiza try-catch por si el json a convertir tiene un formato inválido.

        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            //Si no valores en el estado, no se inicia con los datos null.
            //se hará con los de inicio, osea, un array vacio.
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            //No se hace nada, solo que no se interrumpe la ejecución.
        }     
    }    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('Saving data');
        }
    }    
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick() {
        const decision = Math.floor(Math.random()*(this.state.options.length));
        alert(this.state.options[decision]);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }
    render () {        
        const subtitle = 'Put your life in the hands of a computer.';

        return (<div>            
            <Header subtitle={subtitle} />
            <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
            />            
            <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption} 
            />
            <AddOption
                handleAddOption={this.handleAddOption}     
            />     
        </div>);
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
                <button 
                    onClick={props.handlePick}
                    disabled={!props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p> Please add an option to get started! </p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                )
            )
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={() => {
                    props.handleDeleteOption(props.optionText)
                }}
            > 
            remove 
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));
        
        //Se limpia el campo de texto.
        if(!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p> {this.state.error} </p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));