import React, { Component } from 'react';
import vDom from '../virtual_dom';
import Block from './BlockComponent';

class Root extends Component{
	
	constructor(){
		super();
		this.state={
			blocksChanged: []
		}
	}

	componentDidMount(){
		vDom.subscribe("blocksAffected", ({blocksAffected})=>{
			this.setState({
				blocksChanged: blocksAffected
			});
		});
	}

	render(){
		var blocks = Object.keys(vDom.structure).map(x=>{
			return(
				<Block key={x}
					id={x}
					struc={vDom.structure[x]}
					shouldUpdate={this.state.blocksChanged}
				/>
			)
		});
		return (
			<React.Fragment>{blocks}</React.Fragment>
		);
	}
	
};

export default Root;
