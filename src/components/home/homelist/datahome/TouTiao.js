import React from 'react';

import './homesass/toutiao.scss';
export default class TouTiao extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}
	
	render(){
		return <div className="toutiao">
			<p>[猪年有礼] 30元催乳劵限时抢</p>
		</div>
	}
}
