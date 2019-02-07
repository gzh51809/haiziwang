import React from 'react';

import WoDe from './minelist/wode';
import BaoXian from './minelist/baoxian';
import ChangYong from './minelist/changyong';
import DingDan from './minelist/dingdan';
import HaiZi from './minelist/haizi';
import QianBao from './minelist/qianbao';
import TiShi from './minelist/tishi';


export default class Mine extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}
	
	render(){
		return <div className="mine">
				<header>    
		            <div className="hl"><i className="iconfont icon-fanhui"></i> <i className="iconfont icon-zuping"></i></div>
		            <div className="hc">会员中心</div>
		            <div className="hr"><i className="iconfont icon-shezhi"></i></div>
   				 </header>
   				 <div className="mcom">
   				 		<WoDe></WoDe>
   				 		<TiShi></TiShi>
   				 		<DingDan></DingDan>
   				 		<QianBao></QianBao>
   				 		<BaoXian></BaoXian>
   				 		<ChangYong></ChangYong>
   				 		<HaiZi></HaiZi>
   				 </div>
		</div>
	}
}
