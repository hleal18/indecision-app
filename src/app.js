//install - import - use
import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
//Ahora todos los navegadores estarán en capacidad de usar los mismo estilos.
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));