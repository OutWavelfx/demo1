import React,{Component} from 'react';
import {Link} from 'react-router';
import Header from "./Header"
import Slider from "./Slider"

import {connect} from "react-redux";
class Home extends React.Component{
    constructor(){
        super();
        this.state={
          listData:[]
        }
      }
  render(){
      let listData = this.state.listData;
    return (
      <div>
          <Header></Header>
          <div >
          <Slider></Slider>
            </div>
          <div className="indexmain">
              <table className="indexmain_1" cellSpacing="0">
                  <tbody>
                  <tr>
                    {
                        listData.map((item,index)=>{
                            console.log(item)
                            return (
                                <td className="main_1" key={item.id}>
                               <Link to={{pathname:'/detail/'+item.id}}>
                                    <div className="main_2"><img src={item.img} width="100%" height="auto"/></div>
                                    <div className="indetext">{item.title}</div>
                                </Link>
                                </td>
                            )
                        })
                    }
                  </tr>
                  </tbody>
              </table>
          </div>
          <div id="activity">
              <div className="title">优惠中心</div>
              <div className="content">
                  <div className="text">网上订餐，每单任意消费后，加6元即可享受缤纷美味,加6元即可享受缤纷美味</div>
                  <div className="jt">></div>
              </div>
              <div className="content">
                  <div className="text">网上订餐，每单任意消费后，加6元即可享受缤纷美味,加6元即可享受缤纷美味</div>
                  <div className="jt">></div>
              </div>
              <div className="content">
                  <div className="text">网上订餐，每单任意消费后，加6元即可享受缤纷美味,加6元即可享受缤纷美味</div>
                  <div className="jt">></div>
              </div>
              <div className="content">
                  <div className="text">网上订餐，每单任意消费后，加6元即可享受缤纷美味,加6元即可享受缤纷美味</div>
                  <div className="jt">></div>
              </div>
          </div>

      </div>
    );
  }
  componentDidMount(){
    this.getData();
  }
  getData(){
    //this.props.showLoading();
    let url=`http://localhost:3000/index`;
    fetch(url).then(
      res => res.json()
    ).then(
      data => {
        setTimeout(()=>{
          //this.props.hideLoading();
          this.setState({listData:data});
          console.log(this.state.listData)        
        },1000);
      }
    )
  }

}


const mapStateToProps=(state,ownProps)=>{
    return {
  
    }
  };
  
  //所有需要递交的action请求
  const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
      showLoading:()=>{
        dispatch({type:'SHOW_LOADING'});
      },
      hideLoading:()=>{
        dispatch({type:'HIDE_LOADING'});
      }
    }
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);