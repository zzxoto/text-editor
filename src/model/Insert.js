export class Insert {
  constructor(text, from, chars) {
    this.text = text;
    this.from = from;
    this.to = this.from + chars.length - 1;
    this.chars = chars;
  }

  restore() {
    return new Delete(this.text, this.from, this.to)
      .exec();
  }

  exec() {
    this.text.insert(this.from, this.chars);
    return this;
  }

  getChars() {
    return this.chars;
  }
}