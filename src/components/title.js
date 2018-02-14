import React from 'react'

const NVTitle = () => {
	const dt = new Date()
	const month = dt.toLocaleString('en-us', { month: "long" })
	const dayarr = [, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	return(
		<div className='nv-title'>
			<div>
				<input className='form-control nv-title-input' value={dt.getFullYear() + " " + month + " " + dt.getDate() + " " + dayarr[dt.getDay()]}/>
			</div>
		</div>
	)
}

export default NVTitle