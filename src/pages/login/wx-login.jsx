import React from 'react'
import './wx-login.css'
import { Link } from 'react-router-dom'

class WxLogin extends React.Component {
	login(){
		sessionStorage.setItem('isLogin',true)
		console.log(this)
	}
	
	
	render(){
		return (
			<div className="wx">
				<span>关闭</span>
				<p>SMITM记账本 申请实用</p>
				<p className="wx-info">你的微信头像、昵称、地区信息</p>
				<img src={require('../../assets/wx-login.jpg').default} alt=""/>
				<Link to="/home">
					<input type="button" value="同意" onClick={this.login.bind(this)}/>
				</Link>
				<Link to="/">
					<input type="button" value="拒绝" className="cancel-wx"/>
				</Link>
			</div>
		)
	}
}

export default WxLogin