import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom'
import routes from '../router/router'


function App() {
  return (
    <div className="App">
		<Switch>
			{
			  routes.map((route,index)=>(
				<Route exact {...route} key={index}></Route>
			  ))
			}
		</Switch>
		<div className="nav">
			<Link to="/home">
				<div className="content">
					<img src={require('../assets/icon-home.svg')} alt="" />
					<p>首页</p>
				</div>
			</Link>
			<Link to="/bill">
				<div className="content">
					<img src={require('../assets/icon-money.svg')} alt="" />
					<p>礼账</p>
				</div>
			</Link>
			<Link to="/ceremony">
				<div className="content">
					<img src={require('../assets/icon-address.svg')} alt="" />
					<p>礼事</p>
				</div>
			</Link>
			<Link to="/me">
				<div className="content">
					<img src={require('../assets/icon-me.svg')} alt="" />
					<p>我的</p>
				</div>
			</Link>
		</div>
    </div>
  );
}

export default App;
