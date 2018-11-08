export class SaveCursor {
  constructor(cursor) {
    this.head = cursor.head;
    this.tail = cursor.tail;
    this.cursor = cursor;
    this.reverted = false;
  }
  
  //saves the current cursor, then mutates the cursor,
  //then returns the saved cursor
  revert() {
    if (this.reverted)
      throw new Error('Revert already called');
    
    let revertCursor = new SaveCursor(this.cursor);

    this.cursor.head = this.head;
    this.cursor.tail = this.tail;

    this.reverted = true;

    return revertCursor;
  }
}