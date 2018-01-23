import React,{Component} from 'react';

import {Link} from 'react-router';

export default class User extends Component{
  render(){
    this.rem = this.rem.bind(this);
    return (
      <div>
          <div className="my">
              <table width="100%" cellSpacing="0" className="my_name">
                  <tbody>
                  <tr>
                      <td className="my_main_1">
                          <div><h3 className="name_1">未登录</h3></div>
                          <div className="zhuxiao"  onClick={() => { this.rem() }}>个人中心</div>
                      </td>
                      <td className="my_mainn"><a href="address.html">></a></td>
                  </tr>
                  </tbody>
              </table>
              <table width="100%"  cellSpacing="0" className="my_2">
                  <tbody>
                  <tr>
                      <td width="30" className="my_3"><a href="pingjia.html"><img src="/src/assets/images/pj.jpg" width="30%" height="auto"/><p>商家评价</p></a></td>
                      <td width="30" className="my_4"><a href="myjf.html"><img src="/src/assets/images/xh.jpg" width="30%" height="auto"/><p>我的积分</p></a></td>
                      <td width="30" className="my_4"><a href="myjk.html"><img src="/src/assets/images/jk.jpg" width="30%" height="auto"/><p>我的金库</p></a></td>
                  </tr>
                  </tbody>
              </table>

              <table width="100%"  cellSpacing="0" className="my_n">
                  <tbody>
                  <tr>
                      <td className="my_main"><a href="myorder.html">我的订单</a></td>
                      <td className="my_mainn"><a href="myorder.html">></a></td>
                  </tr>
                  <tr>
                      <td className="my_main_p"><a href="shopping.html">我的购物车</a></td>
                      <td className="my_mainn_p"><a href="shopping.html">></a></td>
                  </tr>
                  </tbody>
              </table>
          </div>
          <div className="button1">
              <Link to="/login" activeClassName="active">
              <input type="submit" value="未登录" className="text2"onClick={() => { this.rem() }}/>
              </Link>
          </div>

      </div>
    );
  }
  goBack(){
    this.props.router.go(-1);
  }
  rem(){
    localStorage.removeItem("username")
  }
  componentDidMount(){
    var uid=localStorage.getItem("username");
    if (uid != undefined){
        $('.name_1').html(uid)
        $('.text2').val("注销当前用户") 
        $('.zhuxiao').html("个人中心") 
    
        
      }
}
componentDidUpdate(){
    var uid=localStorage.getItem("username");
    if (uid != undefined){
        $('.name_1').html(uid)
        $('.text2').val("注销当前用户") 
      }
}
}