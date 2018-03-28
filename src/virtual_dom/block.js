import globals from '../globals.js';

function BlockFactory(){
	this.block = {
		0: ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"],
		1: ["R", "a", "m", "e", "n"],
		2: ["v", "a", "r"], 
		3: [],
		4: [],
		5: [],
		6: [],
		7: [],
		8: [], 
		9: [],
		10: [],
		11: [],
		12: [],
		13: [],
		14: [],
		15: [],
		16: [],
		17: [],
		18: [],
		19: [],
	};
	this.lastLine = 0;
}

/*
	adds character at the line`lineIndex` at position `letterIndex`
	If adding character causes line to be greater than globals.line_size then pop and return the last element
*/
BlockFactory.prototype.insertChar = function(lineIndex, letterIndex, char){
	//divide and attach and merge
	let line = [...this.block[lineIndex]];
	let prefix = line.splice(0, letterIndex);
  prefix.push(char);
  this.block[lineIndex] = [...prefix, ...line];

  if(this.block[lineIndex].length > 	globals.line_size)
  	return this.block[lineIndex].pop();
}

/*
	returns the character at specific lineIndex and charIndex
*/
BlockFactory.prototype.getChar = function(lineIndex, charIndex){
	return this.block[lineIndex][charIndex];
}

BlockFactory.prototype.getLastLineIndex = function(){
	for(var i in this.block){
		if(this.block[i].length === 0)
			return i-1;//CAN BE -1 NEED TO BE CAREFUL
	}
	return 19;
};

BlockFactory.prototype.getLastLetterIndex = function(lineIndex){
	return this.block[lineIndex].length-1;
}

/*
	returns True if line @param lineIndex is at least of size @param letterIndex
*/
BlockFactory.prototype.lineContainsLetter = function(lineIndex, letterIndex){
	return this.block[lineIndex].length >= letterIndex;
}

BlockFactory.prototype.prettyPrint = function(){
	for(var i in this.block){
		console.log(this.block[i]);
	}
}

BlockFactory.prototype.getLine = function(lineIndex){
	return this.block[lineIndex];
}

/*
	@param  lineIndex {Number},
	@param line {Array<String>}
*/
BlockFactory.prototype.setLine = function(lineIndex, line){
	this.block[lineIndex] = line;
}

/*
if @param lineIndex === null
	Shifts every line a step up
	Returns the first line
if @param lineIndex === number
	pops line @index lineIndex
	shifts everything up upto the lineIndex
*/
BlockFactory.prototype.shiftUp = function(lineIndex){
	lineIndex = lineIndex? lineIndex: 0;
	var toReturn = this.block[0];
	for(var i = 1; i < globals.block_size; i++){
		this.block[i - 1] = this.block[i]; 
	}
	this.block[globals.block_size - 1] = [];
	return toReturn;
}


export default BlockFactory;
