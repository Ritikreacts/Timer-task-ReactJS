import React, { useRef } from 'react';

export default function Step2() {
  const count = useRef(0);

  const incrementCount = () => {
    count.current += 1;
  };

  const decrementCount = () => {
    count.current -= 1;
  };

  const inputRef = useRef(0);

  return (
    <>
      <h1>Counter: {count.current}</h1>
      <div className="inputs">
        <p>Counter:</p>
        <button onClick={decrementCount}>-</button>
        <input type="text" ref={inputRef} disabled />
        <button onClick={incrementCount}>+</button>
      </div>
    </>
  );
}
