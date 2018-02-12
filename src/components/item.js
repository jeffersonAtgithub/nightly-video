import React, {Component} from 'react'
import NVSubItem from './subitem'

class NVItem extends Component {
	constructor(props){
		super(props)
		this.state = {
			subitemcount: 0
		}
	}

	onAddSubItem(subitemcount){
		this.setState({subitemcount: subitemcount + 1})
	}


	render(){
		let subitems = [];
		for(let i = 0; i <= this.state.subitemcount; i++){
			subitems.push(<NVSubItem key={`subitem-${i}`} onAddSubItem={()=>this.onAddSubItem(this.state.subitemcount)}/>)
		}

		return(
			<div className='nv-item'>
				<div className='input-group'>
					<span className='input-group-addon item-bullet'>&#8226;</span>
					<span className='input-group-addon'>
						<i className='fa fa-circle-thin'></i>
					</span>
					<span className='input-group-addon'>
						<i className='fa fa-check-circle'></i>
					</span>
					<span className='input-group-addon'>
						<i className='fa fa-times'></i>
					</span>
					<input type='text' className='form-control' placeholder='Item goes here'/>
					<span className='input-group-addon' onClick={() => this.props.onAddItem()}>
						<i className='fa fa-plus'></i>
					</span>
				</div>
				{subitems}
			</div>
		)
	}
}

export default NVItem