export function itemsFetchFinnish(items) {
	return {
		type: 'ITEMS_FETCH_FINNISH',
		payload: items
	}
}

export function itemsFetchStart() {
	return {
		type: 'ITEMS_FETCH_START'
	}
}