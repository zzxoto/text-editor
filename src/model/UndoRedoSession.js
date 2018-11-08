//TODO may need more work
export class UndoRedoSession {
  constructor() {
    this.session = [];//array of objects with revert methods
    this.reverted = false;
  }

  //cannot add once revert is triggered
  add(arg) {
    if (this.reverted)
      throw new Error('Already revert is triggered, so cannot add');

    this.session.push(arg);
    return this;
  }

  //maybe reverted multiple times
  revert() {
    if (this.session.length == 0)
      throw new Error('Nothing added as session to revert.');

    let session = [];

    while(this.store.length > 0) {
      session.push(this.store.pop().revert());
    }

    this.session = session;
    this.reverted = true;
    return this;
  }
}