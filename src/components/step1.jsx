import React, { useState } from "react";

export default function Step1() {
  const [count, setCount] = useState(0);
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
                setCount((pre) => e.target.value);
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
        </div>
      </div>
    </>
  );
}
