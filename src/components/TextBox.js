
import React, { Component } from 'react';

export class TextBox extends Component {

  constructor(props) {
    super(props);

    this.onElRef = this.onElRef.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  onElRef(element) {
    this.props.elRef(element);
  }

  handleKeyUp(event) {
    this.props.onKeyUp(event.shiftKey, event.ctrlKey, event.key);
  }

  render() {

    return (
      <textarea 
        ref={this.onElRef}
        className="textbox-textarea"
        onKeyUp={this.handleKeyUp}/>
    )
  }
}

/*Required Props
  elRef: func(element)
  onKeyUp: func(isShift, isCtrl, key)
*/