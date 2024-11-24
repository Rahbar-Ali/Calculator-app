import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonCal from "./components/ButtonCal";
import Displayed from "./components/Displayed";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonHandler = (item) => {
    if (item === "C") {
      setCalVal("");
    } else if (item === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + item;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className="containerCalculator">
        <Displayed displayValue={calVal}></Displayed>
        <ButtonCal onButtonHandler={onButtonHandler}></ButtonCal>
      </div>
    </>
  );
}

export default App;
