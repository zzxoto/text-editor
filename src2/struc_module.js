class StrucModule {
  head = new LineFactory();
  lastLineIndex = 0;


  add(lineIndex, letterIndex, char) {
    let line = this._getLine(lineIndex);
    return line.add(letterIndex, char);
  }


  remove(lineIndex, letterIndex) {

    let line = this._getLine(lineIndex);
    return line.remove(letterIndex);
  }


  addLine(lineIndex) {

    if ( lineIndex == 0 || lineIndex > this.getLastLineIndex() + 1 ) {
      throw "Add Line constraint violation."
    }

    this.lastLineIndex++;
    
    let newLine = new LineFactory();
    let curr = this.head;
    let prev = curr;

    while(lineIndex > 0){
      prev = curr;
      curr = curr.next;
      lineIndex--;
    }

    prev.next = newLine;
    newLine.next = curr;
  }


  removeLine(lineIndex) {

    if ( lineIndex == 0 || lineIndex > this.getLastLineIndex() ) {
      throw "Remove Line constraint violation."
    }
    
    this.lastLineIndex--;

    let curr = this.head;
    let prev = curr;

    while(lineIndex > 0){
      prev = curr;
      curr = curr.next;
      lineIndex--;
    }

    prev.next  = curr.next;
  }


  getLastLetterIndex(lineIndex) {

    let line = this._getLine(lineIndex);
    return line.getLastLetterIndex();
  }


  getLastLineIndex() {

    return this.lastLineIndex;
  }


  getStructure() {
    
    let curr = this.head;
    let structure = [];
    let index = 0;

    while(curr){
      structure.push(curr.data);
      curr = curr.next;
      index++;
    }
    return structure;
  }


  _getLine(lineIndex) {

    if ( lineIndex > this.lastLineIndex ) {
      throw "Line Index greater than last line Index. Constraint violation."
    }
    let curr = this.head;
    let prev = curr;

    while(lineIndex > 0){
      prev = curr;
      curr = curr.next;
      lineIndex--;
    }
    return curr;
  }

}


/**
*
*data -> [] has lastLetterIndex 0
*
**/
class LineFactory{
  data = [];
  next = null;

  add(letterIndex, char) {
    if (letterIndex > data.length) {
      throw "Remove character constraint violation."
    }
    this.data = [...this.data];
    this.data.splice(letterIndex, 0, char);
    return char
  }

  remove(letterIndex) {
    if (letterIndex == 0 || letterIndex > data.length) {
      throw "Remove character constraint violation."
    }
    this.data = [...this.data];
    return this.data.splice(letterIndex - 1, 1)[0];
  }

  getLastLetterIndex() {
    return this.data.length;
  }

}
export default new StrucModule();
