import globals from '../globals.js';


/*
	LinkedList whose data field is Array<String>
*/
function LineFactory(){
	this.line = [];
	this.next = null;
}

/*
	returns True if line @param lineIndex is at least of size @param letterIndex
*/
LineFactory.prototype.getLastLetterIndex = function(){
	return this.line.length - 1;
};

LineFactory.prototype.isEmpty = function(){
	return this.line.length <= 0;
};

/*
	inserts char at index letterIndex
	pops element from bottom of list if size of array is already full.
*/
LineFactory.prototype.insertChar = function(letterIndex, char){
	let prefix = this.line.splice(0, letterIndex);
	this.line = [...prefix, char, ...this.line];
	if(this.line.length > globals.line_size)
		return this.line.pop();
};











