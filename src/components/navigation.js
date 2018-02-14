import React, {Component} from 'react'

const Navigation = () => {
	return(
		<nav className="navbar navbar-default">
		  <div className="container-fluid">
		    <ul className="nav navbar-nav">
		      <li className="active"><a href="/">Home</a></li>
		      <li><a href="/#/templates">Templates</a></li>
		    </ul>
		  </div>
		</nav>
	)

}

export default Navigation