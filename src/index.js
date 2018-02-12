import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NVGroup from './components/group'

class NightlyVideoApp extends Component{
	render(){
		return(
			<div>
				<NVGroup />
			</div>
		)
	}

}


ReactDOM.render(<NightlyVideoApp />, document.querySelector('.container'));
