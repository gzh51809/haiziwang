import { Checkbox } from 'antd';

import React from 'react';
import '../cartsass/cartinf.scss';
import {connect} from 'react-redux';
import cartAction from '../../../actions/cartAction';


 class CartInf extends React.Component {
	constructor(props){
		super(props)
		this.state={
			//  checkedList: defaultCheckedList,
    checkedList: [],
    
    indeterminate: true,
    checkAll: false,
    datalis:[]
		}
		
	}
  
 onChange=(e) =>{
  console.log(`checked = ${e.target.checked}`);
}


	componentWillMount(){
		this.loadHomeLis();
	}
	
	
		loadHomeLis=()=>{
				const data=require('../cartdata/cart.json');
				console.log(data.data.customFloor[1].data[0].products
				)
       			 this.setState({
       			  datalis:data.data.customFloor[1].data[0].products
     		 })
       			 
			
				
	}

  render() {
  	console.log('Cart:',this.props.goodslist);
        let {remove,changeQty,goodslist,clear} = this.props;
  	
    return (
    	<div className="cartcont">
    	 	 <div className="contop">
    	 		<Checkbox onChange={this.onChange}>孩子王</Checkbox>
      		</div>
      		<div className="con">
      			<ul>
      				{
      					goodslist.map(item=>{
      					console.log(item.skuid)
      					return <li key={item.skuid}>
      							<div className="conl">
    	 							<Checkbox onChange={this.onChange}></Checkbox>  							
      							</div>
      							<div className="conc">
      								<img src={item.picurl}/>
      							</div>
      							<div className="conr">
      								<div className="conrt">
      									<p>
      									{item.name}
      									</p>
      									<span>
      									&yen;
      										{item.price/100}
      									</span>
      								</div>
      								<div className="conrb">
      									<div>
      										<i className="iconfont icon-iconjian"></i>
      										<input type="text" value={item.num}/>
      										<i className="iconfont icon-jiahao"></i>
      										
      									</div>
      								</div>
      								
      							</div>
      							
      					</li>
      				})
      				}
      			</ul>
      		</div>
    	</div>
    );
  }
}

// connect([mapStateToProps],[mapDispatchToProps])
// 默认映射dispath到props
const mapStateToProps = state=>{
	console.log(state)
    return {
        goodslist:state.cart.goodslist
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        remove(id){
            dispatch(cartAction.remove(id))
        },
        changeQty(id,qty){
            dispatch(cartAction.changeQty(id,qty))
        },
        clear(){
            dispatch(cartAction.clear())
        }
    }
}
CartInf = connect(mapStateToProps,mapDispatchToProps)(CartInf);	


export default CartInf;