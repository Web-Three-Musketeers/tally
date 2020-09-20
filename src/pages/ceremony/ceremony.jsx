import React from 'react'
import './ceremony.css'
import BillTab from '../../components/billTab'
import BillNav from '../../components/billNav'

class Ceremoney extends React.Component{
	constructor(props){
		super(props)
		this.state={
			zIndex:0
		}
		
		this.dataList=[
			[
				{
					cere:'某某某结婚',
					address:'办事地点',
					status:'待参加',
					time:'2020.05.05'
				},
				{
					cere:'某某某结婚',
					address:'办事地点',
					status:'待参加',
					time:'2020.05.05'
				},
				{
					cere:'某某某结婚',
					address:'办事地点',
					status:'待参加',
					time:'2020.05.05'
				},
			],
			[
				{
					cere:'某某某大寿',
					address:'办事地点',
					status:'已参加',
					time:'2020.05.05'
				},
				{
					cere:'某某某大寿',
					address:'办事地点',
					status:'已参加',
					time:'2020.05.05'
				}
			]
		]
	}
	
	tab(n){
		this.setState({
			zIndex:n
		})
	}
	
	render(){
		return (
			<div className="ceremony">
			<BillTab fn={this.tab.bind(this)} zIndex={this.state.zIndex} title={['待参加','已参加']}/>
			<BillNav data={this.dataList[this.state.zIndex]} length={2}/>
			</div>
		)
	}
}

export default Ceremoney