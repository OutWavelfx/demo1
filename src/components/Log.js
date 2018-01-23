import React,{Component} from 'react';
import {Link} from 'react-router';

export default class Log extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            status:"login"
        };
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.login = this.login.bind(this);
    }
    changeUsername(ev) {
        this.setState({ username: ev.target.value })
    }
    changePassword(ev) {
        this.setState({ password: ev.target.value })
    }
  render(){
    let username = this.state.username;
    let password = this.state.password;
    let changeUsername = this.changeUsername;
    let changePassword = this.changePassword;
    return (
      <div>
          <div className="login">
              <div className="logo"></div>
              <div className="main">
                  <table width="100%" cellSpacing="0" className="mainl">
                    <tbody>
                      <tr>
                          <td className="text"><input type="text/css" className="text1" placeholder="输入用户名"value={username} onChange={changeUsername}/></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="linee"></div>
                  <table width="100%"  cellSpacing="0" className="mainl">
                      <tbody>
                      <tr>
                          <td className="text"><input type="password" className="text1" placeholder="输入密码" value={password} onChange={changePassword} /></td>
                      </tr>
                      </tbody>
                  </table>
                  <div className="linee"></div>
              </div>
              <div className="button">           
                 <input type="submit" value="登 录" className="text2" onClick={() => { this.login() }} />          
              </div>
          </div>
          <div className="footrt">
              <div className="footrt_left">
                  <Link to="/login/reg" activeClassName="active">
                    注册新用户
                  </Link>
              </div>
              <div className="footrt_right">
                  <Link to="/login/reg" activeClassName="active">
                    忘记密码？
                  </Link>
              </div>
          </div>
      </div>
    );
  }
  login(){
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
            console.log(data)
            if(data.msg=='success'){
                alert("登陆成功");
                console.log(data)
                localStorage.setItem("username",this.state.username)
                this.props.router.push('/user');

            }else{
                alert(data.info)
            }
        }
    )
}

}