import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './CartItem.sass'

export default class CartItem extends Component {
	constructor() {
		super();
		this.state = {
			optionsActive: false
		}
	}

	removeFromCart () {
		this.props.onRemove(this.props.item.id, this.props.quantity)
	}

	toggleOptions() {
		this.setState({optionsActive: !this.state.optionsActive})
	}

	incToCart() {
		if (this.props.item.stock > 0)
			this.props.onIncToCart(this.props.item.id)
	}


	decToCart() {
		if (this.props.quantity > 0)
			this.props.onDecToCart(this.props.item.id)
	}

	render () {
		const { item, quantity } = this.props
		const increaseClass = item.stock !== 0 ? "modifyButtonCart" : "modifyButtonCart disabled"
		const itemActions = this.state.optionsActive ? (
				<div className="item">
						<p>
							{ item.description }
						</p>
						<div className="buttons">
							<button className="modifyButtonCart" onClick={this.decToCart.bind(this)}>
								<i className="fa fa-minus"/>
							</button>
							<button className={increaseClass} onClick={this.incToCart.bind(this)}>
								<i className="fa fa-plus"/>
							</button>
						</div>
				</div>
			) : null


		return (
			<div>
			<div className="item">
				<Link to={'/details/' + item.id} className="toItemLink">
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
		stock: React.PropTypes.number.isRequired
	}),
	quantity: React.PropTypes.number.isRequired,
	onRemove: React.PropTypes.func.isRequired
}