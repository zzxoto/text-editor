import React, { Component } from 'react';
import Word from './WordComponent';

export default class LineComponent extends Component{
	render(){ 
		var words = groupStrings(this.props.words);
		words = words.map((x, index)=>{
			return(
				<Word 
					key={index}
					id={index}
					word={x}
				/>
			);
		});
		return (
			<div className="line">
				{words}
			</div>
		);
	}
}
 

/*
	@param arr{Array<String>}
	if arr == ['a', 'b', ' ', 'c', 'd'] then returns ['ab', ' ', 'cd']
*/
function groupStrings(arr){
	var toReturn = [];
	var str = arr[0];
	var spaceState = (str === " ");

	for(var i = 1; i < arr.length; i++){
		var char = arr[i];
		
		if(spaceState){
			if(char === " ")
				str += char;
			else{
				toReturn.push(str);
				str = char;
				spaceState = false;
			}
		}
		else{
			if(char === " "){
				toReturn.push(str);
				str = char;
				spaceState = true;
			}
			else{
				str += char;
			}
		}
	}
	if(str)
		toReturn.push(str);

	return toReturn;
}