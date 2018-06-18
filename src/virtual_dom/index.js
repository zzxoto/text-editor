import * as globals from '../globals.js';
import lineModule from './lineModule.js';
import PubSub from '../pubsub';

var virtual_dom = {
	struc: lineModule,

	insert: function(lineIndex, letterIndex, key){
		lineIndex = (lineIndex <= this.getLastLineIndex())? lineIndex : this.getLastLineIndex();
		letterIndex = (letterIndex <= this.getLastLetterIndex(lineIndex))? letterIndex : this.getLastLetterIndex(lineIndex);

		/*
		*If in the middle of line, shift the rest of the line down below as a new line
		*If in the end of line, shift down below as a new line
		*/
		if (key === "Enter"){
			this.insertNewLine(lineIndex, letterIndex);
		}
		else if (key === "Backspace"){
			if (letterIndex == 0 && lineIndex > 0) {
				return this.removeAndShiftUp(lineIndex);
			}
			else if (letterIndex > 0) {
				this.removeChar(lineIndex, letterIndex);
			}
		}
		else {
			this.insertChar(lineIndex, letterIndex, key);
		}
	},

	insertChar: function(lineIndex, letterIndex, char){
		var line = this.struc.getLine(lineIndex);
		line.insertChar(letterIndex, char);
		this.publish("changed");
	},

	removeChar: function(lineIndex, letterIndex){
		var line = this.struc.getLine(lineIndex);
		line.removeChar(letterIndex);		
		this.publish("changed");
	},

	/*
	Remaining letters starting from index `letterIndex` should is shifted to new line
	*/
	insertNewLine: function(lineIndex, letterIndex){
		var line = this.struc.getLine(lineIndex);
		var splits = line.split(letterIndex);
		line.setLine(splits[0]);
		this.struc.addLine(lineIndex + 1);
		line = this.struc.getLine(lineIndex + 1);
		line.setLine(splits[1]);
		this.publish("changed")
	},

	getLastLineIndex: function(){
		return this.struc.lastLineIndex;
	},

	getLastLetterIndex: function(lineIndex){
		var line = this.struc.getLine(lineIndex);
		return line.getLastLetterIndex();
	},

	getLines: function(){
		return this.struc;
	},

	removeAndShiftUp: function(lineIndex){//this has error
		var line1 = this.struc.getLine(lineIndex - 1);
		var line2 = this.struc.getLine(lineIndex);
		this.struc.removeLine(lineIndex);
		line1.append(line2);
		this.publish("changed");
	}
}	

virtual_dom = {...virtual_dom, ...new PubSub()};
export default virtual_dom;