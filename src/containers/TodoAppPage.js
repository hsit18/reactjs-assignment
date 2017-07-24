import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TodoApp from '../components/TodoApp';
import * as TodosActions from '../actions/todosAction';
import * as CategoryActions from '../actions/categoryAction';

function mapStateToProps(state) {
	console.log("********* todo",  state.todos);
	return {
		todos: state.todos,
		categories: state.categories
	};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(Object.assign({},TodosActions,CategoryActions), dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
