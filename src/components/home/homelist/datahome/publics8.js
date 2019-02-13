import React from 'react';

import './homesass/publics.scss';
export default class Publics8 extends React.Component{
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
				console.log(data.data.customFloor[2].data
				)
       			 this.setState({
       			  datalis:data.data.customFloor[2].data
     		 })
       			 
			
				
	}
	
	render(){
		return <div className="publics">
			<div className="tu">
				<img src={this.state.datalis[7].image}/>			
			</div>
			<div className="goods">
				<ul>
					{
						this.state.datalis[7].products.map(item=>{
							console.log(item
				)
							return <li key={item.skuid}>
								<img src={item.picurl}/>
								<p className="pname">
									{item.name}
								</p>
								<p className="jiage">
								&yen;
								{item.price/100}
								</p>
							</li>
						})
					}
				</ul>
			</div>
		</div>
	}
}
