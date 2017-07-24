import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import AboutUsPage from './containers/AboutUsPage';
import ContactUsPage from './containers/ContactUsPage';
import TodoAppPage from './containers/TodoAppPage';
import AddTodoPage from './containers/AddTodoPage';

export default (
  <Route path="/" component={App}>
		<IndexRoute component={AboutUsPage} />
    <Route path="/todoapp" component={TodoAppPage} />
		<Route path="/aboutus" component={AboutUsPage} />
    <Route path="/contactus" component={ContactUsPage} />
    <Route path="/add-todo(/:todoId)" component={AddTodoPage} />
  </Route>
);
