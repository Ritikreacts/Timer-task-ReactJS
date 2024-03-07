import React, { useState, useEffect, useRef } from "react";

function Step4() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const incrementAmount = useRef(1);
  const incrementAmountInput = useRef(null);

  useEffect(() => {
    if (timer > 0) {
      const autoIncrement = setInterval(() => {
        const inputNumber = incrementAmountInput.current.children[2];

        console.log(inputNumber);
        setCount((prev) => prev + incrementAmount.current);
        console.log("test-", incrementAmount.current);
        inputNumber.value = incrementAmount.current;
      }, 1000 * timer);

      return () => clearInterval(autoIncrement);
    }
  });

  function valueToChange() {
    const inputNumber = incrementAmountInput.current.children[2];
    inputNumber.value = incrementAmount.current;
  }

  return (
    <>
      <div className="whole-screen">
        <div className="counter-screen">
          <h1>Counter: {count}</h1>
          <div className="inputs">
            <p>Counter:</p>
            <button
              onClick={() => {
                setCount((pre) => pre - incrementAmount.current.value);
              }}
            >
              -
            </button>
            <input
              type="number"
              value={count}
              onChange={(e) => {
                setCount((pre) => parseInt(e.target.value));
              }}
            />
            <button
              onClick={() => {
                setCount(parseInt(count) + incrementAmount.current.value);
              }}
            >
              +
            </button>
          </div>

          {/* Auto increment  */}
          <div className="inputs">
            <p className="to-left">auto increment timer input:</p>
            <button
              onClick={() => {
                setTimer((pre) => parseInt(pre) - 1);
              }}
            >
              -
            </button>
            <input
              type="number"
              value={timer}
              onChange={(e) => {
                setTimer((prev) => parseInt(e.target.value));
              }}
            />
            <button
              onClick={() => {
                setTimer((pre) => pre + 1);
              }}
            >
              +
            </button>
          </div>
          {/*increment decrement amount input:*/}
          <div ref={incrementAmountInput} className="inputs">
            <p className="too-left">increment decrement amount input:</p>
            <button
              onClick={() => {
                incrementAmount.current = incrementAmount.current - 1;
              }}
            >
              -
            </button>
            <input
              type="number"
              onChange={(e) =>
                (incrementAmount.current = parseInt(e.target.value))
              }
            />
            <button
              onClick={() => {
                incrementAmount.current = incrementAmount.current + 1;
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

export default Step4;
