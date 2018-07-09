import React, { Component } from 'react';
import Line from './LineComponent';

export default class CodeAreaComponent extends Component {

  render() {
    var lines = this.props.data.map( (line, index) => {
      return(
        <Line key={index}
          id={index}
          line={line}
        />
      )
    });
    return (
      <div className="codeArea">
        <div id="caret"></div>
        {lines}
      </div>
    );
  }
}