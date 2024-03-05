import React, { useRef } from "react";

export default function Step2() {
  const count = useRef(0);

  function incrementCount() {
    return (count.current.value = Number(count.current.value) + 1);
  }

  const decrementCount = () => {
    return (count.current.value = Number(count.current.value) - 1);
  };

  return (
    <>
      {console.log({ as: count.current.value })}
      <h1>Counter: {count.current.value}</h1>
      <div className="inputs">
        <p>Counter:</p>
        <button onClick={decrementCount}>-</button>
        <input type="number" ref={count} value={count.current.value} disabled />
        <button onClick={incrementCount}>+</button>
      </div>
    </>
  );
}
