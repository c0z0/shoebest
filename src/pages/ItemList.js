import React, { Component } from 'react' 
import { connect } from 'react-redux'
import axios from 'axios'

import * as itemActions from '../actions/itemsActions'
import Item from '../components/Item'
import App from '../App'

import './ItemList.sass'

@connect((store) => {
	return {
		items: store.items,
		cart: store.cart.length
	}
})
class ItemList extends Component {
	constructor(props) {
		super(props)
		if (! this.props.items.length) {
			axios.get('/mock.json')
				.then((res) => {
					this.props.dispatch(itemActions.itemsFetchFinnish(res.data));
				})
		}
	}

	render() {
		const items = this.props.items.map((item) => {
			return (<Item product={item} key={item.id}/>);
		})

		return (
			<div>
				<App/>
				<div className="container">
					<div className="row">
						{items}
					</div>
				</div>
			</div>
			)
	}
}

export default ItemList