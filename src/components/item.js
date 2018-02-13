import React, {Component} from 'react'
import NVSubItem from './subitem'
import Button from './button'

class NVItem extends Component {
	constructor(props){
		super(props)
		this.state = {
			subitemcount: 0,
			subitems: [0],
			classes: {
				'first': 'first item',
				'second': 'second item',
				'third': 'third item'
			}
		}
	}

	onAddSubItem(){
		this.setState({
			subitemcount: this.state.subitemcount + 1,
			subitems: [...this.state.subitems, Math.max(...this.state.subitems) + 1]
		})
	}

	onRemoveSubItem(key){
		const arr = this.state.subitems
		arr.splice(arr.indexOf(key), 1)
		this.setState({subitems: arr})
	}

	onSelectIcon(order){
		const defaultclasses = {
			'first': 'first item',
			'second': 'second item',
			'third': 'third item'
		}
		const newclasses = Object.assign({}, defaultclasses)
		newclasses[order] = `${newclasses[order]} active`
		this.setState({
			classes: newclasses
		});
		
	}


	render(){
		const subitems = this.state.subitems.map(item => (
			<NVSubItem key={`subitem-${item}`} onRemoveSubItem={() => this.onRemoveSubItem(item)} onAddSubItem={()=>this.onAddSubItem()}/>
		))

		return(
			<div className='nv-item'>
				<div className='input-group'>
					<span className='input-group-addon item-bullet'>&#8226;</span>
					<Button class={this.state.classes.first} order='first' icon='circle-thin' onSelectIcon={()=>this.onSelectIcon('first')}/>
					<Button class={this.state.classes.second} order='second' icon='check-circle' onSelectIcon={()=>this.onSelectIcon('second')}/>
					<Button class={this.state.classes.third} order='third' icon='times' onSelectIcon={()=>this.onSelectIcon('third')}/>
					<input type='text' className='form-control' placeholder='Item goes here'/>
					<span className='input-group-addon' onClick={()=>this.props.onAddItem()}>
						<i className='fa fa-plus'></i>
					</span>
					<span className='input-group-addon' onClick={()=>this.props.onRemoveItem()}>
						<i className='fa fa-minus'></i>
					</span>
				</div>
				{subitems}
			</div>
		)
	}
}

export default NVItem