import React, { Component } from 'react' 
import { connect } from 'react-redux'

import Item from '../components/Item'
import App from '../App'

import './ItemList.sass'

@connect((store) => {
	return {
		...store
	}
})
class ItemList extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<App/>
				<div className="container">
					<div className="row">
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
					</div>
				</div>
			</div>
			)
	}
}

export default ItemList