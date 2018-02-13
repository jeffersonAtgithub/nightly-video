import React, {Component} from 'react'
import NVTitle from './title'
import NVSubTitle from './subtitle'

class NVGroup extends Component{
	constructor(props){
		super(props)
		this.state = {
			subtitlecount: 0,
			subtitles: [0]
		}
		console.log(this);
	}

	onAddTitle(){
		this.setState({
			subtitlecount: this.state.subtitlecount+1,
			subtitles: [...this.state.subtitles, Math.max(...this.state.subtitles) + 1]
		})
	}

	onRemoveTitle(key){
		const arr = this.state.subtitles
		if(arr.length > 1){
			arr.splice(arr.indexOf(key), 1)
			this.setState({subtitles: arr})
		}
	}

	render(){
		const subtitle = this.state.subtitles.map(item=>(
			<NVSubTitle key={`subtitle-${item}`} onRemoveTitle={()=>this.onRemoveTitle(item)} onAddTitle={()=>this.onAddTitle()}/>
		));

		return(
			<div>
				<NVTitle />
				{subtitle}
			</div>
		)
	}
}

export default NVGroup