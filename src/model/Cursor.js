export class Cursor {
  constructor(head = 0, tail = 0) {
    //head and tail pointers can span from [0, text.length]
    this.head = head;
    this.tail = tail;
  }
  get high() {
    return this.head > this.tail? this.head: this.tail;
  }
  get low() {
    return this.head > this.tail? this.tail: this.head;
  }
}