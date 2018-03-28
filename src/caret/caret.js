/*
	-Listens to click event
	-Sets caret Position to DOM accordingly
*/
import $ from "jquery";
import * as globals from '../globals.js';
import PubSub from "../pubsub";
import caret from './index.js';

let editor = $("#editor");
let ca = $("#caret");

caret.subscribe("index", ({lineIndex, letterIndex})=>{
  lineIndex = globals.line_height * lineIndex;
  letterIndex = globals.letter_width * letterIndex;
  ca.css({
  	top: lineIndex,
  	left: letterIndex
  })
});

$("#editor").click(function(e){
  var clickX = e.clientX - $(this).offset().left;
  var clickY = e.clientY - $(this).offset().top;
  
  var lineIndex = Math.floor(clickY / globals.line_height);
  var letterIndex = Math.round(clickX / globals.letter_width);
    
  caret.setIndices(lineIndex, letterIndex);
});  
