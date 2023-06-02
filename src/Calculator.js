import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    if (displayValue === "0") {
      setDisplayValue(number);
    } else {
      setDisplayValue((prevDisplay) => prevDisplay + number);
    }
  };

  const handleOperatorClick = (operator) => {
    setOperator(operator);
    setPreviousValue(displayValue);
    setDisplayValue("0");
  };

  const handleEqualClick = () => {
    const current = parseFloat(displayValue);
    const previous = parseFloat(previousValue);

    if (operator === "+") {
      setDisplayValue(previous + current);
    } else if (operator === "-") {
      setDisplayValue(previous - current);
    } else if (operator === "*") {
      setDisplayValue(previous * current);
    } else if (operator === "/") {
      setDisplayValue(previous / current);
    }

    setOperator(null);
    setPreviousValue(null);
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="keypad">
        <button className="key" onClick={() => handleNumberClick("7")}>
          7
        </button>
        <button className="key" onClick={() => handleNumberClick("8")}>
          8
        </button>
        <button className="key" onClick={() => handleNumberClick("9")}>
          9
        </button>
        <button
          className="key operator"
          onClick={() => handleOperatorClick("/")}
        >
          ÷
        </button>
        <button className="key" onClick={() => handleNumberClick("4")}>
          4
        </button>
        <button className="key" onClick={() => handleNumberClick("5")}>
          5
        </button>
        <button className="key" onClick={() => handleNumberClick("6")}>
          6
        </button>
        <button
          className="key operator"
          onClick={() => handleOperatorClick("*")}
        >
          ×
        </button>
        <button className="key" onClick={() => handleNumberClick("1")}>
          1
        </button>
        <button className="key" onClick={() => handleNumberClick("2")}>
          2
        </button>
        <button className="key" onClick={() => handleNumberClick("3")}>
          3
        </button>
        <button
          className="key operator"
          onClick={() => handleOperatorClick("-")}
        >
          −
        </button>
        <button className="key" onClick={() => handleNumberClick("0")}>
          0
        </button>
        <button className="key" onClick={() => handleNumberClick(".")}>
          .
        </button>
        <button className="key equal" onClick={handleEqualClick}>
          =
        </button>
        <button
          className="key operator"
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>
        <button className="key clear" onClick={handleClearClick}>
          AC
        </button>
      </div>
    </div>
  );
};

export default Calculator;
