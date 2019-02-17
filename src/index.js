import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './sass/base.css';
import './sass/index.scss';
import iconfont from './iconfont/iconfont.css';
//import 'antd/dist/antd.css';
import {Route,Link,NavLink,Switch,Redirect,withRouter,HashRouter} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { createStore } from 'redux';
import {Provider} from 'react-redux';
import store from './store';
//console.log(store.getState());
//store.subscribe(function(){
//	console.log('data:',store.getState())
//})

//store.dispatch({
//	type:'ADD_TO_CART',
//	payload:{
//		id:1,
//		name:'xxx'
//	}
//})


//生成store
//let store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<Route component={App}/>
		</HashRouter>
	</Provider>
	,
	document.getElementById('root')
	
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
