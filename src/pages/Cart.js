import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import axios from 'axios'
import Cookie from 'js-cookie'

import * as cartActions from '../actions/cartActions'
import * as itemActions from '../actions/itemsActions'
import CartItem from '../components/CartItem'

import './Cart.sass'

@connect((store) => {
	return {
		items: store.items,
		cart: store.cart
	}
})
export default class Cart extends Component {
	constructor(props) {
		super(props)
		if (! this.props.items.length) {
			axios.get('/mock.json')
				.then((res) => {
					this.props.dispatch(itemActions.itemsFetchFinnish(res.data))
				})
		}

		const cookieCart = Cookie.getJSON('cart');

		if (!this.props.cart.length && cookieCart) {
			this.props.dispatch(cartActions.readFromCookie(cookieCart))
		}

		this.calculateTotal = this.calculateTotal.bind(this)
	}

	removeFromCart(id, quantity) {
		this.props.dispatch(cartActions.removeFromCart({
			id,
			quantity
		}))
	}

	calculateTotal() {
		let total = 0
		this.props.cart.forEach((cartItem) => {
			let item = _.find(this.props.items, {id: cartItem.id})
			total += item.price * cartItem.quantity
		})
		return total
	}

	onIncToCart(id) {
		this.props.dispatch(cartActions.addToCart({
			id,
			quantity: 1
		}))
	}

	onDecToCart(id) {
		this.props.dispatch(cartActions.removeFromCart({
			id,
			quantity: 1
		}))
	}

	render() {
		let items = this.props.cart.map((cartItem) => {
			const item = _.find(this.props.items, {id: cartItem.id})
			return (<CartItem
						item={item}
						quantity={cartItem.quantity}
						key={item.id}
						onRemove={this.removeFromCart.bind(this)}
						onIncToCart={this.onIncToCart.bind(this)}
						onDecToCart={this.onDecToCart.bind(this)}/>)
		})

		if (items.length === 0)
			items = (<div className="item">
						<h3>
							Your cart is empty.
						</h3>
					</div>)
		else
			items.push(<div className="item total">
							<h3 className="">Total: {this.calculateTotal()} RON</h3>
						</div>)

		return (
			<div className="cart">
				<Link to="/" className="exit"><i className="fa fa-remove"/></Link>
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