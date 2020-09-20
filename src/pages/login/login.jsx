import React from 'react';
import './login.css'
import { Link } from 'react-router-dom'

class Login extends React.Component {
	constructor(props){
		super(props)
		this.state={
			userInfo:'',
			passFalse:false,
		}
	}
	
	componentDidMount(){
		if(sessionStorage.getItem('isLogin')){
			this.props.history.push('/home')
		}
	}
	
	passFalseTab(){
		this.setState({
			passFalse:!this.state.passFalse
		})
	}
	render(){
		return(
			<div className='login'>
				<div className="mengbu" style={{display:this.state.passFalse?'block':'none'}}>
					<div className="message">
						<p>账号密码不匹配。请您核对后重新输入。</p>
						<span>忘记密码</span>
						<span onClick={this.passFalseTab.bind(this)}>我知道了</span>
					</div>
				</div>
				<div className="login-main">
					<h1>SMITH</h1>
					<h2>好用的记账本</h2>
					<input type="text" placeholder="请输入手机号" className="username"/>
					<input type="password" placeholder="请输入密码" className="password"/>
					<div className="set-password">
						<input type="checkbox" id="bear"/>
						<label htmlFor="bear">记住密码</label>
						<p>忘记密码?</p>
					</div>
					<input type="button" value="登陆" className='login-btn' onClick={this.passFalseTab.bind(this)}/>
					<div className="rests">
						<p>其他方式登陆</p>
						<Link to='/wxlogin'><img src={require('../../assets/icon-wx.png')} alt=''/></Link>
						<Link to='/wxlogin'><img src={require('../../assets/icon-qq.png')} alt=''/></Link>
						<Link to='/wxlogin'><img src={require('../../assets/icon-wb.png')} alt=''/></Link>
					</div>
				</div>
				<p className="register">没有账号?<span>注册</span></p>
			</div>
		)
	}
}



export default Login