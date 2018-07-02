import React, { Component } from 'react';

var keyWords = ["function", "var", "let", "const", "function("];

export default class WordComponent extends Component{
	
	shouldComponentUpdate(nextProps){
		return nextProps.word !== this.props.word;
	}

	render(){
		var word = "";
		if(this.props.word.indexOf(" ") >= 0){
			for(var i = 0; i < this.props.word.length; i++){
				word += '\u00A0';//white space
			}
		}
		else
			word = this.props.word;

		return(
		(keyWords.indexOf(word) > -	1)?
			(<span className="keyword">{word}</span>):
			(<span>{word}</span>)
		);
	}
} 