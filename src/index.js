//packages
import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


//modules
import App from './App'
import ItemDetails from './pages/ItemDetails'
import ItemList from './pages/ItemList' 
import Cart from './pages/Cart' 



ReactDOM.render(
  <Router>
  	<div>
  		<Route exact path='/' component={ItemList}/>
  		<Route path='/details/:itemid' component={ItemDetails}/>
  		<Route path='/cart' component={Cart}/>
  	</div>
  </Router>,
  document.getElementById('root')
);
