import {SafeInsert} from './Insert';

export class Delete {
  constructor(text, from, to) {
    this.text = text;
    this.from = from;
    this.to = to;
    this.chars = null;
  }

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

  constructor(text, from, to) {
    super(text, from, to);
    this.reverted = false;
    this.execd = false;
  }

  revert() {
    if (this.reverted)
      throw new Error('Revert already called');
    
    if (!this.execd)
      throw new Error('Exec has not been called');

    this.reverted = true;
    return super.revert();
  }
  
  exec() {
    if (this.execd)
      throw new Error('Exec already called');

    this.execd = true;
    return super.exec();
  }
}