import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SearchPage from './components/search-page';
import ViewPicture from './containers/view-picture';
import ViewVideo from './containers/view-video';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter >
			<div>
				<Switch>
					<Route path="/picture/:id" component={ViewPicture} />
					<Route path="/video/:id" component={ViewVideo} />
					<Route path="/" component={SearchPage} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
, document.querySelector('.container'));
