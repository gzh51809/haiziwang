import React from 'react';
import './ccomscss/bottomcom.scss';
//import './homesass/homelis.scss';
import {Route,Link,NavLink,Switch,Redirect,withRouter,HashRouter} from 'react-router-dom';
export default class BottomCom extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}
	
	render(){
		return <div className="bottom-tools">			                 
				                    <div>  
				                        <NavLink to="/home/datahome" replace>
				                               <i className="iconfont icon-zhaocaimao"></i>
				            					<p>商城</p>
				            		     </NavLink>				            		   
				                    </div>
				                    <div>  
				                        <NavLink to="/list/lis" replace>
				                               <i className="iconfont icon-el-icon-fenlei"></i>
				            					<p>分类</p>
				            		     </NavLink>				            		   
				                    </div>
				                     <div>  
				                        <NavLink to="/mom" replace>
				                               <i className="iconfont icon-jifenshangchengtequan"></i>
				            					<p>妈咪社</p>
				            		     </NavLink>				            		   
				                    </div>
				                     <div>  
				                        <NavLink to="/cart">
				                               <i className="iconfont icon-gouwuche"></i>
				            					<p>购物车</p>
				            		     </NavLink>				            		   
				                    </div>
				                     <div>  
				                        <NavLink to="/mine" replace>
				                               <i className="iconfont icon-wo"></i>
				            					<p>我的</p>
				            		     </NavLink>				            		   
				                    </div>
				                </div>
	}
}
