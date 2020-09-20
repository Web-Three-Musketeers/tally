import React from 'react'
import './meInfo.css'
import { Link } from 'react-router-dom'

class MeInfo extends React.Component{
	render(){
		return(
			<div className="meInfo">
				<div className="header">
					<Link to="/me"><div><img src={require('../../assets/xiangyou.png')} alt=""/></div></Link>
					<h2>个人资料</h2>
					<div></div>
				</div>
				<div className="nickName">
					<p>荏苒岁月亦如心</p>
					<div className="header-left"><img src={require('../../assets/wx-header.jpg').default} alt=""/></div>
				</div>
				<div className="meInfo-content">
						<p>性别</p>
						<span>男</span>
						<div><img src={require('../../assets/you.png')} alt=""/></div>
				</div>
				<div className="meInfo-content">
						<p>生日</p>
						<span>1990-05-05</span>
						<div><img src={require('../../assets/you.png')} alt=""/></div>
				</div>
				<div className="meInfo-content">
						<p>所在地</p>
						<span>北京 海淀区</span>
						<div><img src={require('../../assets/you.png')} alt=""/></div>
				</div>
			</div>
		)
	}
}

export default MeInfo