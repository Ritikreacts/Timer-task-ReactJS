import React, { useState, useEffect, useRef } from "react";

function Step4() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const incrementAmount = useRef(0);
  const incrementAmountInput = useRef(null);

  useEffect(() => {
    if (timer > 0) {
      const autoIncrement = setInterval(() => {
        console.log('incrementAmountInput', incrementAmountInput)
        console.log('incrementAmount', incrementAmount)
        setCount((prev) => prev + incrementAmount.current);
      }, 1000 * timer);

      return () => clearInterval(autoIncrement);
    }
  });

  function handleIncrementAmountChange(value) {
    incrementAmount.current = parseInt(value) || 0;
    if (incrementAmountInput.current) {
      incrementAmountInput.current.value = incrementAmount.current;
    }
  }

  function decrementCount() {
    if (count > 0) {
      setCount((prev) => prev - incrementAmount.current);
    }
  }

  return (
    <>
      <div className="whole-screen">
        <div className="counter-screen">
          <h1>Counter: {count}</h1>
          <div className="inputs">
            <p>Counter:</p>
            <button onClick={decrementCount}> - </button>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value) || 0)}
            />
            <button onClick={() => setCount((prev) => prev + incrementAmount.current)}> + </button>
          </div>

          {/* Auto increment  */}
          <div className="inputs">
            <p className="to-left">auto increment timer input:</p>
            <button onClick={() => setTimer((prev) => prev - 1)}> - </button>
            <input
              type="number"
              value={timer}
              onChange={(e) => setTimer(parseInt(e.target.value) || 0)}
            />
            <button onClick={() => setTimer((prev) => prev + 1)}> + </button>
          </div>

          {/* increment decrement amount input: */}
          <div className="inputs">
            <p className="too-left">increment decrement amount input:</p>
            <button onClick={() => handleIncrementAmountChange(incrementAmount.current - 1)}> - </button>
            <input
              type="number"
              ref={incrementAmountInput}
              onChange={(e) => handleIncrementAmountChange(e.target.value)}
            />
            <button onClick={() => handleIncrementAmountChange(incrementAmount.current + 1)}> + </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step4;
