import React from 'react';

import './lissass/lis.scss';
import {Route,Link,NavLink,Switch,Redirect,withRouter,HashRouter} from 'react-router-dom';

import ReMen from './lis/remen';
import JiaFang from './lis/jiafang';
import JuJia from './lis/jujia';
import LingShi from './lis/lingshi';
import Naifen from './lis/naifen';
import QuanQiu from './lis/quanqiu';
import Tongz from './lis/tongz';
import TuShu from './lis/tushu';
import WanJu from './lis/wanju';
import WeiYang from './lis/weiyang';
import YunChan from './lis/yunchan';


export default class Lis extends React.Component{
	constructor(props){
		super(props)
		this.state={
				
		}
	}
	
	
	
	render(){
		return <div className="fenlei">
				<div className="ss">
					<p>
					<i className="iconfont icon-sousuo"></i>
					
					</p>
				</div>
				<div className="coms">
					<div className="lis">
						<ul>
							<li>
								<Link to="/list/lis/remen" replace>
									热门推荐
								</Link>								
							</li>
							<li>
								<Link to="/list/lis/quanqiu" replace>
									全球购
								</Link>								
							</li>
							<li>
								<Link to="/list/lis/naifen" replace>
									奶粉尿裤
								</Link>								
							</li>
							<li>
								<Link to="/list/lis/lingshi" replace>
									辅食零食
								</Link>								
							</li>
							<li>
								<Link to="/list/lis/tongz" replace>
									童装童鞋
								</Link>								
							</li>
							<li>
								<Link to="/list/lis/jiafang" replace>
									寝居家纺
								</Link>								
							</li>
							<li>
								<Link to="/list/lis/weiyang" replace>
									喂养洗护
								</Link>								
							</li>
							<li>
								<Link to="/list/lis/jujia" replace>
									居家清洁
								</Link>								
							</li>
							<li>
								<Link to="/list/lis/wanju" replace>
									玩具文体
								</Link>								
							</li>
							<li>
								<Link to="/list/lis/tushu" replace>
									图书文教
								</Link>								
							</li>
							<li>
								<Link to="/list/lis/yunchan" replace>
									孕产用品
								</Link>								
							</li>
						</ul>
					</div>
					<div className="goods">						
								<Switch>							
				      			  	<Route path="/list/lis/remen" component={ReMen}></Route>
				      			  	<Route path="/list/lis/jiafang" component={JiaFang}></Route>
				      			  	<Route path="/list/lis/jujia" component={JuJia}></Route>
				      			  	<Route path="/list/lis/lingshi" component={LingShi}></Route>				      			  	
				      			  	<Route path="/list/lis/quanqiu" component={QuanQiu}></Route>
				      			  	<Route path="/list/lis/naifen" component={Naifen}></Route>
				      			  	<Route path="/list/lis/wanju" component={WanJu}></Route>
				      			  	<Route path="/list/lis/tushu" component={TuShu}></Route>				      			  	
				      			  	<Route path="/list/lis/tongz" component={Tongz}></Route>
				      			  	<Route path="/list/lis/weiyang" component={WeiYang}></Route>
				      			  	<Route path="/list/lis/yunchan" component={YunChan}></Route>	
				      			  	<Redirect from="/" to="/list/lis/remen"/>
				      			</Switch>					
					</div>
				</div>
		</div>
	}
}
