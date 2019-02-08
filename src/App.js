import React, { Component } from 'react';
import {Route,Link,NavLink,Switch,Redirect,withRouter,HashRouter} from 'react-router-dom';


import Home from './components/home/Home';
import List from './components/list/List';
import Cart from './components/cart/Cart';
import Mine from './components/mine/Mine';
import Mom from './components/mom/Mom';

import logo from './logo.svg';
import './App.css';

//export default class App extends React.Component{
//	constructor(props){
//		super(props)
//		this.state={}
//	}


class App extends Component {
	
	 constructor(props){
        super(props);
        this.state = {
            menu:[
                {
                    text:'商城',
                    path:'/home',
                    name:'Home',
                    icon:'icon-zhaocaimao'
               
                },{
                    text:'分类',
                    path:'/list',
                    name:'List',
                    icon:'icon-el-icon-fenlei'
                    
                },{
                    text:'妈咪社',
                    path:'/mom',
                    name:'Mom',
                    icon:'icon-jifenshangchengtequan'
                  
                },{
                    text:'购物车',
                    path:'/cart',
                    name:'Cart',
                    icon:'icon-gouwuche'
                   
                },{
                    text:'我的',
                    path:'/mine',
                    name:'Mine',
                    icon:'icon-wo'
                   
                },
                
            ],
            current:'/home'

        }

        // this绑定
       
    }
	
	
	
  render() {
    return  <HashRouter>
				      <div>
				      			<div className="mian">
				      				<Switch> 
				      			  	<Route path="/home" component={Home} replace></Route>
				      			  	<Route path="/cart" component={Cart}></Route>
				      			  	<Route path="/mine" component={Mine}></Route>
				      			  	<Route path="/list" component={List}></Route>
				      			  	<Route path="/mom" component={Mom}></Route>
				      			  	<Redirect from="/" to="home/datahome"/>
				      			  	</Switch>
				      			</div>
							 	<div className="bottom-tools">
				                   {/*{
				                       this.state.menu.map(menu=>{
				                            return (
				                            	
				                                <div key={menu.text}>  
				                                 	<NavLink to={menu.path} replace>
				                                		<i className={[menu.icon+' '+"iconfont"]}></i>
				            							<p>{menu.text}</p>
				            						</NavLink>
				                                </div>
				                            )
				                        })
				                    }*/}
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
				                        <NavLink to="/cart" replace>
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
				                
				             
				      </div>
				      
     		</HashRouter>
  }
}



export default App;
