import React from 'react';

import classes from './Button.module.scss';

const Button = props => {
    const classList = [classes.Button, classes[props.btnType]];

    return (
        <button
            className={classList.join(' ')}
            onClick={props.clicked}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
