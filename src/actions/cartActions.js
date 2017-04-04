export function addToCart(id) {
	return {
		type: 'CART_ADD',
		payload: id
	}
}