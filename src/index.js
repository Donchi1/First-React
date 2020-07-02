import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from "./Components/App";
//import HookApp from "./hooks/HookApp"
import StartApp from "./STARTAPP/StartApp"



ReactDOM.render(
  <React.StrictMode>
   {/*<App /> */ } 
   { /*<HookApp /> */}
    <StartApp />  
  </React.StrictMode>,
  document.getElementById('root')
);
