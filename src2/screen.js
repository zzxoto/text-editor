class Screen {
  
  callbacks = [];

  onChange(cb) {
    this.callbacks.push(cb)
  }

  _emit(data) {
    this.callbacks.forEach((cb) => {
      cb(data);
    })
  }

  render(data) {
    this._emit(data);
  }
}

let screen = new Screen();
export default screen;