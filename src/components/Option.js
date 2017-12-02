import React from 'react';

//No usar una variable, tiene consecuencias en las herramientas
//de google, ya que indica Unknown.
const Option = (props) => (
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


export default Option;
