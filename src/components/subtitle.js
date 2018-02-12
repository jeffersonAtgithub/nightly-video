import React, {Component} from 'react'
import NVItem from './item'

class NVSubTitle extends Component {
	constructor(props){
		super(props)
		this.state = {
			itemcount: 0
		}
	}

	onAdditem(itemcount){
		this.setState({itemcount: itemcount + 1});
	}

	render(){
		let items = [];
		for(let i = 0; i <= this.state.itemcount; i++){
			items.push(<NVItem key={`item-${i}`} onAddItem={()=>this.onAdditem(this.state.itemcount)}/>)
		}
		return(
			<div className='nv-subtitle'>
				<div className='input-group'>
					<input className='form-control' placeholder='Sub title goes here'/>
					<span className='input-group-addon' onClick={()=>this.props.onAddTitle()}>
						<i className='fa fa-plus'></i>
					</span>
				</div>
				{items}
			</div>
		)
	}
}

export default NVSubTitle