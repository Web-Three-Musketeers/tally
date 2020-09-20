import React from 'react'
import './bill.css'
import BillTab from '../../components/billTab'
import BillNav from '../../components/billNav'

class Bill extends React.Component{
	
	constructor(props){
		super(props)
		this.state={
			zIndex:0
		}
		this.dataList=[
			[
				{
					type:'类别名称',
					name:'姓名',
					money:15000,
					people:10,
					time:'2020.05.05'
				},
				{
					type:'类别名称',
					name:'姓名',
					money:15000,
					people:10,
					time:'2020.05.05'
				},
				{
					type:'类别名称',
					name:'姓名',
					money:15000,
					people:10,
					time:'2020.05.05'
				},
				{
					type:'类别名称',
					name:'姓名',
					money:15000,
					people:10,
					time:'2020.05.05'
				},
				{
					type:'类别名称',
					name:'姓名',
					money:15000,
					people:10,
					time:'2020.05.05'
				},
				{
					type:'类别名称',
					name:'姓名',
					money:15000,
					people:10,
					time:'2020.05.05'
				},
			],
			[
				{
					type:'类别名称',
					name:'姓名',
					money:1000,
					time:'2020.05.05'
				},
				{
					type:'类别名称',
					name:'姓名',
					money:1000,
					time:'2020.05.05'
				},
				{
					type:'类别名称',
					name:'姓名',
					money:1000,
					time:'2020.05.05'
				},
				{
					type:'类别名称',
					name:'姓名',
					money:1000,
					time:'2020.05.05'
				},
				{
					type:'类别名称',
					name:'姓名',
					money:1000,
					time:'2020.05.05'
				},
				{
					type:'类别名称',
					name:'姓名',
					money:1000,
					time:'2020.05.05'
				},
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
			<div className="bill">
				<BillTab fn={this.tab.bind(this)} zIndex={this.state.zIndex} title={['收礼','送礼']}/>
				<BillNav data={this.dataList[this.state.zIndex]}/>
			</div>
		)
	}
}

export default Bill