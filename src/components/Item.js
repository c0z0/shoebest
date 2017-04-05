import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "./Item.sass"

class Item extends Component {
	render() {

		return (
			<div className="col-md-3 col-sm-4 col-xs-12">
				<div className="rectangle">
					<Link to={'/details/' + this.props.product.id}>
						<img src={this.props.product.img} alt="Product"/>
					</Link>
					<div className="productInfo">
						<Link to={'/details/' + this.props.product.id} className="itemTitleLink">
							<h4>{this.props.product.title}<span className="price">{this.props.product.price} RON</span></h4>
						</Link>
					</div>
				</div>
			</div>
			)
	}
}

Item.propTypes = {
	product: React.PropTypes.shape({
		title: React.PropTypes.string.isRequired,
		img: React.PropTypes.string.isRequired,
		description: React.PropTypes.string.isRequired,
		id: React.PropTypes.string.isRequired,
		price: React.PropTypes.number.isRequired,
		stock: React.PropTypes.number.isRequired,
	}).isRequired
};

export default Item