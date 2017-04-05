import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CartItem extends Component {
	removeFromCart () {
		this.props.onRemove(this.props.item.id, this.props.quantity)
	}

	render () {
		const { item } = this.props

		return (
			<div className="item">
				<Link to={'/details/' + item.id}>
					<h3>{item.title}</h3>
				</Link>
				<h3 className="cartDelete" onClick={this.removeFromCart.bind(this)}><i className="fa fa-remove"></i></h3>
				<h3 className="price">350 RON</h3>
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