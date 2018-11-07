//TODO Needs change

export class RestoreCursor {
  constructor(cursor) {
    this.head = cursor.head;
    this.tail = cursor.tail;
    this.cursor = cursor;
  }
  
  restore() {
    this.cursor.head = this.head;
    this.cursor.tail = this.tail;
  }
}