import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import allReducers from './reducers';
import routes from './routes';
import {loadTodos} from './actions/todosAction';

const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise)
);

//store.dispatch(loadTodos());

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root')
);
