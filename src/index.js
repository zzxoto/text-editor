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
$ta.keydown(function(e){
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

$("#editor").click(()=>{
    $ta.focus();
})