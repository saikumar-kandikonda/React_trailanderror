import React from 'react';
import './index.css';

const LoginForm=()=>{

    return(
<div align="center">
        <h1>Enter your name</h1><br></br>
        <input type="text" name="name" id="name"/><br></br>
        <h1>Enter your password</h1><br></br>
        <input type="password" name="password" id="password"/><br></br><br></br>
        <button>CLick here to Login</button><br></br>
        </div>
    );
}

export default LoginForm;