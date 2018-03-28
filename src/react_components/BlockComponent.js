import React, { Component } from 'react';
import Line from './LineComponent';

export default class BlockComponent extends Component{
	componentDidMount(){
		console.log(this.props.struc);
	}

	shouldComponentUpdate(){
		this.props.shouldUpdate.map(x=>{
			if(x == this.props.id)
				return true;
		})
		return false;
	}

	render(){
		var line = Object.keys(this.props.struc).map((x)=>{
			return (
				<Line
					key={x}
					id={x}
					words={this.props.struc[x]}
				/>
			)
		});
		return(<React.Fragment>{line}</React.Fragment>);
	}
}; 