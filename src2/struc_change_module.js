
class StrucChangeModule{
	
	footPrintSession = [];

	enter(lineIndex, letterIndex) {
		var removed = [];
		
		//enter at end
		if (letterIndex >= struc.getLastLetterIndex()) {
			
			struc.addLine(lineIndex);
			this._createFootprintToken(lineIndex, letterIndex, "addLine", "enter", null);
		}
		//enter at begining or middle
		else {
			
			while (letterIndex < struc.getLastLetterIndex()) {
				var char = struc.remove(lineIndex, letterIndex + 1);
				removed.push(char);
				this._createFootprintToken(lineIndex, letterIndex + 1, "remove", "enter", char);		
			}
			
			struc.addLine(lineIndex + 1);
			this._createFootprintToken(lineIndex, letterIndex, "addLine", "enter", null);

			for (var i = 0; i < removed.length; i++) {
				struc.add(lineIndex + 1, i, removed[i]);
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
				while (letterIndex < struc.getLastLetterIndex()) {
					var char = struc.remove(lineIndex, letterIndex + 1);
					removed.push(char);
					this._createFootprintToken(lineIndex, letterIndex + 1, "remove", "backSpace", char);
				}
				
				struc.removeLine(lineIndex);
				this._createFootprintToken(lineIndex, letterIndex, "removeLine", "backSpace", null);

				for (var i = 0; i < removed.length; i++) {
					var j = struc.getLastLetterIndex();
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

	getInstructionFootprintSession() {
		return this.footPrintSession;
		this.footPrintSession = [];
	}

	_createFootprintToken(lineIndex, letterIndex, command, method, char) {
		var ift = new InstructionFootprintToken(lineIndex, letterIndex, command, method, char);
		this.footPrintSession.push(ift);
	}

}