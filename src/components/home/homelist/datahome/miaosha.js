import React from 'react';

import './homesass/miaosha.scss';
export default class MiaoSha extends React.Component{
	constructor(props){
		super(props)
		this.state={
			datalis:[]
		}
	}
	componentWillMount(){
		this.loadHomeLis();
	}
	
	
		loadHomeLis=()=>{
				const data=require('./homejson/data1.json');
//				console.log(data.data.customFloor[1].data[6].products
//				)
       			 this.setState({
       			  datalis:data.data.customFloor[1].data[6].products
     		 })
       			 
			
				
	}
	render(){
		return <div className="miaosha">
		
			<div className="miao1">
                    <img src="https://cmspic-10004025.image.myqcloud.com/cc8f0010-b0d0-11e8-b822-8d6d7f7d2a83_size_126x31?imageMogr2/quality/80/format/webp"/>
				<div>
					<span>距离结束</span>
					
				</div>
			</div>
			<ul className="miao2">
				<li>
					<img src={this.state.datalis[0].picurl}/>
					<p>&yen;{this.state.datalis[0].price/100}</p>
				</li>
				<li>
					<img src={this.state.datalis[1].picurl}/>
					<p>&yen;{this.state.datalis[1].price/100}</p>
				</li>
				<li>
					<img src={this.state.datalis[2].picurl}/>
					<p>&yen;{this.state.datalis[2].price/100}</p>
				</li>
				<li>
					<img src={this.state.datalis[3].picurl}/>
					<p>&yen;{this.state.datalis[3].price/100}</p>
				</li>
			</ul>
			
		</div>
	}
}
