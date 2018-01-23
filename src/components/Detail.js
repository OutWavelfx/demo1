import React,{Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";

class Detail extends Component{
  constructor(){
    super();
    this.state={
      detail:{}
    }
  }
  render(){
    let detail=this.state.detail
		let {sendCar}=this.props
    return (
      <div>
         <div className="bodymain">
    	<div><img src={this.state.detail.img} width="100%" height="auto"/></div>
        <div className="cp">
        	<div className="cp_left">
            	<div>{this.state.detail.title}</div>
            </div>
            <div className="cp_right">￥:{this.state.detail.price}/只</div>
        </div>
		<div className="btn">
            <table width="100%"  cellSpacing="0">
            <tbody>
                <tr>
                    <td className="btn1"><a href="javascript:;" onClick={()=>{sendCar(detail)}}><input type="button" value="加入购物车" className="btn2"/></a></td>
                    <td className="btn1">
                    <Link to="/shop" activeClassName="active">
                    <input type="button" value="去购物车结算" className="btn3"/>
                    </Link>
                    </td>
               </tr>
            </tbody>
            </table>
        </div>
        <div className="nr">炫酷视觉:GT730 1G D5限量免费升级到七彩虹GT730K-2G D5独显，显存更大更靠谱，娱乐游戏毫无压力！比市面上普遍的GT730 1G显卡性能提升30%！亲们抓紧机会！

<p>②强悍性能：I3 4150 免费升级到Intel第四代酷睿i3 4160双核四线程处理器，3.6GHz主频，性能秒杀低端四核处理器！</p>

<p>③稳定电源：额定230W电源免费升级到一线大牌金河田智能芯3200  额定300W电源 ，7*24小时长时间工作无故障运行，全方位的保护您的主机。金河田是全国最大的机电厂商之一，电流更纯净，性能更稳定。认准知名品牌，信赖100%！</p>

<p>④极速硬盘：500G机械硬盘免费升级到国内一线老品牌太阳花 128G固态硬盘，提速不提价！让您随时体会飞一般的感觉。</p></div>
        <div className="btnn">
            <table width="100%" cellSpacing="0">
            <tbody>            
                <tr>
                    <td className="bt"><input type="button" value="产品详情" className="b"/></td>
                    <td className="bt"><input type="button" value="产品评价" className="bb"/></td>
               </tr>
            </tbody>               
            </table>
        </div>
     
     <div>
        <div className="pic"><img src={this.state.detail.img} width="100%" height="auto"/></div>
        <div className="pic"><img src={this.state.detail.img} width="100%" height="auto"/></div>
        <div className="pic"><img src={this.state.detail.img} width="100%" height="auto"/></div>
    </div>
    </div>
    <div className="kb"></div>
      </div>
    );
  }
  componentDidMount(){
    this.getData();
  }
  getData(){
    let url=`http://localhost:3000/index`;
    fetch(url).then(
      res => res.json()
    ).then(
      data => {
        setTimeout(()=>{
          this.setState({detail:data[this.props.params.id-1]}) 
          console.log(this.state.detail) //该详情页的那个对象   
        },0);
      }
    )
  }
}
const mapStateToProps=(state,ownProps)=>{
  return {
      bShopList:state.bShopList
      }
    }

const mapDispatchToProps=(dispatch,ownProps)=>{
  return {
    "sendCar":(data)=>{
      alert("加入成功");
      dispatch({type:"SEND_SHOPLIST",payload:data})
  
      }
    }	
}

export default connect(
mapStateToProps,mapDispatchToProps
)(Detail)