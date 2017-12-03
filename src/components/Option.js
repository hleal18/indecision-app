import React from 'react';

//No usar una variable, tiene consecuencias en las herramientas
//de google, ya que indica Unknown.
const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button
            className="button button--link"
            onClick={() => {
                props.handleDeleteOption(props.optionText)
            }}
            
        >
            remove
            </button>
    </div>
);


export default Option;
