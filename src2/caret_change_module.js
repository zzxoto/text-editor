import struc from './struc_module.js';
console.log(struc);
class CaretChangeModule{
	lineIndex = 0;
	letterIndex = 0;

	footPrintTokenChange() {
		throw "To be implemented.";
	}

	getCaretPosition() {
		return [this.lineIndex, this.letterIndex];
	}
	
	arrow(arrowType) {
		throw "To be implemented."
	}

	/**
	*Assumption that x >= 0 and y >= 0 ??
	*/
	mouseClick(y, x) {
		y = struc.getLastLineIndex() >= y? y: struc.getLastLineIndex();
	  x = struc.getLastLetterIndex(y) >= x? x: struc.getLastLetterIndex(y);
	  this.lineIndex = y;
	  this.letterIndex = x;
	}
}


export default new CaretChangeModule();