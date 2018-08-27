import React, { Component } from 'react';
import { Line } from './Line';
import { Caret } from './Caret';
import { NumberingSidebar } from './NumberingSidebar';
import { TextBox } from './TextBox';

const letterWidth = 8.796;
const lineHeight = 20;

export class Editor extends Component {

  constructor() {
    super();
    this.caretRef = null;
    this.textBoxRef = null;

    this.setCaretRef = this.setCaretRef.bind(this);      
    this.setTextBoxRef = this.setTextBoxRef.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleLineClick = this.handleLineClick.bind(this);
    this.onElRef = this.onElRef.bind(this);
  }

  componentDidMount() {
    this.setCaretPosition();
    this.setTextBoxFocus();
  }

  componentDidUpdate() {
    this.setCaretPosition();
    this.setTextBoxFocus();
  }

  handleLineClick(lineNo, line, event) {
    let y = lineNo,
        x = Math.round( (event.pageX - this.props.xOffset ) / letterWidth );

    x = x > line.length ? line.length : x;
    this.props.onClick(x, y, event.pageX, event.pageY);
  }

  handleKeyUp(isShift, isCtrl, key) {
    this.props.onKeyUp(isShift, isCtrl, key);
    this.textBoxRef.value = "";
  }

  setCaretRef(element) {
    this.caretRef = element;
  }

  setTextBoxRef(element) {
    this.textBoxRef = element;
  }

  setTextBoxFocus() {
    if (this.props.isActive) 
      return this.textBoxRef.focus();
    this.textBoxRef.blur();
  }

  setCaretPosition() {
    let left = (this.props.x * letterWidth) + this.props.xOffset;
    let top = (this.props.y * lineHeight) + this.props.yOffset;
    
    this.caretRef.style.top = `${top}px`;
    this.caretRef.style.left = `${left}px`;
  }

  onElRef(element) {
    this.props.elRef(element);
  }

  render() {
    let lineComponents = this.props.lines.map((line, index) => {
      return (
        <Line key={index} lineNo={index}
          line={line}
          onClick={this.handleLineClick} />)
    });

    return (
      <div className="d-flex">
        <div className="numbering-sidebar">
          <NumberingSidebar lines={this.props.lines} />
        </div>
        <div className="code-area flex-1" ref={this.onElRef}>
          {lineComponents}
          <Caret
            elRef={this.setCaretRef} />
          <TextBox
            elRef={this.setTextBoxRef}
            onKeyUp={this.handleKeyUp} />
        </div>
      </div>
    )
  }
}


/*Required Props
  xOffset
  yOffset
  lines
  x
  y
  onKeyPress: func(isShift, isCtrl, key)
  onClick: func(letterIndex, lineIndex, pagex, pagey)
  elRef: func(element)
  isActive
*/
