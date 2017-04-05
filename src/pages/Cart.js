import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import * as cartActions from '../actions/cartActions'
import CartItem from '../components/CartItem'

import './Cart.sass'

@connect((store) => {
	return {
		items: store.items,
		cart: store.cart
	}
})
export default class Cart extends Component {

	removeFromCart(id, quantity) {
		this.props.dispatch(cartActions.removeFromCart({
			id,
			quantity
		}))
	}

	render() {
		const items = this.props.cart.map((cartItem) => {
			const item = _.find(this.props.items, {id: cartItem.id})
			return (<CartItem item={item} quantity={cartItem.quantity} key={item.id} onRemove={this.removeFromCart.bind(this)}/>)
		})

		return (
			<div className="cart">
				<Link to="/" className="exit"><i className="fa fa-remove"></i></Link>
				<div className="container">
					<h2 className="title">
						Cart
					</h2>
				</div>
				<div className="items">
					{ items }
				</div>
			</div>
			);
	}
}