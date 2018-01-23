import React,{Component} from 'react';
import {Link} from 'react-router';

export default class Footer extends Component{
    render(){
        return (
            <div>
                <table width="100%"  cellSpacing="0" className="nav">
                    <tbody>
                    <tr>
                        <td width="25" className="foot">
                            <Link to="/home" activeClassName="active">
                                <img src="/src/assets/images/11.png" width="30%" height="auto"/><p>外卖</p>
                            </Link>
                        </td>
                        <td width="25" className="foot">
                            <Link to="/type" activeClassName="active">
                                <img src="/src/assets/images/22.png" width="30%" height="auto"/><p>分类</p>
                            </Link>
                        </td>
                        <td width="25" className="foot">
                            <Link to="/shop" activeClassName="active">
                                <img src="/src/assets/images/33.png" width="30%" height="auto"/><p>购物车</p>
                            </Link>
                        </td>
                        <td width="25" className="foot">
                            <Link to="/user" activeClassName="active">
                                <img src="/src/assets/images/44.png" width="30%" height="auto"/><p>我的</p>
                            </Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="kb"></div>
            </div>
        );
    }
}