import React, { Component } from 'react';
import screen from '../screen.js';
import Line from './LineComponent';

class Root extends Component{
	
	constructor() {
		super();
		this.state = {
			 data: ['a']
		};
	}

	componentDidMount(){
		screen.onChange((data)=>{
			this.setState({data: data});
		});
	}

	render(){
		var lines = this.state.data.map( (line, index) => {
			return(
				<Line key={index}
					id={index}
					line={line}
					className="line"
				/>
			)
		});
		return (
			<React.Fragment>{lines}</React.Fragment>
		); 
	}
	
};

export default Root;
