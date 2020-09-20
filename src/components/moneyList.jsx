import React from 'react'
import './moneyList.css'
import { Link } from 'react-router-dom'

class MoneyList extends React.Component{
	constructor(props){
		super(props)
		this.list=[
			{user:'刘先生',his:'10000',now:'4000'},
			{user:'王先生',his:'10000',now:'4000'},
			{user:'李先生',his:'10000',now:'4000'},
			{user:'周先生',his:'10000',now:'4000'},
			{user:'刘先生',his:'10000',now:'4000'},
			{user:'王先生',his:'10000',now:'4000'},
			{user:'李先生',his:'10000',now:'4000'},
			{user:'周先生',his:'10000',now:'4000'}
		]
	}
	
	
	render(){
		return (
			<div className="moneyList">
				<div className="moneyNav">
					<p>排行</p>
					<p>用户</p>
					<p>历史盈亏</p>
					<p>本月盈亏</p>
					<p>
						<Link to="/top">{this.props.gengduo || ''}</Link>
					</p>
				</div>
				<div className="list">
					{
						this.list.map((item,index)=>(
							<div key={index}>								
								<p>{index+1}</p>
								<p>{item.user}</p>
								<p>{item.his}</p>
								<p>{item.now}</p>
								<p></p>
							</div>
						))
					}
				</div>
			</div>
		)
	}
	
}

export default MoneyList