import $ from "jquery";
import globals from './globals.js';
import caretChangeModule from './caret_change_module.js';
import strucChangeModule from "./struc_change_module.js";
import screen from "./screen.js";

var $ta = $("textarea");

$(function(){
	console.log(globals);
	$ta.focus();
	$ta.keydown(function(e){
		console.log('Keyboard event');
	  var lineIndex = caret.getCaretPosition()[0];
	  var letterIndex = caret.getCaretPosition()[1];

	  /**
	  *TODO: FootprintToken
	  */
	  switch(e.key){
	    case "Enter":
	    	strucChangeModule.enter(lineIndex, letterIndex);
	    break;
	    case "Backspace":
	    	strucChangeModule.backsSpace(lineIndex, letterIndex);
	    break;  
	    case "ArrowUp":
	    case "ArrowLeft":
	    case "ArrowDown":
	    case "ArrowRight":
	    	caretChangeModule.arrow(e.key);
	    break;
	    default:
	    	if (e.key.length === 1) {//alpha-numerics-symbols
	      	strucChangeModule.character(lineIndex, letterIndex, e.key);
	    	}	
	  }
	  screen.render(strucChangeModule.getStructure());
	  $ta.val("");
	});

 	$("#editor").click(function(e){
 		$ta.focus(); 
	 	var clickX = e.clientX - $(this).offset().left;
	  var clickY = e.clientY - $(this).offset().top;
	  var lineIndex = Math.floor(clickY / globals.line_height);
	  var letterIndex = Math.round(clickX / globals.letter_width);
	  caretChangeModule.mouseClick(lineIndex, letterIndex);
 	})
})
