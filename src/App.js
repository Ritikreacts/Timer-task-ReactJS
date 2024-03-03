import './App.css';
import React, { useState } from 'react';

// import Step1 from './components/step1';

function App() {
  const [count,setCount]=useState(0)
  const [timer,setTimer]=useState(0)
   if(timer===0){
    console.log("timer is set to 0")
   }
   else{
     const timeInMs = timer*1000
     setInterval(()=>{
       setCount(count+1)
     },timeInMs)
   }  

  return (  
    <div className='whole-screen'>
    <div className="counter-screen">
    <h1>Counter: {count}</h1>
      <div className="inputs">
      <p>Counter:</p>
      <button onClick={()=>{setCount(count-1)}}>-</button>
      <input type="text" value={count} disabled/>
      <button onClick={()=>{setCount(count+1)}}>+</button>

       {/* Auto increment part */}

      </div>
      <div className="inputs auto-increment">
      <p className='to-left'>Auto increment timer input:</p>
      <button onClick={()=>{setTimer(timer-1)}}>-</button>
      <input type="text" value={timer} disabled/>
      <button onClick={()=>{ setTimer(timer+1);}}>+</button>


      </div>
    </div>
    </div>
  )
}

export default App;
