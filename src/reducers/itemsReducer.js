export default function itemsReducer (state = [], action) {
	switch (action.type) {
		case 'CART_ADD': {
			state = [...state, action.payload + 5]
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