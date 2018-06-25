
class CaretChangeModule{
	lineIndex = 0;
	letterIndex = 0;

	footPrintTokenChange() {
		throw "To Be Implemented";
	}

	getCaretPosition() {
		return [this.lineIndex, this.letterIndex];
	}
	
	arrow(arrowType) {

	}

	/**
	*Assumption that x >= 0 and y >= 0 ??
	*/
	mouseClick(y, x) {
		y = struc.getLastLineIndex() >= y? struc.getLastLineIndex(): y;
	  x = struc.getLastLetterIndex(y) >= letterIndex? struc.getLastLetterIndex(y): x;
	  this.lineIndex = y;
	  this.letterIndex = x;
	}
}