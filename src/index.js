import React, { Component } from 'react'
import _ from 'lodash'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
import NVGroup from './components/group'
import Navigation from './components/navigation'

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
		
		if(!title.value) return

		report += `**${title.value}**<br>`
		
		const subtitles = document.querySelectorAll('.nv-subtitle')
		Array.from(subtitles).forEach(subtitle => {
			
			const subtitlevalue = subtitle.children[0].querySelector('.input-group input').value
			
			if(!subtitlevalue) return

			report += `**${subtitlevalue}**<br>`

			Array.from(subtitle.querySelectorAll('.nv-item')).forEach(item => {
		
				const itemorder = item.querySelector('.item.active') != null ? item.querySelector('.item.active').getAttribute('data-order') : 'first';
				const itemvalue = item.querySelector('.input-group input').value

				if(!itemvalue) return
				
				report += `* ${defaulticonvalues[itemorder]} ${itemvalue}<br>`

				Array.from(item.querySelectorAll('.nv-subitem')).forEach(subitem => {
					const subitemorder = subitem.querySelector('.active') != null ? subitem.querySelector('.active').getAttribute('data-order') : 'first';
					const subitemvalue = subitem.querySelector('.input-group input').value

					if(!subitemvalue) return

					report += `* --- ${defaulticonvalues[subitemorder]} ${subitemvalue}`
				})
			})
		})
		
		document.getElementById("reportContainer").innerHTML = report
		document.querySelector('.copy-report').textContent = 'COPY'
	}

	copyReport(e){
		const reporttext = document.getElementById("reportContainer").innerHTML
		const fakecontainer = document.querySelector('.hidden-report-container')
		fakecontainer.textContent = reporttext.replace(/<br\s*[\/]?>/gi, "\n")
		fakecontainer.select()
		document.execCommand('Copy')
		e.target.textContent = 'COPIED'
	}

	render(){

		const Home = () => 	<div>
								<h2>Nightly-Video Report Generator ( except video )</h2>
								<NVGroup />
								<div className='row col-md-12'>
									<button className='gen-report btn btn-info' onClick={()=> this.generateReport()}>Generate Reports</button>
								</div>
								<div id='reports' className='col-md-12'>
									<button className='btn btn-primary copy-report' onClick={e => this.copyReport(e)}> 
										COPY
									</button>
									<div id='reportContainer'>No Reports</div>
									<textarea className='hidden-report-container'></textarea>
								</div>
							</div>
		const Templates = () => <h1>These are the amazing templates from amazing people!</h1>
		const NotFound = () => <h1>404.. This page is not found!</h1>

		return(
			<div>
				<Router history={hashHistory}>
			        <Route path='/' component={Home} />
			        <Route path='/templates' component={Templates} />
			        <Route path='*' component={NotFound} />
		     	</Router>
			</div>
		)
	}

}

ReactDOM.render(<Navigation />, document.querySelector('.navigation'))
ReactDOM.render(<NightlyVideoApp />, document.querySelector('.container'))
