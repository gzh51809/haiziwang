import React, { Component } from 'react';
import {Route,Link,NavLink,Switch,Redirect,withRouter,HashRouter} from 'react-router-dom';

import PropTypes from 'prop-types';
import {ReactReduxContext,connect} from 'react-redux';
import * as all from 'react-redux';
console.log('react-redux:',all)

import Home from './components/home/Home';
import List from './components/list/List';
import Cart from './components/cart/Cart';
import Mine from './components/mine/Mine';
import Mom from './components/mom/Mom';
import Detail from './components/detail/detail';
import LoGin from './components/login/login';

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
	
	  // 设置静态属性，用户获取Provider提供的store数据
    static contextType = ReactReduxContext;

	
  render() {
  	
    return  <HashRouter>
				      <div>
				      			<div className="mian">
				      				<Switch> 
				      			  	<Route path="/home" component={Home}></Route>
				      			  	<Route path="/cart" component={Cart}></Route>
				      			  	<Route path="/mine" component={Mine}></Route>
				      			  	<Route path="/list" component={List}></Route>
				      			  	<Route path="/detail/:id" component={Detail}></Route>
				      			  	<Route path="/login" component={LoGin}></Route>				      			  	
				      			  	<Route path="/mom" component={Mom}></Route>
				      			  	<Redirect from="/" to="home/datahome"/>
				      			  	</Switch>
				      			</div>
							 	
				                
				             
				      </div>
				      
     		</HashRouter>
  }
}


let mapStateToProps = (state)=>{
    console.log('mapStateToProps:',state)
    return {
        // 把goodslist属性映射到App的props中
//      goodslist:state.cart.goodslist,
//      price:state.goods.price
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        addcart:(goods)=>{
            dispatch({
                type:'ADD_TO_CART',
                payload:goods
            })
        }
    }
}
App = connect(mapStateToProps)(App);
App=withRouter(App);


export default App;
