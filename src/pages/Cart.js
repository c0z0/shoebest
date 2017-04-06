import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import axios from 'axios'

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
	}

	removeFromCart(id, quantity) {
		this.props.dispatch(cartActions.removeFromCart({
			id,
			quantity
		}))
	}

	render() {
		let items = this.props.cart.map((cartItem) => {
			const item = _.find(this.props.items, {id: cartItem.id})
			return (<CartItem item={item} quantity={cartItem.quantity} key={item.id} onRemove={this.removeFromCart.bind(this)}/>)
		})

		if (items.length === 0)
			items = (<div className="item">
						<h3>
							Your cart is empty.
						</h3>
					</div>);

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