/*
	Main logic for setting Caret position
	Invokes vDom methods to ascertain edge cases for setting position.
*/
import $ from "jquery";
import * as globals from '../globals.js';
import PubSub from "../pubsub";
import vDom from "../virtual_dom";



function Caret(){
	this.caretY = 0;
	this.caretX = 0; 

	this.setIndices = function(lineIndex, letterIndex){
		this.caretY = lineIndex;
		//if letterIndex is beyond the last character, set it to be the last character
		this.caretX = (letterIndex <= vDom.getLastLetterIndex(lineIndex))?
			letterIndex: vDom.getLastLetterIndex(lineIndex);
		cssChanges(this.caretY, this.caretX);
	};

	this.shiftLeft = function(){	
		if(this.caretX <= 0){
			//caret is already at the left most. In this case we go to right most character one line above current
				if(this.caretY > 0){
					var caretX = vDom.getLastLetterIndex(this.caretY - 1) + 1;
					this.setIndices(this.caretY - 1, caretX);
				}
			}
		else
			this.setIndices(this.caretY, this.caretX-1);
	};

	this.shiftRight = function(){
		var rightMost = vDom.getLastLetterIndex(this.caretY);
		if(this.caretX >= rightMost){
			//caret is already at the right most. In this case we go to first character one line below current.
			if(this.caretY < vDom.getLastLineIndex())
				this.setIndices(this.caretY + 1, 0);
		}
		else
			this.setIndices(this.caretY, this.caretX + 1);
	};

	this.shiftUp = function(){
		if(this.caretY > 0 ){
			var upperLastCaretX = vDom.getLastLetterIndex(this.caretY - 1);
			if(upperLastCaretX >= this.caretX)
				this.setIndices(this.caretY - 1, this.caretX);
			else
				this.setIndices(this.caretY - 1, upperLastCaretX);
		}
	};
	
	this.shiftDown = function(){
		if(this.caretY < vDom.getLastLineIndex()){
			var belowLastCaretX = vDom.getLastLetterIndex(this.caretY + 1);
			if(belowLastCaretX >= this.caretX)
				this.setIndices(this.caretY + 1, this.caretX);
			else
				this.setIndices(this.caretY + 1, belowLastCaretX); 
		}	 
	}
};
let caret = new Caret();
export default caret;


let editor = $("#editor");
let ca = $("#caret");

editor.click(function(e){
  var clickX = e.clientX - $(this).offset().left;
  var clickY = e.clientY - $(this).offset().top;
  var lineIndex = Math.floor(clickY / globals.line_height);
  var letterIndex = Math.round(clickX / globals.letter_width);
  caret.setIndices(lineIndex, letterIndex);
});  

function cssChanges(caretY, caretX){
	var caretY = globals.line_height * caretY;
  var caretX = globals.letter_width * caretX;
  ca.css({
  	top: caretY,
  	left: caretX
  })
}
