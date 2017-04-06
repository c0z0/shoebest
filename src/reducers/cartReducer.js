import _ from 'lodash'

export default function cartReducer (state = [], action) {
	switch (action.type) {
		case "CART_ADD": {
			state = [...state]
			const index = _.findIndex(state, {id: action.payload.id})
			if (index !== -1)
				state[index].quantity += action.payload.quantity
			else
				state.push(action.payload)
			break
		}
		case 'CART_REMOVE': {
			state = [...state]
			const index = _.findIndex(state, {id: action.payload.id})
			state[index].quantity -= action.payload.quantity
			if (state[index].quantity === 0)
				_.remove(state, {id: action.payload.id})
			break
		}
		default: {
			break
		}
	}
	return state
}