import React, { Component } from 'react';
import { DataSource } from '../dataLogic/dataSource';
import { Editor } from './Editor';

export class EditorWrapper extends Component {

  constructor() {
    super();
    this.xCodeAreaOffset = 0;
    this.yCodeAreaOffset = 0;
    this.editorWrapperRef = null;
    this.data = null;
    this.dataSource = new DataSource();

    this.setCodeAreaRef = this.setCodeAreaRef.bind(this);
    this.handleEditorClick = this.handleEditorClick.bind(this);
    this.handleEditorKeyUp = this.handleEditorKeyUp.bind(this);
  }

  componentWillMount() {
    this.data = this.dataSource.getData();
  }

  componentDidMount() {
    //re-render if position of editor
    //has changed.
    if (this.setCodeAreaOffset()) {
      this.setState({});  
    }
  }

  componentDidUpdate() {
    
    if (this.setCodeAreaOffset()) {
      this.setState({});  
    }
  }

  handleEditorKeyUp(isShift, isCtrl, key) {
    //dataSource.setChange called with either
    // { type: 'character', key: '' } or,
    // { type: 'control', key: '' }
    if (isCtrl) return;

    let isCharacter = key.length == 1 && isCtrl == false;

    if (isCharacter) {
      this.dataSource.setChange({ type: 'character', key});
    }
    else {
      key = key.toLowerCase();
      
      this.dataSource.setChange({type: 'control', key});
    }
    
    //refresh
    this.data = this.dataSource.getData();
    this.setState({});
  }

  handleEditorClick(letterIndex, lineIndex, pageX, pageY) {
    this.dataSource.setXY(letterIndex, lineIndex);
    console.log(letterIndex, lineIndex);
    //refresh
    this.data = this.dataSource.getData();
    this.setState({});    
  }

  setCodeAreaRef(element) {
    this.codeAreaRef = element;
  }

  //return true if codeAreaOffset 
  //value has changed.
  setCodeAreaOffset() {
    let el = this.codeAreaRef;
    let offsetX = Math.round(el.getBoundingClientRect().left);
    let offsetY = Math.round(el.getBoundingClientRect().top);

    if (offsetX == this.xCodeAreaOffset && offsetY == this.yCodeAreaOffset)
      return false;
    
    this.xCodeAreaOffset = offsetX;
    this.yCodeAreaOffset = offsetY;
    return true;
  }

  render() {
    return (
      <div className="editor-wrapper">
        <div
          ref={this.getEditorWrapperRef}>
          <Editor
            xOffset={this.xCodeAreaOffset}
            yOffset={this.yCodeAreaOffset}
            isActive={this.props.isActive}
            lines={this.data.lines}
            x={this.data.x}
            y={this.data.y}
            onKeyUp={this.handleEditorKeyUp}
            onClick={this.handleEditorClick} 
            elRef={this.setCodeAreaRef}/>
        </div>
      </div>
    )
  }
}

/*Required Props
  isActive
  editorId
*/