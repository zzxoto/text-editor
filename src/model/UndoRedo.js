import { UndoRedoSession } from './UndoRedoSession';

export class UndoRedo {

  constructor() {
    this.undoSessions = [];
    this.redoSessions = [];
    this.currentSession = null;
  }

  //throws error if in middle of session
  clearUndoCache() {
    this._throwIfInSession();

    this.undoSessions = [];
  }

  //throws error if in middle of session
  clearRedoCache() {
    this._throwIfInSession();

    this.redoSessions = [];
  }

  //throws error if in middle of session
  undo() {
    this._throwIfInSession();

    if (!this.undoSessions.length)
      return;
    
    this.redoSessions.push(this.undoSessions.pop().revert());
  }

  //throws error if in middle of session
  redo() {
    this._throwIfInSession();

    if (!this.redoSessions.length)
      return;
    
    this.undoSessions.push(this.redoSessions.pop().revert());
  }

  //returns UndoRedoSession
  //throws error if in middle of session
  startSession() {
    this._throwIfInSession();

    this.currentSession = new UndoRedoSession();
    return this.currentSession;
  }

  //returns nothing
  //throws error if not in middle of session
  saveSession() {
    if (!this.inSession())
      throw new Error('Session not started');

    this.undoSessions.push(this.currentSession);
  }

  //returns current session or null if not in current session
  getSession() {
    return this.currentSession;
  }

  //returns true if in middle of session
  //returns false otherwise
  inSession() {
    return this.currentSession !== null;
  }

  _throwIfInSession() {
    if (this.inSession())
      throw new Error('Session needs be saved before executing this operation');
  }
}