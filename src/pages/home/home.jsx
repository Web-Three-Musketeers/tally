import React from 'react'
import MoneyList from '../../components/moneyList'
import './home.css'

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
			historyMoney:[]
		}
	}
	
	componentDidMount(){
		this.setState({
			historyMoney:[
				{name:'历史收礼',money:'5500'},
				{name:'历史盈亏',money:'3000'},
				{name:'历史送礼',money:'2500'},
				{name:'8月收礼',money:'5500'},
				{name:'8月盈亏',money:'3000'},
				{name:'8月送礼',money:'2500'}
			]
		})
	}
	
	render(){
		return (
			<div className="home">
				<div className="header">
					{
						this.state.historyMoney.map(item=>
							(
								<div key={item.name}>
									<p>{item.name}</p>
									<p>{item.money}</p>
								</div>
							)
						)
					}
				</div>
				<MoneyList gengduo="更多"/>
			</div>
		)
	}
}


export default Home