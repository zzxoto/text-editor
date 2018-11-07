//TODO test
import {SafeInsert} from './Insert';

export class Delete {
  constructor(text, from, to) {
    this.text = text;
    this.from = from;
    this.to = to;
    this.chars = null;
  }

  //TODO if not execed throw error
  revert() {
    return new SafeInsert(this.text, this.from, this.chars)
      .exec();
  }

  exec() {
    this.chars = this.text.delete(this.from, this.to);
    return this;
  }

  getChars() {
    return this.chars;
  }
}

//can't revert more than once
//can't exec more than once
//can't revert if exec not called
export class SafeDelete extends Delete {

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