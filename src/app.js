//Se usan los lifecycles methods.
//Se accionan cada vez que sucede un cambio.
//Permiten usarse para introducir datos en una base de datos.
//Vienen incorporadas, por lo cual son reconocidas por React.
//Los stateless functional components no las poseen.
//Y son invocadas automáticamente.
//Se busca aprovechar los lifecycle methods para guardar datos
//localmente.
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }
    //Se tienen acceso a props. prevState y prevProps
    componentDidMount() {
        console.log('ComponentDidMount');
    }
    //Se acciona despues de algun cambio en las props o state.
    componentDidUpdate(prevProps, prevState) {
        console.log('ComponentDidUpdate');
    }
    //Cuando un componente se va. (inaccesible creo
    //No sucede con este componente, pero sí con option.
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

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

//Un objeto con los props por defecto.
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

        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));        
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