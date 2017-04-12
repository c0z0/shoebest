function multiply(a, b) {
	let result = 0, negative = 0
	if (a < 0) {
		a = -a
		negative += 1
	}
	if (b < 0) {
		b = -b
		negative += 1
	}
	while (b > 0) {
		result += a
		b -= 1
	}
	if (negative === 1)
		return -result
	return result
}

describe('multiply function', () => {
	it('should return the product of two numbers', () => {
		expect(multiply(3, 5)).toBe(3 * 5)
	})
	it('should return the product of two numbers when one is zero', () => {
		expect(multiply(3, 0)).toBe(3 * 0)
	})
	it('should return the product of two numbers when both are zero', () => {
		expect(multiply(0, 0)).toBe(0 * 0)
	})
	it('should return the product of two numbers when one is negative', () => {
		expect(multiply(-3, 5)).toBe(-3 * 5)
	})
	it('should return the product of two numbers when both are negative', () => {
		expect(multiply(-3, -5)).toBe(-3 * -5)
	})
})