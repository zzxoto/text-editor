 class InstructionFootprintToken {
 	
 	//Integer >= 0
 	lineIndex;
 	
 	//Integer >= 0
 	letterIndex;
 	
 	//'add' || 'remove' || 'addLine' || 'removeLine'
 	command;

 	//method in struc_change_module that caused the change
 	method;

 	//Alpha-numeric-symbols
 	character;

 	constructor(lineIndex, letterIndex, command, method, character) {
 		this.lineIndex = lineIndex;
 		this.letterIndex = letterIndex;
 		this.command = command;
 		this.method = method;
 		this.character = character;
 	}
 }