import struc from './struc_module.js';

class CaretChangeModule{
	lineIndex = 0;
	letterIndex = 0;

	footPrintTokenChange() {
		throw "To be implemented.";
	}

	getCaretPosition() {
		return [this.lineIndex, this.letterIndex];
	}
	
	_setCaretPosition(y, x) {
		y = struc.getLastLineIndex() >= y? y: struc.getLastLineIndex();
	  x = struc.getLastLetterIndex(y) >= x? x: struc.getLastLetterIndex(y);
	 	this.lineIndex = y;
	  this.letterIndex = x;
	}

	arrow(arrowType) {
		let y = this.lineIndex;
		let x = this.letterIndex;
		switch (arrowType) {
			case "ArrowUp":
				this._setCaretPosition(y - 1, x);
				break;
	    case "ArrowLeft":
	    	this._setCaretPosition(y, x - 1);
	    	break;
	    case "ArrowDown":
	    	this._setCaretPosition(y + 1, x);
	    	break;
	    case "ArrowRight":
	    	this._setCaretPosition(y, x + 1);
	    	break;
	    default:
	    	throw "Arrow cases constraint violation."
	    	break;
		}	
	}

	/**
	*Assumption that x >= 0 and y >= 0 ??
	*/
	mouseClick(y, x) {
		this._setCaretPosition(y, x);
	}
}


export default new CaretChangeModule();