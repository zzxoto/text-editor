import globals from '../globals.js';
import lineModule from './lineModule.js';

var virtual_dom = {
	struc: lineModule,

	insertChar: function(lineIndex, letterIndex, char){
		var line = struc.getLine(lineIndex);
		
		if(!line){
			struc.addLine(lineIndex);
			return this.insertChar(lineIndex, letterIndex, char);
		}

		var _char = line.insertChar(letterIndex);
		if(_char)
			this.insertChar(lineIndex + 1, 0, _char);
	},


	getLastLineIndex: function(){
		return this.struc.lastLineIndex;
	},


	getLastLetterIndex: function(lineIndex){
		var line = struc.getLine(lineIndex);
		if(!line)
			return -1;
		return line.getLastLetterIndex();
	}

}	