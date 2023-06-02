import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [screenValue, setScreenValue] = useState("");

  const addSymbol = (element) => {
    setScreenValue((prevValue) => prevValue + element);
  };

  const clearScreen = () => {
    setScreenValue("");
  };

  const calculate = () => {
    let result;
    try {
      result = evaluateExpression(screenValue);
    } catch (error) {
      result = "Error";
    }
    setScreenValue(result.toString());
  };

  const evaluateExpression = (expression) => {
    const operators = ["+", "-", "*", "/"];
    let currentNumber = "";
    let result = 0;
    let currentOperator = "+";

    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];

      if (operators.includes(char)) {
        result = performOperation(
          result,
          parseInt(currentNumber),
          currentOperator
        );
        currentNumber = "";
        currentOperator = char;
      } else {
        currentNumber += char;
      }
    }

    result = performOperation(result, parseInt(currentNumber), currentOperator);

    return result;
  };

  const performOperation = (num1, num2, operator) => {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        throw new Error("Invalid operator");
    }
  };

  return (
    <main>
      <article className="calculator">
        <input id="screen" type="text" value={screenValue} readOnly />
        <button onClick={() => addSymbol("1")}>1</button>
        <button onClick={() => addSymbol("2")}>2</button>
        <button onClick={() => addSymbol("3")}>3</button>
        <button onClick={() => addSymbol("4")}>4</button>
        <button onClick={() => addSymbol("5")}>5</button>
        <button onClick={() => addSymbol("6")}>6</button>
        <button onClick={() => addSymbol("7")}>7</button>
        <button onClick={() => addSymbol("8")}>8</button>
        <button onClick={() => addSymbol("9")}>9</button>
        <button onClick={() => addSymbol("0")}>0</button>
        <button onClick={() => addSymbol("+")}>+</button>
        <button onClick={() => addSymbol("-")}>-</button>
        <button onClick={() => addSymbol("*")}>*</button>
        <button onClick={() => addSymbol("/")}>/</button>
        <button onClick={calculate}>=</button>
        <button onClick={clearScreen}>Clear</button>
      </article>
    </main>
  );
}
