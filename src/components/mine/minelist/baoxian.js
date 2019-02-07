import React from 'react';
import './minesass/dingdan.scss';
export default class BaoXian extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}
	
	render(){
		return <div className="dingdan">
				<div className="dingdant">
					<h3>
						我的保险
					</h3>
					
				</div>
				<div className="dingdanb">
					<ul>
						<li>
							<i className="iconfont icon-daizhifu"></i>
							<p>待支付</p>
						</li>
						<li>
							<i className="iconfont icon-weibiaoti--"></i>
							<p>待发货</p>
						</li>
						<li>
							<i className="iconfont icon-daifahuo"></i>
							<p>待收货</p>
						</li>						
					</ul>
				</div>
				
		</div>
	}
}
