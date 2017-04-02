import React, { Component } from 'react'

//components
import Item from '../components/Item'
import App from '../App'

//styles
import './ItemList.sass'

class ItemList extends Component {
	render() {
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