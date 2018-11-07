export class Iterator {
  constructor(arr) {
    this.arr = arr;
    this._from = 0;
    this._to = this.arr.length - 1;
  }

  from(i) {
    this._from = i;
    return this;
  }

  to(i) {
    this._to = i;
    return this;
  }

  next() {
    if (this._from > this._to)
      throw new Error('Iterator cannot iterate further');

    let toReturn = { value: this.arr[this._from], done: this._from == this._to };

    this._from += 1;
    return toReturn;
  }
}