import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './Cart.sass'

export default class Cart extends Component {
	render() {
		return (
			<div className="cart">
				<Link to="/" className="exit"><i className="fa fa-remove"></i></Link>
				<div className="container">
					<h2 className="title">
						Cart
					</h2>
				</div>
				<div className="items">
					<Item/>
					<Item/>
					<Item/>
				</div>
			</div>
			);
	}
}

const Item = (props) => (
		<div className="item">
			<h3>Vans Old Skool</h3>
			<h3 className="price"><i className="fa fa-remove"></i></h3>

			<h3 className="price">350 RON</h3>
		</div>
	)