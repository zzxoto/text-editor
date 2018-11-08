export class SaveCursor {
  constructor(cursor) {
    this.head = cursor.head;
    this.tail = cursor.tail;
    this.cursor = cursor;
  }
  
  revert() {
    let revertCursor = new SaveCursor(this.cursor);

    this.cursor.head = this.head;
    this.cursor.tail = this.tail;

    return revertCursor;
  }
}