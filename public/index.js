import $ from "jquery";
import * as globals from './globals.js';
import vDOM from './virtualDOM';
import Caret from './caret';

let caret = new Caret();

caret.subscribe("index", function(args){
    let lineIndex = args[0];
    let letterIndex = args[1];
    console.log(lineIndex, letterIndex); 
});
 
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
    console.log("Arrow");
    break;
    case "ArrowLeft":
    console.log("Arrow");
    break;
    case "ArrowDown":
    console.log("Arrow");
    break;
    case "ArrowRight":
    console.log("Arrow");
    break;
    default:
    break;
  }
});