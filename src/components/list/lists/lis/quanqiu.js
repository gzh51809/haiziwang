import React from 'react';

import './sass/com.scss';
export default class QuanQiu extends React.Component{
	constructor(props){
		super(props)
		this.state={
			arr:[]
		}
	}
	
	componentWillMount(){	
		this.loadData();
	}
		
		loadData=()=>{
			const arr=require('../lisdata/quanqiu.json');
//			console.log(arr.data)
				 this.setState({
       			arr:arr.data
     		 })
		}
	
	render(){
		return <div className="box">
					<div className="one">
						<img src={this.state.arr.ad[0].image}/>			
					</div>
					<div className="two">
						{
						this.state.arr.subCategoryList.map(item=>{
							return <div key={item.id}>
								<h5>{item.title}</h5>
								<ul>						
										{
										item.nodeList.map(it=>{										
										return <li key={it.id}>
											<img src={it.imageUrl}/>
											<p>
											{it.name}
											</p>
										</li>
										})
										}
										
										
								</ul>
							</div>
							
							
						})
						}
						
					</div>
				
				</div>
	}
}
