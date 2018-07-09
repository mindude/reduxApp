"use strict"
// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

// STEP 1 create the store
const store = createStore(reducers);

import BooksList from './components/pages/booksList';

render(
	<Provider store={store}>
		<BooksList />
	</Provider>, document.getElementById('app')
);

