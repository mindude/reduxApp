"use strict"
// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// REACT-ROUTER
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {applyMiddleware, createStore} from 'redux';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

// STEP 1 create the store
const store = createStore(reducers);

import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Main from './main';

const Routes = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={BooksList} />
				<Route path="/admin" component={BooksForm} />
				<Route path="/cart" component={Cart} />
			</Route>
		</Router>
	</Provider>
)

render(
	Routes, document.getElementById('app')
);
