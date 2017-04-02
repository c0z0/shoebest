import React, { Component } from 'react';

import './ItemDetails.sass'

class ItemDetails extends Component {
	render () {
		return (
			<div className="row">
				<div className="col-md-6 col-sm-12">
					<img src="http://www.u-man.ro/resources/e8c09fd9865b241a9fc593bffbe68a98/IMG_1703_lg.jpg" alt="" className="img"/>
				</div>
				<div className="col-md-6 col-sm-12 container bg">
					<i className="fa fa-close"></i>
					<h3 className="productTitle">
						Vans OldSkool <span className="price">350 RON</span>
					</h3>
					<p className="descriptionText">
						Farm-to-table crucifix scenester, vice kickstarter microdosing af pabst tacos green juice vinyl hot chicken artisan aesthetic schlitz. Whatever schlitz jianbing subway tile gastropub kitsch. Live-edge chia yr polaroid lumbersexual vice. Sustainable next level leggings cliche occupy, vinyl 90's wayfarers fam vice normcore food truck actually biodiesel YOLO. Kickstarter swag kitsch meditation twee austin affogato, master cleanse lo-fi hexagon enamel pin air plant bicycle rights vice tumblr. Gastropub cardigan cold-pressed organic, biodiesel pinterest portland forage food truck literally. Wayfarers tofu kitsch chartreuse listicle.

					</p>
					<div className="modifyButton"><i className="fa fa-minus"></i></div>
					<span className="quantity">1</span>
					<div className="modifyButton"><i className="fa fa-plus"></i></div>
					<div className="buyButton">Add to cart</div>
				</div>
			</div>
		)
	}
}

export default ItemDetails