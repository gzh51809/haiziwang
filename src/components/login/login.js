import React from 'react';
import './loginsass/login.scss';
var token = require("./token.js");
export default class LoGin extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}
	
	 search(){
        const inpVal = this.input.value;
        console.log(inpVal);
    }
	login(){
		 let inpVal = this.input.value;
       
		let crypto=token.createToken({
   	username:inpVal,
   
   },3600);
		
		console.log(crypto)
		console.log(window.localStorage.setItem)
		
		localStorage.setItem('login',crypto)
		localStorage.setItem('login',crypto)
			
		
	}
	
	render(){
		return <div className="login">
			<h1>快捷登录</h1>
			<div className="username">
				<input type="text" ref={input => this.input = input}  placeholder="请输入您的手机号码"/>
				<button onClick={this.search.bind(this)}></button>
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
				<input type="button" value="登录" onClick={this.login.bind(this)} />
			</div>
		</div>
	}
}
