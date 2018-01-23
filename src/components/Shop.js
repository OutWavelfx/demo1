import React,{Component} from 'react';
import {connect} from "react-redux";
class Shop extends Component{
  render(){
    let {bShopList,addNum,minusNum,total,del,check,checkAll,open}=this.props

    return (
      <div>
          <div className="bodymain">
          {
                bShopList.map((item,index)=>{
                    console.log(item)
                    return (
                        <div className="bbb" key={item.id}>
                        <table width="95%" cellPadding="0">
                            <tbody>
                            <tr>
                                <td rowSpan="2"><input type='checkbox'checked={item.boolean} onChange={()=>{check(item.id)}}/></td>
                                <td rowSpan="2" className="shop_pic"><img src="/src/assets/images/cp.jpg" width="100%" height="auto"/></td>
                                <td className="ddd">{item.title}</td>
                                <td className="bubu">
                                      <input  type="button" value="-" onClick={()=>{minusNum(item)}}/>
                                      <span>{item.count}</span>
                                      <input  type="button" value="+" onClick={()=>{addNum(item)}}/>
                              </td>
                            </tr>
                            <tr>
                                <td className="ddd">
                                  {item.detail}
                                </td>
                                <td>
                                  <a href="javascript:;" className="delm" onClick={()=>{del(item)}}>删除</a>                              
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <table width="95%" cellPadding="0" className="shop_text">
                            <tbody>
                            <tr>
                                <td className="d3">共<span>{item.count}</span>件商品</td>
                                <td className="d3">小计:<span>{item.price*item.count}</span>元</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    )

                })
          }
          </div>
          <div className="js">
              <div className="jss"></div>
              <table width="100%" cellPadding="0" >
                  <tbody>
                  <tr>
                      <td className="d3"><input type='checkbox'onChange={()=>{checkAll(open)}} checked={open}/>全选</td>
                      <td className="d3">合计：<span>￥{total}</span>（不含运费）</td>
                      <td className="jj"><input type="submit" value="结算" className="jsjs" /></td>
                  </tr>
                  </tbody>
              </table>
          </div>
      </div>
    );
  }
}
const mapStateToProps=(state,ownProps)=>{
    return {
      bShopList:state.bShopList,
      total:state.total,
      open:state.open
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        "addNum":(data)=>{
            dispatch({type:"ADD_NUM",payload:data})
        },
        "minusNum":(data)=>{
            dispatch({type:"MINUS_NUM",payload:data})
        },
        "del":(data)=>{
            dispatch({type:"DEL",payload:data})
        },
        "check":(data)=>{
            dispatch({type:"CHECK",payload:data})
        },
        "checkAll":(data)=>{
             
            dispatch({type:"CHECK_ALL",payload:data})
        }
    }
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(Shop)