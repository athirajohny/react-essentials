import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  React.createElement("h1",{style: {color:"blue"}},"Heyy Everyone!"),
  React.createElement("ul",null,
  React.createElement("li",null,"Monday"),
  React.createElement("li",null,"Tuesday"),
  React.createElement("li",null,"Wednesday"),
  React.createElement("li",null,"Thursday"),
  ),
  document.getElementById('root')
);



