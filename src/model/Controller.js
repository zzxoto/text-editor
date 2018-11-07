import {BaseController} from './BaseController';
import {UndoRedo} from './UndoRedo';

export class Controller extends BaseController{
  constructor() {
    super();
    this.memento = new UndoRedo();
    this.clipboard = [];
  }

  insert() {
    
  }

  backspace() {

  }

  ctrlBackspace() {

  }

  ctrlDelete() {

  }

  undo() {

  }

  redo() {

  }
}