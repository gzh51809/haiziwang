import React from 'react';
import './minesass/dingdan.scss';
export default class QianBao extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}
	
	render(){
		return <div className="dingdan">
				<div className="dingdant">
					<h3>
						我的钱包
					</h3>
					
				</div>
				<div className="dingdanb">
					<ul>
						<li>
							<i className="iconfont icon-yuanbao"></i>
							<p>余额</p>
						</li>
						<li>
							<i className="iconfont icon-hongbao"></i>
							<p>优惠卷</p>
						</li>
						<li>
							<i className="iconfont icon-jifenshangchengtequan"></i>
							<p>积分</p>
						</li>
						<li>
							<i className="iconfont icon-huodong"></i>
							<p>游乐</p>
						</li>
					
					</ul>
				</div>
				
		</div>
	}
}
