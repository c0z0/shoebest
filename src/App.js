//packages
import React, { Component } from 'react'

//style
import './App.sass'


class App extends Component {
	render() {
		return (
			<div>
				<TitleBar/>
				<div className='container'>
				{this.props.children}
				</div>
			</div>
			)
	}
}

const TitleBar = (props) => {
	return (
		<div className='titleBar'>
			<h3>Shoe Best</h3>
		</div>
		)
}

export default App
