import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function categoriesReducer(state = initialState.categories, action) {
  switch(action.type) {
    case types.LOAD_CATEGORY_SUCCESS:
     return action.categories

    default:
      return state;
  }
}
