import React from 'react';

import './homesass/homelis.scss';

export default class HomeLis extends React.Component{
	constructor(props){
		super(props)
		this.state={
			
			datalis:[]
		}
		this.goDetail = this.goDetail.bind(this);
	}
	
		componentWillMount(){
		this.loadHomeLis();
	}
	
	
		loadHomeLis=()=>{
				const data=require('./homejson/homelis.json');
//				console.log(data.rmdlist
//				)
       			 this.setState({
       			  datalis:data.rmdlist
     		 })
       			 
			
				
	}
	
	render(){
		return <div className="homelis1">
			<div>
				<h2>猜你喜欢</h2>
				<p>满足追求完美的你</p>
			</div>
			<ul>
			
				{
					this.state.datalis.map(item=>{
						return <li key={item.skuid} onClick={()=>this.goDetail(item.skuid)}>
							<img src={item.picurl}/>
							<p>
							{item.skuname}
							</p>
							<div>
							<span className="yuanjia">
							&yen;
							{item.sellprice/100}
							</span>
							<span className="xianjia">
							<del>
								&yen;
							{item.marketprice/100}</del>
							</span>
							
							</div>
							
						</li>
					})
				}
			</ul>
			
		</div>
	}
	
	 goDetail = (id) => {
   		        this.props.history.replace('/detail/:' + id)
//		console.log(this.props.history)
  }
}
