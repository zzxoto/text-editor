function BlockFactory(){
	this.block = {
		0: [],
		1: [],
		2: [],
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
	adds character at the specific line and specific position
*/
BlockFactory.prototype.insertChar = function(lineIndex, letterIndex, char){
	let line = [...this.block[lineIndex]];
	let prefix = line.splice(0, letterIndex);
  prefix.push(char);
  this.block[lineIndex] = [...prefix, ...line];
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
			return i;
	}
	return 19;
};

BlockFactory.prototype.getLastLetterIndex = function(lineIndex){
	return this.block[lineIndex].length - 1;
}

/*
	returns True if line @param is of size letterIndex
*/
BlockFactory.prototype.lineContainsLetter = function(lineIndex, letterIndex){
	return this.block[lineIndex].length <= letterIndex;
}


BlockFactory.prototype.prettyPrint = function(){
	for(var i in this.block){
		console.log(this.block[i]);
	}
}


export default BlockFactory;