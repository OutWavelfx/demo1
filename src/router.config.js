import React from 'react';
import {Router,Route,hashHistory,browserHistory,IndexRoute,Redirect} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Type from './components/Type';
import Shop from './components/Shop';
import User from './components/User';
import Log from './components/Log';
import Login from './components/Login';
import Detail from './components/Detail';
import Reg from './components/Reg';
import Error from './components/Error';

//路由配置
const RouterConfig = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
        <Route path="home" component={Home} />
        <Route path="type" component={Type} />
        <Route path="shop" component={Shop} />
        <Route path="user" component={User} />
        <Route path="login" component={Login}>
            <IndexRoute component={Log}/>
            <Route path="log" component={Log}/>
            <Route path="reg" component={Reg} />
        </Route>
        <Route path="detail" component={Detail}>
          <Route path=":id" component={Detail}/>
        </Route>
      <Route path="*" component={Error}/>
    </Route>
  </Router>
);

export default RouterConfig;