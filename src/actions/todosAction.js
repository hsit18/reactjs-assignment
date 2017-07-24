import * as types from './actionTypes';
import todoApi from '../api/TodosApi';
import {browserHistory} from 'react-router';

export function loadTodosSuccess(todos) {
  console.log("sucssess", todos);
  return {type: types.LOAD_TODOS_SUCCESS, todos};
}

export function updateTodoSuccess(todo) {
  return {type: types.UPDATE_TODO_SUCCESS, todo}
}

export function createTodoSuccess(todo) {
  return {type: types.CREATE_TODO_SUCCESS, todo}
}

export function deleteTodoSuccess(todo) {
  return {type: types.DELETE_TODO_SUCCESS, todo}
}

export function loadTodos() {
  return function(dispatch) {
    return todoApi.getAllTodos().then(todos => {
      dispatch(loadTodosSuccess(todos));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateTodo(todo) {
  return function (dispatch) {
    return todoApi.updateTodo(todo).then(responseTodo => {
      dispatch(updateTodoSuccess(responseTodo));
      browserHistory.push('/todoapp')
    }).catch(error => {
      throw(error);
    });
  };
}

export function createTodo(todo) {
  return function (dispatch) {
    return todoApi.createTodo(todo).then(responseTodo => {
      dispatch(createTodoSuccess(responseTodo));
      browserHistory.push('/todoapp')
      return responseTodo;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteTodo(todo) {
  return function(dispatch) {
    return todoApi.deleteTodo(todo).then(() => {
      console.log(`Deleted ${todo.id}`)
      dispatch(deleteTodoSuccess(todo));
      browserHistory.push('/todoapp')
      return;
    }).catch(error => {
      throw(error);
    })
  }
}
