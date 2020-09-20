import React from 'react'
import './me.css'
import { Link } from 'react-router-dom'

class Me extends React.Component{
	render(){
		return(
			<div className="me">
				<h2>我的</h2>
				<Link to="/meInfo">
					<div className="header">
						<div className="header-left"><img src={require('../../assets/wx-header.jpg').default} alt=""/></div>
						<p>荏苒岁月亦如心</p>
						<div className="xiangyou"><img src={require('../../assets/you.png')} alt=""/></div>
					</div>
				</Link>
				<div className="me-list">
					<div className="list-left"><img src={require('../../assets/img.png')} alt=""/></div>
					<p>设置</p>
					<div className="xiangyou"><img src={require('../../assets/you.png')} alt=""/></div>
				</div>
				<div className="me-list">
					<div className="list-left"><img src={require('../../assets/img.png')} alt=""/></div>
					<p>反馈</p>
					<div className="xiangyou"><img src={require('../../assets/you.png')} alt=""/></div>
				</div>
				<div className="me-list">
					<div className="list-left"><img src={require('../../assets/img.png')} alt=""/></div>
					<p>帮助</p>
					<div className="xiangyou"><img src={require('../../assets/you.png')} alt=""/></div>
				</div>
				<div className="me-list">
					<div className="list-left"><img src={require('../../assets/img.png')} alt=""/></div>
					<p>关于</p>
					<div className="xiangyou"><img src={require('../../assets/you.png')} alt=""/></div>
				</div>
				<div className="me-list">
					<div className="list-left"><img src={require('../../assets/img.png')} alt=""/></div>
					<p>分享</p>
					<div className="xiangyou"><img src={require('../../assets/you.png')} alt=""/></div>
				</div>
			</div>
		)
	}
}


export default Me