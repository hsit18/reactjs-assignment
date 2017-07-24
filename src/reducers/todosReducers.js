import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function todosReducer(state = initialState.todos, action) {
  switch(action.type) {
    case types.LOAD_TODOS_SUCCESS:
     return action.todos

    case types.CREATE_TODO_SUCCESS:
     console.log("&&&&&&&&&&&&&&&", state);
     return [
       ...state.filter(todo => todo.id !== action.todo.id),
       Object.assign({}, action.todo)
     ]

    case types.UPDATE_TODO_SUCCESS:
    console.log(" ......   ", action);
    return [
      ...state.filter(todo => todo.id !== action.todo.id),
      Object.assign({}, action.todo)
    ]

    case types.DELETE_TODO_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfTodoToDelete = state.findIndex(todo => {return todo.id == action.todo.id})
      newState.splice(indexOfTodoToDelete, 1);
      return newState;
    }
    default:
      return state;
  }
}
