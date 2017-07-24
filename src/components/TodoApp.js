import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import ConfirmDialog from './ConfirmDialog';

class TodoApp extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			filterStatus: 'All',
			todoFiltered: [],
			sortBy: {
				id: 'asc',
				name: '',
				categoryId: ''
			}
		};
		this.deleteTodo = this.deleteTodo.bind(this);
	}

	componentWillMount() {
    this.props.actions.loadTodos();
		this.props.actions.loadCategories();
		console.log(">>>>>>>>> 11111", this.props.todos);
		this.setState({todoFiltered: this.props.todos});
  }

	componentWillReceiveProps() {
		let sortedTodo = [];
		if(this.props.todos && this.props.todos.length > 0) {
			sortedTodo = this.props.todos.sort( (a, b) => (a.id - b.id));
		}
		this.setState({todoFiltered: sortedTodo});
	}

	deleteTodo(todo) {
		this.props.actions.deleteTodo(todo)
	}

	updateTodoStatus(todo) {
		todo.status = !todo.status;
		this.props.actions.updateTodo(todo)
	}

	getCategoryName(categoryId) {
		let category = this.props.categories.find(category => category.id == categoryId)
		return (category) ? category.name : '';
	}

	filterByStatus(status) {
		if(status === 'All') {
			this.setState({todoFiltered: this.props.todos, filterStatus: status});
		} else {
			let filterStatus = (status === 'Done') ? true : false;
			let todoFiltered = this.props.todos.filter(todo => (todo.status === filterStatus));
			this.setState({todoFiltered: todoFiltered, filterStatus: status});
		}
	}

	sortByColumn(key) {

		let sortedData = [];
		let sortBy = this.state.sortBy;
		let sortOrder = (sortBy[key] === 'asc') ? 'desc' : 'asc';
		sortBy[key] = sortOrder;
		switch (key) {
			case 'id':
				if(sortOrder === 'asc') {
					sortedData = this.state.todoFiltered.sort( (a, b) => (a.id - b.id));
				} else {
					sortedData = this.state.todoFiltered.sort( (a, b) => (b.id - a.id));
				}
				break;

			case 'name':
				if(sortOrder === 'asc') {
					sortedData = this.state.todoFiltered.sort( (a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
				} else {
					sortedData = this.state.todoFiltered.sort( (a, b) => a.name !== b.name ? a.name > b.name ? -1 : 1 : 0);
				}
				break;

			case 'categoryId':
				if(sortOrder === 'asc') {
					sortedData = this.state.todoFiltered.sort( (a, b) => (a.categoryId - b.categoryId));
				} else {
					sortedData = this.state.todoFiltered.sort( (a, b) => (b.categoryId - a.categoryId));
				}
				break;
			default:
		}

		this.setState({todoFiltered: sortedData, sortBy: sortBy});
	}

	render() {
		return (

      <div className="container">
				<ConfirmDialog ref="modal" onHideCallback={this.deleteTodo} title="Delete Confirmation">
					<div>Are you sure want to delete the task?</div>
				</ConfirmDialog>
        <div className="row">
					<div className="panel panel-default">
					  <div className="panel-heading">Todo List</div>
					  <div className="panel-body">
							<div className="btn-group">
							  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Status: {this.state.filterStatus} <span className="caret"></span>
							  </button>
							  <ul className="dropdown-menu">
									<li><a onClick={this.filterByStatus.bind(this, 'All')}>All</a></li>
							    <li><a onClick={this.filterByStatus.bind(this, 'Pending')}>Pending</a></li>
							    <li><a onClick={this.filterByStatus.bind(this, 'Done')}>Done</a></li>
							  </ul>
							</div>
							<p className="pull-right"><Link to="/add-todo" className="btn btn-primary" role="button">Add Todo</Link></p>
					  </div>
						<div className="table-responsive">
							<table className="table table-striped table-bordered table-hover dataTable no-footer dtr-inline">
								<thead>
									<tr>
										<th className="{this.getClassName(this.state.sortBy.id)}" onClick={this.sortByColumn.bind(this,'id')}>#</th>
										<th className="sorting" onClick={this.sortByColumn.bind(this,'name')}>Name</th>
										<th className="sorting" onClick={this.sortByColumn.bind(this,'categoryId')}>Category Id</th>
										<th>Due Date</th>
										<th>Status</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									{this.renderList()}
								</tbody>
							</table>
						</div>
					</div>
        </div>
      </div>
		);
	}

	renderList() {
			return this.state.todoFiltered.map((todo) => {
					return (
							<tr key={todo.id}>
								<td className="text-left">{todo.id}</td>
								<td className="text-left">{todo.name}</td>
								<td className="text-left">{this.getCategoryName(todo.categoryId)}</td>
								<td className="text-left">{todo.dueDate}</td>
								<td className="text-left">
									<label className="switch">
									  <input type="checkbox" checked={todo.status} onChange={this.updateTodoStatus.bind(this, todo)}/>
									  <span className="slider round"></span>
									</label>
								</td>
								<td className="text-left">
									<Link to={`/add-todo/${todo.id}`}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
									&nbsp;&nbsp;
									<i onClick={this.refs.modal.open.bind(this, todo)} className="fa fa-trash-o" aria-hidden="true"></i>
								</td>
							</tr>
					);
			});
	}

	getClassName(key) {
		 if(key === 'asc') {
			 return 'sorting_asc';
		 } else if(key === 'desc') {
			 return 'sorting_desc';
		 } else {
			 return 'sorting';
		 }
	}
}

export default TodoApp;
