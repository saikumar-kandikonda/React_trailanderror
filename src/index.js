import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FormsInReact from './FormsInReact';
import HandlingEvents from './HandlingEvents';
import reportWebVitals from './reportWebVitals';
import DigitalTimer from './DigitalTimer';
import IncrementDecrementValue from './IncrementDecrementValue';
import LoginForm from './LoginForm';

ReactDOM.render(
  <React.StrictMode>
    <App />
    
    {/* <LoginForm /> */}
    {/* this is login page in React */}
  {/* <FormsInReact /> */}
  {/* this functional component is a dmeo of forms in react */}
    {/* <HandlingEvents /> */}
    {/* THis functional componenet is a demo of handling events in react */}
    {/* <DigitalTimer />
    This functional component will display a digital timer */}
    {/* <IncrementDecrementValue />  */}
{/* This functional component will display a counter which increments and decrements a value on click */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
