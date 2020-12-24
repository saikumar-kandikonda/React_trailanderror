import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import "./index.css";


const HandlingEvents=()=>{
    const purple="#0000ff";

        const [bg,setBg]=useState(purple);
        const[name,Cname]=useState('click me');
    const bgChange=()=>{
        let newBg="#34495e";
        setBg(newBg);
        Cname('i changed dude!🤔');
    }
return(
<div className="handlingevents" style={{backgroundColor:bg}}>

<button onClick={bgChange}>{name}</button>

</div>

);

}
export default HandlingEvents;