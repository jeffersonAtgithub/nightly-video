import React, {Component} from 'react'
import Button from './button'

class NVSubItem extends Component {
	constructor(props){
		super(props)
		this.state = {
			classes: {
				'first': 'first',
				'second': 'second',
				'third': 'third'
			}
		}
	}

	onSelectIcon(order){
		const defaultclasses = {
			'first': 'first',
			'second': 'second',
			'third': 'third'
		}
		const newclasses = Object.assign({}, defaultclasses)
		newclasses[order] = `${newclasses[order]} active`
		this.setState({
			classes: newclasses
		});

	}

	render(){
		return(
			<div className='nv-subitem' id='nvsubitem'>
				<div className='input-group'>
					<span className='input-group-addon item-bullet'>&#8226;</span>
					<span className='input-group-addon item-indention'>- - -</span>
					<Button class={this.state.classes.first} order='first' icon='circle-thin' onSelectIcon={()=>this.onSelectIcon('first')}/>
					<Button class={this.state.classes.second} order='second' icon='check-circle' onSelectIcon={()=>this.onSelectIcon('second')}/>
					<Button class={this.state.classes.third} order='third' icon='times' onSelectIcon={()=>this.onSelectIcon('third')}/>
					<input type='text' className='form-control' placeholder='Sub Item goes here'/>
					<span className='input-group-addon' onClick={()=>this.props.onAddSubItem()}>
						<i className='fa fa-plus'></i>
					</span>
					<span className='input-group-addon' onClick={()=>this.props.onRemoveSubItem()}>
						<i className='fa fa-minus'></i>
					</span>
				</div>
			</div>
		)
	}
}

export default NVSubItem