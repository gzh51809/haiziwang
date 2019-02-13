import React from 'react';

import './homesass/youxuan.scss';
export default class YouXuan extends React.Component{
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
//				console.log(data.data.promotionList[6].data
//				)
       			 this.setState({
       			  datalis:data.data.promotionList[6].data
     		 })
  		
	}
	
	render(){
		return <div className="youxuan">
			<ul>
				<li>
					<img src={this.state.datalis[0].image}/>
				</li>
				<li>
					<img src={this.state.datalis[1].image}/>
				</li>				
			</ul>
			<ul>
				<li>
					<img src={this.state.datalis[2].image}/>
				</li>
				<li>
					<img src={this.state.datalis[3].image}/>
				</li>			
			</ul>
			
		</div>
	}
}
