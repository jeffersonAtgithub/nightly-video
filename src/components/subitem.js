import React, {Component} from 'react'

const NVSubItem = (props) => {
	return(
		<div className='nv-subitem' id='nvsubitem'>
			<div className='input-group'>
				<span className='input-group-addon item-bullet'>&#8226;</span>
				<span className='input-group-addon item-indention'>- - -</span>
				<span className='input-group-addon'>
					<i className='fa fa-circle-thin'></i>
				</span>
				<span className='input-group-addon'>
					<i className='fa fa-check-circle'></i>
				</span>
				<span className='input-group-addon'>
					<i className='fa fa-times'></i>
				</span>
				<input type='text' className='form-control' placeholder='Sub Item goes here'/>
				<span className='input-group-addon' onClick={() => props.onAddSubItem()}>
					<i className='fa fa-plus'></i>
				</span>
			</div>
		</div>
	)
}

export default NVSubItem