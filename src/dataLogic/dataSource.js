import { backspace, char, enter, tab, arrow } from '../actions';
import { Text } from './text';
export class DataSource {

  
  constructor() {
    this.x = 0;
    this.y = 0;
    this.text = new Text();
  }
  //returns { lines: Array, x: integer, y: integer }
  getData() {
    let self = this;

    return {
      lines: self.text.getLines(),
      x: self.x,
      y: self.y
    }
  }

  //param { type: String, key: String }
  //returns X
  setChange(param) {
    let text = this.text,
      x = this.x,
      y = this.y,
      result;

    if (param.type == 'character') {
      result = char(text, x, y, param.key);
    }
    else if (param.type == 'control') {
      switch (param.key) {
        case "enter":
          result = enter(text, x, y);
          break;
        case "backspace":
          result = backspace(text, x, y);
          break;
        case "arrowup":
        case "arrowdown":
        case "arrowleft":
        case "arrowright":
          result = arrow(text, x, y, param.key);
          break;
      }
    }
    this.x = result? result.x: this.x;
    this.y = result? result.y: this.y;
  }


  //mouse click calls this.
  //this is temporary
  setXY(x, y) {
    this.x = x;
    this.y = y;
  }
}