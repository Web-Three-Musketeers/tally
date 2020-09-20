import React from 'react'
import './billNav.css'

class BillNav extends React.Component{
	
	constructor(props){
		super(props)
		this.typeTitle=['类型','时间','金额'].slice(0,this.props.length || 3)
		this.typeData=[
			['全部','结婚收礼','搬家收礼','诞辰收礼','满月收礼','寿宴收礼','升学收礼','白事收礼'],
			['全部','一周之内','半个月之内','一个月之内','三个月之内','半年之内','一年之内'],
			['全部','500元以下','500-1000元','1000-5000元','5000-10000','10000-50000元','50000元以上']
		]
		this.nowIndex=0
		this.state={
			zIndex:0,
			isShow:false
		}
	}
	
	typeTab(n){
		if(this.nowIndex===n){
			this.setState({
				isShow:!this.state.isShow
			})
		}else{
			this.setState({
				zIndex:n,
				isShow:true
			})
			this.nowIndex=n
		}
		
	}
	
	affirm(data){
		this.typeTitle[this.nowIndex]=data
		this.setState({
			isShow:false
		})
	}
	
	render(){
		return (
			<div className="billMain">
				<div className="billNav">
					{
						this.typeTitle.map((item,index)=>(
							<div className="billNav-list" onClick={this.typeTab.bind(this,index)} key={index}>
								<p>{item}</p>
							</div>
						))
					}
				</div>
				<div className="billType" style={{display:this.state.isShow?'block':'none'}}>
					{
						this.typeData[this.state.zIndex].map((item,index)=>(
							<p key={index} onClick={this.affirm.bind(this,item)}>{item}</p>
						))
					}
				</div>
				{
					this.props.data.map((item,index)=>(
						<div className="billList" key={index}>
							<div className="billList-top">
								<p style={{display:item.type?'block':'none'}}>{item.type}</p>
								<p style={{display:item.cere?'block':'none'}}>{item.cere}</p>
								<span style={{display:item.money?'block':'none'}}>{item.money?item.money.toFixed(2):''}</span>
								<span style={{display:item.status?'block':'none',fontSize:'14px'}}>{item.status}</span>
							</div>
							<div className="billList-bottom">
								<p style={{display:item.name?'block':'none'}}>{item.name}</p>
								<p style={{display:item.address?'block':'none'}}>{item.address}</p>
								<span style={{display:item.people?'block':'none'}}>{item.people}人送礼</span>
								<span>{item.time}</span>
							</div>
						</div>
					))
				}
			</div>
		)
	}
}

export default BillNav