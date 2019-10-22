import React, { Component } from 'react';

import Display from './display'
import Button from './button';
import ClearButton from './clearButton';
import './calculator.css';

class Calculator extends Component {

    state = {
        main: '0',
        secondary: ''
    };
    // componentWillUpdate(newState) {
    //     this.setState({
    //         state: newState
    //     })
    // };

    pushNumber(number) {
        const newState = {
            main: this.state.main + number,
            secondary: this.state.secondary
        }
        this.setState({
            state: newState
        });
    };

    render() {
        return (
            <div className="calculator">
                <Display main={this.state.main}/>
                <div className="buttons">
                    <Button pushNumber={15}>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    <Button>/</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>*</Button>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>-</Button>
                    <Button>.</Button>
                    <Button>0</Button>
                    <Button>=</Button>
                    <Button>+</Button>
                </div>
                <ClearButton/>
            </div>
        )
    }
};

export default Calculator;