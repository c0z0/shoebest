//packages
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


//modules
import ItemDetails from './pages/ItemDetails'
import ItemList from './pages/ItemList' 
import Cart from './pages/Cart' 
import store from './store'
import { itemsFetchFinnish } from './actions/itemsActions'

store.dispatch(itemsFetchFinnish(require('./mock.json')))

ReactDOM.render(
  <Provider store={store}>
    <Router>
    	<div>
    		<Route exact path='/' component={ItemList}/>
    		<Route path='/details/:itemid' component={ItemDetails}/>
    		<Route path='/cart' component={Cart}/>
    	</div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
