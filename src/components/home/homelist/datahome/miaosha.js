import React from 'react';

import './homesass/miaosha.scss';
export default class MiaoSha extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}
	
	render(){
		return <div className="miaosha">
		
			<ul className="miao1">
				<li className="miao"></li>	
				<li></li>
				<li></li>				
			</ul>
			<ul className="miao2">
				<li></li>
				<li></li>	
				<li></li>
				<li></li>				
			</ul>
			
		</div>
	}
}
