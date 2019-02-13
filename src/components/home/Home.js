import React from 'react';
import {Route,Link,NavLink,Switch,Redirect,withRouter,HashRouter} from 'react-router-dom';

//import { Tabs } from 'antd';
//const TabPane = Tabs.TabPane;

import DataHome from './homelist/DataHome';
import Dapaiguan from './homelist/Dapaiguan';
import Tongzhuang from './homelist/Tongzhuang';
import Quanqiugou from './homelist/Quanqiugou';
import Yongping from './homelist/Yongping';
import Naifen from './homelist/Naifen';
import Wanju from './homelist/Wanju';
import Tushu from './homelist/Tushu';
import Food from './homelist/Food';
import Cheyi from './homelist/Cheyi';
import Baoxian from './homelist/Baoxian';

import BottomCom from '../ccoms/bottomcom';

export default class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
			listdata:[{
				 text:'首页',
                    path:'/datahome',
                    name:'DataHome',
			},
			{
				 text:'大牌馆',
                    path:'dapaiguan',
                    name:'Dapaiguan',
			},
			{
				 text:'童装童鞋',
                    path:'/tongzhuang',
                    name:'Tongzhuang',
			},
			{
				 text:'全球购',
                    path:'/quanqiugou',
                    name:'Quanqiugou',
			},
			{
				 text:'用品',
                    path:'/yongping',
                    name:'Yongping',
			},
			
			{
				 
				 text:'奶粉尿裤',
                    path:'/naifen',
                    name:'Naifen',
                    
			},
			{
				 
				 text:'玩具',
                    path:'/wanju',
                    name:'Wanju',
                    
			},
			{
				 text:'图书',
                    path:'/tushu',
                    name:'Tushu',
			},
			{
				 text:'零铺食',
                    path:'/food',
                    name:'Food',
			},
			{
				 text:'车床椅',
                    path:'/cheyi',
                    name:'Cheyi',
			},
			{
				 text:'保险',
                    path:'/baoxian',
                    name:'Baoxian',
			},
			]
			
		}
	}
	render(){
		return <div className="home">
				<div className="searchorlist">
							<div className="searchorlisttop">
								<div>
									<p>
									<i className="iconfont icon-sousuo"></i>
									<input type="search"/>
									</p>
								</div>
								<i className="iconfont icon-saomiao"></i>
								<i className="iconfont icon-liuyan"></i>						
							</div>
							<div className="searchorlistbuttom">
								<ul>
										                            	
													<li>
													<Link to="/home/datahome" replace>
													首页
													</Link>	
													</li>	
														<li>
													<Link to="/home/dapaiguan" replace>
													大牌馆
													</Link>	
													</li>		
														<li>
													<Link to="/home/tongzhuang" replace>
													童装童鞋
													</Link>	
													</li>		
														<li>
													<Link to="/home/quanqiugou" replace>
													全球购
													</Link>	
													</li>		
														<li>
													<Link to="/home/yongping" replace>
													用品
													</Link>	
													</li>		
														<li>
													<Link to="/home/naifen" replace>
													奶粉尿裤
													</Link>	
													</li>		
														<li>
													<Link to="/home/wanju" replace>
													玩具
													</Link>	
													</li>		
														<li>
													<Link to="/home/tushu" replace>
													图书
													</Link>	
													</li>		
														<li>
													<Link to="/home/food" replace>
													零辅食
													</Link>	
													</li>		
														<li>
													<Link to="/home/cheyi" replace>
													车床椅
													</Link>	
													</li>		
														<li>
													<Link to="/home/baoxian" replace>
													保险
													</Link>	
													</li>		
				                   		
														
								</ul>
                            </div>
    
					</div>
						<div className="com">
					 			<Switch>
				      			  	<Route path="/home/datahome" component={DataHome}></Route>
				      			  	<Route path="/home/dapaiguan" component={Dapaiguan}></Route>
				      			  	<Route path="/home/tongzhuang" component={Tongzhuang}></Route>
				      			  	<Route path="/home/quanqiugou" component={Quanqiugou}></Route>				      			  	
				      			  	<Route path="/home/yongping" component={Yongping}></Route>
				      			  	<Route path="/home/naifen" component={Naifen}></Route>
				      			  	<Route path="/home/wanju" component={Wanju}></Route>
				      			  	<Route path="/home/tushu" component={Tushu}></Route>				      			  	
				      			  	<Route path="/home/food" component={Food}></Route>
				      			  	<Route path="/home/cheyi" component={Cheyi}></Route>
				      			  	<Route path="/home/baoxian" component={Baoxian}></Route>				      			  
				      			</Switch>
				   		 </div>
				   		 <BottomCom></BottomCom>
				</div>
	}
}
