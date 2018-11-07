//TODO test
import {SafeDelete} from './Delete';

export class Insert {
  constructor(text, from, chars) {
    this.text = text;
    this.from = from;
    this.to = this.from + chars.length - 1;
    this.chars = chars;
  }

  revert() {
    return new SafeDelete(this.text, this.from, this.to)
      .exec();
  }

  exec() {
    this.text.insert(this.from, this.chars);
    return this;
  }
}

//can't revert more than once
//can't exec more than once
//can't revert if exec not called
export class SafeInsert extends Insert {

  constructor(text, from, chars) {
    super(text, from, chars);
    this.reverted = false;
    this.execd = false;
  }

  revert() {
    if (this.reverted)
      throw new Error('Revert already called');
    
    if (!this.execd)
      throw new Error('Exec has not been called');

    return super.revert();
  }
  
  exec() {
    if (this.execd)
      throw new Error('Exec already called');

    return super.exec();
  }
}