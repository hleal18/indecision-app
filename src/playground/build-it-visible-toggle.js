

const appRoot = document.getElementById('app');

let buttonMessage = 'Show details';
let show = false;

const onClickToggled = () => {
    if(buttonMessage == 'Show details'){
        buttonMessage = 'Hide details';
        show = true;
    } else {
        buttonMessage = 'Show details';
        show = false;
    }

    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onClickToggled}>{buttonMessage}</button>
            {
                show && <p> Hey, these are some details you can now see! </p>
            }
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();