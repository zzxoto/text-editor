import {Iterator} from './Iterator';

export class Text {
  constructor() {
    this.chars = ['EOF'];//eof file always present at last
  }
  get length() {
    return this.chars.length - 1;
  }

  insert(from, chars) {
    if (from > this.length || from < 0)
      throw new Error('IndexOutOfBound');

    let prefix = this.chars.splice(0, from);
    let suffix = this.chars;
    this.chars = [...prefix, ...chars, ...suffix];
  }

  //deletes inclusive from [from, to]
  delete(from, to) {
    if (from >= this.length || to >= this.length || from < 0 || to < 0 ) {
      throw new Error('IndexOutOfBound');
    }
    
    if (from > to)
      throw new Error('IllegalArgument');

    return this.chars.splice(from, to - from + 1);
  }

  getNextNewLineIndex(index) {
    if (index < 0 || index > this.length)
      throw new Error('IndexOutOfBound');

    for (var i = index + 1; i < this.length; i++ ) {
      if (this.chars[i] == '\n')
        return i;
    }
    return -1;
  }
  getPrevNewLineIndex(index) {
    if (index < 0 || index > this.length)
      throw new Error('IndexOutOfBound');

    for (var i = index - 1; i >= 0; i-- ) {
      if (this.chars[i] == '\n')
        return i;
    }
    return -1;
  }
  
  iterator(from = 0, to = this.chars.length - 1) {
    return new Iterator(this.chars)
      .from(from)
      .to(to);
  }
}