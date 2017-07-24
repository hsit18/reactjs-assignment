class CategoryApi {

  static requestHeaders() {
    return {}
  }

  static getAllCategories() {
    const headers = this.requestHeaders();
    const request = new Request(`${API_HOST}/category`, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default CategoryApi;
