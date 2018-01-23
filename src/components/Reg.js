import React,{Component} from 'react';
import {Link} from 'react-router';

import {hashHistory} from 'react-router';

export default class Reg extends React.Component {
    constructor(){
        super();
        this.state={
            username:'',
            phonenum:'',
            password:'',
            psd:'',
            status:"register"
        };
        this.changeUsername = this.changeUsername.bind(this);
        this.changePhonenum = this.changePhonenum.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changePsd = this.changePsd.bind(this);
        this.reg = this.reg.bind(this);
    }
    changeUsername(ev) {
        this.setState({ username: ev.target.value })
    }
    changePassword(ev) {
        this.setState({ password: ev.target.value })
    }
    changePhonenum(ev) {
        this.setState({ phonenum: ev.target.value })
    }
    changePsd(ev) {
        this.setState({ psd: ev.target.value })
    }
    render(){
        let username = this.state.username;
        let password = this.state.password;
        let psd = this.state.psd;
        let changeUsername = this.changeUsername;
        let changePassword = this.changePassword;
        let changePsd = this.changePsd;
        return (
            <div>
                <div className="login">
                    <div className="logo"></div>
                    <div className="main">
                        <table width="100%"  cellSpacing="0" className="main1">
                            <tbody>
                            <tr>
                                <td className="text"><input type="text/css" className="text1" placeholder="输入用户名" value={username} onChange={changeUsername} /></td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="linee"></div>
                        <table width="100%" cellSpacing="0" className="main1">
                            <tbody>
                            <tr>
                                <td className="text"><input type="password" className="text1" placeholder="输入新密码" value={password} onChange={changePassword}/></td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="linee"></div>
                        <table width="100%" cellSpacing="0" className="main1">
                            <tbody>
                            <tr>
                                <td className="text"><input type="password" className="text1" placeholder="输入确认密码" value={psd} onChange={changePsd}/></td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="linee"></div>
                    </div>
                    <div className="button"><input type="submit" value="注 册" className="text2" onClick={() => { this.reg() }}/></div>
                </div>
                <div className="footrt">
                    <div className="footrt_left">
                        <Link to="/login/log" activeClassName="active">
                        已有账号？立即登录
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    reg(){
        // if((/^\w{6,10}$/.test(this.username))&&(/^1[3|4|5|7|8][0-9]{9}$/.test(this.phonenum))&&(/^\w{6,20}$/.test(this.password))&&(this.psd==this.password)){
            var params = new URLSearchParams();
            params.append("username", this.state.username);
            params.append("password", this.state.password);
            params.append("status", this.state.status);
            let url=`http://localhost:3000/user`;
            fetch(url,{
                method: "post",
                body: params
            }).then(
                res => res.json()
            ).then(
                data => {
                    if(data.error==0){
                        alert("注册成功点击确认转到登陆页")
                        this.props.router.push('/login');
                    }else if(data.error==1){
                        alert(data.msg)
                    }else{
                        alert('数据请求错误')
                    }
                }
            )
    //    }
    }
};
