import React, { Component } from 'react';

class App extends Component{
	constructor(){
		super();
		this.x = 1;
		this.printMe = this.printMe.bind(this);
	}
	printMe(){
		console.log(this.x);
	}
	render(){
		return (
			<button onClick={this.printMe}></button> 
		)
	}
};

export default App;
