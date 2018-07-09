import $ from "jquery";
import { globals } from './globals.js';
import caretChangeModule from './caret_change_module.js';
import strucChangeModule from "./struc_change_module.js";
import { reactBridge } from "./react_bridge.js";
import { instructionFootPrintModule } from './instruction_footprint_module.js';

var $ta = $("textarea");

$(function(){
	$ta.focus();
	$ta.keydown(function(e){
		$ta.val("");
	  var lineIndex = caretChangeModule.getCaretPosition()[0];
	  var letterIndex = caretChangeModule.getCaretPosition()[1];

	  switch(e.key){
	    case "Enter":
	    	strucChangeModule.enter(lineIndex, letterIndex);
	    	break;
	    case "Backspace":
	    	strucChangeModule.backSpace(lineIndex, letterIndex);
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
	  let footPrints = strucChangeModule.getFootPrints();
	  //console.log(JSON.stringify(footPrints, null, 2));
	  if (footPrints.length > 0) {
		  footPrints = instructionFootPrintModule.addFootPrints(footPrints);
		  caretChangeModule.footPrint(footPrints);
	  	reactBridge.render(strucChangeModule.getStructure());
	  	caretCssChanges(...caretChangeModule.getCaretPosition());
	  }
	});

 	$("#codeArea").click(function(e){
 		$ta.focus(); 
	 	var clickX = e.clientX - $(this).offset().left;
	  var clickY = e.clientY - $(this).offset().top;
	  var lineIndex = Math.floor(clickY / globals.line_height);
	  var letterIndex = Math.round(clickX / globals.letter_width);
	  caretChangeModule.mouseClick(lineIndex, letterIndex);
	  caretCssChanges(...caretChangeModule.getCaretPosition());
 	})

 	let ca = $("#caret");
	function caretCssChanges(caretY, caretX){
	  var caretY = globals.line_height * caretY;
	  var caretX = globals.letter_width * caretX;
	  ca.css({
	    top: caretY,
	    left: caretX
	  })
	}

})
