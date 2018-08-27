import React, { Component } from 'react';

export class Line extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onClick(this.props.lineNo, this.props.line, event);
  }

  render() {
    return (
      <div 
        className="line"
        onClick={this.handleClick}>
        {this.props.line.join('')}
      </div>
    );
  }
}

/*Required Props
  line: Array
  lineNo: number
  onClick: func(lineno, event)
*/