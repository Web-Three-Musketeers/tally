import React from 'react'
import { Link } from 'react-router-dom'
import './billTab.css'

class BillTab extends React.Component{
	render(){
		return(
			<div className="billTab">
				<Link to="/"><img src={require('../assets/xiangyou.png')} className="billTab-up" alt=""/></Link>
				<div>
					<div>
						<p className={this.props.zIndex===0 ? 'active':''} onClick={this.props.fn.bind(null,0)}>{this.props.title[0]}</p>
						<p className={this.props.zIndex===1 ? 'active':''} onClick={this.props.fn.bind(null,1)}>{this.props.title[1]}</p>
					</div>
				</div>
				<Link to=""><img src={require('../assets/add.svg')} alt="" /></Link>
			</div>
		)
	}
	
}

export default BillTab