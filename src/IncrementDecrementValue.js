import React, { useState } from 'react';
import './App.css';

function IncrementDecrementValue() {
let[count,setcount]=useState(0);

const resetto=()=>{
  setcount(0);
}
  const increment=()=>{
setcount(count+1);
console.log(count);
  }
  const decrement=()=>{
    if(count<1){alert("count is 0 cant be decremented");}
    else{
    setcount(count-1);
    console.log(count);
    }
      }
  return (
    <div className="App">
      <div id="counter"><h1>{count}</h1></div><br></br><br></br>
      <button onClick={increment}>clcik here to increment </button><br></br>
      <button onClick={decrement}>clcik here to decrement </button><br></br>
      <button onClick={resetto}>RESET</button>

    </div>
  );
}

export default IncrementDecrementValue;
