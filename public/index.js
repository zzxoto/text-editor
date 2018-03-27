/*
  Listens to key presses and calls functions appropriately
*/

/*
    This is where Raect magic happens
*/
import App from './react_components/app.js';  
import ReactDOM from 'react-dom';
import React from 'react';
ReactDOM.render( <App />, document.getElementById("root"));

import $ from "jquery";

//vDOM is Data Structure representation of DOM
import vDom from './virtual_dom';

//logic for caret
import caret from './caret';

//DOM reflection for caret
import './caret/caret.js';

/* 
    e.key = "x"
    e.keyCode = 88
*/
$("textarea").keydown(function(e){
  switch(e.key){
    case "Enter":
    console.log("Enter"); 
    break;
    case "Tab":
    console.log("Tab");
    break;
    case " ":
    console.log("Space");
    break;
    case "Backspace":
    console.log("Backspace");
    break;  
    case "ArrowUp":
    caret.shiftUp();
    break;
    case "ArrowLeft":
    caret.shiftLeft();
    break;
    case "ArrowDown":
    caret.shiftDown();
    break;
    case "ArrowRight":
    caret.shiftRight(); 
    break;
    default:
    break;
  }
});