import React, { Component } from 'react';

export class NumberingSidebar extends Component {

  render() {
    let numberings = this.props.lines.map( (line, index) => {
      return(
        <div className="numbering" key={index}>
          {index}
        </div>
      )
    });
    return (
      <div>
        {numberings}
      </div>
    );
  }
}

/*Required Props
  lines: Array
*/