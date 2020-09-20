import React from 'react'
import { Link } from 'react-router-dom'
import MoneyList from '../../components/moneyList'
import './top.css'

class Top extends React.Component{
	render(){
		return (
			<div className="top">
				<div className="header">
					<Link to="/home"><img src={require('../../assets/xiangyou.png')} alt=""/></Link>
					<h2>排行榜</h2>
				</div>
				<MoneyList />
			</div>
		)
	}
	
}

export default Top