/*
This is where React magic happens
*/
import Root from './react_components/Root.js';  
import ReactDOM from 'react-dom';
import React from 'react';
ReactDOM.render( <Root />, document.getElementById("react-entry"));

//Hard to resist jquery
import $ from "jquery";

//vDOM is virtual Data Structure representation of DOM
import vDom from './virtual_dom';

//logic for caret
import caret from './caret';

//For pulling this file into dependency graph of webpack
import './caret/caret.js';

/*  
Listens to key presses and calls functions appropriately 
e.key = "x"
e.keyCode = 88
*/
var $ta = $("textarea");

$(function(){
$ta.keydown(function(e){
  var caretY = caret.caretY;
  var caretX = caret.caretX;
  switch(e.key){
    case "Enter":
    vDom.insert(caretY, caretX, e.key);
    caret.shiftDown();
    break;
    case "Tab":
    console.log("Tab");
    break;
    case "Backspace":
    vDom.insert(caretY, caretX, e.key);
    caret.shiftLeft();
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
    if(e.key.length === 1){//avoiding SHIFT, CONTROL, etc
      vDom.insert(caretY, caretX, e.key);
      caret.shiftRight();
      break; 
    }
  }
  $ta.val("");
});
  $ta.focus();
}); 

$("#editor").click(()=>{
  $ta.focus(); 
})