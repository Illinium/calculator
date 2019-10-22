import React from 'react';

import './button.css';

const Button = ({ children }, {pushNumber}) => {
    let indicator = !isNaN(children) || children === '.' || children === '=';
    return (
        <div className={`button ${indicator ? '' : 'orange'}`} onClick={() => console.log(pushNumber)}>{children}</div>
    )
};

export default Button;