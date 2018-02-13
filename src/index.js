import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NVGroup from './components/group'

class NightlyVideoApp extends Component{

	generateReport(){
		const defaulticonvalues = {
			'first': ':o:',
			'second': ':white_check_mark:',
			'third': ':x:'
		}

		let report = ''
		let haserror = false

		const parent = ReactDOM.findDOMNode(this);
		const title = document.querySelector('.nv-title-input')

		report += `<div>**${title.value}**</div>`
	
		const subtitles = document.querySelectorAll('.nv-subtitle')
		Array.from(subtitles).forEach(subtitle => {
			const subtitlevalue = subtitle.children[0].querySelector('.input-group input').value
			
			report += `<div>**${subtitlevalue}**</div>`

			Array.from(subtitle.querySelectorAll('.nv-item')).forEach(item => {
				const itemorder = item.querySelector('.item.active') != null ? item.querySelector('.item.active').getAttribute('data-order') : 'first';
				report += `<div>* ${defaulticonvalues[itemorder]} ${item.querySelector('.input-group input').value}</div>`
				Array.from(item.querySelectorAll('.nv-subitem')).forEach(subitem => {
					const subitemorder = subitem.querySelector('.active') != null ? subitem.querySelector('.active').getAttribute('data-order') : 'first';
					report += `<div>* --- ${defaulticonvalues[subitemorder]} ${subitem.querySelector('.input-group input').value}</div>`
				})
			})
		})
		
		document.getElementById("reports").innerHTML = report
		
	}

	render(){
		return(
			<div>
				<NVGroup />
				<div className='row col-md-12'>
					<button className='gen-report btn btn-info' onClick={()=> this.generateReport()}>Generate Reports</button>
				</div>
				<div id='reports' className='col-md-12'>
					No Reports
				</div>
			</div>
		)
	}

}

ReactDOM.render(<NightlyVideoApp />, document.querySelector('.container'))
