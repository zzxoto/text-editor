//[x, y] means inclusive x to y range
//this.lines is at minimum [[]]

export class Text{

  constructor() {
    this.lines = [[]];
  }

  getLines() {
    return this.lines;
  }

  //yIndex can be [0, this.lines.length - 1]
  getLine(yIndex) {
    return this.lines[yIndex];
  }

  //yIndex can be [0, this.lines.length]
  addLine(yIndex) {
    this.lines.splice(yIndex, 0, []);
  }

  //yIndex can be [0, this.lines.length - 1]
  removeLine(yIndex) {
    let line = this.getLine(yIndex);
    this.lines.splice(yIndex, 1);

    if (this.lines.length == 0)
      this.lines = [[]];
    
    return line;
  }

  //xIndex can be [0, line.width]
  //yIndex can be [0, this.lines.length - 1]
  addCharAt(xIndex, yIndex, char) {
    let line = this.lines[yIndex];
    line.splice(xIndex, 0, char);
  }

  //xIndex can be [0, line.width - 1]
  //yIndex can be [0, this.lines.length - 1]
  removeCharAt(xIndex, yIndex) {
    let line = this.lines[yIndex];
    return line.splice(xIndex, 1)[0];
  }

  //xIndex can be [0, line.width - 1]
  //yIndex can be [0, this.lines.length - 1]
  getCharAt(xIndex, yIndex) {
    return this.lines[yIndex][xIndex];
  }

  //is >= 0
  getLastLineIndex() {
    return this.lines.length - 1;
  }

  //is -1 for empty line.
  getLastCharIndex(yIndex) {
    return this.lines[yIndex].length - 1;
  }

  shiftUp(yIndex) {
    this.lines[yIndex - 1] = this.lines[yIndex - 1].concat(this.lines[yIndex]);
    this.removeLine(yIndex);
  }
}