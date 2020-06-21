import React, { Component } from "react";

import Display from "./display";
import Button from "./button";
import ClearButton from "./clearButton";
import "./calculator.css";

class Calculator extends Component {
  state = {
    display: "",
    action: null,
    firstNumbers: "",
    secondNumbers: "",
  };

  calculatedNumber = (a, b, action) => {
    switch (action) {
      case "*":
        return a * b;
      case "/":
        return a / b;
      case "+":
        return a + b;
      case "-":
        return a - b;
      default:
        break;
    }
  };

  addingNumbers = (number) => {
    if (isNaN(number)) {
      if (this.state.action === null) {
        this.setState({
          action: number,
          display: this.state.display + number,
        });
      } else {
        const result = this.calculatedNumber(
          +this.state.firstNumbers,
          +this.state.secondNumbers,
          this.state.action
        );
        const newAction = number === "=" ? null : number;
        this.setState({
          display: result + newAction,
          firstNumbers: result,
          action: newAction,
          secondNumbers: "",
        });
      }
    } else {
      if (this.state.action === null) {
        this.setState({
          display: this.state.display + number,
          firstNumbers: this.state.firstNumbers + number,
        });
      } else {
        this.setState({
          display: this.state.display + number,
          secondNumbers: this.state.secondNumbers + number,
        });
      }
    }
  };

  clearHandler = () => {
    this.setState({
      display: "",
      action: null,
      firstNumbers: "",
      secondNumbers: "",
    });
  };

  render() {
    return (
      <div className="calculator">
        <Display main={this.state.display} />
        <div className="buttons">
          <Button addingNumbers={this.addingNumbers}>7</Button>
          <Button addingNumbers={this.addingNumbers}>8</Button>
          <Button addingNumbers={this.addingNumbers}>9</Button>
          <Button addingNumbers={this.addingNumbers}>/</Button>
          <Button addingNumbers={this.addingNumbers}>4</Button>
          <Button addingNumbers={this.addingNumbers}>5</Button>
          <Button addingNumbers={this.addingNumbers}>6</Button>
          <Button addingNumbers={this.addingNumbers}>*</Button>
          <Button addingNumbers={this.addingNumbers}>1</Button>
          <Button addingNumbers={this.addingNumbers}>2</Button>
          <Button addingNumbers={this.addingNumbers}>3</Button>
          <Button addingNumbers={this.addingNumbers}>-</Button>
          <Button addingNumbers={this.addingNumbers}>.</Button>
          <Button addingNumbers={this.addingNumbers}>0</Button>
          <Button addingNumbers={this.addingNumbers}>=</Button>
          <Button addingNumbers={this.addingNumbers}>+</Button>
        </div>
        <ClearButton clearHandler={this.clearHandler} />
      </div>
    );
  }
}

export default Calculator;
