import {Cursor} from './Cursor';
import {Text} from './Text';

export class Controller {

  constructor() {
    this.mementos = [];
    this.cursor = new Cursor();
    this.text = new Text();
    this.clipboard = [];
  }

  left() {
    if (!this._isInSelection() && this.cursor.head == 0)
      return;

    if (this._isInSelection()) {
      this.cursor.head = this.cursor.low;
      this.cursor.tail = this.cursor.head;
    }
    else {
      this.cursor.head -= 1;
    }
  }

  right() {
    if (!this._isInSelection() && this.cursor.head == this.text.length)
      return;

    if (this._isInSelection()) {
      this.cursor.head = this.cursor.high;
      this.cursor.tail = this.cursor.head;
    }
    else {
      this.cursor.head += 1;
    }
  }

  up() {
    let up = this._up();
    this.cursor.head = up;
    this.cursor.tail = up;
  }

  down() {
    let down = this._down();
    this.cursor.head = down;
    this.cursor.tail = down;
  }

  selectLeft() {
    if (this.cursor.head == 0)
      return;

    this.cursor.head -= 1;
  }

  selectRight() {
    if (this.cursor.head == this.text.length)
      return;

    this.cursor.head += 1;
  }

  selectUp() {
    let up = this._up();
    this.cursor.head = up;
  }

  selectDown() {
    let down = this._down();
    this.cursor.down = down;
  }
  copy() {
    if (!this._isInSelection()) {
      return;
    }
    this.clipboard = this.text.getText(this.cursor.low, this.cursor.high - 1);
  }
  paste() {
    this.insert(this.clipboard);
  }
  
  //if selection delete low to high - 1
  //else delete low - 1
  backspace() {
    if (!this._isInSelection() && this.cursor.head == 0)
      return;

    let memento = new Memento();
    memento.add(new RestoreCursor(this.cursor));

    if (this._isInSelection()) {
      memento.add(this._delete(this.cursor.low, this.cursor.high - 1));
      this.cursor.head = this.cursor.low;
      this.cursor.tail = this.cursor.head;
    }
    else {
      this._delete(this.cursor.low - 1, this.cursor.low - 1);
      this.cursor.head -= 1;
      this.cursor.tail -= 1;
    }
    
    this.mementos.push(memento);
  }

  delete() {
    if (!this._isInSelection() && this.cursor.head == this.text.length)
      return;

    let memento = new Memento();
    memento.add(new RestoreCursor(this.cursor));

    if (this._isInSelection()) {
      memento.add(this._delete(this.cursor.low, this.cursor.high - 1));
      this.cursor.head = this.cursor.low;
      this.cursor.tail = this.cursor.head;
      
    }
    else {
      memento.add(this._delete(this.cursor.low, this.cursor.low));
    }
    
    this.mementos.push(memento);
  }

  //if selection
  insert(chars) {
    let memento = new Memento();
    memento.add(new RestoreCursor(this.cursor));

    if (this._isInSelection()) {
      memento.add(this._delete(this.cursor.low, this.cursor.high - 1));
      this.cursor.head = this.cursor.low;
      this.cursor.tail = this.cursor.head;
    }
    memento.add(this._insert(this.cursor.low, chars));
    this.cursor.head += chars.length;
    this.cursor.tail = this.cursor.head; 
  }

  undo() {
    if (!this.mementos.length)
      return;
    
    let memento = this.mementos.pop();
    memento.restore();
  }

  _isInSelection() {
    return this.cursor.head != this.cursor.tail;
  }

  _delete(from, to) {
    return new Delete(this.text, from, to).exec();
  }

  _insert(from, chars) {
    return new Insert(this.text, from, chars).exec();
  }
  
  _restoreCursor() {
    return new RestoreCursor(this.cursor);
  }

  //TODO test
  _up() {
    let head = this.cursor.head,
      pnl = this.text.getPrevNewLineIndex(head),
      ppnl = this.text.getPrevNewLineIndex(pnl);

    pnl = pnl == -1? 0: pnl,
    ppnl = ppnl == -1? 0: pnl;

    let newHead = (ppnl + (head - pnl)) <= pnl? 
      ppnl + (head - pnl): pnl;

    return newHead;
  }

  //TODO test
  _down() {
    let head = this.cursor.head,
      pnl = this.text.getPrevNewLineIndex(head),
      nnnl = this.text.getNextNewLineIndex(head),
      nnl = this.text.getNextNewLineIndex(nnl);
    
    pnl = pnl == -1? 0: pnl;
    nnl = nnl == -1? this.text.length: nnl;
    nnnl = nnnl == -1? this.text.length: nnnl;
    
    let newHead = (nnl + (head - pnl)) <= nnnl?
      nnl + (head - pnl): nnnl;
    
    return newHead;
  }

  _bottomLineIndex(i) {

  }
}