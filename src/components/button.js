import React from 'react';

import './button.css';

const Button = (props) => {
    let indicator = !isNaN(props.children) || props.children === '.' || props.children === '=';
    return (
        <div className={`button ${indicator ? '' : 'orange'}`} onClick={() => props.addingNumbers(props.children)}>{props.children}</div>
    )
};

export default Button;