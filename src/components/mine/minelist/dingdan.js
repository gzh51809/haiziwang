import React from 'react';

import './minesass/dingdan.scss';
export default class DingDan extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}
	
	render(){
		return <div className="dingdan">
				<div className="dingdant">
					<h3>
						全部订单
					</h3>
					<p>
						<span>查看全部线上</span>
						<span>|</span>
						<span>查看门店订单</span>
						
					</p>
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
						<li>
							<i className="iconfont icon-zuping"></i>
							<p>待评论</p>
						</li>
						<li>
							<i className="iconfont icon-liuyan"></i>
							<p>退换|售后</p>
						</li>
					</ul>
				</div>
				
		</div>
	}
}
