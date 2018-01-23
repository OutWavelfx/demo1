import React from "react";
import Footer from './Footer';
import NavBar from "./NavBar";
import Loading from "./Loading";
import {connect} from "react-redux";

class App extends React.Component{
    render(){
        let {
            bNav,bFoot,bHead,bHeader,showLogin,showRegister,showUserInfo,showDetail,showShopcar,
            showNav,showFoot,hideNav,hideFoot,showHead,hideHead,bEvaluate,bDetaillist,showEvaluate,hideEvaluate,hideDetaillist,showDetaillist,
            bLoading,showLoading,hideLoading, 
        } = this.props;

        let path=this.props.location.pathname;
       
        if(/reg/.test(path)){
            setTimeout(showRegister,0);
            setTimeout(showNav,0);
            setTimeout(hideFoot,0); 
        }
        if(/log/.test(path)){
            setTimeout(showLogin,0);
            setTimeout(showNav,0);
            setTimeout(hideFoot,0);            
        }
        if(/user/.test(path)){
            setTimeout(showUserInfo,0);
            setTimeout(showNav,0);
            setTimeout(showFoot,0);
        }
        if(/detail/.test(path)){
            setTimeout(showDetail,0);
            setTimeout(showNav,0);
            setTimeout(hideFoot,0);
        }
        if(/shop/.test(path)){
            setTimeout(showShopcar,0);        
            setTimeout(showNav,0);
            setTimeout(showFoot,0);
        }
        if(/home|type/.test(path)){
          setTimeout(hideNav,0);
          setTimeout(showFoot,0);
        }
        return (
            <div className="app">
                {bLoading?<Loading/>:undefined}
                {bNav?<NavBar/>:undefined}
                {this.props.children}
                {bFoot?<Footer/>:undefined}
            </div>
        );
    }
}


//状态satte来的属性都在mapStateToProps里面
const mapStateToProps=(state,ownProps)=>{
    return {
        bLoading:state.bLoading,
        bNav:state.bNav,
        bFoot:state.bFoot
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
        },
        showNav:()=>{
            dispatch({type:'SHOW_NAV'});
        },
        hideNav:()=>{
            dispatch({type:'HIDE_NAV'});
        },
        showFoot:()=>{
            dispatch({type:'SHOW_FOOT'});
        },
        hideFoot:()=>{
            dispatch({type:'HIDE_FOOT'});
        },
        showLogin:()=>{
            dispatch({type:'SHOW_LOGIN'});
        },
        showRegister:()=>{
            dispatch({type:'SHOW_REGISTER'});
        },
        showUserInfo:()=>{
            dispatch({type:'SHOW_USERINFO'});
        },
        showDetail:()=>{
            dispatch({type:'SHOW_DETAIL'});
        },
        showShopcar:()=>{
            dispatch({type:'SHOW_SHOPCAR'});
        }

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
