import React from 'react';

import './clearButton.css';

const ClearButton = ({clearHandler}) => {
    return (
        <div className='clear' onClick={clearHandler}>
            <p>Clear</p>
        </div>
    )
};

export default ClearButton;