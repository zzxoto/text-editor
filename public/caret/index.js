import $ from "jquery";
import * as globals from '../globals.js';
import PubSub from "../pubSub";
import vDom from "../virtualDOM";

function Caret(){
	this.lineIndex = 0;
	this.letterIndex = 0;
	let caretInstance = this;

	//cannot bind to "this" because it would break Jquery;
	$("#editor").click(function(e){
		var clickX = e.clientX - $(this).offset().left;
	  var clickY = e.clientY - $(this).offset().top;
	  
	  var lineIndex = Math.floor(clickY / globals.line_height);
		var letterIndex = Math.round(clickX / globals.letter_width);
		
		console.log(lineIndex, letterIndex);
		lineIndex = vDom.containsLine(lineIndex)? lineIndex: vDom.getLastLineIndex();
		letterIndex = vDom.lineContainsLetter(lineIndex, letterIndex)? letterIndex: vDom.getLastLetterIndex(lineIndex);

	  caretInstance.publish("index", {lineIndex, letterIndex});
	});  
};

Caret.prototype = {...new PubSub(), ...Caret.prototype};
 	
 
export default Caret;
