import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import axios from 'axios'

import { addToCart } from './../actions/cartActions'
import * as itemActions from '../actions/itemsActions'


import './ItemDetails.sass'
@connect((store) => {
	return {
		cart: store.cart.length,
		items: store.items,
		loading: store.loading
	}
})
class ItemDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {
			quantity: 1,
		}
		if (! this.props.items.length) {
			this.props.dispatch(itemActions.itemsFetchStart())
			axios.get('/mock.json')
				.then((res) => {
					this.props.dispatch(itemActions.itemsFetchFinnish(res.data));
				})
		}
		this.incQuantity = this.incQuantity.bind(this)
		this.decQuantity = this.decQuantity.bind(this)
		this.addToCart = this.addToCart.bind(this)
	}

	addToCart() {
		const item = _.find(this.props.items, {id: this.props.match.params.itemid})

		if (0 === item.stock)
			return
		this.props.dispatch(addToCart({
			id: this.props.match.params.itemid,
			quantity: this.state.quantity
		}));
		this.setState({
			quantity: 1
		})
	}

	incQuantity() {
		const item = _.find(this.props.items, {id: this.props.match.params.itemid})

		if (this.state.quantity < item.stock)
			this.setState({quantity: this.state.quantity + 1})
	}

	decQuantity() {
		if (this.state.quantity > 1)
			this.setState({quantity: this.state.quantity - 1})
	}

	render () {
		const item = _.find(this.props.items, {id: this.props.match.params.itemid})

		if (!item) {
			return (
				<div className="bg">
					<h3>Loading...</h3>
				</div>
			)
		}

		const modifyPlus = item.stock === this.state.quantity ? "modifyButton disabled" : "modifyButton"
		const modifyMinus = this.state.quantity === 1 ? "modifyButton disabled" : "modifyButton"
		const addToCart = item.stock  === 0 ? "buyButton disabled" : "buyButton"

		return (
			<div className="row">
				<div className="col-md-6 col-sm-12 imageColumn">
					<img src={item.img} alt="" className="img"/>
				</div>
				<div className="col-md-6 col-sm-12 container bg">
					<div className="icons">
						<Link to="/cart">
							<i className="fa fa-shopping-cart"/>
						</Link>
						<Link to="/">
							<i className="fa fa-close"/>
						</Link>
					</div>
					<h3 className="productTitle">
						{item.title} <span className="price">{item.price} RON</span>
					</h3>
					<p className="descriptionText">
						{item.description}
					</p>
					<button className={modifyMinus} onClick={this.decQuantity}>
						<i className="fa fa-minus"/>
					</button>
					<span className="quantity">{this.state.quantity}</span>
					<button className={modifyPlus} onClick={this.incQuantity}>
						<i className="fa fa-plus"/>
					</button>
					<button className={addToCart} onClick={this.addToCart}>Add to cart</button>
				</div>
			</div>
		)
	}
}

export default ItemDetails