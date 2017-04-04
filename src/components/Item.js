import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "./Item.sass"

class Item extends Component {
	render() {
		return (
			<div className="col-md-3 col-sm-4 col-xs-12">
				<div className="rectangle">
					<Link to="/details/vans">
						<img src="http://www.u-man.ro/resources/7aa8881640166a004a1a823dc18eede1/IMG_1723_sm.jpg" alt="Product" onClick={this.props.toggleInfo}/>
					</Link>
					<div className="productInfo">
						<Link to="/details/vans" className="itemTitleLink">
							<h4>Product title <span className="price">200 RON</span></h4>
						</Link>
					</div>
				</div>
			</div>
			)
	}
}

export default Item