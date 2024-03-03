import React, {useState}from 'react'

export default function Step1() {
    const [count,setCount]=useState(0)
  return (
    <>
    <h1>Counter: {count}</h1>
      <div className="inputs">
      <p>Counter:</p>
      <button onClick={()=>{setCount(count-1)}}>-</button>
      <input type="text" value={count} disabled/>
      <button onClick={()=>{setCount(count+1)}}>+</button>


      </div>
      </>
  )
}
