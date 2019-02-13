import { Carousel, WingBlank } from 'antd-mobile';
//import 'antd-mobile/dist/antd-mobile.css';
import './homesass/zoumadeng.scss';
import React from 'react';
export default class ZouMaDeng extends React.Component {
  state = {
    data: [],
    
    imgHeight: 176,
  }
  
  	componentWillMount(){
		this.lodata();
	}
  
  lodata=()=>{
				const data=require('./homejson/data1.json');
//				console.log(data.data
//				)
       			 this.setState({
       			  data:data.data.slideTop
     		 })
       			 
			
				
	}
  
  componentDidMount() {
    // simulate img loading
//  setTimeout(() => {
//    this.setState({
//      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
//    });
//  }, 100);
  }
  render() {
    return (<div className="zoumadeng">
      <WingBlank
       
      >
        <Carousel
          autoplay
          infinite
        
         
           style={{ width: '100%', height:'100%' }}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height:'100%'}}
            >
              <img
                src={val.image}
                alt=""
                style={{ width: '100%', height:'100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    </div>  
    );
  }
}

