import * as types from './actionTypes';
import CategoryApi from '../api/CategoryApi';

export function loadCategoriesSuccess(categories) {
  return {type: types.LOAD_CATEGORY_SUCCESS, categories};
}

export function loadCategories() {
  return function(dispatch) {
    return CategoryApi.getAllCategories().then(categories => {
      dispatch(loadCategoriesSuccess(categories));
    }).catch(error => {
      throw(error);
    });
  };
}
