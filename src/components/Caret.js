import React, { Component } from 'react';

export class Caret extends Component {

  constructor(props) {
    super(props);
    this.onElRef = this.onElRef.bind(this);
    this.caretAnimationInterval = null;
    this.caretRef = null;
  }

  componentDidMount() {
    //set caret animation as if blinking;
    //this is temporary
    this.caretAnimationInterval = setInterval(() => {
      this.caretRef.style.display = this.caretRef.style.display == 'block'? 'none': 'block';
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.caretAnimationInterval);
  }

  onElRef(element) {
    this.props.elRef(element);
    this.caretRef = element;
  }

  render() {

    return (
      <div 
        ref={this.onElRef}
        className="caret">
      </div>
    )
  }
}

/*Required Props
  elRef: func(element)
*/