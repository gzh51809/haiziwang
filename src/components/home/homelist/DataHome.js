import React from 'react';
//import data from '../homedata/homelist.json';

//引入组件
import TouTiao from './datahome/TouTiao';
import MiaoSha from './datahome/miaosha';
import YouXuan from './datahome/youxuan';
import Publics from './datahome/publics';
import Publics2 from './datahome/publics2';
import Publics3 from './datahome/publics3';
import Publics4 from './datahome/publics4';
import Publics5 from './datahome/publics5';
import Publics6 from './datahome/publics6';
import Publics7 from './datahome/publics7';
import Publics8 from './datahome/publics8';
import Publics9 from './datahome/publics9';
import Publics10 from './datahome/publics10';
import Publics11 from './datahome/publics11';
import Publics12 from './datahome/publics12';
import Publics13 from './datahome/publics13';
import HomeLis from './datahome/homelis';
import ZouMaDeng from './datahome/zoumadeng';
import PinTuan from './datahome/pintuan';

import { Carousel } from 'antd';
export default class DataHome extends React.Component{
	constructor(props){
		super(props)
		this.state={
			promotionList:[]
		}
	}
	
	componentWillMount(){
		this.loadDataHome();
//		console.log(this.props.history)
		
	}
	 componentWillReceiveProps(nextProps) {
//     console.log(nextProps);

	}
	
		loadDataHome=()=>{
				const data=require('../homedata/data.json');
//				console.log(data.data
//				)
       			 this.setState({
       			  promotionList:data.data.promotionList[0].data
     		 })
				
	}
	
	render(){
		return <div className="datahome">
			 <div className="datahome1">
			 	<ZouMaDeng></ZouMaDeng>
			 </div>
			<div className="datahome2">
				<ul>
					<li>
						<i className="iconfont icon-complete"></i>
						<p>签到有奖</p>
					</li>
					<li>
						<i className="iconfont icon-hongbao"></i>
						<p>成长加</p>
					</li>
					<li>
						<i className="iconfont icon-jiaozi"></i>
						<p>积分商城</p>
					</li>
					<li>
						<i className="iconfont icon-yuanbao"></i>
						<p>会员卡</p>
					</li>
					<li>
						<i className="iconfont icon-shanzi"></i>
						<p>身边门店</p>
					</li>
				</ul>
			</div>
			<div className="datahome3">
				 <img src="https://cmspic-10004025.image.myqcloud.com/f4c1d960-25f9-11e9-8a9f-afd2d5e4b4f3_size_750x180"/>
			</div>
			<div className="datahome4">
				<TouTiao></TouTiao>
			</div>
			<div className="datahome5">
				<img src="https://cmspic-10004025.image.myqcloud.com/813336a2-3967-40ad-beeb-a9549a48badc"/>
			</div>
			<div className="datahome6">
				<MiaoSha></MiaoSha>
			</div>
			<div className="pintuan">
				<PinTuan></PinTuan>
			</div>
			<div className="datahome7">
				<YouXuan></YouXuan>
			</div>
			
			<div className="datahome8">
				<p>
				热门精选&nbsp;实时推荐
				</p>
			</div>
			
			<div className="goods1">
				<Publics></Publics>
			</div>
			
			<div className="goods1">
				<Publics2></Publics2>
			</div>
			
			<div className="goods1">
				<Publics3></Publics3>
			</div>
			
			<div className="goods1">
				<Publics4></Publics4>
			</div>
			
			<div className="goods1">
				<Publics5></Publics5>
			</div>
			
			<div className="goods1">
				<Publics6></Publics6>
			</div>
			
			<div className="goods1">
				<Publics7></Publics7>
			</div>
			
			<div className="goods1">
				<Publics8></Publics8>
			</div>
			
			<div className="goods1">
				<Publics9></Publics9>
			</div>
			
			<div className="goods1">
				<Publics10></Publics10>
			</div>
			
			<div className="goods1">
				<Publics11></Publics11>
			</div>
			
			<div className="goods1">

				<Publics12></Publics12>
			</div>
			
			<div className="goods1">
				<Publics13></Publics13>
			</div>
			<div className="homeb">
				<HomeLis history={this.props.history}></HomeLis>
			</div>
			
		</div>
	}
	
	

}
