class TodosApi {

  static requestHeaders() {
    return {}
  }

  static getAllTodos() {
    const headers = this.requestHeaders();
    const request = new Request(`${API_HOST}/todos`, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateTodo(todo) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`${API_HOST}/todos/${todo.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(todo)
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createTodo(todo) {
    console.log("todo", todo);
    const headers = Object.assign({'Accept': 'application/json', 'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`${API_HOST}/todos`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(todo)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteTodo(todo) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`${API_HOST}/todos/${todo.id}`, {
      method: 'DELETE',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default TodosApi;
