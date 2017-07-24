import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AddTodo from '../components/AddTodo';
import * as TodosActions from '../actions/todosAction';
import * as CategoryActions from '../actions/categoryAction';

function getTodoById(todos, id) {
  let todo = todos.find(todo => todo.id == id)
  return Object.assign({}, todo)
}

function mapStateToProps(state, ownProps) {
	let todo = {name: '', categoryId: '', dueDate: '', status: false};
	console.log("$$$$$  ", ownProps.params.todoId);
	if(ownProps.params.todoId) {
		todo = getTodoById(state.todos, ownProps.params.todoId);
	}
	console.log("********* categories",  state.categories);
	return {
		todo: todo,
		categories: state.categories,
		saving: false
	};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(Object.assign({},TodosActions, CategoryActions), dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
