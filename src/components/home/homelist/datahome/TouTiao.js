import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './homesass/toutiao.scss';
export default class TouTiao extends React.Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	
	render(){
		return <div className="toutiao">
		<div className="icon">
			<div>
				
			</div>
		</div>
			 <WingBlank>
    <Carousel className="my-carousel"
      vertical
      dots={false}
      dragging={false}
      swiping={false}
      autoplay
      infinite
    >
   	  <div className="v-item">{"春节期间物流发货通知→"}</div>   
      <div className="v-item">{"贝享花支付最高立减99，无门槛券立即抢→"}</div>
      <div className="v-item">{"爱他美券后低至185！大王纸尿裤低至买2免1！"}</div>
      
    </Carousel>
  </WingBlank>
		</div>
	}
}



