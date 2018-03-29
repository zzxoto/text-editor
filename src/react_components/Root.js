import React, { Component } from 'react';
import vDom from '../virtual_dom';
import Line from './LineComponent';

class Root extends Component{
	
	componentDidMount(){

		vDom.subscribe("changed", ()=>{
			this.setState({});
		});
	}

	render(){
		var lines = vDom.getLines().map( (line, index)=>{
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
