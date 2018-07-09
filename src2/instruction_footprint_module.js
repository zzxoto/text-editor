/**
*Does Undo and Redo Operations. And generates additional commands for changing caret.
*
*two main datastructures for holding footprints. `mainStack a.k.a footPrintStack` and `undoStack a.k.a undoFootPrintStack`.
*
*footprint is pushed to mainstack from as per the user's keyboard inputs.
*footprint is poped from mainstack and pushed to undo stack when does undo action.
*Undo stack is buffer clears when user hits any other button.
*Redo operation feeds only on undo stack.
*
*==============================================================================================================
*
*Reversing FootPrintToken Protocol.
*
*if footprint.command == add:
* reverseFootprint.command = remove; reverseFootprint.letterIndex = footprint.letterIndex + 1;
*
*if footprint.command == remove:
* reverseFootprint.command = add; reverseFootprint.letterIndex = footprint.letterIndex - 1;
*
*if footprint.command == addLine:
* reverseFootprint.command = removeLine;
*
*if footprint.command == removeLine:
* reverseFootprint.command = addLine;
*/

class InstructionFootPrintModule {
  footPrintStack = new Stack();
  undoFootPrintStack = new Stack();

  addFootPrints(footPrints) {
    this.footPrintStack.push(footPrints); 
    return footPrints;
  }

  _reverseFootPrints(footPrints) {

    footPrints = this.footPrints.map(footPrint => {
      footPrint = {...footPrint};
      switch(footPrint.command) {
        case "add":
          footPrint.letterIndex++;
          footPrint.command = "remove";
          break;
        case "remove":
          footPrint.letterIndex--;
          footPrint.command = "add";
          break;
        case "addLine":
          footPrint.command = "removeLine";
          break;
        case "removeLine":
          footPrint.command = "addLine";
          break;
        default:
          throw "FootPrintToken command constraint violation.";
          break;
      }
    });
    return footPrints;
  }
}

class Stack {
  store = [];

  push(data) {
    this.store.push(data);
    return data;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.store.pop();
  }

  clear() {
    this.store = [];
  }

  isEmpty() {
    return this.store.length == 0;
  }
}

let instructionFootPrintModule = new InstructionFootPrintModule();
export { instructionFootPrintModule };