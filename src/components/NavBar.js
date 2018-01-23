import React,{Component} from 'react';
import {connect} from "react-redux";

class Header extends Component{
    render(props){
        let {
            bHeader,showLogin,showRegister,showUserInfo,showDetail,showShopcar,
        } = this.props;
        return (
            <div className="header">
                <table>
                    <tbody>
                    <tr>
                        <td width="10%" className="nav_left1"><a href="javascript:window.history.go(-1);">&lt;</a></td>
                        <td width="80%"className="nav_title">{bHeader}</td>
                        <td width="10%" className="nav_r"></td>
                    </tr>
                    </tbody>                
                </table>
            </div>
        );
    }
}
// 状态satte来的属性都在mapStateToProps里面
const mapStateToProps=(state,ownProps)=>{
    // console.log(state.bHeader)
    return {
    bHeader:state.bHeader
    }
};
export default connect(
mapStateToProps,
)(Header);