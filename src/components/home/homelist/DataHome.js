import React from 'react';
//import data from '../homedata/homelist.json';

//引入组件
import TouTiao from './datahome/TouTiao';
import MiaoSha from './datahome/miaosha';
import YouXuan from './datahome/youxuan';
import Publics from './datahome/publics';

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
	}
	 componentWillReceiveProps(nextProps) {
//     console.log(nextProps);

	}
	
		loadDataHome=()=>{
				const data=require('../homedata/data.json');
				console.log(data.data
				)
       			 this.setState({
       			  promotionList:data.data.promotionList[0].data
     		 })
				
	}
	
	render(){
		return <div className="datahome">
			 <div className="datahome1">
			 	<img src="https://cmspic-10004025.image.myqcloud.com/3ffe8520-2471-11e9-8cfd-53bbb5988695_size_357x190"/>
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
				<Publics></Publics>
			</div>
			
			<div className="goods1">
				<Publics></Publics>
			</div>
			
			<div className="goods1">
				<Publics></Publics>
			</div>
			
			<div className="goods1">
				<Publics></Publics>
			</div>
			
			<div className="goods1">
				<Publics></Publics>
			</div>
			
			<div className="goods1">
				<Publics></Publics>
			</div>
			
			<div className="goods1">
				<Publics></Publics>
			</div>
			
			<div className="goods1">
				<Publics></Publics>
			</div>
			
			<div className="goods1">
				<Publics></Publics>
			</div>
			
			<div className="goods1">
				<Publics></Publics>
			</div>
			
			<div className="goods1">
				<Publics></Publics>
			</div>
			
			<div className="goods1">
				<Publics></Publics>
			</div>
			
			
		</div>
	}
	
	

}
