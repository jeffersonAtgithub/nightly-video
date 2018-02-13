import React from 'react'

const Button = (props) => {
	const classname = `input-group-addon emoticon emoticon-${props.class}`
	const classicon = `fa fa-${props.icon}`

	return(
		<span className={classname} data-order={props.order} onClick={()=>props.onSelectIcon()}>
			<i className={classicon}></i>
		</span>
	)
}

export default Button