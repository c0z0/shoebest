import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './CartItem.sass'

export default class CartItem extends Component {
	constructor() {
		super();
		this.state = {
			optionsActive: true
		}
	}

	removeFromCart () {
		this.props.onRemove(this.props.item.id, this.props.quantity)
	}

	toggleOptions() {
		this.setState({optionsActive: !this.state.optionsActive})
	}

	incToCart() {

	}

	decToCart() {

	}

	render () {
		const { item, quantity } = this.props
		const itemActions = this.state.optionsActive ? (
				<div className="item">
						<p>
							{ item.description }
						</p>
						<div className="buttons">
							<button className="modifyButtonCart">
								<i className="fa fa-minus"/>
							</button>
							<button className="modifyButtonCart">
								<i className="fa fa-plus"/>
							</button>
						</div>
				</div>
			) : null


		return (
			<div>
			<div className="item">
				<Link to={'/details/' + item.id}>
					<h3>{item.title}</h3>
				</Link>
				<h3 className="cartDelete" onClick={this.toggleOptions.bind(this)}>
					<i className="fa fa-ellipsis-v" title="More options"/>
				</h3>
				<h3 className="cartDelete" onClick={this.removeFromCart.bind(this)}>
					<i className="fa fa-remove" title="Remove"/>
				</h3>
				<h3 className="price">{quantity} x {item.price} RON</h3>
			</div>
				{itemActions}
			</div>
			)
	}
}

CartItem.propTypes = {
	item: React.PropTypes.shape({
		title: React.PropTypes.string.isRequired,
		description: React.PropTypes.string.isRequired,
	}),
	quantity: React.PropTypes.number.isRequired,
	onRemove: React.PropTypes.func.isRequired
}