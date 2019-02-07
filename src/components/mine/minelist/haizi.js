import React from 'react';
import './minesass/haiziwang.scss';
export default class HaiZi extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}
	
	render(){
		return <div className="haiz">
				<div className="haizt">
					<h3>
						孩子王平台公示
					</h3>
				
				</div>
				<div className="haizb">
					<ul>
						<li>
							<i className="iconfont icon-liuyan"></i>
							<p>退换|售后</p>
						</li>
					</ul>
				</div>
				
		</div>
	}
}
