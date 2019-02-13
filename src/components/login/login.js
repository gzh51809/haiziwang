import React from 'react';
import './loginsass/login.scss';
export default class LoGin extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}
	
	render(){
		return <div className="login">
			<h1>快捷登录</h1>
			<div className="username">
				<input type="text"  placeholder="请输入您的手机号码"/>
			</div>
			<div className="ma">
				<input type="text" placeholder="短信验证码"/>
			</div>
			<p>
			已阅读并同意
			<span className="yanse">{'《孩子王服务协议》'}</span>
			及
			<span className="yanse">{'《隐私保护政策》'}</span>
			</p>
			<div className="log">
				<input type="button" value="登录"/>
			</div>
		</div>
	}
}
