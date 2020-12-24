import React, { useState } from 'react';
import './App.css';

function DigitalTimer() {
    let newTime=new Date().toLocaleTimeString();
const[cTime,SetCTime]=useState(newTime);

const UpdateTime=()=>{
    newTime=new Date().toLocaleTimeString();
    SetCTime(newTime);
}
setInterval(UpdateTime,1000);
  return (
    <div className="App">
      <div id="counter"><h1>{cTime}</h1></div><br></br><br></br>
      

    </div>
  );
}

export default DigitalTimer;
