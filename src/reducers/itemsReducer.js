import _ from 'lodash'

export default function itemsReducer (state = [], action) {
	console.log(action)
	switch (action.type) {
		case 'CART_ADD': {
			state = [...state]
			const index = _.findIndex(state, {id: action.payload.id})
			state[index].stock -= action.payload.quantity
			break
		}
		case 'ITEMS_FETCH_FINNISH': {
			state = [...action.payload.items]
			break
		}
		default: {
			break
		}
	}
	return state
}