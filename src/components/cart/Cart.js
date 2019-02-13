import React from 'react';

import BottomCom from '../ccoms/bottomcom';
import CartInf from './cartinf/cartinf';
export default class Cart extends React.Component{
	constructor(props){
		super(props)
		this.state={
			
		}
		this.goback = this.goback.bind(this);
	}
	goback=()=>{
			console.log(this.props.history)
        this.props.history.goBack();
	}
	
	render(){
		return <div className="cart">
				<div className="cartt">
					<i className="iconfont icon-fanhui" onClick={this.goback}></i>
					<span className="goodcart">购物车</span>
					<span className="bianji">编辑</span>
					
				</div>
				<div className="cartc">
					<CartInf></CartInf>
				</div>
				<div className="cartb">
					<div>
						<span>
					合计:
					</span>
					<span className="red">&yen;</span>
					<span className="red">{740}</span>
					<span>(不含运费)</span>
					</div>
					<div>
						<span className="jiesuan">
							去结算
						</span>
					</div>
				</div>
				</div>
	}
}
