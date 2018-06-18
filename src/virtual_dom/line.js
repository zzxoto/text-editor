import * as globals from '../globals.js';
/*
*LinkedList whose data field is Array<String>
*letterIndex is 0 for empty line WATCH OUT!!
*/
function LineFactory(){
	this.line = [];
	this.next = null;
}

/*
	returns True if line @param lineIndex is at least of size @param letterIndex
*/
LineFactory.prototype.getLastLetterIndex = function(){
	return this.line.length;
};

LineFactory.prototype.isEmpty = function(){
	return this.line.length <= 0;
};

/*
	inserts char at index letterIndex
	pops element from bottom of list if size of array is already full.
*/
LineFactory.prototype.insertChar = function(letterIndex, char){
	this.line.splice(letterIndex, 0, char);
	this.line = [...this.line];
};

/*
*When letterIndex = 0 removeRequest is for very begining of the line...
 in which case nothing is removed.
*When letterIndex = 1 removeRequest is for first character
*simply line.splice(1, 1) would remove second character
*so line.splice(letterIndex - 1, 1) is necessary
*/
LineFactory.prototype.removeChar = function(letterIndex){
	if ( letterIndex > 0) {
		this.line = [...this.line];
		this.line.splice(letterIndex - 1, 1);
	}
}

/**
 *Splits the line at `letterIndex` and returns splitted array
 *example: this.line = ["a", "b"]
 *this.split(1);//[["a"], ["b"]]
 */
LineFactory.prototype.split = function(letterIndex){
	return [ this.line.slice(0, letterIndex), this.line.slice(letterIndex, this.line.length) ];
}

LineFactory.prototype.setLine = function(line){
	this.line = line;
}

/**
*@param line, LineFactory object
*/
LineFactory.prototype.append = function(line){
	this.line = [...this.line, ...line.line];
	console.log(this.line);
	console.log(line);
}

export default LineFactory;



