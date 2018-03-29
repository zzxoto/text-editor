import * as globals from '../globals.js';
import lineModule from './lineModule.js';
import PubSub from '../pubsub';

var virtual_dom = {
	struc: lineModule,

	insertChar: function(lineIndex, letterIndex, char){
		var line = this.struc.getLine(lineIndex);
		
		if(!line){
			this.struc.addLine(lineIndex);
			return this.insertChar(lineIndex, letterIndex, char);
		}

		var _char = line.insertChar(letterIndex, char);
		if(_char){
			this.insertChar(lineIndex + 1, 0, _char);
		}
		this.publish("changed");
	},

	removeChar: function(lineIndex, letterIndex){
		var line = this.struc.getLine(lineIndex);
		
		if(!line.removeChar(letterIndex)){
			//backspace at the very first of line.
			console.log("backspace at very first");
		}
		this.publish("changed");
	},

	/*
	Remaining letters starting from index `letterIndex` should is shifted to new line
	*/
	insertNewLine: function(lineIndex, letterIndex){
		var line = this.struc.getLine(lineIndex);

		//adding new line
		var newLineArr = line.line.slice(letterIndex);
		this.struc.addLine(lineIndex + 1, newLineArr);

		//slicing from previous line
		line.line = line.line.slice(0, letterIndex);
		this.publish("changed")
	},

	getLastLineIndex: function(){
		return this.struc.lastLineIndex;
	},

	getLastLetterIndex: function(lineIndex){
		var line = this.struc.getLine(lineIndex);
		if(!line)
			return -1;
		return line.getLastLetterIndex();
	},

	getLines: function(){
		return this.struc;
	}
}	

virtual_dom = {...virtual_dom, ...new PubSub()};
export default virtual_dom;