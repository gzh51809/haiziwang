import React from 'react';
import {Route,Link,NavLink,Switch,Redirect,withRouter,HashRouter} from 'react-router-dom';

import Lis from './lists/lis';
import PingPai from './lists/pingpai';
import Age from './lists/age';
import BottomCom from '../ccoms/bottomcom';
export default class List extends React.Component{
	constructor(props){
		super(props);
		this.state={
			listdata:[{
				 text:'分类',
                    path:'/lis',
                    name:'Lis',
			},
			{
				 text:'品牌',
                    path:'/pingpai',
                    name:'PingPai',
			},
			{
				 text:'年龄',
                    path:'/age',
                    name:'Age',
			}]
		}
	}
	
	render(){
		return <div className="list">
											<ul>
										                         	
													<li>
													<Link to="/list/lis" replace>
													分类
													</Link>	
													</li>	
														<li>
													<Link to="/list/pingpai" replace>
													品牌
													</Link>	
													</li>		
														<li>
													<Link to="/list/age" replace>
													年龄
													</Link>	
													</li>
											</ul>	
										<div className="com">
					 			<Switch>
				      			  	<Route path="/list/lis" component={Lis}></Route>
				      			  	<Route path="/list/pingpai" component={PingPai}></Route>
				      			  	<Route path="/list/age" component={Age}></Route>				      			 			      			  		      			  
				      			</Switch>
				   		 </div>  	
				   		 <BottomCom></BottomCom>
		</div>
	}
}
