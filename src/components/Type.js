import React,{Component} from 'react';
import {Link} from 'react-router';
import Header from "./Header"

export default class Type extends Component{
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
          <div className="classmain">
              <table width="95%" cellSpacing="0" className="class_main">
                  <tbody>
                  <tr>
                      {
                          listData.map((item,index)=>{
                            return (
                                <td className="class_main_1" key={item.id}>
                                 <Link to={{pathname:'/detail/'+item.id}}>
                                    <div className="class_pic"><img src={item.img} width="100%" height="auto"/></div>
                                    <div className="class_text"><p>{item.title}</p><p>{item.detail}</p><p>￥：{item.price}</p></div>
                                 </Link>
                                </td>  
                            )
                          })
                      }                                  
                  </tr>                
                  </tbody>
              </table>
          </div>
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
          this.setState({listData:data});
          console.log(this.state.listData)        
        },0);
      }
    )
  }
}