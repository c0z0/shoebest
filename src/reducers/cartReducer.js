export default function cartReducer (state = [], action) {
	switch (action.type) {
		case "CART_ADD": {
			state = [...state, action.payload];
			break
		}
		default: {
			break
		}
	}
	return state
}