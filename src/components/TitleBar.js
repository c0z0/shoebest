import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './TitleBar.sass'


class TitleBar extends Component {
	render() {
		return (
			<div className='titleBar'>
				<h3>Shoe Best
					<Link to='/cart' className="linkToCart">
						<i className="fa fa-shopping-cart"/>
					</Link>
				</h3>
			</div>
			)
	}
}

export default TitleBar
