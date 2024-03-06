import React, { useRef } from "react";

export default function Step2() {
  const countDiv = useRef(null);

  function changeCounter(action) {
    console.log(action);
    if (action === "-") {
      countDiv.current.value = parseInt(countDiv.current.value) - 1;
    } else {
      countDiv.current.value = parseInt(countDiv.current.value) + 1;
    }
    const myDiv = countDiv.current.children;
    myDiv[0].innerHTML = `Counter: ${countDiv.current.value}`;
    const inputToChange = myDiv[1].children[2];
    inputToChange.value = countDiv.current.value;
  }

  function valueOnChange(e) {
    countDiv.current.value = e.target.value;
    const myDiv = countDiv.current.children;
    myDiv[0].innerHTML = `Counter: ${countDiv.current.value}`;
  }

  return (
    <>
      <div className="whole-screen">
        <div ref={countDiv} className="counter-screen">
          <h1>Counter: 0{countDiv.current}</h1>
          <div className="inputs">
            <p>Counter:</p>
            <button
              onClick={() => {
                changeCounter("-");
              }}
            >
              -
            </button>
            <input type="number" onChange={(e) => valueOnChange(e)} />
            <button
              onClick={() => {
                changeCounter("+");
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
