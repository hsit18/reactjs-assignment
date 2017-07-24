import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

class AddTodo extends Component {

	componentWillMount() {
		this.props.actions.loadCategories();
	}

	constructor(props) {
		super(props);
		this.saveTodo = this.saveTodo.bind(this);
		this.validateTodo = this.validateTodo.bind(this);
	}

	saveTodo(event) {
		event.preventDefault();
		this.setState({saving: true});
		console.log(this.refs);
		if(this.validateTodo()) {
			this.props.todo.name = this.refs.name.value;
			this.props.todo.categoryId = this.refs.categoryId.value;
			this.props.todo.dueDate = this.refs.dueDate.value;
			if(this.props.todo.id) {
				this.props.actions.updateTodo(this.props.todo);
			} else {
				this.props.actions.createTodo(this.props.todo);
			}

		} else {
			this.setState({saving: false});
		}
	}

	validateTodo() {
			if(!this.refs.name.value) {
				alert("Name is required.");
				return false;
			} else if(!this.refs.categoryId.value) {
				alert("Category is required.");
				return false;
			} else if(!this.refs.dueDate.value) {
				alert("Due Date is required.");
				return false;
			}


			return true;
	}

	render() {
		return (
      <div className="container">
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">Add Todo</div>
            <div className="panel-body">
						<div className="row">
							<div className="col col-12">
	            	<form role="form">
										<div className="form-group">
											<label>Name: </label>
											<div className="field">
												<input
													type="text"
													name="name"
													className="form-control"
													placeholder="Name"
													defaultValue={this.props.todo.name}
													ref="name"/>
											</div>
										</div>

										<div className="form-group">
											<label>Category: </label>
											<div className="field">
												<select name="categoryId" ref="categoryId" defaultValue={this.props.todo.categoryId} className="form-control">
														<option value="">Select</option>
														{this.props.categories.map((cat) =>
															<option key = {cat.id} value={cat.id}>{cat.name}</option>
														)}
												</select>
											</div>
										</div>

										<div className="form-group">
											<label>Due Date: </label>
											<div className="field">
												<input
													type="date"
													name="dueDate"
													className="form-control"
													placeholder=""
													defaultValue={this.props.todo.dueDate}
													ref="dueDate"/>
											</div>
										</div>
							      <button type="submit" disabled={this.props.saving} className="btn btn-primary" onClick={this.saveTodo}>{this.props.saving ? 'Saving...' : 'Save'}</button>
	                  <Link to="/todoapp" className="btn btn-danger">Cancel</Link>
	              </form>
							</div>
						</div>
            </div>

          </div>
        </div>
      </div>
		);
	}
}

export default AddTodo;
