import React, { Component } from 'react';
import {Route,Link,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';

import Home from './components/Home';
import List from './components/List';
import Cart from './components/Cart';
import Mine from './components/Mine';
import Mom from './components/Mom';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	
	 constructor(){
        super();
        this.state = {
            menu:[
                {
                    text:'商城',
                    path:'/home',
                    name:'Home',
               
                },{
                    text:'分类',
                    path:'/list',
                    name:'List',
                    
                },{
                    text:'妈咪社',
                    path:'/mom',
                    name:'Mom',
                  
                },{
                    text:'购物车',
                    path:'/cart',
                    name:'Cart',
                   
                },{
                    text:'我的',
                    path:'/mine',
                    name:'Mine',
                   
                },
                
            ],
            current:'/home'

        }

        // this绑定
       
    }
	
	
	
  render() {
    return (
      <div>
			 				<div>
                   {
                       this.state.menu.map(menu=>{
                            return (
                                <div key={menu.text}>
                                   {menu.text}
                                </div>
                            )
                        })
                    }
                </div>
               { /*<Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/list" component={List}/>
                    <Route path="/mom" component={Mom}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/mine" component={Mine}/>                  
                    <Redirect from="/" to="/home"/>                  
                </Switch>*/}
      </div>
    );
  }
}

export default App;
