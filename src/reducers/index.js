import {combineReducers} from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import todosReducer from './todosReducers';
import categoriesReducer from './categoryReducers';

const allReducers = combineReducers({
  todos: todosReducer,
  categories: categoriesReducer,
  routing: routerReducer
});

export default allReducers
