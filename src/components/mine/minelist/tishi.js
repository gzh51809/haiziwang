import React from 'react';
import './minesass/tishi.scss';
export default class TiShi extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}
	
	render(){
		return <div className="tishi">
				<p className="p1">
				<img src="https://cmspic-10004025.image.myqcloud.com/43d44324-e4e0-4807-821e-d10eecdb71c0?imageView2/1/w/750/h/90/q/80"/>
				
				</p>
				<p className="p2">
				
        为了您的财产安全，不要点击任何陌生链接，不要向任何人透露银行卡或验证码信息，定期更新密码，谨防诈骗！
      
				</p>
		</div>
	}
}
