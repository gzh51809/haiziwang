import React from 'react';
import BottomCom from '../ccoms/bottomcom';
export default class Mom extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}
	
	render(){
		return <div className="mom">
		<div className="momcom">Mom</div>
			<BottomCom></BottomCom>
		</div>
	}
}
