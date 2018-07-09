import { struc } from './struc_module.js';
import InstructionFootprintToken from './instruction_footprint_token.js';

/**
*Footpprint rule
*
*Add Character
*State | | -> Instruction add(0, 0, 'a') -> State | a | -> Footprint (0, 0, 'add', <methodname>, a)
*
*Remove Character
*State | a | -> Instruction remove(0, 1) -> State | | -> Footprint (0, 1, 'remove', <methodname>, a)
*
*Add Line
*State | a | -> Instruction addLine(1) -> State | a | -> Footprint (1, 0, <methodName>, null)  
*																								|   |
*Remove Line
*State | a | -> Instruction removeLine(1) -> State | a | -> Footprint (1, 0, <methodName>, null)  
*			 |   |	
*
*Add Line & Remove Line's, lineIndex and letterIndex is of form (any, 0) i.e. letter Index is always 0
*/
class StrucChangeModule{
	
	footPrintSession = [];

	enter(lineIndex, letterIndex) {
		var removed = [];
		
		//enter at end
		if (letterIndex >= struc.getLastLetterIndex(lineIndex)) {
			
			struc.addLine(lineIndex + 1);
			this._createFootprintToken(lineIndex + 1, 0, "addLine", "enter", null);
		}
		//enter at begining or middle
		else {
			
			while (letterIndex < struc.getLastLetterIndex(lineIndex)) {
				var char = struc.remove(lineIndex, letterIndex + 1);
				removed.push(char);
				this._createFootprintToken(lineIndex, letterIndex + 1, "remove", "enter", char);		
			}
			
			lineIndex++;
			struc.addLine(lineIndex);
			this._createFootprintToken(lineIndex, letterIndex, "addLine", "enter", null);

			for (var i = 0; i < removed.length; i++) {
				struc.add(lineIndex, i, removed[i]);
				this._createFootprintToken(lineIndex, i, "add", "enter", char);
			}
		}
	}

	backSpace(lineIndex, letterIndex) {
		if (letterIndex > 0) {

			var char = struc.remove(lineIndex, letterIndex);
			this._createFootprintToken(lineIndex, letterIndex, "remove", "backSpace", char);
		}
		//backSpace at begining
		else {

			if (lineIndex == 0) {
				
				return;
			}
			else {

				var removed = [];
				while (letterIndex < struc.getLastLetterIndex(lineIndex)) {
					var char = struc.remove(lineIndex, letterIndex + 1);
					removed.push(char);
					this._createFootprintToken(lineIndex, letterIndex + 1, "remove", "backSpace", char);
				}
				
				struc.removeLine(lineIndex);
				this._createFootprintToken(lineIndex, 0, "removeLine", "backSpace", null);
				lineIndex--;

				for (var i = 0; i < removed.length; i++) {
					var j = struc.getLastLetterIndex(lineIndex);
					var char = removed[i];
					struc.add(lineIndex, j, char);
					this._createFootprintToken(lineIndex, j, "add", "backSpace", char);
				}
			}
		}
	}

	character(lineIndex, letterIndex, char) {
		struc.add(lineIndex, letterIndex, char);
		this._createFootprintToken(lineIndex, letterIndex, "add", "character", char)
	}

	getFootPrints() {
		let toReturn = this.footPrintSession;
		this.footPrintSession = [];
		return toReturn;
	}

	getStructure() {
		return struc.getStructure();
	}

	_createFootprintToken(lineIndex, letterIndex, command, method, char) {
		var ift = new InstructionFootprintToken(lineIndex, letterIndex, command, method, char);
		this.footPrintSession.push(ift);
	}

}

export default new StrucChangeModule();