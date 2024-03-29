import React, { useState, useEffect } from "react";

function Step3() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer > 0) {
      const autoIncrement = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000 * timer);

      return () => clearInterval(autoIncrement);
    }
  }, [timer]);

  return (
    <>
      <div className="whole-screen">
        <div className="counter-screen">
          <h1>Counter: {count}</h1>
          <div className="inputs">
            <p>Counter:</p>
            <button
              onClick={() => {
                setCount((pre) => pre - 1);
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
                setCount(parseInt(count) + 1);
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
        </div>
      </div>
    </>
  );
}

export default Step3;
