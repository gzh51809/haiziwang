import React from 'react';
import './detailsass/detail.scss';
import {connect} from 'react-redux';
import {add,changeQty} from '../../actions/cartAction';

 class Detail extends React.Component{
	constructor(props){
		super(props)
		this.state={
			
			details:[],
			detacom:[],
			num:1
			
		}
		this.goback = this.goback.bind(this);
	}
	
		componentWillMount(){
		this.loadHomeLis();
		
	}
		componentDidMount(){
			this.loadcom();
		}
		loadHomeLis=()=>{
				const data=require('./detailjson/detail.json');
				console.log(data.rmdlist
				)
       			 this.setState({
       			  details:data.rmdlist
     		 })
       			 
			
	}
			
		loadcom=()=>{
			
			var id=this.props.history.location.pathname.split(":")[1];
			console.log(id);
			console.log(this.state.details)
			this.state.details.forEach(item=>{
				if(id==item.skuid){
					console.log(id)
					console.log(item)
					
					 this.setState({
       			 		detacom:item
     				 })
				}
			})
       			
			console.log(this.state.detacom)
	 	
		}
		
		
	 goback = () => {
	 	console.log(this.props.history)
        this.props.history.go(-1);
        
  }
	gocart=()=>{
		 this.props.history.replace('/cart')
	}
	
	add2cart=(goods)=>{
//		console.log(goods)
		goods={
			skuid:this.state.detacom.skuid,
			price:this.state.detacom.sellprice,
			picurl:this.state.detacom.picurl,
			name:this.state.detacom.skuname,			
			num:this.state.num
		  }
		this.props.dispatch({
			type:'ADD_TO_CART',
			payload:goods
		})
	}
		
	jian=()=>{
		var a=this.state.num-1;
		if(a<=1){
			this.setState({
			num:1
		})
		}else{
			this.setState({
			num:a
		})
		}
		
		console.log(this.state.num)
		
	}
		
	jia=()=>{
		
		var a=this.state.num+1;
		this.setState({
			num:a
		})
		console.log(this.state.num)
	}
	numChange=(vlu)=>{
		console.log(vlu)
	}
		
	render(){
		return <div className="detail">
			<div className="detailt">
				<div className="top">
					<i className="iconfont icon-fanhui" onClick={this.goback}></i>
					<i className="iconfont icon-shezhi"></i>
				</div>
				<div className="imgs">
					<img src={this.state.detacom.picurl}/>
				</div>
				<div className="content">
					<p className="jiage"><i className="iconfont icon-qian"></i>{this.state.detacom.sellprice/100}</p>
					<p className="shuxing">
						<span>孩子王直营</span>
						{this.state.detacom.skuname}
					</p>
				</div>
				<div className="num">
					<span>数量</span>
					<i className="iconfont icon-iconjian" onClick={this.jian.bind(this)}></i>
					<input type="text" value={this.state.num} onChange={this.numChange}/>
					<i className="iconfont icon-jiahao" onClick={this.jia.bind(this)}></i>
					<span>有货</span>
				</div>
				
				
				 <div className="pictures">
                      <img src="http://pmspic-10004025.image.myqcloud.com/243fbe97-562a-49b8-a4b2-e60fe0f227d5?imageMogr2/quality/70/format/jpg" /><img src="http://pmspic-10004025.image.myqcloud.com/c66e43f4-61e1-460b-b388-bcd15ee6decb?imageMogr2/quality/70/format/jpg" title="π星3-1.jpg" /> <img src="http://pmspic-10004025.image.myqcloud.com/5bbb362f-4714-4587-8328-c3e0f66e997f?imageMogr2/quality/70/format/jpg" title="π星3-2.jpg" /> <img src="http://pmspic-10004025.image.myqcloud.com/c4472d68-fffa-4191-bb38-d7e14366b224?imageMogr2/quality/70/format/jpg" title="π星3-3.jpg" /> <img src="http://pmspic-10004025.image.myqcloud.com/aad2b54e-0392-4446-98c9-e843f4d9b6c5?imageMogr2/quality/70/format/jpg" title="π星3-4.jpg" /> <img src="http://pmspic-10004025.image.myqcloud.com/04cdc743-04b8-4478-86e7-b36262b68c34?imageMogr2/quality/70/format/jpg" title="π星3-5.jpg" />
                    
              
                    <img src="https://cmspic-10004025.image.myqcloud.com/bb6dfdc0-f939-11e8-abc9-6553db050bda_size_1125x1773"/>
                </div>

				
				
				
			</div>
			
			<div className="detailb">
				<div className="com">
				<i className="iconfont icon-liuyan"></i>
				<p>客服</p>
				</div>
				<div className="com">
				<i className="iconfont icon-liwuhuodong
"></i>
				<p>收藏</p>
				</div>
				<div className="com">
				<i className="iconfont icon-gouwuche" onClick={this.gocart}></i>
				<p>购物车</p>
				</div>
				<div className="comd">
					<div className="comd1" onClick={this.add2cart.bind(this,this.state.detacom)}>加入购物车</div>
				<div className="comd2">立即购买</div>
				</div>
				
			</div>
		</div>
	}
}
Detail = connect(state=>{
	
	return{
		
	}
})(Detail);
export default Detail;