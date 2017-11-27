'use strict';

var appRoot = document.getElementById('app');

var buttonMessage = 'Show details';
var show = false;

var onClickToggled = function onClickToggled() {
    if (buttonMessage == 'Show details') {
        buttonMessage = 'Hide details';
        show = true;
    } else {
        buttonMessage = 'Show details';
        show = false;
    }

    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onClickToggled },
            buttonMessage
        ),
        show && React.createElement(
            'p',
            null,
            ' Hey, these are some details you can now see! '
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
