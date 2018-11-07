export class Delete {
  constructor(text, from, to) {
    this.text = text;
    this.from = from;
    this.to = to;
    this.chars = null;
  }

  restore() {
    return new Insert(this.text, this.from, this.chars)
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