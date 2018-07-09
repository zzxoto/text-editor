import React, { Component } from 'react';
import { reactBridge } from '../react_bridge';
import CodeArea from './CodeAreaComponent';
import NumberingSidebar from './NumberingSidebarComponent';

class Root extends Component{
	
	constructor() {
		super();
		this.state = {
			 data: [['a']]
		};
	}

	componentDidMount(){
		reactBridge.onChange((data)=>{
			this.setState({data: data});
		});
	}

	render(){
		return (
			<div class="main">
				<textarea spellcheck="false" autocapitalize="off"></textarea>
				<NumberingSidebar data={this.state.data} />
				<CodeArea data={this.state.data} />
			</div>
		); 
	}
	
};

export default Root;
