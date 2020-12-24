import React, { useState } from 'react';



const FormsInReact=()=>{
    const[Name,getName]=useState();
    const[FullName,setName]=useState();
 const Setvalue=()=>{
     setName(Name);
 }
    const getvalue=(event)=>{
console.log(Name);
getName(event.target.value);
}
      
    
return(
<div className="" style={{backgroundColor:'red'}}>
<h1 style={{color:'white'}}>Hello {FullName}</h1>
<input type="text" name="text" id="textbox" onChange={getvalue}/><br></br><br></br>
<button onClick={Setvalue}> click me😉</button>

</div>

);

}
export default FormsInReact;