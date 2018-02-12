import React, {Component} from 'react'
import NVTitle from './title'
import NVSubTitle from './subtitle'

class NVGroup extends Component{
	constructor(props){
		super(props)
		this.state = {
			subtitlecount: 0
		}
	}

	onAddTitle(subtitlecount){
		this.setState({subtitlecount: subtitlecount+1});
	}

	render(){
		let subtitle = [];
		for(let i = 0; i <= this.state.subtitlecount; i++){
			subtitle.push(<NVSubTitle key={`subtitle-${i}`} onAddTitle={()=>this.onAddTitle(this.state.subtitlecount)}/>)
		}
		return(
			<div>
				<NVTitle />
				{subtitle}
			</div>
		)
	}
}

export default NVGroup