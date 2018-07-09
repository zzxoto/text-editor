import React, { Component } from 'react';
import Line from './LineComponent';

export default class NumberingSidebarComponent extends Component {

  render() {
    var numberings = this.props.data.map( (line, index) => {
      return(
        <div className="numbering">
          {index}
        </div>
      )
    });
    return (
      <div className="numberingSidebar">
        {numberings}
      </div>
    );
  }
}