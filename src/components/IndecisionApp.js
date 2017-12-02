import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';


export default class IndecisionApp extends React.Component {
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