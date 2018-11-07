export class Memento {
  constructor() {
    this.store = [];//array of objects that restore methods
  }
  add(arg) {
    this.store.push(arg);
  }
  restore() {
    while(this.store.length > 0) {
      this.store.pop().restore();
    }
  }
}