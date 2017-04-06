import { combineReducers } from 'redux'

import cartReducer from './cartReducer'
import itemsReducer from './itemsReducer'
import loadingReducer from './loadingReducer'

export default combineReducers({
	cart: cartReducer,
	items: itemsReducer,
	loading: loadingReducer
})