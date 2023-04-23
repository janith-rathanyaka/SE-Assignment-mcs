import React, { useState } from "react";
import {add, multiply, subtract,divide } from 'advanced-cal';

function CalcButton(props) {
  const handleClick = () => {
    props.onClickProp(props.value);
  };
  return (
    <button
      onClick={handleClick}
      id={props.idProp}
      className={props.classNameProp}
    >
      {props.value}
    </button>
  );
}

function App() {
  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: "",
  });

  function handleNumber(value) {
    let newValue = value.toString();
    if (!calc.isInitial) {
      newValue = calc.current.toString() + value.toString();
    }
    setCalc({ ...calc, current: newValue, isInitial: false });
  }

  function handleOperator(value) {
    let total = calc.total;
    if (calc.preOp === "=") {
      total = doCalculation();
    } else {
      total = doCalculation().toString();
    }
    setCalc({
      current: total,
      total: total,
      isInitial: true,
      preOp: value,
    });
  }

  function renderDisplay() {
    return calc.current;
  }

  function doCalculation() {
    let total = parseInt(calc.total);
    let current = parseInt(calc.current);
    switch (calc.preOp) {
      case "+":
        total = add(total,current);
        break;
      case "-":
        total = subtract(total ,current);
        break;
      case "*":
        total = multiply(total,current);
        break;
      case "/":
        total = divide(total,current);
        break;
      default:
        total = current;
    }
    return total;
  }

  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: "",
    });
  }

  function handleDelete(value) {
    if (value === "Del") {
      let newCurrent = calc.current.toString().slice(0, -1);
      setCalc({ ...calc, current: newCurrent });
      return;
    }
  }

  return (
    <main>
      <section className="calculator">
        <aside id="display">{renderDisplay()}</aside>
        <CalcButton
          value="Del"
          onClickProp={handleDelete}
          idProp="del"
          classNameProp="btn"
        />
        <CalcButton
          value="C"
          onClickProp={handleClear}
          idProp="clear"
          classNameProp="btn"
        />
        <CalcButton
          value="/"
          onClickProp={handleOperator}
          idProp="divide"
          classNameProp="btn"
        />
        <CalcButton
          value="*"
          onClickProp={handleOperator}
          idProp="multiply"
          classNameProp="btn"
        />
        <CalcButton
          value="7"
          onClickProp={handleNumber}
          idProp="seven"
          classNameProp="btn"
        />
        <CalcButton
          value="8"
          onClickProp={handleNumber}
          idProp="eight"
          classNameProp="btn"
        />
        <CalcButton
          value="9"
          onClickProp={handleNumber}
          idProp="nine"
          classNameProp="btn"
        />
        <CalcButton
          value="-"
          onClickProp={handleOperator}
          idProp="minus"
          classNameProp="btn"
        />
        <CalcButton
          value="4"
          onClickProp={handleNumber}
          idProp="four"
          classNameProp="btn"
        />
        <CalcButton
          value="5"
          onClickProp={handleNumber}
          idProp="five"
          classNameProp="btn"
        />
        <CalcButton
          value="6"
          onClickProp={handleNumber}
          idProp="six"
          classNameProp="btn"
        />
        <CalcButton
          value="+"
          onClickProp={handleOperator}
          idProp="plus"
          classNameProp="btn"
        />
        <CalcButton
          value="1"
          onClickProp={handleNumber}
          idProp="one"
          classNameProp="btn"
        />
        <CalcButton
          value="2"
          onClickProp={handleNumber}
          idProp="two"
          classNameProp="btn"
        />
        <CalcButton
          value="3"
          onClickProp={handleNumber}
          idProp="three"
          classNameProp="btn"
        />
        <CalcButton
          value="="
          onClickProp={handleOperator}
          idProp="equals"
          classNameProp="btn"
        />
        <CalcButton
          value="0"
          onClickProp={handleNumber}
          idProp="zero"
          classNameProp="btn"
        />
      </section>

      <footer>
        <b>React Calculator</b>
      </footer>
    </main>
  );
}

export default App;

