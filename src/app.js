//install - import - use
import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
            
        </div>
    );
};

const template = (
    <div>
        <h1>Page title</h1>
        <p>This is my page.</p>
    </div>
);

//Se puede usar esta sintaxis para pasar jsx
//ReactDOM.render(<Layout content={template}/>, document.getElementById('app'));
//O con un par de etiquetas que referencian lo que se va a renderizar entre ellos.
//Tiene incorporado el 'children', como propiedad de props.
//Se usa mucho con componentes de terceros.
ReactDOM.render((
    <Layout>
        <div>
            <h1>Page title</h1>
            <p>This is my page.</p>
        </div>
    </Layout>), document.getElementById('app'));