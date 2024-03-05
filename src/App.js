import "./App.css";
import React, { useState } from "react";
import Step2 from "./components/step2";
// import Step1 from './components/step1';

function App() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  if (timer === 0) {
    console.log("timer is set to 0");
    clearInterval();
  } else {
    console.log(timer);
    setInterval(() => {
      setCount(count + 1);
      console.log(count);
    }, timer * 1000);
  }

  return (
    <div className="whole-screen">
      <div className="counter-screen">
        <Step2></Step2>
      </div>
    </div>
  );
}

export default App;
