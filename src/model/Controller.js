import {BaseController} from './BaseController';
import {UndoRedo} from './UndoRedo';

export class Controller extends BaseController{
  constructor(undoRedo, cursor, text) {
    super(cursor, text);
    this.undoRedo = undoRedo;
    this.clipboard = [];
  }

  copy() {
    if (!this._isInSelection())
      return;
    
    let iterator = super.text.iterator(this.cursor.low, this.cursor.high - 1);
    this.clipboard = [];
    
    while(true) {
      let result = iterator.next();
      this.clipboard.push(result.value);
      if (result.done)
        break;
    }
  }

  paste() {
    if (this.clipboard.length == 0)
      return;
    
    this.insert(this.clipboard);
  }

  insert(chars) {
    let memento = this.undoRedo.startSession();
    super.insert(chars, memento);
    this.undoRedo.saveSession();
  }

  delete() {
    if (!this._isInSelection() && this.cursor.head == this.text.length)
      return;
    
    let memento = this.undoRedo.startSession(); 
    super.delete(memento);
    this.undoRedo.saveSession();
  }

  backspace() {
    if (!this._isInSelection() && this.cursor.head == 0)
      return;
    
    let memento = this.undoRedo.startSession();
    super.backspace(memento);
    this.undoRedo.saveSession();
  }
  
  undo() {
    this.undoRedo.undo();
  }

  redo() {
    this.undoRedo.redo();
  }

  ctrlBackspace() {
    //later
  }

  ctrlDelete() {
    //later
  }
 }
                       