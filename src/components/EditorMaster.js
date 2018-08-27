import React, { Component } from 'react';
import { EditorWrapper } from './EditorWrapper';

export class EditorMaster extends Component {
  constructor() {
    super();
    this.editors = [1];
    this.activeEditor = 1;
    this.uniqueEditorCounter = 1;

    this.handleAddEditor = this.handleAddEditor.bind(this);
    this.handleEditorClick = this.handleEditorClick.bind(this);
    this.handleDeleteEditor = this.handleDeleteEditor.bind(this);
  }

  //deletes editor but there will always be atleast one.
  //active editor would be the rightmost(last) editor.
  handleDeleteEditor(editorId) {
    let _editors = this.editors.filter(id => editorId != id);
    this.editors = _editors;

    if (this.editors.length == 0) {
      this._addNewEditor();
    }
    this.activeEditor = this.editors[this.editors.length - 1];
    this.setState({});
  }

  handleEditorClick(event, editorId) {
    //this is also emitted when delete is pressed
    //fortunately delete is triggered first and then
    //editorId is popped from the array, making isEditorAlive
    //false.
    let isEditorAlive = this.editors.indexOf(editorId) >= 0;
    if (!isEditorAlive) return;

    this.activeEditor = editorId;
    this.setState({});
  }

  //there can be atmost 3 editors.
  handleAddEditor() {
    if (this.editors.length == 3) return;

    this._addNewEditor();
    this.setState({});
  }

  _addNewEditor() {
    this.editors.push(++this.uniqueEditorCounter);
    this.activeEditor = this.uniqueEditorCounter;
  }

  render() {
    let editorWrappers = this.editors.map(editor => {
      return (
        <div 
          className="flex-1 editor-wrapper-wrapper"
          key={editor}
          onClick={(event) => this.handleEditorClick(event, editor)}>
          <div>
            <button 
              className="float-right btn btn-black"
              onClick={() => this.handleDeleteEditor(editor)}>
              Delete
            </button>
          </div>
          <div>
            <EditorWrapper
              isActive={this.activeEditor == editor}
              editorId={editor} />
          </div>
        </div>
      )
    })

    return (
      <div className="editor-master">
        <div>
          <button onClick={this.handleAddEditor} className="btn btn-blue">Add Editor</button>
        </div>
        <div className="d-flex">
          {editorWrappers}
        </div>
      </div>
    )
  }
}
