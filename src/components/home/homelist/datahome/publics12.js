import React from 'react';

import './homesass/publics.scss';
export default class Publics12 extends React.Component{
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
			
       			 this.setState({
       			  datalis:data.data.customFloor[2].data
     		 })
       			 
			
				
	}
	
	render(){
		return <div className="publics">
			<div className="tu">
				<img src={this.state.datalis[11].image}/>			
			</div>
			<div className="goods">
				<ul>
					{
						this.state.datalis[11].products.map(item=>{
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
