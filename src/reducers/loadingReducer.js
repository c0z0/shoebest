export default function loadingReducer(state=false, action) {
	switch (action.type) {
		case 'ITEMS_FETCH_START': {
			return true

		}
		case 'ITEMS_FETCH_START': {
			return false
		}
	}
	return false
}