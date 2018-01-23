import React from "react";
class Slider extends React.Component{
  componentDidMount(){
    var mySwipe=new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
  }
  render(){
    return (
      <div className="banner">
        <ul className="clearfix">
            <li><img src="/src/assets/images/001.jpg" alt=""/></li>
            <li><img src="/src/assets/images/002.jpg" alt=""/></li>
            <li><img src="/src/assets/images/003.jpg" alt=""/></li>
            <li><img src="/src/assets/images/000.jpg" alt=""/></li>         
        </ul>

      </div>
    );
  }
}
export default Slider;