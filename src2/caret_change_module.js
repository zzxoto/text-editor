
import { struc } from './struc_module.js';
import { globals } from './globals.js';
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

	footPrint(footPrints) {

    //only concerned with final footprintToken in the most cases.
		let footPrint = footPrints[footPrints.length - 1];

    let enter = () => {
      //set caret at begining of the line when enter.
      this._setCaretPosition(footPrint.lineIndex, 0);
    }

    let backSpace = () => {
      let removeLineFootPrint = footPrints.find(fp => fp.command === "removeLine");

      //backspace to character
      if (!removeLineFootPrint) {
        return this._setCaretPosition(footPrint.lineIndex, footPrint.letterIndex - 1);  
      }
      //backspace at begining of line.
      //half of instruction is to delete letters
      //other half is to add letters at above line
      //1 instruction is to remove line.
      //Thus, caret should be positioned at ( lastLetterIndexAtAppropriateLine - (footPrints.length - 1) / 2 );
      let shiftLeftBy = (footPrints.length - 1) / 2;
      let aboveLineIndex = removeLineFootPrint.lineIndex - 1;
      this._setCaretPosition(aboveLineIndex, struc.getLastLetterIndex(aboveLineIndex) - shiftLeftBy);
    }

    let character = () => {
      this._setCaretPosition(footPrint.lineIndex, footPrint.letterIndex + 1);
    }
    eval(footPrint.method + '()');
	}
}
export default new CaretChangeModule();

