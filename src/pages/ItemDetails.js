import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import { addToCart } from './../actions/cartActions'

import './ItemDetails.sass'
@connect((store) => {
	return {
		cart: store.cart.length,
		items: store.items,
	}
})
class ItemDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {
			quantity: 1,
			item: _.find(this.props.items, {id: this.props.match.params.itemid})
		}
		this.incQuantity = this.incQuantity.bind(this)
		this.decQuantity = this.decQuantity.bind(this)
		this.addToCart = this.addToCart.bind(this)
	}

	addToCart() {
		this.props.dispatch(addToCart({
			id: this.props.match.params.itemid,
			quantity: this.state.quantity
		}));
	}

	incQuantity() {
		if (this.state.quantity < this.state.item.stock)
			this.setState({quantity: this.state.quantity + 1})
	}

	decQuantity() {
		if (this.state.quantity > 1)
			this.setState({quantity: this.state.quantity - 1})
	}

	render () {
		const item = this.state.item

		return (
			<div className="row">
				<div className="col-md-6 col-sm-12 imageColumn">
					<img src={item.img} alt="" className="img"/>
				</div>
				<div className="col-md-6 col-sm-12 container bg">
					<div className="icons">
						<Link to="/cart">
							<i className="fa fa-shopping-cart"></i>
						</Link>
						<Link to="/">
							<i className="fa fa-close"></i>
						</Link>
					</div>
					<h3 className="productTitle">
						{item.title} <span className="price">{item.price} RON</span>
					</h3>
					<p className="descriptionText">
						{item.description}
					</p>
					{item.stock}
					<div className="modifyButton" onClick={this.decQuantity}>
						<i className="fa fa-minus"></i>
					</div>
					<span className="quantity">{this.state.quantity}</span>
					<div className="modifyButton" onClick={this.incQuantity}>
						<i className="fa fa-plus"></i>
					</div>
					<div className="buyButton" onClick={this.addToCart}>Add to cart</div>
				</div>
			</div>
		)
	}
}

export default ItemDetails