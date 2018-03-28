import React, { Component } from 'react';

var keyWords = ["function", "var", "let", "const"];

export default class WordComponent extends Component{
	render(){
		return(
		(keyWords.indexOf(this.props.word) > -1)?
			(<span className="keyword">{this.props.word}</span>):
			(<span>{this.props.word}</span>)
		);
	}
} 