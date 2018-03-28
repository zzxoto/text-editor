/*
	Main logic for setting Caret position
	Invokes vDom methods to ascertain edge cases for setting position.
*/
import $ from "jquery";
import * as globals from '../globals.js';
import PubSub from "../pubsub";
import vDom from "../virtual_dom";


function Caret(){
	this.lineIndex = 0;
	this.letterIndex = 0; 

	this.setIndices = function(lineIndex, letterIndex){
		this.lineIndex = lineIndex;
		this.letterIndex = letterIndex;
		//if letterIndex is beyond the last character, set it to be the last character
		this.letterIndex = vDom.lineContainsLetter(lineIndex, letterIndex)? letterIndex: vDom.getLastLetterIndex(lineIndex)+1;
		this.publish("index", {lineIndex: this.lineIndex, letterIndex: this.letterIndex});
	};

	this.shiftLeft = function(){	
		if(this.letterIndex <= 0){
			//caret is already at the left most. In this case we go to right most character one line above current
				if(this.lineIndex > 0){
					var letterIndex = vDom.getLastLetterIndex(this.lineIndex - 1);
					this.setIndices(this.lineIndex - 1, letterIndex);
				}
			}
		else
			this.setIndices(this.lineIndex, this.letterIndex-1);
	};

	this.shiftRight = function(){
		var rightMostIndex = vDom.getLastLetterIndex(this.lineIndex);
		if(this.letterIndex >= rightMostIndex){
			//caret is already at the right most. In this case we go to first character one line below current.
			if(this.lineIndex < vDom.getLastLineIndex())
				this.setIndices(this.lineIndex + 1, 0);
		}
		else
			this.setIndices(this.lineIndex, this.letterIndex + 1);
	};

	this.shiftUp = function(){
		if(this.lineIndex > 0 ){
			var aboveLastLetterIndex = vDom.getLastLetterIndex(this.lineIndex - 1);
			if(aboveLastLetterIndex >= this.letterIndex)
				this.setIndices(this.lineIndex - 1, this.letterIndex)
			else
				vDom.setIndices(this.lineIndex - 1, aboveLastLetterIndex);
		}
	};
	
	this.shiftDown = function(){
		if(this.lineIndex < vDom.getLastLineIndex()){
			var belowLastLetterIndex = vDom.getLastLetterIndex(this.lineIndex + 1);
			if(belowLastLetterIndex >= this.letterIndex)
				this.setIndices(this.lineIndex + 1, this.letterIndex);
			else
				this.setIndices(this.lineIndex + 1, belowLastLetterIndex); 
		}	 
	};
};

Caret.prototype = {...new PubSub(), ...Caret.prototype};
 
let caret = new Caret();
 
export default caret;
