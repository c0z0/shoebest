import cartReducer from './cartReducer'

describe('cart reducer', () => {
	let mockState = [
		{
			id: 'abc',
			quantity: 2
		},
		{
			id: 'not affected',
			quantity: 5
		}
	]

	it('return an empty array', () => {
		expect(cartReducer([],{})).toEqual([])
	})

	it('should save whatever is passed to it', () => {
		expect(cartReducer([], {
			type: 'READ_FROM_COOKIE',
			payload: [3, 4, 6]
		})).toEqual([3, 4, 6])
	})

	it('should remove from cart', () => {
		expect(cartReducer(mockState, {
			type: 'CART_REMOVE',
			payload: {
				id: 'abc',
				quantity: 2
			}
		})).toEqual([
			{
				id: 'not affected',
				quantity: 5
			}
		])
	})

	it('should one add to cart', () => {
		expect(cartReducer(mockState, {
			type: 'CART_ADD',
			payload: {
				id: 'abc',
				quantity: 5
			}
		})).toEqual([
		{
			id: 'abc',
			quantity: 5
		},
		{
			id: 'not affected',
			quantity: 5
		}
	])
	})
})