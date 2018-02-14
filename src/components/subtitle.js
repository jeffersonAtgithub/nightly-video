import React, {Component} from 'react'
import NVItem from './item'

class NVSubTitle extends Component {
	constructor(props){
		super(props)
		this.state = {
			itemcount: 0,
			items: [0]
		}
	}

	onAdditem(){
		this.setState({
			itemcount: this.state.itemcount + 1,
			items: [...this.state.items, Math.max(...this.state.items) + 1]
		});
	}

	onRemoveItem(key){
		const arr = this.state.items
		if(arr.length > 1){
			arr.splice(arr.indexOf(key), 1)
			this.setState({items: arr})
		}
	}

	render(){
		const items = this.state.items.map(item => (
			<NVItem key={`item-${item}`} onRemoveItem={()=>this.onRemoveItem(item)} onAddItem={()=>this.onAdditem()}/>
		))

		return(
			<div className='nv-subtitle'>
				<div className='input-group'>
					<input defaultValue={this.props.defaultValue} className='form-control nv-subtitle-input' placeholder='Sub title goes here'/>
					<span className='input-group-addon' onClick={()=>this.props.onAddTitle()}>
						<i className='fa fa-plus'></i>
					</span>
					<span className='input-group-addon' onClick={()=>this.props.onRemoveTitle()}>
						<i className='fa fa-minus'></i>
					</span>
				</div>
				{items}
			</div>
		)
	}
}

export default NVSubTitle